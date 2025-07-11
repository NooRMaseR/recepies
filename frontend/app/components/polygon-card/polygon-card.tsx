import styles from "./polygon-card.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PolygonCardProps {
  icon: string;
  text: string;
  url: string;
}

export default function PolygonCard({ icon, text, url }: PolygonCardProps) {
  return (
    <Link href={`/products/${url}`} className={styles.polygonDiv}>
      <Image src={icon} alt={text + " icon"} width={50} height={50} />
      <p>{text}</p>
    </Link>
  );
}
