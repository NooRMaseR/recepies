"use client";

import React from "react";
import styles from './contact.module.css';
import TextField from "../components/textfield/textfield";

export default function ContactForm() {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [subject, setSubject] = React.useState<string>("");
  const [body, setBody] = React.useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = JSON.stringify({
      name,
      email,
      subject,
      body
    });

    try {
      const res = await fetch("http://127.0.0.1:5000/send-email/", {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: data
      });

      if (res.ok) {
        console.log("%cSuccess", 'color: green;');
      }
    } catch {
      console.error("could not send the error");
      
    }
  }

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <TextField id="name" name="name" label="Your Name:" onChange={setName} />
      <TextField
        id="email"
        name="email"
        label="Your Email:"
        inputType="email"
        type="email"
        onChange={setEmail}
      />
      <TextField
        id="subject"
        name="subject"
        label="Subject:"
        onChange={setSubject}
      />
      <TextField
        id="body"
        name="body"
        label="Your Message:"
        onChange={setBody}
        fieldType="textarea"
      />
      <input type="submit" value="Send" />
    </form>
  );
}
