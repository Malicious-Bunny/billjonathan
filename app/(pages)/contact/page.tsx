import type { Metadata } from 'next';

import Hero from '~/components/widgets/Hero';
import Contact2 from '~/components/widgets/Contact2';
import Features from '~/components/widgets/Features';
import { heroContact, contact2Contact, featuresContact } from '~/shared/data/pages/contact.data';

export const metadata: Metadata = {
  title: 'Contact Anderson Carl - UK Documents Specialist | Free Consultation Available 24/7',
  description: 'Get expert UK document consultation from Anderson Carl. Professional assistance with passport applications, driver licences, civil documents, IELTS certificates, and immigration services. 99% success rate.',
};

const Page = () => {
  return (
    <>
      <Hero {...heroContact} />
      <Contact2 {...contact2Contact} />
      <Features {...featuresContact} />
    </>
  );
};

export default Page;
