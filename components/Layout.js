import React from "react";
import Head from "next/head";
import Link from "./Link";
import styles from "../styles/Home.module.css";

export default function Layout({ content }) {
  return (
    <div>
      <Head>
        <title> Cosmic Perspective</title>
        <link rel="icon" href="/favico.icon" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>{content}</div>
      </main>
    </div>
  );
}
