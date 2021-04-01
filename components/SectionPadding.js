import React from "react";
import { Container } from "@material-ui/core";
import withStyles from "@material-ui/styles";

const styles = (theme) => ({
  root: {
    padding: "10vh, 15vh",
  },
});

class SectionPadding extends React.Component {
  render() {
    const { classes } = this.props;
    return <Container className={classes.div}>{this.props.children}</Container>;
  }
}

export default withStyles(styles)(SectionPadding);
