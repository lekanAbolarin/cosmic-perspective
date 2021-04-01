import Head from "next/head";
import Link from "next/link";
import posts from "../../posts.json";
import styles from "../../styles/Home.module.css";

export default function Post({ post }) {
  if (!post) return <p></p>;
  return (
    <div className={styles.container}>
      {" "}
      <Head>
        <title>Blog for Cosmic Perspectives</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main clasName={styles.main}>
        <h1 className={styles.title}>Blog</h1>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </main>
    </div>
  );
}

Post.getInitialProps = ({ query }) => {
  return {
    post: posts[query.id],
  };
};
