import React, { FC } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  SelectChangeEvent,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { Option, OptionValue } from '../../types/shared';

interface LocalizedSelectProps {
  label?: string;
  value?: OptionValue;
  onChange: (value: OptionValue) => void;
  options?: Option[];
  isRequired?: boolean;
  error?: boolean;
  errorText?: string;
  size?: 'small' | 'medium';
  placeholder?: string;
  className?: string;
}

export const LocalizedSelect: FC<LocalizedSelectProps> = ({
  label,
  value,
  onChange,
  options = [],
  isRequired,
  error,
  errorText,
  size = 'medium',
  placeholder = 'Select an option',
  className,
}) => {
  return (
    <FormControl fullWidth required={isRequired} error={error} size={size} className={className}>
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        value={value ?? ''}
        onChange={(e, child) => onChange((e.target as { value: OptionValue }).value)}
        displayEmpty
        label={label}
      >
        <MenuItem value="" disabled>
          {placeholder}
        </MenuItem>
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {error && errorText && <FormHelperText>{errorText}</FormHelperText>}
    </FormControl>
  );
};

interface ControlledSelectProps
  extends Omit<LocalizedSelectProps, 'value' | 'onChange'> {
  name: string;
}

export const ControlledSelect: FC<ControlledSelectProps> = ({
  name,
  isRequired,
  ...props
}) => {
  return (
    <Controller
      name={name}
      rules={{ required: isRequired }}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <LocalizedSelect
          value={value}
          onChange={onChange}
          error={!!error}
          errorText={error?.message}
          isRequired={isRequired}
          {...props}
        />
      )}
    />
  );
};
