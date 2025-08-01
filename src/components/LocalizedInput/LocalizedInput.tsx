// fields/InputField.tsx
import React, { FC } from "react";
import { TextField } from "@mui/material";
import { FormFieldContainer } from "../FormFieldContainer/FormFieldContainer";

interface InputFieldProps extends FormField {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  name?: string;
}

export const InputField: FC<InputFieldProps> = ({
  value,
  onChange,
  type = "text",
  name,
  placeholder,
  ...rest
}) => {
  return (
    <FormFieldContainer {...rest}>
      <TextField
        fullWidth
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        variant="outlined"
        error={!!rest.error}
        size="small"
      />
    </FormFieldContainer>
  );
};
