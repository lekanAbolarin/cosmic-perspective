import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "centre",
  },
}));
export default function Home() {
  const classes = useStyles();
  const home = <div className={classes.root}>Home Page</div>;
  return <Layout content={home} />;
}
