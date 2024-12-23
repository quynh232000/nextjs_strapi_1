import { cn } from '@/utils/cn';
import {
  Field as HeadlessuiField,
  FieldProps as HeadlessuiFieldProps,
  LabelProps as HeadlessuiLabelProps,
  Label,
} from '@headlessui/react';
import { ExclamationCircleIcon } from '@heroicons/react/16/solid';
import { forwardRef, HTMLProps, memo, SVGProps } from 'react';
import { FileUpload } from './hidden/FileUpload';
import { Input } from './hidden/Input';
import { TextArea } from './hidden/TextArea';
import { Select } from './hidden/Select';

interface IFieldProps extends HeadlessuiFieldProps {}
const Field = ({ className, ...props }: IFieldProps) => {
  return (
    <HeadlessuiField
      className={cn('text-sm/6 font-medium text-neutral-900', className)}
      {...props}
    />
  );
};

interface ICornerHintProps extends HTMLProps<HTMLSpanElement> {}
Field.CornerHint = memo(
  forwardRef<HTMLSpanElement, ICornerHintProps>(
    ({ className, ...restProps }, ref) => {
      return (
        <span
          ref={ref}
          className={cn('text-sm/6 text-neutral-500', className)}
          {...restProps}
        />
      );
    },
  ),
);

interface IDescriptionProps extends HTMLProps<HTMLParagraphElement> {}
Field.Description = memo(
  forwardRef<HTMLParagraphElement, IDescriptionProps>(
    ({ className, ...props }, ref) => {
      return (
        <p
          ref={ref}
          className={cn('text-sm text-neutral-500', className)}
          {...props}
        />
      );
    },
  ),
);

interface IErrorProps extends HTMLProps<HTMLParagraphElement> {}
Field.Error = memo(
  forwardRef<HTMLParagraphElement, IErrorProps>(
    ({ className, ...props }, ref) => {
      return (
        <p
          ref={ref}
          className={cn('text-sm text-error-600', className)}
          {...props}
        />
      );
    },
  ),
);

interface IErrorIconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {}
Field.ErrorIcon = memo(
  forwardRef<SVGSVGElement, IErrorIconProps>(({ className, ...props }, ref) => {
    return (
      <ExclamationCircleIcon
        ref={ref}
        aria-hidden="true"
        className={cn(
          'pointer-events-none size-5 text-error-500 sm:size-4',
          className,
        )}
        {...props}
      />
    );
  }),
);

interface ILabelProps extends HeadlessuiLabelProps {}
Field.Label = memo(
  forwardRef<HTMLLabelElement, ILabelProps>(({ className, ...props }, ref) => {
    return (
      <Label
        ref={ref}
        className={cn('text-sm/6 font-medium text-neutral-900', className)}
        {...props}
      />
    );
  }),
);

export interface IInputProps extends HTMLProps<HTMLInputElement> {
  state?: 'error' | 'default';
}

export interface ISelectProps extends HTMLProps<HTMLSelectElement> {
  options: { label: string; value: string }[];
}

export interface ITextAreaProps extends HTMLProps<HTMLTextAreaElement> {
  state?: 'error' | 'default';
}

export interface IFileUploadProps
  extends Omit<HTMLProps<HTMLInputElement>, 'type'> {}

Field.Input = Input;
Field.TextArea = TextArea;
Field.FileUpload = FileUpload;
Field.Select = Select;

export { Field };
