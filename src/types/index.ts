import type React from 'react';

export type ReactNode = React.ReactNode;

export interface InputOption {
  label: string;
  value: string;
}

export interface FormField {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  type: 'text' | 'email' | 'password' | 'radio' | 'select' | 'textarea';
  value: string | number | boolean;
  error?: string;
  touched?: boolean;
  options?: InputOption[];
}

export interface ButtonProps {
  title: string;
  type?: 'submit' | 'button';
  variant?: 'primary' | 'secondary';
  handleClick?: () => void;
  isLoading: boolean;
}

export interface InputComponentProps {
  label?: string;
  type?: 'text' | 'email' | 'password' | 'radio' | 'select' | 'textarea';
  required?: boolean;
  name?: string;
  placeholder?: string;
  options?: InputOption[];
  value: string | number | boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  error?: string;
  touched?: boolean;
}

export interface HeadingComponentProps {
  heading: string;
  subheading: string;
}

export interface FormComponentProps {
  heading: string;
  subHeading: string;
  fields: FormField[];
  btnTitle: string;
  formik: any;
  isLoading: boolean;
}

export interface SignUpFormValues {
  full_name: string;
  phone_number: string;
  email: string;
  password: string;
  isAgency: string;
}

export interface SignInFormValues {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: SignUpFormValues | SignInFormValues | null;
  setUser: (user: SignUpFormValues | SignInFormValues | null) => void;
  logout: () => void;
}
