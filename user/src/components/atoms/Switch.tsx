'use client';
import { cn } from '@/utils/cn';
import {
  Switch as HeadlessuiSwitch,
  SwitchProps as HeadlessuiSwitchProps,
} from '@headlessui/react';
import { forwardRef, memo } from 'react';

export interface ISwitchProps extends HeadlessuiSwitchProps {
  label: string;
  labelPlacement?: 'start' | 'end';
}
export const Switch = memo(
  forwardRef<HTMLButtonElement, ISwitchProps>(
    ({ className, label, labelPlacement = 'start', ...props }, ref) => {
      return (
        <label
          className={cn(
            'flex items-baseline gap-x-2',
            { 'flex-row-reverse justify-end': labelPlacement === 'end' },
            className,
          )}
        >
          <span className="text-sm/6 font-medium text-neutral-900">
            {label}
          </span>
          <HeadlessuiSwitch
            ref={ref}
            className={
              'group inline-flex h-6 w-11 items-center rounded-full bg-neutral-200 transition data-[checked]:bg-primary-600'
            }
            {...props}
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
          </HeadlessuiSwitch>
        </label>
      );
    },
  ),
);
