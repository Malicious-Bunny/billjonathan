import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import SocialProof from '~/components/widgets/SocialProof';
import Features from '~/components/widgets/Features';
import Services from '~/components/widgets/Services';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import Stats from '~/components/widgets/Stats';
import CallToAction from '~/components/widgets/CallToAction';
import Testimonials from '~/components/widgets/Testimonials';
import {
  callToActionHome,
  contentHomeOne,
  featuresHome,
  heroHome,
  servicesHome,
  socialProofHome,
  statsHome,
  stepsHome,
  testimonialsHome,
} from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero {...heroHome} />
      <SocialProof {...socialProofHome} />
      <Stats {...statsHome} />
      <Content {...contentHomeOne} />
      <Services {...servicesHome} />
      <Features {...featuresHome} />
      <Steps {...stepsHome} />
      <Testimonials {...testimonialsHome} />
      <CallToAction {...callToActionHome} />
    </>
  );
}
