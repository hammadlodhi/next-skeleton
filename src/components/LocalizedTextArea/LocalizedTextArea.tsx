import React, { forwardRef } from "react";
import { TextField, TextFieldProps } from "@mui/material";

type Props = Omit<FormField, "fieldType"> &
  Omit<TextFieldProps, "variant" | "size">;

export const LocalizedTextArea = forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      error,
      errorText = "This field is required",
      placeholder = "Enter text here",
      isRequired,
      label,
      size = "small",
      ...props
    },
    ref
  ) => {
    return (
      <TextField
        inputRef={ref}
        multiline
        minRows={4}
        label={label}
        placeholder={placeholder}
        error={!!error}
        helperText={error ? errorText : ""}
        required={isRequired}
        size={size as "small" | "medium"}
        fullWidth
        {...props}
      />
    );
  }
);
