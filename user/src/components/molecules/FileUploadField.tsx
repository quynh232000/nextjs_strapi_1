import { cn } from '@/utils/cn';
import { forwardRef, memo } from 'react';
import { Field, IFileUploadProps } from '@/atoms/Field';

interface IFileUploadField extends Omit<IFileUploadProps, 'ref'> {
  label?: string;
  className?: string;
  description?: string;
  cornerHint?: string;
}
export const FileUploadField = memo(
  forwardRef<HTMLInputElement, IFileUploadField>(
    ({ cornerHint, className, label, description, ...props }, ref) => {
      return (
        <Field className={cn('space-y-2', className)}>
          {(label || cornerHint) && (
            <div className="flex justify-between">
              {label && <Field.Label>{label}</Field.Label>}
              {cornerHint && <Field.CornerHint>{cornerHint}</Field.CornerHint>}
            </div>
          )}
          <Field.FileUpload ref={ref} {...props} />
        </Field>
      );
    },
  ),
);
