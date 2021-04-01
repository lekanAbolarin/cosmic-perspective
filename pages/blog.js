import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import posts from "../posts.json";

const Blog = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title> Blog for Cosmic Perspective</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1> Blog </h1>
        <div>
          <ul>
            {Object.entries(posts).map((value, index) => {
              return (
                <li key={index}>
                  <Link href="/blog/[id]" as={"/blog/" + value[0]}>
                    <a>{value[1].title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Blog;
