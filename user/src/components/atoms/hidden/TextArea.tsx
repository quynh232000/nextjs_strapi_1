import { ITextAreaProps } from '@/atoms/Field';
import { cn } from '@/utils/cn';
import { forwardRef, memo } from 'react';

export const TextArea = memo(
  forwardRef<HTMLTextAreaElement, ITextAreaProps>(
    ({ className, state = 'default', ...props }, ref) => {
      return (
        <textarea
          ref={ref}
          className={cn(
            `col-start-1 row-start-1 rounded-md border border-neutral-300 px-3 py-2 text-sm/6 text-neutral-900`,
            `focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500`,
            `focus-visible:outline-none`,
            {
              'border-error-300 text-error-900 focus:border-error-300 focus:ring-error-500':
                state === 'error',
            },
            className,
          )}
          {...props}
        />
      );
    },
  ),
);
