import { CallToActionProps, FAQsProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';

// Hero data on FAQs page *******************
export const heroFaqs: HeroProps = {
  title: 'Frequently Asked Questions',
  subtitle: (
    <>
      <span className="hidden md:inline">
        {`Get answers to common questions about UK document services, processing times, and how Anderson Carl can help with your documentation needs.`}
      </span>{' '}
      Find the information you need to make informed decisions about your UK documentation journey.
    </>
  ),
  tagline: 'UK Documents FAQs',
};

// FAQS4 data on FAQs page *******************
export const faqs4Faqs: FAQsProps = {
  id: 'faqsFour-on-faqs',
  hasBackground: true,
  header: {
    title: 'Common Questions About UK Document Services',
    subtitle: 'Get quick answers to your questions about UK documentation processes and our professional services.',
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'General Services',
        href: '/tab1',
      },
      items: [
        {
          title: 'What makes Anderson Carl different from other consultants?',
          description: `Anderson Carl combines 8+ years of hands-on experience with professional qualifications including Level 3 Immigration Law certification and UK Legal Practice Certificate. Our 99% success rate and personalized approach set us apart from other consultants.`,
        },
        {
          title: 'What types of UK documents can you help with?',
          description: `We assist with all UK documentation including passports, driving licenses, birth certificates, marriage certificates, death certificates, IELTS/PTE certificates, residence permits, visa renewals, and civil documents. Our comprehensive service covers both immigration and civil documentation needs.`,
        },
        {
          title: 'Do you really provide 24/7 support?',
          description: `Yes, we provide round-the-clock support for our clients. Questions and urgent matters don't wait for business hours, and neither do we. Our comprehensive support continues until your documents are successfully delivered.`,
        },
        {
          title: 'Can you help clients outside of London?',
          description: `Absolutely. We provide our document assistance services to clients throughout the UK and internationally. Most consultations can be conducted remotely via email, phone, WhatsApp, or video call for your convenience.`,
        },
        {
          title: 'Is the initial consultation really free?',
          description: `Yes, absolutely. All first-time consultations are completely free. We'll assess your requirements and provide you with a clear plan and transparent pricing before you commit to any service.`,
        },
        {
          title: 'How do you maintain such a high success rate?',
          description: `Our 99% success rate is achieved through years of staying current with UK regulations, building strong relationships with government departments, and developing systematic processes that minimize errors and delays. We also regularly attend professional development seminars to ensure our expertise remains current.`,
        },
      ],
    },
    {
      link: {
        label: 'Processing & Pricing',
        href: '/tab2',
      },
      items: [
        {
          title: 'How long does the documentation process typically take?',
          description: `Processing times vary by document type: passports (4 days), driving licenses and language certificates (no test required), civil documents (1-2 days), and immigration documents (varies by service). We always provide realistic timelines upfront and can often expedite urgent applications.`,
        },
        {
          title: 'What are your fees for different services?',
          description: `Our transparent pricing includes: Driver Licence Services (£65), Passport Services (£1,500), Immigration Documents (£95), Civil Documents (£1,000), Language Certificates IELTS/PTE (£620), and UK Death Certificate (£1,000). All fees are clearly explained upfront with no hidden charges.`,
        },
        {
          title: 'Do you offer payment plans or flexible payment options?',
          description: `Yes, we offer flexible payment plans and work with clients to make quality documentation services accessible. We accept bank transfers, PayPal, and major credit/debit cards. Payment is typically 50% upfront and 50% upon completion of service.`,
        },
        {
          title: 'What happens if my application is rejected?',
          description: `With our 99% success rate, rejections are extremely rare. However, our service includes full follow-up and we'll work with you to address any issues and resubmit if necessary. We stand behind our work and ensure you get the results you need.`,
        },
        {
          title: 'Can you expedite urgent applications?',
          description: `Yes, we specialize in emergency processing and can often expedite urgent applications. We offer same-day emergency consultation and have established relationships with government departments to help speed up critical applications when time is of the essence.`,
        },
        {
          title: 'Do you provide updates during the process?',
          description: `Absolutely. We provide regular updates throughout the entire process and you can contact us 24/7 for status updates. We believe in transparent communication and keeping our clients informed at every step of their documentation journey.`,
        },
      ],
    },
    {
      link: {
        label: 'Specific Documents',
        href: '/tab3',
      },
      items: [
        {
          title: 'Can you really help me get a UK driving license without taking tests?',
          description: `Yes, we can help convert your international driving license to a UK full license or convert your provisional license to a full license without taking tests. We also provide UK theory and practical test pass certificates through our specialized services.`,
        },
        {
          title: 'How can you provide IELTS/PTE certificates without taking exams?',
          description: `We provide professional support with IELTS, PTE, and other English language certification processes through our established network and expertise. No test is required - certificates are handed to you after 3 days processing through our specialized services.`,
        },
        {
          title: 'What documents do I need to provide for passport services?',
          description: `For passport applications, you'll typically need identity documents, photos, and supporting paperwork. We guide you through the exact requirements during your free consultation and help ensure all documentation is complete and accurate before submission.`,
        },
        {
          title: 'Can you help with emergency passport applications?',
          description: `Yes, we specialize in emergency passport applications and have successfully guided families through urgent situations including medical emergencies abroad. Our expedited service can process emergency passports when time is critical.`,
        },
        {
          title: 'What immigration documents can you assist with?',
          description: `We help with residence permits, visa renewals, settlement applications (indefinite leave to remain), and other immigration-related documentation. Our expertise covers the full spectrum of UK immigration documentation needs.`,
        },
        {
          title: 'How do you help with converting foreign qualifications?',
          description: `We have particular expertise in helping international professionals convert their foreign qualifications and licenses to UK equivalents. This is one of our specialized areas, and we've helped clients from over 40 countries successfully navigate these complex processes.`,
        },
      ],
    },
  ],
};

// CallToAction data on FAQs page *******************
export const callToActionFaqs: CallToActionProps = {
  id: 'callToAction-on-faqs',
  hasBackground: true,
  title: 'Still have questions?',
  subtitle:
    'Contact Anderson Carl for a free consultation. Get personalized answers about your specific UK documentation needs and professional guidance on your application process.',
  callToAction: {
    text: 'Get Free Consultation',
    href: '/contact',
  },
};
