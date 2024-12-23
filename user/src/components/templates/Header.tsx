'use client';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {
  Bars3Icon,
  RocketLaunchIcon,
  ScaleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Language, useLanguage } from 'src/hooks/useLanguage';

const URL = {
  home: '/home',
  product: '/product',
  wholesales: '/wholesales',
  salesChannel: '/partner/sales-channel',
  newProject: '/partner/new-project',
  events: '/event',
  contact: '/contact',
  aboutUs: '/about-us',
};

const partner = [
  {
    name: 'To develop sales channel',
    description: 'Give me some information for request a sample.',
    href: URL.salesChannel,
    icon: ScaleIcon,
  },
  {
    name: 'To develop new project',
    description:
      'Buy large quantities of products to get lower prices from manufacturers.',
    href: URL.newProject,
    icon: RocketLaunchIcon,
  },
];

export function Header() {
  const [isClient, setIsClient] = useState(false);
  // const { t } = useTranslation('common');t('yourCompany')}

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lang = useLanguage();
  const toggleLang = () => {
    if (lang === 'en') {
      Language.value = 'vi-VN';
    } else {
      Language.value = 'en';
    }
  };

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href={URL.home} className="-m-1.5 p-1.5">
            <span className="sr-only"> Your Company</span>
            <img
              alt=""
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href={URL.product}
            className="text-sm/6 font-semibold text-gray-900"
          >
            Product
          </Link>
          <Link
            href={URL.wholesales}
            className="text-sm/6 font-semibold text-gray-900"
          >
            Wholesales
          </Link>
          <DesktopPopover items={partner} label="Partner" />
          <Link
            href={URL.aboutUs}
            className="text-sm/6 font-semibold text-gray-900"
          >
            About us
          </Link>
          <Link
            href={URL.events}
            className="text-sm/6 font-semibold text-gray-900"
          >
            Events & news
          </Link>
          <Link
            href={URL.contact}
            className="text-sm/6 font-semibold text-gray-900"
          >
            Contact
          </Link>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {isClient && (
            <button onClick={toggleLang}>
              {lang === 'en' ? 'Tiếng Việt' : 'English'}
            </button>
          )}

          {/* <Link href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link> */}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/product"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Product
                </Link>
                <Link
                  href={URL.wholesales}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Wholesales
                </Link>
                <MobileDisclosure items={partner} label="Partner" />
                <Link
                  href={URL.aboutUs}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  About us
                </Link>
                <Link
                  href={URL.events}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </Link>
                <Link
                  href={URL.contact}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>
              <div className="py-6">
                <button onClick={toggleLang}>{lang}</button>
                {/* <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link> */}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

interface IDesktopPopoverProps {
  items: {
    name: string;
    description: string;
    href: string;
    icon: React.ElementType;
  }[];
  label: string;
}

const DesktopPopover = ({ items, label }: IDesktopPopoverProps) => {
  return (
    <Popover className="relative" as="div">
      {({ open }) => (
        <>
          <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
            {label}
            <ChevronDownIcon
              aria-hidden="true"
              className="size-5 flex-none text-gray-400"
            />
          </PopoverButton>

          <PopoverPanel
            transition
            className="data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition"
          >
            <div className="p-4">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                >
                  <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon
                      aria-hidden="true"
                      className="size-6 text-gray-600 group-hover:text-indigo-600"
                    />
                  </div>
                  <div className="flex-auto">
                    <Link
                      href={item.href}
                      className="block font-semibold text-gray-900"
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                    </Link>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
};

interface IMobileDisclosureProps {
  items: {
    name: string;
    description: string;
    href: string;
    icon: React.ElementType;
  }[];
  label: string;
}

const MobileDisclosure = ({ items, label }: IMobileDisclosureProps) => {
  return (
    <Disclosure as="div" className="-mx-3">
      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
        {label}
        <ChevronDownIcon
          aria-hidden="true"
          className="group-data-open:rotate-180 size-5 flex-none"
        />
      </DisclosureButton>
      <DisclosurePanel className="mt-2 space-y-2">
        {items.map((item) => (
          <DisclosureButton
            key={item.name}
            as={Link}
            href={item.href}
            className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
          >
            {item.name}
          </DisclosureButton>
        ))}
      </DisclosurePanel>
    </Disclosure>
  );
};
