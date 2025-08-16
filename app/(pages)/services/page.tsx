import type { Metadata } from 'next';

import Features from '~/components/widgets/Features';
import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import CallToAction from '~/components/widgets/CallToAction';
import Testimonials from '~/components/widgets/Testimonials';
import {
  heroServices,
  features2Services,
  contentServicesOne,
  featuresServices,
  testimonialsServices,
  callToActionServices,
} from '~/shared/data/pages/services.data';

export const metadata: Metadata = {
  title: `UK Document Services - Anderson Carl | Professional UK Documentation Assistance`,
  description: 'Expert UK document services including passport applications, driver licences, civil documents, IELTS certificates, and immigration documents. 99% success rate with professional consultation.',
};

export default function ServicesPage() {
  return (
    <>
      <Hero {...heroServices} />
      <Features {...features2Services} />
      <Content {...contentServicesOne} />
      <Features {...featuresServices} />
      <Testimonials {...testimonialsServices} />
      <CallToAction {...callToActionServices} />
    </>
  );
}
