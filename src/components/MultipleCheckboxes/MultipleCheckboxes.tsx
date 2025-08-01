import React from "react";
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";
import { Option } from "../../types/shared";

interface MultipleCheckboxesProps {
  label?: string;
  name: string;
  values: string[];
  options: Option[];
  onChange: (val: string[]) => void;
  error?: boolean;
  errorText?: string;
  isRequired?: boolean;
}

export const MultipleCheckboxes: React.FC<MultipleCheckboxesProps> = ({
  label,
  name,
  values = [],
  options,
  onChange,
  error,
  errorText = "This field is required",
  isRequired,
}) => {
  const handleChange = (value: string) => {
    if (values.includes(value)) {
      onChange(values.filter((val) => val !== value));
    } else {
      onChange([...values, value]);
    }
  };

  return (
    <FormControl component="fieldset" error={!!error} required={isRequired} variant="standard">
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <FormGroup row sx={{ gap: 2 }}>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={values.includes(option.value as string)}
                onChange={() => handleChange(option.value as string)}
                name={name}
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>
      {error && <FormHelperText>{errorText}</FormHelperText>}
    </FormControl>
  );
};
