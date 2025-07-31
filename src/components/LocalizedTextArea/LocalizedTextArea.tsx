import React, { FC, TextareaHTMLAttributes } from "react";
import { FormFieldContainer } from "../FormFieldContainer/FormFieldContainer";

type Props = Omit<FormField, "fieldType"> &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className">;

export const LocalizedTextArea: FC<Props> = React.forwardRef<
  HTMLTextAreaElement,
  Props
>(
  (
    {
      error,
      errorText = "This field is required",
      placeholder = "Enter text here",
      isRequired,
      label,
      size,
      ...props
    },
    ref
  ) => {
    return (
      <FormFieldContainer
        fieldType="localized-textarea"
        label={label}
        errorText={errorText}
        isRequired={isRequired}
        error={error}
        size={size}
      >
        <div className="form-field">
          <textarea ref={ref} placeholder={placeholder} {...props} />
        </div>
      </FormFieldContainer>
    );
  }
);
