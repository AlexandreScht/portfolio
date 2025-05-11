'use client';

import { type Buttons } from '@/interfaces/buttons';
import { Spinner, Button as UiButton } from '@heroui/react';

export default function Button({ children, disabled, isLoading, spinnerClass, spinner, ...other }: Buttons.index) {
  return (
    <UiButton
      color={undefined as any}
      spinner={spinner ? spinner : <Spinner classNames={spinnerClass} variant="spinner" />}
      isDisabled={disabled || isLoading}
      isLoading={isLoading}
      {...other}
    >
      {children}
    </UiButton>
  );
}
