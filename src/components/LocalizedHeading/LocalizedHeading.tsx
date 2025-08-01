import React from "react";
import { Typography } from "@mui/material";
import { LocalizedText } from "../LocalizedText/LocalizedText";

interface Props extends LocalizedProps {
  heading?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

export const LocalizedHeading: React.FC<Props> = ({
  heading = "h3",
  className = "",
  ...props
}) => {
  return (
    <Typography
      variant={heading}
      className={className}
      component={heading}
      sx={{ textTransform: "inherit", letterSpacing: "inherit" }}
    >
      <LocalizedText {...props} />
    </Typography>
  );
};
