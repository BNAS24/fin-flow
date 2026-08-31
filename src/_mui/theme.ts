"use client";
import { themeVars } from "@/_data/mui/theme";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          light: "#00C488",
          main: "#007652",
          dark: "#005339",
          contrastText: "#FAF8F1",
        },
        secondary: {
          light: "#EFF5F0",
          main: "#EBF3EC",
          dark: "#91BD97",
          contrastText: "#193429",
        },
        error: {
          light: "#DF5C5F",
          main: "#D73337",
          dark: "#9C1F22",
          contrastText: "#FAF8F1",
        },
        warning: {
          light: "#EDBC65",
          main: "#E8AB3E",
          dark: "#B87E16",
          contrastText: "#412805",
        },
        success: {
          light: "#4AC37F",
          main: "#349D62",
          dark: "#246E45",
          contrastText: "#FAF8F1",
        },
        info: {
          light: "#03A9F4",
          main: "#0288D1",
          dark: "#01579B",
          contrastText: "#FFFFFF",
        },
        text: {
          primary: "#11241C",
          secondary: "#5A6F63",
          disabled: "rgba(0,0,0,0.38)",
        },
        background: {
          default: "#FCFAF4",
          paper: "#FFFFFF",
        },
        divider: "#DAE0D9",
        action: {
          focus: "#007652",
          active: "rgba(0,0,0,0.54)",
          hover: "rgba(0,0,0,0.04)",
          hoverOpacity: 0.04,
          selected: "rgba(0,0,0,0.08)",
          selectedOpacity: 0.08,
          disabled: "rgba(0,0,0,0.26)",
          disabledOpacity: 0.38,
          disabledBackground: "rgba(0,0,0,0.12)",
          focusOpacity: 0.12,
          activatedOpacity: 0.12,
        },
        common: {
          black: "#000000",
          white: "#FFFFFF",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          light: "#6CCBA2",
          main: "#47BE8B",
          dark: "#308762",
          contrastText: "#071A13",
        },
        secondary: {
          light: "#3A6652",
          main: "#1A2E25",
          dark: "#12201A",
          contrastText: "#F0EEE7",
        },
        error: {
          light: "#EB6969",
          main: "#E64343",
          dark: "#B71818",
          contrastText: "#FAF8F1",
        },
        warning: {
          light: "#F2C16B",
          main: "#EFB146",
          dark: "#C78411",
          contrastText: "#311D03",
        },
        success: {
          light: "#79C999",
          main: "#57BC80",
          dark: "#378A58",
          contrastText: "#071A13",
        },
        info: {
          light: "#4FC3F7",
          main: "#29B6F6",
          dark: "#0288D1",
          contrastText: "rgba(0,0,0,0.87)",
        },
        text: {
          primary: "#F0EEE7",
          secondary: "#96A298",
          disabled: "rgba(255,255,255,0.5)",
        },
        background: {
          default: "#0B1712",
          paper: "#11211A",
        },
        divider: "rgba(255,255,255,0.12)",
        action: {
          focus: "#47BE8B",
          active: "rgba(255,255,255,0.7)",
          hover: "rgba(255,255,255,0.08)",
          hoverOpacity: 0.08,
          selected: "rgba(255,255,255,0.16)",
          selectedOpacity: 0.16,
          disabled: "rgba(255,255,255,0.3)",
          disabledOpacity: 0.38,
          disabledBackground: "rgba(255,255,255,0.12)",
          focusOpacity: 0.12,
          activatedOpacity: 0.24,
        },
        common: {
          black: "#000000",
          white: "#FFFFFF",
        },
      },
    },
  },
  typography: {
    fontFamily: themeVars.fonts.secondary,
    h1: {
      fontWeight: "bold",
      fontSize: "2.027rem",
      fontFamily: themeVars.fonts.primary,
    },
    h2: {
      fontWeight: "bold",
      fontSize: "1.802rem",
      fontFamily: themeVars.fonts.primary,
    },
    h3: {
      fontWeight: "bold",
      fontSize: "1.602rem",
      fontFamily: themeVars.fonts.primary,
    },
    h4: {
      fontWeight: "bold",
      fontSize: "1.424rem",
      fontFamily: themeVars.fonts.primary,
    },
    h5: {
      fontWeight: "bold",
      fontSize: "1.266rem",
      fontFamily: themeVars.fonts.primary,
    },
    h6: {
      fontWeight: "bold",
      fontSize: "1.125rem",
      fontFamily: themeVars.fonts.primary,
    },
    subtitle1: {
      color: "text.secondary",
      fontSize: "1.09rem",
    },
    body1: {
      fontSize: "1rem",
      fontFamily: themeVars.fonts.secondary,
    },
    body2: {
      fontSize: "0.79rem",
      fontFamily: themeVars.fonts.secondary,
    },
    button: {
      fontSize: "0.89rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          padding: 16,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme, {
  factor: 1,
});

export { theme };
