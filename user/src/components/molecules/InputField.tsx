import { cn } from '@/utils/cn';
import { forwardRef, memo } from 'react';
import { Field, IInputProps } from '@/atoms/Field';

interface IInputField extends Omit<IInputProps, 'ref'> {
  label?: string;
  className?: string;
  description?: string;
  state?: IInputProps['state'];
  errorMessage?: string;
  cornerHint?: string;
}
export const InputField = memo(
  forwardRef<HTMLInputElement, IInputField>(
    (
      { cornerHint, className, errorMessage, label, description, ...props },
      ref,
    ) => {
      return (
        <Field className={cn('', className)}>
          {(label || cornerHint) && (
            <div className="flex justify-between">
              {label && <Field.Label>{label}</Field.Label>}
              {cornerHint && <Field.CornerHint>{cornerHint}</Field.CornerHint>}
            </div>
          )}
          <div className="mt-2 grid grid-cols-1">
            <Field.Input
              ref={ref}
              type="text"
              {...props}
              className="col-start-1 row-start-1"
            />
            {(props.state === 'error' || !!errorMessage) && (
              <Field.ErrorIcon
                aria-hidden="true"
                className="col-start-1 row-start-1 mr-3 self-center justify-self-end"
              />
            )}
          </div>
          {description && (
            <Field.Description className="mt-1">
              {description}
            </Field.Description>
          )}
          {errorMessage && (
            <Field.Error className="mt-1">{errorMessage}</Field.Error>
          )}
        </Field>
      );
    },
  ),
);
