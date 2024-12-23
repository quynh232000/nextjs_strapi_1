import { NextLink } from '@/dp__atoms/link/link';
import { Container } from '@/templates/Container';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import { useHomeHero } from '../services/home-hero';

interface IHero {
  className?: string;
}

export function Hero({ className }: IHero) {
  const homeHero = useHomeHero();
  if (homeHero.isLoading) {
    return <p>Loading...</p>;
  }

  const homeHeroData = homeHero.data!;

  return (
    <Container className={cn('pb-16 pt-20 text-center', 'lg:pt-32', className)}>
      <h1
        className={cn(
          'mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900',
          'sm:text-7xl',
        )}
      >
        {homeHeroData.title}
      </h1>
      <p
        className={cn(
          'mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700',
        )}
      >
        {homeHeroData.subTitle}
      </p>
      <div className={cn('mt-10 flex justify-center gap-x-6')}>
        <NextLink href="/register" intent={'black'} rounded={'full'}>
          {homeHeroData.CTAButtonText}
        </NextLink>
      </div>
      <div className={cn('mt-36', 'lg:mt-44')}>
        <p className={cn('font-display text-base text-slate-900')}>
          {homeHeroData.partnersLabel}
        </p>
        <ul
          role="list"
          className={cn(
            'mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4',
          )}
        >
          {homeHeroData.partnersLogo?.map((logo) => (
            <li key={logo.url} className={cn('flex')}>
              <Image
                width={logo.width}
                height={logo.height}
                src={logo.url}
                alt={logo.url}
                unoptimized
              />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
