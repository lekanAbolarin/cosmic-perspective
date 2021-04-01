import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Container = (props) => {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={{ flexDirection: props.c ? "column" : "row" }}
    >
      {props.children}
    </div>
  );
};

export default Container;
