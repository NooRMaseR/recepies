import styles from "./footer.module.css";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerContact}>
          <div>
            <h1>REXUS International GmbH</h1>
            <div>
              <p className="no">Kaempsweg 3</p>
              <p className="no">22301 Hamburg</p>
              <p className="no">Germany</p>
            </div>
            <div>
              <p className="no">Tel: +49 40 2828 2470</p>
              <p className="no">Fax: +49 40 2828 2471</p>
            </div>
            <p className={styles.lastP}>Email to Rexus International GmbH</p>
          </div>
          <div>
            <h3>Information</h3>
            <Link href="/contact">Contact</Link>
            <Link href="/legal">Legal</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
      </section>
      <section className={styles.footerCopy}>
        <p className="no">© 2021 REXUS International GmbH</p>
      </section>
    </footer>
  );
}
