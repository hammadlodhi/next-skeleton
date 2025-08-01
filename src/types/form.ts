// types/form.ts
export interface FormField {
  label?: string;
  helpText?: string;
  errorText?: string;
  error?: boolean;
  isRequired?: boolean;
  fieldType?: string;
  size?: "small" | "medium" | "large";
}
