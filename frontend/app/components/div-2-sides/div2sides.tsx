import React from "react";
import styles from "./div2sides.module.css";

interface Div2SidesProps {
  title: string;
  contentBelowH1: React.ReactNode;
  children?: React.ReactNode;
}

export default function Div2Sides({title, contentBelowH1, children}: Div2SidesProps) {
  return (
    <div className={styles.enzymesInfo}>
      <div>
        <h1>{title}</h1>
        {contentBelowH1}
      </div>
      <div>{children}</div>
    </div>
  );
}
