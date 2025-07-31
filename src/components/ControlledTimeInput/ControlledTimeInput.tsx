import React from 'react';
import {Controller} from 'react-hook-form';
import {FormFieldContainer} from '../FormFieldContainer/FormFieldContainer';
// @ts-ignore
import TimePicker from 'react-time-picker-input';
interface IProps extends Omit<FormField, 'fieldType'> {
    name: string;
}

export const ControlledTimeInput: React.FC<IProps> = ({name, isRequired, ...props}) => {
    return (
        <FormFieldContainer isRequired={isRequired} {...props} fieldType="time-input">
            <Controller
                name={name}
                rules={{required: isRequired}}
                render={({field: {onChange, value}}) => (
                    <div className="form-field">
                        <TimePicker onChange={(val: string) => onChange(val)} value={value} eachInputDropdown allowDelete />
                    </div>
                )}
            />
        </FormFieldContainer>
    );
};
