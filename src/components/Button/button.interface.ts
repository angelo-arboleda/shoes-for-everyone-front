import { ButtonHTMLAttributes, ReactNode } from "react";

export type variants = "text" | "contained" | "outlined";

export type sizes = "small" | "medium" | "large";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
  variant?: variants;
  size?: sizes;
}
