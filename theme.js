import { createMuiTheme } from "@material-ui/core/styles";

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#1a27c9",
    },
    secondary: {
      main: "#0B0D36",
    },
    text: {
      main: "1C1B20",
    },
    accent: {
      main: "#000000",
    },
    dark: {
      main: "#0D0202",
    },
    background: {
      default: "#F8F8F8",
    },
  },
  typography: {
    h1: {
      fontWeight: "700",
    },
    h2: {
      fontWeight: "700",
    },
    h3: {
      fontWeight: "700",
    },
    h4: {
      fontWeight: "700",
    },
    h5: {
      fontWeight: "700",
    },
    h6: {
      fontWeight: "700",
    },
    subtitle1: {
      fontWeight: "700",
    },
    subtitle2: {
      fontWeight: "700",
    },
  },
  transitions: {
    snappy: "cubic-bezier(1 0 0 1)",
    slow: "cubic-bezier(0.7 0 0.3 1)",
  },
});

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#DFA621",
    },
    secondary: {
      main: "#F8F8F8",
    },
    text: {
      main: "1C1B20",
    },
    accent: {
      main: "#0B0D36",
    },
    dark: {
      main: "#0D0202",
    },
  },
  typography: {
    h1: {
      fontWeight: "700",
    },
    h2: {
      fontWeight: "700",
    },
    h3: {
      fontWeight: "700",
    },
    h4: {
      fontWeight: "700",
    },
    h5: {
      fontWeight: "700",
    },
    h6: {
      fontWeight: "700",
    },
    subtitle1: {
      fontWeight: "700",
    },
    subtitle2: {
      fontWeight: "700",
    },
  },
  transitions: {
    snappy: "cubic-bezier(1 0 0 1)",
    slow: "cubic-bezier(0.7 0 0.3 1)",
  },
});

const theme = {
  light: lightTheme,
  dark: darkTheme,
};

export { theme };
