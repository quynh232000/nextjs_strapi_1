import { IFileUploadProps } from '@/atoms/Field';
import { PhotoIcon } from '@heroicons/react/16/solid';
import { forwardRef, memo } from 'react';

export const FileUpload = memo(
  forwardRef<HTMLInputElement, IFileUploadProps>(
    ({ className, ...props }, ref) => {
      return (
        <div className="flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            <PhotoIcon
              aria-hidden="true"
              className="mx-auto size-12 text-gray-300"
            />
            <div className="mt-4 flex text-sm/6 text-gray-600">
              <label className="focus-within:outline-hidden relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                <span>Upload a file</span>
                <input className="hidden" ref={ref} {...props} type="file" />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      );
    },
  ),
);
