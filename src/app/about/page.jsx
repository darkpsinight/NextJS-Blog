import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "About",
  description: "More informations about me",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente amet maiores minus iste ad! Iste odio assumenda iure sapiente esse animi dignissimos maxime nostrum atque provident dolor laudantium, aspernatur minima.
            <br />
            <br />
            Amet maiores minus iste ad! Iste odio assumenda iure sapiente esse animi dignissimos maxime.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium error minima ad sequi dolor inventore et facere eos.
            Perspiciatis asperiores laboriosam, deleniti velit fugit perferendis nemo beatae enim incidunt tenetur:
            <br />
            <br />- Creative Illustrators<br />
            <br /> - Dynamic Websites<br />
            <br /> - Fast and Handy<br />
            <br /> - Mobile Apps
          </p>
          <Button text="Contact" url="/contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
