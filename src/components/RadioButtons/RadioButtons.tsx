import React, {FC, InputHTMLAttributes} from 'react';
import {uuid} from 'uuidv4';
import {FormFieldContainer} from '../FormFieldContainer/FormFieldContainer';
import classNames from 'classnames';
import { LocalizedLabel } from '../LocalizedLabel/LocalizedLabel';
import { LocalizedContent } from '../LocalizedContent/LocalizedContent';

export interface IProps
    extends Omit<FormField, 'fieldType'>,
        Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'size'> {
    options: Option[];
    optionClass?: string;
}

export const LocalizedRadioButtons: FC<IProps> = React.forwardRef<HTMLInputElement, IProps>(
    ({options, label, size, className, optionClass, ...props}, ref) => {
        const id = uuid();
        return (
            <FormFieldContainer className={className} fieldType="radio-buttons" label={label} size={size}>
                <div className="form-field grid responsive">
                    {options.map((option, i) => (
                        <div key={i} className={classNames('radio-buttons__option', optionClass)}>
                            <input id={id} ref={ref} type="radio" value={option.value} {...props} />
                            <div className="radio-buttons__option-details">
                                <LocalizedLabel htmlFor={id} t={option.label} />
                                {option.description &&
                                    (typeof option.description == 'string' ? (
                                        <LocalizedContent t={option.description} />
                                    ) : (
                                        <LocalizedContent {...option.description} />
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </FormFieldContainer>
        );
    },
);
