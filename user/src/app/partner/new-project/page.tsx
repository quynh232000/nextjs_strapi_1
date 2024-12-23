'use client';
import { FileUploadField } from 'src/components/molecules/FileUploadField';
import { InputField } from 'src/components/molecules/InputField';
import { TextAreaField } from 'src/components/molecules/TextAreaField';

export default function PartnerProject() {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1155/678 bg-linear-to-tr relative left-1/2 -z-10 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Mong muốn hợp tác của quý đối tác cho dự án mới
        </h2>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <TextAreaField
            rows={4}
            label="Nội dung mong muốn hợp tác"
            className="sm:col-span-2"
          />
          <FileUploadField
            label="Profile/Catalogue/Pitch Deck"
            className="col-span-2"
          />
          <InputField label="Công ty/Doanh nghiệp" className="sm:col-span-2" />
          <InputField label="Email" />
          <InputField label="Số điện thoại" />
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="shadow-xs block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}
