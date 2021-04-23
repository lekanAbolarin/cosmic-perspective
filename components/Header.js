import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "./Link";
import Typography from "./Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "54px",
    position: "fixed",
    top: "0",
    left: "0",
    // backgroundColor: "white",
    [theme.breakpoints.up("sm")]: {
      height: "10vh",
    },
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "200000",
  },
  zIndex: "200000",
  brandContainer: {
    minWidth: "20vw",
    marginLeft: "20px",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      width: "8vw",
      marginLeft: "40px",
    },
  },
  location: {
    // width: "100px",
    marginRight: theme.spacing(3),
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    color: theme.palette.accent,
    [theme.breakpoints.up("sm")]: {
      marginRight: "40px",
    },
  },
  menuButton: {
    width: "24px",
    marginRight: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  spacer: {
    flexGrow: "1",
  },
  locationText: {
    marginLeft: "8px",
  },
  backPath: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.accent.main,
  },
  backPathText: {
    marginLeft: "8px",
  },
}));

const mapStateToProps = (state) => {
  return {
    location: state.common.location,
    showHeader: state.common.showHeader,
  };
};

const Header = (props) => {
  // const lastPath =
  //   props.history[(props.history.length - 2, props.history.length - 1)];
  // const currentPath = props.history[props.history.length - 1];
  const classes = useStyles();
  const home = (
    <div className={classes.root}>
      <div className={classes.brandContainer}>
        <Link href="/">
          <a>
            <Typography variant="subtitle1">COSMIC PERSPECTIVE</Typography>
          </a>
        </Link>
      </div>
      <div className={classes.spacer} />
      <div className={classes.menuButton} />
    </div>
  );
  return props.showHeader ? home : "";
};

export default Header;
