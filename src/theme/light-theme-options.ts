import { ThemeOptions } from "@mui/material";

// Colors

const neutral = {
  100: "#F5F5F5",
  200: "#EEEEEE",
  300: "#CACACA",
  400: "#BDBDBD",
  500: "#9E9E9E",
  600: "#9E9E9E",
  700: "#616161",
  800: "#424242",
  900: "#212121",
};

const background = {
  default: "#E3E3E3",
  paper: "#FFFFFF",
};

const divider = "#E6E8F0";

const primary = {
  main: "#002a4c",
  light: "#365278",
  dark: "#000024",
  contrastText: "#FFFFFF",
};

const secondary = {
  main: "#176CFF",
  light: "#6F99FF",
  dark: "#0042CB",
  contrastText: "#FFFFFF",
};

const success = {
  main: "#2BAA57",
  light: "#66DD85",
  dark: "#007A2B",
  contrastText: "#FFFFFF",
};

const info = {
  main: "#2196F3",
  light: "#64B6F7",
  dark: "#0B79D0",
  contrastText: "#FFFFFF",
};

const warning = {
  main: "#FF9800",
  light: "#FFB547",
  dark: "#C77700",
  contrastText: "rgba(0, 0, 0, 0.87)",
};

const error = {
  main: "#F44336",
  light: "#F88078",
  dark: "#E31B0C",
  contrastText: "#FFFFFF",
};

const text = {
  primary: "#253858",
  secondary: "rgba(66, 82, 110, 0.86)",
  disabled: "rgba(0, 0, 0, 0.38)",
  teritiary: "#FFFFFF",
};

export const lightThemeOptions: ThemeOptions = {
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: neutral[500],
          color: "#FFFFFF",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          "&.MuiChip-filledDefault": {
            backgroundColor: neutral[200],
            "& .MuiChip-deleteIcon": {
              color: neutral[400],
            },
          },
          "&.MuiChip-outlinedDefault": {
            "& .MuiChip-deleteIcon": {
              color: neutral[300],
            },
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            opacity: 1,
            color: text.secondary,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: divider,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderColor: divider,
          borderStyle: "solid",
          borderWidth: 1,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderColor: divider,
          borderStyle: "solid",
          borderWidth: 1,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: neutral[500],
        },
        track: {
          backgroundColor: neutral[400],
          opacity: 1,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${divider}`,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: neutral[100],
          ".MuiTableCell-root": {
            color: neutral[700],
          },
        },
      },
    },
  },
  palette: {
    action: {
      active: "rgba(224, 224, 224, 1)",
      focus: "rgba(0, 0, 0, 0.08)",
      hover: "rgba(0, 0, 0, 0.04)",
      selected: "rrgba(0, 0, 0, 0.08)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabled: "rgba(0, 0, 0, 0.26)",
    },
    background,
    divider,
    error,
    info,
    mode: "light",
    neutral,
    primary,
    secondary,
    success,
    text,
    warning,
  },
  shadows: [
    "none",
    "0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)",
    "0px 1px 2px rgba(100, 116, 139, 0.12)",
    "0px 1px 4px rgba(100, 116, 139, 0.12)",
    "0px 1px 5px rgba(100, 116, 139, 0.12)",
    "0px 1px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 6px rgba(100, 116, 139, 0.12)",
    "0px 3px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
    "0px 5px 12px rgba(100, 116, 139, 0.12)",
    "0px 5px 14px rgba(100, 116, 139, 0.12)",
    "0px 5px 15px rgba(100, 116, 139, 0.12)",
    "0px 6px 15px rgba(100, 116, 139, 0.12)",
    "0px 7px 15px rgba(100, 116, 139, 0.12)",
    "0px 8px 15px rgba(100, 116, 139, 0.12)",
    "0px 9px 15px rgba(100, 116, 139, 0.12)",
    "0px 10px 15px rgba(100, 116, 139, 0.12)",
    "0px 12px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 13px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 14px 24px -8px rgba(100, 116, 139, 0.25)",
    "0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
  ],
};
