import styles from './card-image.module.css'
import Image from "next/image";
import React from "react";

interface CardImageProps {
  src: string;
  alt: string;
  title: string;
  subTitle: string;
  innerImg: string;
  innerSubTitle: string;
}

export default function CardImage({
  src,
  alt,
  title,
  subTitle,
  innerImg,
  innerSubTitle,
}: CardImageProps) {
  return (
    <div className={styles.holder}>
      <Image src={src} alt={alt} fill />
      <div className={styles.outerDiv}>
        <h2>{title}</h2>
        <h4>{subTitle}</h4>
      </div>
      <div className={styles.innerDiv}>
        <Image src={innerImg} alt={innerImg} width={50} height={40} />
        <p>{innerSubTitle}</p>
      </div>
    </div>
  );
}
