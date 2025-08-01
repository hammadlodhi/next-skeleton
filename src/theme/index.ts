import { createTheme } from "@mui/material/styles";

const spacingUnit = 4;

const customShadows = [
  "none",
  "0 1px 5px 1px rgba(0,0,0,0.1)", // sectionShadow
  "2px 2px 4px #e7e7e7, -2px 0px 4px rgba(231,231,231,0.2)", // dropdownShadow
  "2px -2px 4px #e7e7e7, -2px 0px 4px rgba(231,231,231,0.2)", // dropdownTopShadow
  "-1px -1px 6px 0px rgba(0,0,0,0.2), 8px 6px 6px -6px rgba(0,0,0,0.2)", // cardShadow
  "2px 2px 5px rgba(0,0,0,0.2)", // boxShadow
  "rgba(100, 100, 111, 0.4) 0px 7px 16px 0px", // boxShadowMid
  "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", // boxShadowStrong
  "1px 3px 4px 0 rgba(0,0,0,0.1), -1px -1px 4px 0 rgba(0,0,0,0.1)", // boxShadowLight
];

const filledShadows = [
  ...customShadows,
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
];

const theme = createTheme({
  spacing: spacingUnit,
  palette: {
    mode: "light",
    primary: { main: "#759232" },
    secondary: { main: "#df6226" },
    error: { main: "#ff0000" },
    background: { default: "#f2f2f2", paper: "#ffffff" },
    text: { primary: "#000000", secondary: "#808080" },
    common: { black: "#000", white: "#fff" },
  },
  typography: {
    fontFamily: `'Roboto', 'Poppins', sans-serif`,
    fontSize: 16,
    h1: { fontSize: "2.25rem", letterSpacing: "1px" },
    h2: { fontSize: "2.25rem", letterSpacing: "1px" },
    h3: { fontSize: "1.5rem", letterSpacing: "0.7px" },
    h4: { fontSize: "1.25rem" },
    h5: { fontSize: "1.125rem" },
    h6: { fontSize: "1rem" },
    body1: { fontSize: "1rem" },
    body2: { fontSize: "0.875rem" },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 568,
      md: 768,
      lg: 992,
      xl: 1280,
    },
  },
  shadows: filledShadows as any,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
          scrollBehavior: "smooth",
          transition: "box-shadow 0.2s ease-in-out",
          WebkitTapHighlightColor: "transparent",
        },
        "*::-webkit-scrollbar": {
          width: "6px",
        },
        "*::-webkit-scrollbar-track": {
          boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "darkgrey",
        },
        a: {
          textDecoration: "none",
          color: "#000",
        },
        button: {
          backgroundColor: "transparent",
          color: "#000",
          border: "none",
          padding: "initial",
          borderRadius: 0,
          cursor: "pointer",
          "&:disabled": {
            cursor: "auto",
          },
        },
        ".layout-width": {
          width: "90%",
          maxWidth: "1200px",
          margin: "0 auto",
        },
        ".text-ellipsis": {
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
        },
        ".underline": {
          textDecoration: "underline",
        },
        ".reset-link": {
          textDecoration: "underline",
          color: "#007bff",
        },
        ".lowercase": {
          textTransform: "lowercase",
        },
        ".nowrap": {
          whiteSpace: "nowrap",
        },
        ".cover-image": {
          objectFit: "cover",
          objectPosition: "center",
        },
        ".hide": {
          visibility: "hidden",
        },
        ".border-none": {
          border: "none",
        },
        ".width-auto": {
          width: "auto",
        },
        ".flex-between": {
          display: "flex",
          justifyContent: "space-between",
          gap: `${spacingUnit * 3}px`,
        },
        ".justify-center": {
          justifyContent: "center",
        },
        ".align-center": {
          alignItems: "center",
        },
        ".flex-wrap": {
          flexWrap: "wrap",
        },
        ".bold": {
          fontWeight: "bold",
        },
        ".text-center": {
          textAlign: "center",
        },
        ".word-break": {
          wordBreak: "break-word",
        },
        ".Toastify__close-button--light": {
          color: "#000 !important",
          opacity: "1 !important",
          marginTop: `${spacingUnit * 2}px`,
          marginRight: `${spacingUnit}px`,
        },
        ".Toastify__close-button > svg": {
          height: `${spacingUnit * 5}px !important`,
          width: `${spacingUnit * 4}px !important`,
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          svg: {
            width: 24,
            height: "auto",
          },
          "&:hover": {
            opacity: 0.5,
          },
          "&:active": {
            opacity: 0.7,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontSize: "0.95rem",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "0.95rem",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "12px 16px",
          fontSize: "0.9rem",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          textarea: {
            fontSize: "0.95rem",
            lineHeight: 1.5,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
          fontSize: "0.95rem",
          padding: "8px 20px",
          lineHeight: 1.5,
          transition: "all 0.2s ease-in-out",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
            opacity: 0.9,
          },
          "&:active": {
            opacity: 0.85,
          },
          "&:disabled": {
            backgroundColor: "#e0e0e0",
            color: "#9e9e9e",
            cursor: "not-allowed",
          },
        },
        containedPrimary: {
          backgroundColor: "#1976d2",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#1565c0",
          },
        },
        outlinedPrimary: {
          borderColor: "#1976d2",
          color: "#1976d2",
          "&:hover": {
            backgroundColor: "rgba(25, 118, 210, 0.08)",
            borderColor: "#1565c0",
          },
        },
        textPrimary: {
          color: "#1976d2",
          "&:hover": {
            backgroundColor: "rgba(25, 118, 210, 0.08)",
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#1976d2",
          "&.Mui-checked": {
            color: "#1565c0",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginRight: "24px",
        },
        label: {
          fontSize: "0.9rem",
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
