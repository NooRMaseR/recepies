import styles from './polygon-card.module.css'
import Image from 'next/image';
import React from 'react'

interface PolygonCardProps {
    icon: string;
    text: string;
}

export default function PolygonCard({icon, text}: PolygonCardProps) {
  return (
      <div className={styles.polygonDiv}>
        <Image src={icon} alt={text + ' icon'} width={50} height={50} />
        <p>{text}</p>
    </div>
  )
}
