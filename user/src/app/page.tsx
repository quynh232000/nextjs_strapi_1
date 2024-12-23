'use client';
import { CallToAction } from './home/components/CallToAction';
import { Faqs } from './home/components/Faqs';
import { Hero } from './home/components/Hero';
import { Pricing } from './home/components/Pricing';
import { PrimaryFeatures } from './home/components/PrimaryFeatures';
import { SecondaryFeatures } from './home/components/SecondaryFeatures';
import { Testimonials } from './home/components/Testimonials';

export default function Home() {
  return (
    // <CommonTemplate>
    <main>
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      <Testimonials />
      <Pricing />
      <Faqs />
    </main>
    // </CommonTemplate>
  );
}
