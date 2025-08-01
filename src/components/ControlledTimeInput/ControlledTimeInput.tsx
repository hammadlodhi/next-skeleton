import React from 'react';
import { Controller } from 'react-hook-form';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { FormFieldContainer } from '../FormFieldContainer/FormFieldContainer';

interface IProps extends Omit<FormField, 'fieldType'> {
  name: string;
}

export const ControlledTimeInput: React.FC<IProps> = ({ name, isRequired, ...props }) => {
  return (
    <FormFieldContainer isRequired={isRequired} {...props} fieldType="time-input">
      <Controller
        name={name}
        rules={{ required: isRequired }}
        render={({ field: { onChange, value } }) => (
          <TimePicker
            label={props.label}
            value={value || null}
            onChange={onChange}
            slotProps={{
              textField: {
                fullWidth: true,
                size: 'small',
              },
            }}
          />
        )}
      />
    </FormFieldContainer>
  );
};
