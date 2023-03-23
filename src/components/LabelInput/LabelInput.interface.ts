import { InputHTMLAttributes } from "react";

export interface LabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}
