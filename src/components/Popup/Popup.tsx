// components/Popup/Popup.tsx
"use client";

import React, { useRef } from "react";
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useKeyPress } from "<@>/hooks/useKeyPress";
import { useOnClickOutside } from "<@>/hooks/useOnClickOutside";
import { Backdrop } from "../Backdrop/Backdrop";

interface PopupProps {
  heading?: string;
  onClose?: () => void;
  theme?: "default" | "pointed" | "highlight";
  showCloseIcon?: boolean;
  className?: string;
  clickOutside?: boolean;
  children?: React.ReactNode;
}

export const Popup: React.FC<PopupProps> = ({
  heading,
  onClose = null,
  theme = "highlight",
  showCloseIcon = true,
  className,
  clickOutside = true,
  children,
}) => {
  const ref = useRef(null);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

  useKeyPress("Escape", onClose);
  useOnClickOutside(ref, () => {
    if (clickOutside && onClose) onClose();
  });

  return (
    <Backdrop active={true}>
      <Box
        sx={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100vw",
          height: isMobile ? "calc(100vh - 48px)" : "calc(100vh - 72px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: muiTheme.zIndex.modal,
        }}
      >
        <Box
          ref={ref}
          sx={{
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            maxWidth: "90%",
            maxHeight: "90%",
            width: "fit-content",
            borderRadius: muiTheme.spacing(2),
            backgroundColor: muiTheme.palette.background.paper,
            boxShadow: muiTheme.shadows[5],
            position: "relative",
            cursor: "auto",
            p: 4,
          }}
          className={className}
        >
          {heading && (
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
                textAlign: "center",
                letterSpacing: muiTheme.spacing(0.25),
                color: muiTheme.palette.text.primary,
                mb: isMobile ? 2.25 : 2,
                mt: isMobile ? 1.75 : 0,
                lineHeight: 1,
              }}
            >
              {heading}
            </Typography>
          )}

          {showCloseIcon && onClose && (
            <IconButton
              onClick={onClose}
              sx={{
                position: "absolute",
                top: muiTheme.spacing(3),
                right: muiTheme.spacing(4.5),
                "& svg": {
                  width: muiTheme.spacing(3),
                  height: muiTheme.spacing(3),
                  "& path": {
                    fill: muiTheme.palette.grey[600],
                  },
                },
              }}
            >
              <CancelIcon />
            </IconButton>
          )}

          {children}
        </Box>
      </Box>
    </Backdrop>
  );
};
