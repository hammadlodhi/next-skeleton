// components/LocalizedRadioButtons/LocalizedRadioButtons.tsx

import React, { FC } from "react";
import {
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import { LocalizedContent } from "../LocalizedContent/LocalizedContent";
import { LocalizedLabel } from "../LocalizedLabel/LocalizedLabel";
import { Option } from "../../types/shared";

interface LocalizedRadioButtonsProps {
  label?: string;
  name: string;
  value: string;
  options: Option[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  error?: boolean;
  errorText?: string;
}

export const LocalizedRadioButtons: FC<LocalizedRadioButtonsProps> = ({
  label,
  name,
  value,
  options,
  onChange,
  isRequired,
  error,
  errorText = "This field is required",
}) => {
  return (
    <FormControl component="fieldset" error={error} required={isRequired}>
      {label && <FormLabel component="legend"><LocalizedLabel t={label} /></FormLabel>}
      <RadioGroup name={name} value={value} onChange={onChange} row>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option.value}
            control={<Radio />}
            label={
              <div>
                <LocalizedLabel t={option.label} />
                {option.description && (
                  <div style={{ fontSize: 12, color: "#666" }}>
                    {typeof option.description === "string" ? (
                      <LocalizedContent t={option.description} />
                    ) : (
                      <LocalizedContent {...option.description} />
                    )}
                  </div>
                )}
              </div>
            }
          />
        ))}
      </RadioGroup>
      {error && <FormHelperText>{errorText}</FormHelperText>}
    </FormControl>
  );
};
