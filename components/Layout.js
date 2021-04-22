import React from "react";
import Head from "next/head";
import Link from "./Link";
import Border from "../components/Border";
import Menu from "../components/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    "@font-face": [
      {
        fontFamily: "Integral",
        src: `url('/assets/integralcf.otf}) format('otf')`,
      },
    ],
  },
}));

export default function Layout({ content }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title> Cosmic Perspective</title>
        <link
          rel="preload"
          href="/assets/integralcf.otf"
          as="font"
          crossOrigin=""
        />
        <link rel="icon" href="/favico.icon" />
      </Head>
      <Border show />
      <Menu />
      <div>{content}</div>
    </div>
  );
}
