import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderMobile from "./headerMobile";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
      <header className={styles.header}>
          
      {/* for big screens */}
      <div className={styles.desktop}>
        <section>
          <div>
            <p>Contact us from anywhere in the world!</p>
          </div>
          <hr />
          <div className={styles.divContact}>
            <div>
              <FontAwesomeIcon
                icon={faPhone}
                width={15}
                style={{ transform: "rotateY(180deg)" }}
              />
              <a href="tel:+208327687">+208327687</a>
            </div>
            <div>
              <a href="https://facebook.com" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} width={10} />
              </a>
              <a href="https://twitter.com" target="_blank">
                <FontAwesomeIcon icon={faXTwitter} width={15} />
              </a>
              <a href="https://linkedin.com" target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} width={15} />
              </a>
              <a href="https://instagram.com" target="_blank">
                <FontAwesomeIcon icon={faInstagram} width={15} />
              </a>
            </div>
          </div>
        </section>
        <nav>
          <Image src="/rexus-logo.png" alt="Logo" fill priority />
          <ul>
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
        </nav>
      </div>

      {/* for mobile */}
      <HeaderMobile />
    </header>
  );
}
