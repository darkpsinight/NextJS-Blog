import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your degital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the global tech industy.
        </p>
        <Button text="See Our Works" url="/portfolio" className={styles.button} />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="Home-image" className={styles.img} />
      </div>
    </div>
  );
}
