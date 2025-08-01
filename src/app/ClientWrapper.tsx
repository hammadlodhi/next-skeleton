"use client";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import CssBaseline from "@mui/material/CssBaseline";
import { LoaderContainer } from "<@>/components/LoaderContainer/LoaderContainer";

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className="layout-content">{children}</main>
      <LoaderContainer />
    </ThemeProvider>
  );
}
