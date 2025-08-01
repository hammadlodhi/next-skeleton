"use client";

import React from "react";
import { Box, useTheme } from "@mui/material";
import { Puff } from "react-loader-spinner";
import { Backdrop } from "../Backdrop/Backdrop";

export const Loader: React.FC = () => {
  const theme = useTheme();

  return (
    <Backdrop active={true}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& svg": {
            fill: theme.palette.primary.main,
          },
        }}
      >
        <Puff height={60} width={60} />
      </Box>
    </Backdrop>
  );
};
