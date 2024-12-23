import { Field, ITextAreaProps } from '@/atoms/Field';
import { cn } from '@/utils/cn';
import { forwardRef, memo } from 'react';

interface ITextAreaField extends Omit<ITextAreaProps, 'ref'> {
  label: string;
  className?: string;
  description?: string;
  state?: ITextAreaProps['state'];
  errorMessage?: string;
  cornerHint?: string;
}

export const TextAreaField = memo(
  forwardRef<HTMLTextAreaElement, ITextAreaField>(
    (
      { cornerHint, className, errorMessage, label, description, ...props },
      ref,
    ) => {
      return (
        <Field className={cn('', className)}>
          <div className="flex justify-between">
            <Field.Label>{label}</Field.Label>
            {cornerHint && <Field.CornerHint>{cornerHint}</Field.CornerHint>}
          </div>
          <div className="mt-2 grid grid-cols-1">
            <Field.TextArea
              ref={ref}
              {...props}
              className="col-start-1 row-start-1"
            />
            {(props.state === 'error' || !!errorMessage) && (
              <Field.ErrorIcon
                aria-hidden="true"
                className="col-start-1 row-start-1 mb-3 mr-3 self-end justify-self-end"
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
