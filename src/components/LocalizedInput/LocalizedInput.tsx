import React, {FC, InputHTMLAttributes, ReactElement} from 'react';
import {IconButton} from '../IconButton/IconButton';
import {FormFieldContainer} from '../FormFieldContainer/FormFieldContainer';

export interface IProps
    extends Omit<FormField, 'fieldType'>,
        Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'size'> {
    icon?: ReactElement;
}

export const LocalizedInput: FC<IProps> = React.forwardRef<HTMLInputElement, IProps>(
    ({error, errorText, helpText, placeholder, isRequired, label, icon, size, className, ...props}, ref) => {
        return (
            <FormFieldContainer
                fieldType="localized-input"
                label={label}
                errorText={errorText}
                helpText={helpText}
                isRequired={isRequired}
                error={error}
                size={size}
                className={className}>
                <div className="form-field">
                    <input
                        ref={ref}
                        placeholder={placeholder}
                        min={props.type === 'number' ? '1' : undefined}
                        {...props}
                    />
                    {icon && <IconButton icon={icon} />}
                </div>
            </FormFieldContainer>
        );
    },
);
