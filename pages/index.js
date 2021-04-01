import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  const home = <div>Home Page</div>;
  return <Layout content={home} />;
}
