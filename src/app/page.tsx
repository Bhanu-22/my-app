"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace this with your actual login logic or API call
    console.log("Logging in with:", { email, password });
    alert(`Logged in as ${email}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome Back</h1>
      <p className={styles.subtitle}>Login to your account</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Log In
        </button>
      </form>

      <p className={styles.footer}>
        Don’t have an account? <a href="#">Sign up</a>
      </p>
    </div>
  );
}
