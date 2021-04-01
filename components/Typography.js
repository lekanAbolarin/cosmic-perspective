import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography as _Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  contained: {
    padding: "10px 2em",
    marginBottom: "15px",
    borderRadius: "9999px",
    // boxShadow: "rgba(0, 0, 0, 0.2) 0px 8px 28px",
    color: "white",
    fontWeight: "700",
  },
  outlined: {
    padding: "10px 2em",
    marginBottom: "15px",
    borderRadius: "9999px",
    fontWeight: "700",
  },
  text: {
    padding: "10px 2em",
    marginBottom: "15px",
    borderRadius: "9999px",
    fontWeight: "700",
  },
  icon: {
    fontWeight: "700",
  },
}));

const Typography = (props) => {
  const { variant, size, ..._props } = props;
  const style = size ? {} : {};
  const classes = useStyles();
  const typ =
    variant === "h1" ? (
      <_Typography
        variant={variant}
        className={classes.h1}
        style={style}
        {..._props}
      >
        {_props.children}
      </_Typography>
    ) : variant == "h2" ? (
      <_Typography
        variant={variant}
        className={classes.h2}
        style={style}
        {..._props}
      >
        {_props.children}
      </_Typography>
    ) : variant == "h3" ? (
      <_Typography className={classes.h3} style={style} {..._props}>
        {_props.children}
      </_Typography>
    ) : (
      <_Typography style={style} {...props}>
        {_props.children}
      </_Typography>
    );
  return typ;
};

export default Typography;
