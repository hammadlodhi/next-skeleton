import React, { FC, ReactNode } from "react";
import { Button, ButtonProps, useTheme } from "@mui/material";
import { LocalizedText } from "../LocalizedText/LocalizedText";

interface ILocalizedButton extends ButtonProps, LocalizedProps {
  variantType?: "hollow" | "filled" | "danger";
  sizeType?: "small" | "medium" | "large";
  icon?: ReactNode;
}

export const LocalizedButton: FC<ILocalizedButton> = ({
  variantType = "filled",
  sizeType = "medium",
  icon,
  className,
  disabled,
  ...props
}) => {
  const theme = useTheme();

  const getVariantStyles = () => {
    switch (variantType) {
      case "hollow":
        return {
          color: theme.palette.primary.main,
          backgroundColor: "transparent",
          border: `1px solid ${theme.palette.primary.main}`,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        };
      case "danger":
        return {
          color: theme.palette.error.main,
          backgroundColor: "transparent",
          border: `1px solid ${theme.palette.divider}`,
          "&:hover": {
            backgroundColor: theme.palette.error.light,
          },
        };
      case "filled":
      default:
        return {
          color: "#fff",
          backgroundColor: theme.palette.primary.main,
          border: `1px solid ${theme.palette.primary.main}`,
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
        };
    }
  };

  const getSizeStyles = () => {
    switch (sizeType) {
      case "small":
        return {
          borderRadius: 6,
          padding: "6px 12px",
          minWidth: 88,
        };
      case "large":
        return {
          borderRadius: 8,
          padding: "12px 20px",
          minWidth: 200,
        };
      case "medium":
      default:
        return {
          borderRadius: 8,
          padding: "10px 16px",
          minWidth: 140,
        };
    }
  };

  return (
    <Button
      className={className}
      startIcon={icon}
      disabled={disabled}
      sx={{
        textTransform: "none",
        gap: icon ? 1.5 : undefined,
        ...getVariantStyles(),
        ...getSizeStyles(),
        "& svg path": {
          fill: variantType === "filled" ? "#fff" : "currentColor",
        },
      }}
      {...props}
    >
      <LocalizedText {...props} />
    </Button>
  );
};
