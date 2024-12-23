import { Field, ISelectProps } from '@/atoms/Field';
import { cn } from '@/utils/cn';
import { forwardRef, memo } from 'react';

interface ISelectField extends Omit<ISelectProps, 'ref'> {
  label?: string;
  className?: string;
  description?: string;
  error?: string;
  cornerHint?: string;
}
export const SelectField = memo(
  forwardRef<HTMLSelectElement, ISelectField>(
    ({ cornerHint, className, error, label, description, ...props }, ref) => {
      return (
        <Field className={cn('', className)}>
          {(label || cornerHint) && (
            <div className="flex justify-between">
              {label && <Field.Label>{label}</Field.Label>}
              {cornerHint && <Field.CornerHint>{cornerHint}</Field.CornerHint>}
            </div>
          )}
          <div className="mt-2 grid grid-cols-1">
            <Field.Select
              ref={ref}
              type="text"
              className="col-start-1 row-start-1"
              {...props}
            />
          </div>
          {description && (
            <Field.Description className="mt-1">
              {description}
            </Field.Description>
          )}
          {error && <Field.Error className="mt-1">{error}</Field.Error>}
        </Field>
      );
    },
  ),
);
