import React, { useState } from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core/";
import Link from "./Link";
import Border from "./Border";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "1px",
    height: "1px",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "300000",
  },
  menu: {
    width: "80vw",
    height: "100vh",
    padding: "20vh 0vw",
    position: "fixed",
    top: "0",
    left: "0",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    transition:
      "transform 500ms cubic-bezier(1, 0, 0, 1) 0ms, left 500ms cubic-bezier(1, 0, 0, 1) 0ms",
    [theme.breakpoints.up("sm")]: {
      right: "40px",
    },
    zIndex: "1000",
  },
  menuColor: {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: "0",
    left: "0",
    backgroundColor: theme.palette.primary.main,
    transition: "opacity 500ms cubic-bezier(1, 0, 0, 1) 0ms",
    pointerEvents: "none",
    zIndex: "500",
  },
  menuButton: {
    width: "32px",
    height: "32px",
    padding: "4px",
    borderRadius: "50%",
    position: "fixed",
    top: "15px",
    right: "20px",
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    [theme.breakpoints.up("sm")]: {
      top: "50%",
      left: "28px",
      transform: "translate(0px, -50%)",
      transition: "transform 500ms cubic-bezier(1, 0, 0, 1) 0ms",
      "&:hover": {
        // transformOrigin: "left",
        transform: "translateY(-50%) scaleX(2)",
      },
    },
    zIndex: "500000",
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 500ms cubic-bezier(1, 0, 0, 1) 0ms",
  },
  menuButtonOpenState: {
    width: "32px",
    height: "32px",
    padding: "4px",
    borderRadius: "50%",
    position: "fixed",
    top: "15px",
    right: "20px",
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
      transform: "translate(-20px, 60px)",
    },
    [theme.breakpoints.up("sm")]: {
      top: "50%",
      left: "28px",
      transform: "translate(40px, -50%)",
      transition: "transform 300ms cubic-bezier(1, 0, 0, 1) 0ms",
    },
    transition: "transform 500ms cubic-bezier(1, 0, 0, 1) 0ms",
    zIndex: "500000",
    overflow: "hidden",
    cursor: "pointer",
  },
  l1: {
    width: "16px",
    height: "2px",
    margin: "0.5px 2px",
    backgroundColor: theme.palette.accent.main,
    transition: "transform 500ms cubic-bezier(1, 0, 0, 1) 0ms",
  },
  l2: {
    width: "20px",
    height: "2px",
    margin: "0.5px 2px",
    backgroundColor: theme.palette.accent.main,
    transition: "transform 500ms cubic-bezier(1, 0, 0, 1) 0ms",
  },
  l3: {
    width: "12px",
    height: "2px",
    margin: "0.5px 2px",
    backgroundColor: theme.palette.accent.main,
    transition: "transform 500ms cubic-bezier(1, 0, 0, 1) 0ms",
  },
  menuText: {
    color: theme.palette.accent.main,
    fontSize: "8px",
    position: "absolute",
    top: "50vh",
    left: "48px",
    transition:
      "transform 500ms cubic-bezier(1, 0, 0, 1) 0ms, opacity 300ms ease-in-out 0ms",
    zIndex: "500000",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  menuLinks: {
    padding: "0px 0px 0px 60px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    color: theme.palette.accent.main,
    alignSelf: "flex-start",
    [theme.breakpoints.up("sm")]: {
      padding: "0px 0px 0px 200px",
    },
  },
  linkContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: "0px",
    marginBottom: "40px",
    marginLeft: "-40px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "0px",
      marginBottom: "60px",
      marginLeft: "-40px",
    },
  },
  listItem: {
    margin: "3px 0px",
    overflow: "hidden",
    position: "relative",
  },
  link: {
    position: "relative",
    textDecoration: "none",
  },
  activeLink: {
    color: theme.palette.primary.main,
    pointerEvents: "none",
  },
  linkText: {
    fontFamily: "oswaldHeavy",
    fontSize: "2rem",
    fontWeight: "900",
    lineHeight: "1.5",
  },
  addressBlock: {
    padding: "0px 0px 0px 60px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    [theme.breakpoints.up("sm")]: {
      padding: "0px 0px 0px 200px",
    },
  },
  phone: {
    fontWeight: "600",
  },
  uaContainer: {
    width: "5vw",
    minWidth: "74px",
    margin: "0px 0px 0px 60px",
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      margin: "0px 0px 0px 200px",
    },
  },
}));

