'use client';
import { useAboutUs } from './services';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import { Container } from '@/templates/Container';

export default function AboutUs() {
  const AboutUs = useAboutUs();
  if (AboutUs.isLoading) {
    return <div className={cn('mt-5 flex justify-center')}>Loading...</div>;
  }
  const data = AboutUs.data!;

  return (
    <div>
      <Container>
        <div className={cn('flex flex-col gap-20 py-20')}>
          <section>
            <div className={cn('text-center')}>
              <h2
                className={cn(
                  'font-display text-3xl tracking-tight text-slate-900',
                  'sm:text-4xl',
                )}
              >
                {data.title}
              </h2>
              <p className={cn('mt-4 text-lg tracking-tight text-slate-700')}>
                {data.description}
              </p>
            </div>
            <div className={cn('counter mt-16')}>
              <div
                className={cn(
                  'mx-0 flex justify-between rounded-[20px] bg-white px-10 shadow-lg',
                  'lg:py-10',
                )}
              >
                {data.commitmentSection.items.map((item) => {
                  return (
                    <div
                      className={cn(
                        'border-border flex flex-col items-center gap-4 px-10 py-10 text-center',
                        'sm:col-6 lg:col-3 lg:border-r lg:py-0',
                      )}
                      key={item.title}
                    >
                      <Image
                        src={item.icon.url}
                        alt=""
                        width={50}
                        height={50}
                        unoptimized
                      />
                      <p>{item.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <section>
            <div>
              <h2
                className={cn(
                  'mb-6 text-center font-display text-3xl tracking-tight text-slate-900',
                  'sm:text-4xl',
                )}
              >
                {data.developmentSection.title}
              </h2>
              <div className={cn('grid grid-cols-2 gap-8')}>
                <div className={cn('flex flex-col gap-8', 'md:col-6')}>
                  <div className={cn('relative')}>
                    <Image
                      className={cn('w-full object-cover')}
                      src={data.developmentSection.images[0]?.url}
                      alt=""
                      width={480}
                      height={328}
                      unoptimized
                    />
                  </div>
                  <div className={cn('relative')}>
                    <Image
                      className={cn('w-full object-cover')}
                      src={data.developmentSection.images[1]?.url}
                      alt=""
                      width={480}
                      height={328}
                      unoptimized
                    />
                    <Image
                      className={cn('absolute -bottom-5 -left-5 -z-[1]')}
                      src={
                        'https://themewagon.github.io/pinwheel/images/shape-2.svg'
                      }
                      width={'50'}
                      height={'50'}
                      alt=""
                      unoptimized
                    />
                  </div>
                </div>
                <div className={cn('flex items-center', 'md:col-6')}>
                  <div className={cn('relative h-full w-full rounded-lg')}>
                    <Image
                      className={cn('w-full rounded-[30px] object-cover')}
                      src={data.developmentSection.images[2]?.url}
                      alt=""
                      fill
                      unoptimized
                    />
                    <Image
                      className={cn(
                        'absolute -bottom-4 -right-5 -z-[1] h-16 w-16',
                      )}
                      src={
                        'https://themewagon.github.io/pinwheel/images/shape-2.svg'
                      }
                      width={'50'}
                      height={'50'}
                      alt=""
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div>
              <h2
                className={cn(
                  'mb-6 text-center font-display text-3xl tracking-tight text-slate-900',
                  'sm:text-4xl',
                )}
              >
                {data.missionSection.title}
              </h2>
              <div className={cn('mt-8 flex gap-10')}>
                {data.missionSection.items.map((item) => {
                  return (
                    <div
                      className={cn('sm:col-6 lg:col-4', 'mb-8 h-full flex-1')}
                      key={item.index}
                    >
                      <div
                        className={cn(
                          'h-full rounded-xl bg-white p-6 shadow-lg',
                          'lg:p-8',
                        )}
                      >
                        <span
                          className={cn(
                            'left-0 top-0 flex h-[88px] w-[88px] items-center justify-center rounded-full bg-primary-100 p-4 text-center text-5xl font-bold text-primary-600',
                          )}
                        >
                          {item.index}
                        </span>
                        <h4
                          className={cn('mb-4 mt-10 font-bold text-slate-900')}
                        >
                          {item.title}
                        </h4>
                        <div className={cn('min-h-[80px]')}>
                          {item.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section>
            <div>
              <h2
                className={cn(
                  'mb-6 text-center font-display text-3xl tracking-tight text-slate-900',
                  'sm:text-4xl',
                )}
              >
                {data.valueSection.title}
              </h2>
              <div className={cn('grid grid-cols-2 gap-10')}>
                <img
                  src={data.valueSection.image.url}
                  alt=""
                  className={cn('h-auto w-full rounded-[30px] object-cover')}
                />
                <div className={cn('flex flex-col justify-around')}>
                  {data.valueSection.items.map((item) => {
                    return (
                      <div className={cn('flex gap-4')} key={item.title}>
                        <div>
                          <Image
                            src={item.icon.url}
                            width={50}
                            height={50}
                            className={cn('object-cover')}
                            alt=""
                            unoptimized
                          />
                        </div>
                        <div className={cn('flex flex-1 flex-col gap-2')}>
                          <h3 className={cn('font-bold')}>{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
