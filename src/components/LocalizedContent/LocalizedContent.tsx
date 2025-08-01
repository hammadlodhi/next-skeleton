import React from "react";
import { Typography } from "@mui/material";
import { LocalizedText } from "../LocalizedText/LocalizedText";

interface Props extends LocalizedProps {
  className?: string;
}

export const LocalizedContent: React.FC<Props> = ({ className, ...props }) => {
  return (
    <Typography className={className} variant="body1" component="p">
      <LocalizedText {...props} />
    </Typography>
  );
};
