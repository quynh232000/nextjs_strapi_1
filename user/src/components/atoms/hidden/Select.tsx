import { ISelectProps } from '@/atoms/Field';
import { cn } from '@/utils/cn';
import { forwardRef, memo } from 'react';

export const Select = memo(
  forwardRef<HTMLSelectElement, ISelectProps>(
    ({ className, options, ...props }, ref) => {
      return (
        <select
          ref={ref}
          className={cn(
            `col-start-1 row-start-1 rounded-md border border-neutral-300 px-3 py-2 text-sm/6 text-neutral-900`,
            `focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500`,
            `focus-visible:outline-none`,
            className,
          )}
          {...props}
        >
          {options.map((itm) => (
            <option value={itm.value} key={itm.value}>
              {itm.label}
            </option>
          ))}
        </select>
      );
    },
  ),
);
