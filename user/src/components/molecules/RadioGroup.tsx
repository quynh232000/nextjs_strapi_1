import { forwardRef, memo } from 'react';
import { Controller } from 'react-hook-form';
import { cn } from '@/utils/cn';

interface IRadioGroup<T = any> {
  className?: string;
  label?: string;
  control: T;
  value: string;
  name: string;
  options: { label: string; value: string }[];
}

export const RadioGroup = memo(
  forwardRef<HTMLInputElement, IRadioGroup>(
    ({ control, value, name, options, label, className }, ref) => {
      return (
        <div className={cn('space-y-2', className)}>
          {label && (
            <label className="block text-sm font-medium text-neutral-900">
              {label}
            </label>
          )}
          <div>
            {options.map((item) => (
              <Controller
                key={item.value}
                name={name}
                control={control}
                render={({ field }) => {
                  field.value = item.value;
                  return (
                    <input
                      checked={value === item.value}
                      type="radio"
                      {...field}
                      ref={ref}
                    />
                  );
                }}
              />
            ))}
          </div>
        </div>
      );
    },
  ),
);
