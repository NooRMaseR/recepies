import styles from "./card.module.css";
import Image from "next/image";
import React from "react";

interface CardProps {
  icon: string;
  text1: string;
  text2: string;
  url?: string;
}

export default function Card({ icon, text1, text2 }: CardProps) {
  return (
    <div className={styles.card}>
      <Image src={icon} alt="img" width={150} height={150} />
      <h1>{text1}</h1>
      <h3>{text2}</h3>
    </div>
  );
}
