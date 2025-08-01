import React from "react";
import { Typography } from "@mui/material";
import { LocalizedText } from "../LocalizedText/LocalizedText";

interface Props extends LocalizedProps {
  htmlFor?: string;
  className?: string;
}

export const LocalizedLabel: React.FC<Props> = ({ htmlFor, className, ...props }) => {
  return (
    <Typography
      component="label"
      htmlFor={htmlFor}
      variant="body2"
      className={className}
      sx={{ display: "inline-block", fontWeight: 500 }}
    >
      <LocalizedText {...props} />
    </Typography>
  );
};
