import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    position: "fixed",
    background: "transparent",
    zIndex: "100000",
  },
  border: {
    backgroundColor: "#FFFFFF",
    pointerEvents: "none",
    position: "fixed",
    zIndex: "100000",
  },
  top: {
    width: "100%",
    height: "20px",
    [theme.breakpoints.up("sm")]: {
      height: "40px",
    },
    transformOrigin: "top",
    top: "0",
    left: "0",
    transform: "translate(0, -100%) scale(1)",
  },
  menuTop: {
    width: "100%",
    height: "40px",
    [theme.breakpoints.up("sm")]: {
      height: "80px",
    },
    transformOrigin: "top",
    top: "0",
    left: "0",
    transform: "translate(0, -100%) scale(1)",
  },
  right: {
    width: "20px",
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "40px",
    },
    transformOrigin: "right",
    top: "0",
    right: "0",
    transform: "translate(100%, 0) scale(1)",
  },
  menuRight: {
    width: "40px",
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "80px",
    },
    transformOrigin: "right",
    top: "0",
    right: "0",
    transform: "translate(100%, 0) scale(1)",
  },
  bottom: {
    width: "100%",
    height: "20px",
    [theme.breakpoints.up("sm")]: {
      height: "40px",
    },
    transformOrigin: "bottom",
    bottom: "0",
    left: "0",
    transform: "translate(0, 100%) scale(1)",
  },
  menuBottom: {
    width: "100%",
    height: "40px",
    [theme.breakpoints.up("sm")]: {
      height: "80px",
    },
    transformOrigin: "bottom",
    bottom: "0",
    left: "0",
    transform: "translate(0, 100%) scale(1)",
  },
  left: {
    width: "20px",
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "40px",
    },
    transformOrigin: "keft",
    top: "0",
    left: "0",
    transform: "translate(-100%, 0) scale(1)",
  },
  menuLeft: {
    width: "40px",
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "80px",
    },
    transformOrigin: "keft",
    top: "0",
    left: "0",
    transform: "translate(-100%, 0) scale(1)",
  },
  scrollButton: {
    position: "absolute",
    top: "0",
    fontSize: "6px",
  },
}));

const Border = (props) => {
  const classes = useStyles();
  //Assigns classes depending on Border's use in menu context or not
  const __classes = props.menuBorder
    ? {
        top: classes.menuTop,
        right: classes.menuRight,
        bottom: classes.menuBottom,
        left: classes.menuLeft,
      }
    : {
        top: classes.top,
        right: classes.right,
        bottom: classes.bottom,
        left: classes.left,
      };
  const styles = props.show
    ? {
        t: {
          transform: "translate(0, 0)",
          transition: "transform 500ms cubic-bezier(0.7, 0, 0.3, 1) 0ms",
        },
        r: {
          transform: "translate(0, 0)",
          transition: "transform 500ms cubic-bezier(0.7, 0, 0.3, 1) 0ms",
        },
        b: {
          transform: "translate(0, 0)",
          transition: "transform 500ms cubic-bezier(0.7, 0, 0.3, 1) 0ms",
        },
        l: {
          transform: "translate(0, 0)",
          transition: "transform 500ms cubic-bezier(0.7, 0, 0.3, 1) 0ms",
        },
      }
    : {};
  return (
    <>
      <div
        className={`${classes.border} ${__classes.top}`}
        style={{ ...styles.t }}
      />
      <div
        className={`${classes.border} ${__classes.right}`}
        style={{ ...styles.r }}
      />
      <div
        className={`${classes.border} ${__classes.bottom}`}
        style={{ ...styles.b }}
      />
      <div
        className={`${classes.border} ${__classes.left}`}
        style={{ ...styles.l }}
      />
    </>
  );
};

export default Border;
