'use client';
// import { Container } from '@/dp__templates/Container';
import { cn } from '@/utils/cn';
import React, { useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import { FormContact, useContact } from './services';
import Image from 'next/image';
import { Container } from '@/templates/Container';
const questions = [
  {
    id: 1,
    question: 'What is Material Tailwind?',
    asnwer:
      'Material Tailwind is a fully coded UI tool kit built on top of Tailwind CSS. It is ',
  },
  {
    id: 2,
    question: 'What is Material Tailwind?',
    asnwer:
      'Material Tailwind is a fully coded UI tool kit built on top of Tailwind CSS. It is ',
  },
  {
    id: 3,
    question: 'What is Material Tailwind?',
    asnwer:
      'Material Tailwind is a fully coded UI tool kit built on top of Tailwind CSS. It is ',
  },
  {
    id: 4,
    question: 'What is Material Tailwind?',
    asnwer:
      'Material Tailwind is a fully coded UI tool kit built on top of Tailwind CSS. It is ',
  },
];

export default function ContactPage() {
  const [isFocused, setIsFocused] = React.useState(false);
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);
  const Contact = useContact();
  const [dataContact, setDataContact] = useState<FormContact>({
    fullName: '',
    email: '',
    message: '',
  });

  if (Contact.isLoading) {
    return <div className={cn('mt-5 flex justify-center')}>Loading...</div>;
  }
  const data = Contact.data!;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(dataContact);
    alert('Send data');
  };

  return (
    <Container>
      <div>
        <section className={cn('mx-auto px-6 py-20')}>
          <div>
            <div className={cn('pb-10 text-center')}>
              <h1 className={cn('mb-5 text-5xl font-bold')}>{data.title}</h1>
              <p
                className={cn(
                  'mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700',
                )}
              >
                {data.description}
              </p>
            </div>

            <div
              className={cn(
                'mt-10 grid grid-cols-1 gap-12',
                'md:grid-cols-2 lg:grid-cols-3',
              )}
            >
              {data.contactTypeSection.map((item) => {
                return (
                  <div
                    className={cn(
                      'flex flex-col items-center justify-center text-center',
                    )}
                    key={item.title}
                  >
                    <div
                      className={cn(
                        'rounded-full bg-blue-100/80 p-3 text-blue-500',
                      )}
                    >
                      <Image
                        className="rounded-full object-cover"
                        src={item.icon.url}
                        alt=""
                        width={34}
                        height={34}
                      />
                    </div>
                    <h2
                      className={cn('mt-4 text-lg font-medium text-gray-800')}
                    >
                      {item.title}
                    </h2>
                    <p className={cn('mt-2 text-gray-500')}>{item.subTitle}</p>
                    <p className={cn('mt-2 text-blue-500')}>{item.content}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className={cn('pb-20')}>
          <div className={cn('mt-20 text-center')}>
            <h1 className={cn('mb-5 text-5xl font-bold')}>
              {data.questionSection.title}
            </h1>
            <p
              className={cn(
                'mx-auto mt-6 max-w-2xl pb-12 text-lg tracking-tight text-slate-700',
              )}
            >
              {data.questionSection.description}
            </p>
          </div>
          <div
            className={cn('overflow-hidden rounded-lg border border-gray-100')}
          >
            <div
              className={cn(
                'border-b-2 border-gray-100 p-5 px-8 text-xl font-bold',
              )}
            >
              {data.questionSection.subtitle}
            </div>
            {data.questionSection.questions.map((item, index) => {
              return (
                <Accordion
                  placeholder=""
                  className={cn('mx-auto border-b border-gray-100 px-8 py-5')}
                  open={open === index}
                  icon={<Icon id={index} open={open} />}
                  key={JSON.stringify(item)}
                >
                  <AccordionHeader
                    placeholder=""
                    className={cn(
                      'rounded-md text-base text-gray-700',
                      isFocused ? 'bg-primary-50' : '',
                    )}
                    onClick={() => handleOpen(index)}
                  >
                    <div>{item.question}</div>
                  </AccordionHeader>
                  <AccordionBody className={cn('py-2 text-gray-900')}>
                    {item.awnser}
                  </AccordionBody>
                </Accordion>
              );
            })}
          </div>
        </section>

        <section>
          <div className={cn('mt-20 text-center')}>
            <h1 className={cn('mb-5 text-5xl font-bold')}>
              {data.messegeSection.title}
            </h1>
            <p
              className={cn(
                'mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700',
              )}
            >
              {data.messegeSection.description}
            </p>
          </div>
          <div className={cn('mx-auto grid grid-cols-2 gap-10 py-12')}>
            <div>
              <div
                className={cn(
                  'mx-auto w-full overflow-hidden rounded-lg bg-white px-8 py-10 shadow-2xl shadow-gray-300/50',
                  'lg:max-w-xl',
                )}
              >
                <h1 className={cn('text-lg font-medium text-gray-700')}>
                  {data.messegeSection.form.title}
                </h1>

                <form onSubmit={handleSubmit} className={cn('mt-6')}>
                  <div className={cn('flex-1')}>
                    <label className={cn('mb-2 block text-sm text-gray-600')}>
                      {data.messegeSection.form.fullName}
                    </label>
                    <input
                      type="text"
                      value={dataContact.fullName}
                      onChange={(e) =>
                        setDataContact({
                          ...dataContact,
                          fullName: e.target.value,
                        })
                      }
                      placeholder="John Doe"
                      className={cn(
                        'mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0',
                      )}
                    />
                  </div>

                  <div className={cn('mt-6 flex-1')}>
                    <label className={cn('mb-2 block text-sm text-gray-600')}>
                      {data.messegeSection.form.email}
                    </label>
                    <input
                      type="email"
                      value={dataContact.email}
                      onChange={(e) =>
                        setDataContact({
                          ...dataContact,
                          email: e.target.value,
                        })
                      }
                      placeholder="johndoe@example.com"
                      className={cn(
                        'mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0',
                      )}
                    />
                  </div>

                  <div className={cn('mt-6 w-full')}>
                    <label className={cn('mb-2 block text-sm text-gray-600')}>
                      {data.messegeSection.form.message}
                    </label>
                    <textarea
                      value={dataContact.message}
                      onChange={(e) =>
                        setDataContact({
                          ...dataContact,
                          message: e.target.value,
                        })
                      }
                      className={cn(
                        'mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0 md:h-48',
                      )}
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={cn(
                      'mt-6 w-full transform rounded-full bg-blue-500 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400',
                    )}
                  >
                    {data.messegeSection.form.send}
                  </button>
                </form>
              </div>
            </div>
            <img
              className={cn('rounded-xl')}
              src="https://kenh14cdn.com/thumb_w/600/NlIG75kVAccccccccccccghA0d7ZgY/Image/2014/03/ksh/Moi-Truong-(2)-32f10.jpg"
              alt=""
            />
          </div>
        </section>
      </div>
    </Container>
  );
}

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

// interface IFormInput extends HTMLProps<HTMLInputElement> {
//   label: string;
//   classNameNameNameName?: string;
// }

// export const FormInput = ({ classNameNameNameName, label, ...props }: IFormInput) => {
//   return <label classNameNameNameName={classNameNameNameName}>
//     {label &&
//       <span>
//         {label}
//       </span>
//     }
//     <input type='text'
//       classNameNameNameName={cn(
//         'block w-full rounded-md bg-white px-3.5 py-2 mt-2.5',
//         'text-base text-gray-900',
//         'outline-1 -outline-offset-1 outline-gray-300',
//         'placeholder:text-gray-400',
//         'focus:outline focus:outline-2 focus:-outline-offset-2 focus:primary-600',
//       )}
//       {...props}
//     />
//   </label>
// }

// interface IFormArea extends HTMLProps<HTMLTextAreaElement> {
//   label?: string;
//   classNameNameNameName?: string;
// }

// export const FormArea = ({ classNameNameNameName, label, ...props }: IFormArea) => {
//   return <label classNameNameNameName={classNameNameNameName}>
//     {label &&
//       <span>
//         {label}
//       </span>
//     }
//     <textarea type='text'
//       classNameNameNameName={cn('block w-full mt-2.5 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:primary-600')}
//       {...props}
//     />
//   </label>
// }

{
  /* <FormInput label='Email' classNameNameNameName={cn('sm:col-span-2')} />
<FormArea rows={4} label='Message' classNameNameNameName={cn('sm:col-span-2')} /> */
}
