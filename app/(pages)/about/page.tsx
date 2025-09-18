import type { Metadata } from 'next';
import Contact from '~/components/widgets/Contact';
import Features from '~/components/widgets/Features';
import Hero2 from '~/components/widgets/Hero2';
import Stats from '~/components/widgets/Stats';
import Steps from '~/components/widgets/Steps';
import Team from '~/components/widgets/Team';
import {
  contactAbout,
  featuresAbout,
  hero2About,
  statsAbout,
  stepsAbout,
  teamAbout,
} from '~/shared/data/pages/about.data';

export const metadata: Metadata = {
  title: `About Bill Jonathan - UK Documents Specialist | Professional UK Document Consultation Services`,
  description: 'Learn about Bill Jonathan, UK Documents Specialist with 8+ years experience, 99% success rate, and 5000+ applications processed. Expert UK passport, driver licence, and civil document services.',
};

const Page = () => {
  return (
    <>
      <Hero2 {...hero2About} />
      <Stats {...statsAbout} />
      <Features {...featuresAbout} />
      <Team {...teamAbout} />
      <Steps {...stepsAbout} />
      <Contact {...contactAbout} />
    </>
  );
};

export default Page;
