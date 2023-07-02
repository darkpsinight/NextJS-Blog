"use client";

import React from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

const Dashboard = () => {
  // OLD DATA FETCHING METHOD
  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
  //       cache: "no-store",
  //     });
  //     if (!res.ok) {
  //       setError(true);
  //     }

  //     const data = await res.json();
  //     setIsLoading(false);
  //     setData(data);
  //   };
  //   getData();
  // }, []);

  // useSession Auth
  const session = useSession(); // get session data (to check if authenticated or not)
  console.log("session: ", session);

  // SWR (new Recommanded fetching Method for NextJS)
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session.data?.user.name}`,
    fetcher
  );

  console.log("data: ", data);

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset()
    } catch (error) {
      console.log(error);
    }
  };

  //handle delete
  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  //route protection (dashboard can be accessed by authenticated user only)
  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  } else if (session.status === "unauthenticated") {
    router.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {data !== undefined && data.length > 0 ? (
            data.map((post) => (
              <div className={styles.post} key={post._id}>
                <div className={styles.imgContainer}>
                  <Image
                    src={post.img}
                    alt="post_img"
                    width={300}
                    height={200}
                  />
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <span
                  className={styles.delete}
                  onClick={() => handleDelete(post._id)}
                >
                  X
                </span>
              </div>
            ))
          ) : (
            <h2 className={styles.postTitle}>You have no posts created yet</h2>
          )}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add new post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image URL" className={styles.input} />
          <textarea
            placeholder="Content"
            cols="30"
            row="10"
            className={styles.textArea}
          ></textarea>
          <button className={styles.button}>Create Post</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
