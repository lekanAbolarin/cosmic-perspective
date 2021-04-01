import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core/";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocationOffIcon from "@material-ui/icons/LocationOff";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import UABrand from "./UABrand";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "54px",
    position: "fixed",
    backgroundColor: "white",
    [theme.breakpoints.up("sm")]: {
      height: "10vh",
    },
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "200000",
  },
  brandContainer: {
    width: "20vw",
    marginLeft: "20px",
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
        <UABrand />
      </div>
      <div className={classes.spacer} />
      <div className={classes.location}>
        {/* {props.location.on ? <LocationOnIcon /> : <LocationOffIcon />} */}
        <Typography variant="caption" className={classes.locationText}>
          {props.location.position}
        </Typography>
      </div>
      <div className={classes.menuButton} />
    </div>
  );
  const otherPath = (
    <div className={classes.root}>
      <div className={classes.backPath}>
        <ArrowBackIcon />
        <Typography variant="body1" className={classes.backPathText}>
          {/* {currentPath} */}
        </Typography>
      </div>
    </div>
  );
  return props.showHeader ? home : "";
};

// export default withRouter(connect(mapStateToProps)(Header));
export default connect(mapStateToProps)(Header);
