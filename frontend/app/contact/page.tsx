import styles from "./contact.module.css";
import ContactForm from "./contactForm";

export default function ContactPage() {
  return (
    <div>
      <div className={styles.headDiv}>
        <h1>Contact us from anywhere in the world We are available 24/7</h1>
        <h2>
          Please fill in the email form below to send us a message. We will
          reply to you as soon as possible.
        </h2>
      </div>

      <main className={styles.main}>
        <section className={styles.footerContact}>
          <div>
            <h1 className={styles.title}>CONTACT</h1>
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
            <p className={styles.lastP}>
              Email to Rexus International GmbH
            </p>
          </div>
        </section>

        <section className="formSection">
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
