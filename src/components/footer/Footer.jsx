import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Ragheb FSDev. All rights reserved.</div>
      <div className={styles.social}>
        <Link href="https://www.facebook.com/">
          <Image
            src="/1.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="Facebook-Logo"
          />
        </Link>
        <Link href="https://www.instagram.com/">
          <Image
            src="/2.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="Instagram-Logo"
          />
        </Link>
        <Link href="https://www.twitter.com/">
          <Image
            src="/3.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="Twitter-Logo"
          />
        </Link>
        <Link href="https://www.youtube.com/">
          <Image
            src="/4.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="Youtube-Logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
