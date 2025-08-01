// FormFieldContainer/FormFieldContainer.tsx
import React, { FC, ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { LocalizedLabel } from "../LocalizedLabel/LocalizedLabel";
import { LocalizedText } from "../LocalizedText/LocalizedText";

interface FormFieldContainerProps extends FormField {
  children?: ReactNode;
  className?: string;
}

const StyledContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  "&.error .error-text": {
    color: theme.palette.error.main,
  },
  "& .help-text": {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.body2.fontSize,
    marginTop: theme.spacing(0.5),
  },
  "& .error-text": {
    fontSize: theme.typography.body2.fontSize,
    marginTop: theme.spacing(0.5),
  },
}));

export const FormFieldContainer: FC<FormFieldContainerProps> = ({
  fieldType,
  label,
  size = "medium",
  errorText,
  helpText,
  isRequired,
  error,
  className,
  children,
}) => {
  return (
    <StyledContainer
      className={`${className || ""} form-field-container ${fieldType || ""} ${size} ${
        isRequired ? "required" : ""
      } ${error ? "error" : ""}`}
    >
      {label && <LocalizedLabel label={label} />}
      {children}
      {error && errorText && (
        <LocalizedText className="error-text" text={errorText} />
      )}
      {!error && helpText && (
        <LocalizedText className="help-text" text={helpText} />
      )}
    </StyledContainer>
  );
};
