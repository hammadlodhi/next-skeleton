// src/types/shared.ts

export interface Option {
  label: string;
  value: string | number;
  description?: string | { key: string; [key: string]: any };
}

export type OptionValue = Option["value"];
