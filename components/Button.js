import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button as _Button, IconButton } from "@material-ui/core";

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

const Button = (props) => {
  const { variant, size, className, ..._props } = props;
  const style = size ? {} : {};
  const classes = useStyles();
  const btn =
    variant === "contained" ? (
      <_Button
        variant={variant}
        className={`${classes.contained} ${className}`}
        style={style}
        {..._props}
      >
        {_props.children}
      </_Button>
    ) : variant == "outlined" ? (
      <_Button
        variant={variant}
        className={`${classes.outlined} ${className}`}
        style={style}
        {..._props}
      >
        {_props.children}
      </_Button>
    ) : variant == "icon" ? (
      <IconButton
        className={`${classes.icon} ${className}`}
        style={style}
        {..._props}
      >
        {_props.children}
      </IconButton>
    ) : (
      <_Button
        variant="text"
        className={`${classes.text} ${className}`}
        style={style}
        {..._props}
      >
        {_props.children}
      </_Button>
    );
  return btn;
};

export default Button;
