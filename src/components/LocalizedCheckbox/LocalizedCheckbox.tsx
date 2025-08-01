// fields/CheckboxField.tsx
import React, { FC } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import { FormFieldContainer } from "../FormFieldContainer/FormFieldContainer";

interface CheckboxFieldProps extends FormField {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

export const CheckboxField: FC<CheckboxFieldProps> = ({
  checked,
  onChange,
  label,
  name,
  error,
  errorText,
  ...rest
}) => {
  return (
    <FormFieldContainer {...rest}>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={onChange}
              name={name}
              color="primary"
            />
          }
          label={label}
        />
        {error && errorText && (
          <FormHelperText error>{errorText}</FormHelperText>
        )}
      </FormGroup>
    </FormFieldContainer>
  );
};
