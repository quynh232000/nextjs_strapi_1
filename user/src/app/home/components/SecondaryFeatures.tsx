'use client';
import { Container } from '@/templates/Container';
import { cn } from '@/utils/cn';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import Image, { type ImageProps } from 'next/image';
import { ReactNode } from 'react';
import { useHomeSecondaryFeatures } from '../services/home-secondary-feature';
import { useMedia } from 'src/hooks/useMedia';

interface Feature {
  name: React.ReactNode;
  summary: string;
  description: string;
  image: ImageProps['src'];
  icon: ReactNode;
}

function Feature({
  feature,
  isActive,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  feature: Feature;
  isActive: boolean;
}) {
  return (
    <div
      className={cn(className, { 'opacity-75 hover:opacity-100': !isActive })}
      {...props}
    >
      <div
        className={cn('w-9 rounded-lg bg-slate-500', {
          'bg-primary-600': isActive,
        })}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          {feature.icon}
        </svg>
      </div>
      <h3
        className={cn('mt-6 text-sm font-medium text-slate-600', {
          'text-primary-600': isActive,
        })}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  );
}

function FeaturesMobile() {
  const homeSecondaryFeaturesQuery = useHomeSecondaryFeatures();
  if (homeSecondaryFeaturesQuery.isLoading) {
    return <p>Loading...</p>;
  }

  if (homeSecondaryFeaturesQuery.isError) {
    return null;
  }
  const homeSecondaryFeaturesData = homeSecondaryFeaturesQuery.data!;
  return (
    <div
      className={cn(
        '-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4',
        'sm:-mx-6 sm:px-6',
        'lg:hidden',
      )}
    >
      {homeSecondaryFeaturesData.features.map((feature) => (
        <div key={feature.summary}>
          <Feature
            feature={{
              name: feature.name,
              summary: feature.summary,
              description: feature.description,
              image: feature.image.url,
              icon: <ContactsIcon />,
            }}
            className="mx-auto max-w-2xl"
            isActive
          />
          <div className="relative mt-10 pb-10">
            <div
              className={cn(
                'absolute -inset-x-4 bottom-0 top-8 bg-slate-200',
                'sm:-inset-x-6',
              )}
            />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="w-full"
                src={feature.image.url}
                width={feature.image.width}
                height={feature.image.height}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function FeaturesDesktop() {
  const homeSecondaryFeaturesQuery = useHomeSecondaryFeatures();
  if (homeSecondaryFeaturesQuery.isLoading) {
    return <p>Loading...</p>;
  }

  if (homeSecondaryFeaturesQuery.isError) {
    return null;
  }

  const homeSecondaryFeaturesData = homeSecondaryFeaturesQuery.data!;
  return (
    <TabGroup className={cn('hidden', 'lg:mt-20 lg:block')}>
      {({ selectedIndex }) => (
        <>
          <TabList className="grid grid-cols-3 gap-x-8">
            {homeSecondaryFeaturesData.features.map((feature, featureIndex) => (
              <Feature
                key={feature.summary}
                feature={{
                  name: (
                    <Tab className="ui-not-focus-visible:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                  summary: feature.summary,
                  description: feature.description,
                  image: feature.image.url,
                  icon: <ContactsIcon />,
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </TabList>
          <TabPanels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {homeSecondaryFeaturesData.features.map(
                (feature, featureIndex) => (
                  <TabPanel
                    static
                    key={feature.summary}
                    className={cn(
                      'px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none',
                      { 'opacity-60': featureIndex !== selectedIndex },
                    )}
                    style={{
                      transform: `translateX(-${selectedIndex * 100}%)`,
                    }}
                    aria-hidden={featureIndex !== selectedIndex}
                  >
                    <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                      <Image
                        className="w-full"
                        src={feature.image.url}
                        width={feature.image.width}
                        height={feature.image.height}
                        alt=""
                        sizes="52.75rem"
                      />
                    </div>
                  </TabPanel>
                ),
              )}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </TabPanels>
        </>
      )}
    </TabGroup>
  );
}

export function SecondaryFeatures() {
  const homeSecondaryFeaturesQuery = useHomeSecondaryFeatures();
  if (homeSecondaryFeaturesQuery.isLoading) {
    return <p>Loading...</p>;
  }

  if (homeSecondaryFeaturesQuery.isError) {
    return null;
  }

  const homeSecondaryFeaturesData = homeSecondaryFeaturesQuery.data!;

  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className={cn('pb-14 pt-20', 'sm:pb-20 sm:pt-32', 'lg:pb-32')}
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            className={cn(
              'font-display text-3xl tracking-tight text-slate-900',
              'sm:text-4xl',
            )}
          >
            {homeSecondaryFeaturesData.title}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            {homeSecondaryFeaturesData.description}
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  );
}

function ContactsIcon() {
  return (
    <>
      <path
        opacity=".5"
        d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
        fill="#fff"
      />
      <path
        d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
        fill="#fff"
      />
    </>
  );
}
