"use client";

import React from "react";
import styles from "./contact.module.css";
import TextField from "../components/textfield/textfield";

export default function ContactForm() {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [subject, setSubject] = React.useState<string>("");
  const [body, setBody] = React.useState<string>("");
  const [error, setError] = React.useState<boolean | null>(null);

  const ReqMsg = () => {
    switch (error) {
      case false:
        return (
          <h2 className={`${styles.msg} ${styles.suc}`}>
            Email has been sent Successfully
          </h2>
        );

      case true:
        return (
          <h2 className={`${styles.msg} ${styles.err}`}>
            Something went wrong, please try again
          </h2>
        );

      default:
        return (
          <h2 className={`${styles.msg}`}></h2>
        );
    }
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:8000/send-email/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          body,
        }),
      });

      if (res.status === 200) {
        setError(false);
        console.log("%cSuccess", "color: green;");
      } else {
        setError(true);
        console.log("%cFail", "color: red;");
      }
    } catch {
      setError(true);
      console.error("could not send the email");
    } finally {
      setError(null);
    }
  }

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <TextField
        id="name"
        name="name"
        label="Your Name:"
        onChange={setName}
        autoComplete="name"
        required
      />
      <TextField
        id="email"
        name="email"
        label="Your Email:"
        inputType="email"
        type="email"
        onChange={setEmail}
        autoComplete="email"
        required
      />
      <TextField
        id="subject"
        name="subject"
        label="Subject:"
        onChange={setSubject}
        required
      />
      <TextField
        id="body"
        name="body"
        label="Your Message:"
        onChange={setBody}
        fieldType="textarea"
        required
      />
      <input type="submit" value="Send" />
      <ReqMsg />
    </form>
  );
}
