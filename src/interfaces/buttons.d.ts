import { type ButtonProps, type SpinnerProps } from '@heroui/react';
import { type ButtonHTMLAttributes } from 'react';

declare namespace Buttons {
  type ButtonDefaultProps = ButtonHTMLAttributes<HTMLButtonElement> & Omit<ButtonProps, 'variant' | 'color' | 'size' | 'radius'>;
  interface index extends ButtonDefaultProps {
    disabled?: boolean;
    spinnerClass?: SpinnerProps['classNames'];
  }
}