const Menu = (props) => {
  const user = props.user;
  const [menuOpen, toggleMenu] = useState(false);
  const [extendMenu, setExtendMenu] = useState(false);
  const [showBackDrop, toggleBackDrop] = useState(false);
  const [showBorder, toggleBorder] = useState(false);
  const router = useRouter();
  //   const lastPath = router.pathname;
  //   const currentPath = router.pathname;
  const classes = useStyles();
  const menuHoverTransform = extendMenu
    ? { transform: "translate(-90%, 0px)" }
    : { transform: "translate(-100%, 0px)" };

  const links = ["Home", "About", "Contact"].map((item, index) => {
        return (
          <li className={classes.listItem} key={index}>
            <Link href="">
              <a>
                <Typography
                  variant="h6"
                  className={classes.linkText}
                  style={
                    menuOpen
                      ? {
                          transform: "translate(0px, 0px)",
                          transition: `transform 800ms ease ${
                            index * 100 + 100
                          }ms`,
                        }
                      : {
                          transform: "translate(0px, 100%)",
                          transition: `transform 800ms ease ${
                            index * 100 + 100
                          }ms`,
                        }
                  }
                >
                  {item}
                </Typography>
              </a>
            </Link>
          </li>
        );
      })
    }

  const ret = (
    <div className={classes.root}>
      <Border show={showBorder} menuBorder />
      <div
        className={classes.menuColor}
        style={showBackDrop ? { opacity: "1" } : { opacity: "0" }}
      />
      <div
        className={classes.menu}
        style={
          menuOpen
            ? { transform: "translate(0px, 0px)" }
            : { ...menuHoverTransform }
        }
      >
        <div className={classes.uaContainer}>
          <UABrand />
        </div>
        <div className={classes.menuLinks}>
          <ul className={classes.linkContainer}>{links}</ul>
        </div>
        <div className={classes.addressBlock}>
          <Typography variant="caption" display="block" gutterBottom>
            Lagos, Nigeria
          </Typography>
          <Typography
            className={classes.phone}
            variant="body2"
            display="block"
            gutterBottom
          >
            +2348149623760
          </Typography>
          <Typography
            className={classes.phone}
            variant="caption"
            display="block"
            gutterBottom
          >
            michaelwest505@gmail.com
          </Typography>
        </div>
      </div>
      <div
        className={menuOpen ? classes.menuButtonOpenState : classes.menuButton}
        onClick={() => {
          toggleHeader();
          toggleBorder(!showBorder);
          toggleBackDrop(!showBackDrop);
          toggleMenu(!menuOpen);
        }}
        onMouseEnter={() => {
          setExtendMenu(true);
        }}
        onMouseLeave={() => setExtendMenu(false)}
      >
        <div
          className={classes.l1}
          style={
            menuOpen
              ? { width: "20px", transform: "rotateZ(-45deg)" }
              : { width: "16px", transform: "rotateZ(0deg)" }
          }
        />
        <div
          className={classes.l2}
          style={
            menuOpen
              ? { transform: "rotateZ(45deg)" }
              : { transform: "rotateZ(0deg)" }
          }
        />
        <div
          className={classes.l3}
          style={
            menuOpen
              ? { transform: "translateX(200%)" }
              : { transform: "translateX(0px)" }
          }
        />
      </div>
      <Typography
        variant="caption"
        className={classes.menuText}
        style={
          extendMenu && !menuOpen
            ? { transform: "translate(48px, -50%) rotateZ(90deg)" }
            : {
                transform: "translate(8px, -50%) rotateZ(90deg)",
                opacity: menuOpen ? "0" : "1",
              }
        }
      >
        MENU
      </Typography>
    </div>
  );
  return props.show ? ret : "";
};

export default Menu;
