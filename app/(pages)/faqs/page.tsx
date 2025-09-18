import type { Metadata } from 'next';

import Hero from '~/components/widgets/Hero';
import FAQs4 from '~/components/widgets/FAQs4';
import CallToAction2 from '~/components/widgets/CallToAction2';
import { heroFaqs, faqs4Faqs, callToActionFaqs } from '~/shared/data/pages/faqs.data';

export const metadata: Metadata = {
  title: `Frequently Asked Questions - Bill Jonathan UK Documents | FAQs`,
  description: 'Get answers to common questions about UK document services, processing times, and Bill Jonathan professional consultation services.',
};

export default function FAQPage() {
  return (
    <>
      <Hero {...heroFaqs} />
      <FAQs4 {...faqs4Faqs} />
      <CallToAction2 {...callToActionFaqs} />
    </>
  );
}
