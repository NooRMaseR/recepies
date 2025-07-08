"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-alice-carousel";
import styles from "./header.module.css";
import Image from "next/image";
import React from "react";

export default function HeaderMobile() {
  const [drawerOpened, setDrawerOpened] = React.useState<boolean>(false);
  const handelDrawerClick = () => setDrawerOpened((pre) => !pre);

  return (
    <div className={styles.mobile}>
      <nav>
        <Image src="/rexus-logo.png" alt="Logo" fill priority />
        <FontAwesomeIcon icon={faBars} size="xl" onClick={handelDrawerClick} />
      </nav>

      <div className={`${styles.navMobile} ${drawerOpened ? styles.drOpen : ""}`}>
        <ul className={styles.ul}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/who-we-are">Who we are</Link>
          </li>
          <li>
            <Link href="/guarantee">Guarantee</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
