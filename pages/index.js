import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Typography from "../components/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.primary.main,
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "centre",
  },
  hero: {
    width: "100%",
    minHeight: "100vh",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  heroImage: {
    position: "absolute",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&>img": {
      width: "100vw",
    },
  },
  heroText: {
    margin: "0 0 5rem 0",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "10",
  },
}));
export default function Home() {
  const classes = useStyles();
  const home = (
    <div className={classes.root}>
      <div className={classes.hero}>
        <div className={classes.heroImage}>
          <img src="/assets/images/c_p_1.jpg" alt="hero image" />
        </div>
        <div className={classes.heroText}>
          <Typography
            variant="subtitle1"
            style={{ maxWidth: "30vw", textAlign: "center" }}
          >
            Connecting the world to space through story, film and immersive
            experience
          </Typography>
          <Typography variant="h1">Space-X</Typography>{" "}
        </div>
      </div>
    </div>
  );
  return <Layout content={home} />;
}
