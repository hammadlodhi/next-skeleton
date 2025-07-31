import classNames from 'classnames';
import React, {FC, ReactNode} from 'react';
import { LocalizedLabel } from '../LocalizedLabel/LocalizedLabel';
import { LocalizedText } from '../LocalizedText/LocalizedText';

interface FormFieldContainerProps extends FormField {
  children?: ReactNode;
}

export const FormFieldContainer: FC<FormFieldContainerProps> = ({
    fieldType,
    label,
    size = 'medium',
    errorText,
    helpText,
    isRequired,
    error,
    className,
    children,
}) => {
    return (
        <div className={classNames('form-field-container', fieldType, className, size, {required: isRequired, error})}>
            {label && <LocalizedLabel  label={label} />}
            {children}
            {error && errorText && <LocalizedText className="error-text txt-red" text={errorText} />}
            {!error && helpText && <LocalizedText className="help-text txt-black" text={helpText} />}
        </div>
    );
};
