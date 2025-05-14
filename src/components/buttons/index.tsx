'use client';

import { type Buttons } from '@/interfaces/buttons';
import { Spinner, Button as UiButton } from '@heroui/react';

export default function Button({ children, disabled, isLoading, spinnerClass, spinner, ...other }: Buttons.index) {
  return (
    <>
      <UiButton
        color={undefined as any}
        spinner={
          spinner ? (
            spinner
          ) : (
            <Spinner
              variant="spinner"
              size="sm"
              classNames={{
                wrapper: 'w-8 h-8',
                spinnerBars: '!bg-white-500',
                circle2: '!bg-white-500',
                circle1: '!bg-white-500',
                ...spinnerClass,
              }}
            />
          )
        }
        isDisabled={disabled || isLoading}
        isLoading={isLoading}
        {...other}
      >
        {children}
      </UiButton>
    </>
  );
}
