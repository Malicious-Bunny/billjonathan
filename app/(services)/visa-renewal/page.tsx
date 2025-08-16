import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UK Visa Renewal Service - Anderson Carl',
  description: 'Professional assistance with UK visa renewal applications. Expert consultation and document handling services.',
};

export default function VisaRenewalPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-primary-600">Home</a> /
          <a href="/#services" className="hover:text-primary-600"> Services</a> /
          <span className="text-gray-800"> Visa Renewal</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            UK Visa Renewal Service
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Professional support for UK visa renewal processes and extensions. We handle the complex requirements to ensure successful renewals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              Service Fee: £95
            </div>
            <div className="text-gray-700">
              Comprehensive visa renewal assistance
            </div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Renewal Guidance</h3>
                <p className="text-gray-600">
                  Complete step-by-step guidance through the UK visa renewal process, ensuring all requirements are met and deadlines observed.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Document Review</h3>
                <p className="text-gray-600">
                  Thorough review of all supporting documents to ensure they meet UKVI requirements and prevent renewal delays or refusals.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Timing Optimization</h3>
                <p className="text-gray-600">
                  Expert advice on optimal timing for visa renewal applications to avoid gaps in your legal status in the UK.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Follow-up Support</h3>
                <p className="text-gray-600">
                  Continuous support throughout the renewal process, including status tracking and communication with UKVI.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Required Documents</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Current passport and visa
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Completed renewal application form
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Financial evidence and bank statements
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Employment letter and payslips
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Accommodation evidence
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                English language certificate (if required)
              </li>
            </ul>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Service Fee: £95</h4>
              <p className="text-gray-600 mb-4">
                Includes complete renewal assistance, document review, and follow-up support until completion.
              </p>
              <p className="text-sm text-gray-500">
                * UKVI visa renewal fees are additional and paid directly to the Home Office
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="/contact" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center">
                Start Your Renewal
              </a>
              <a href="https://wa.me/447940233536?text=Hello Anderson Carl, I need assistance with UK visa renewal." className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center">
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Visa Renewal Process</h2>
          <p className="text-gray-600 text-center mb-12">Simple steps to renew your UK visa</p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Eligibility Review</h3>
              <p className="text-gray-600">
                We review your current visa status and assess your eligibility for renewal.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Document Preparation</h3>
              <p className="text-gray-600">
                We help you gather and prepare all required documents for your specific visa type.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Application Submission</h3>
              <p className="text-gray-600">
                We complete and submit your renewal application to UKVI with all supporting documents.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                04
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow-up & Updates</h3>
              <p className="text-gray-600">
                We track your application progress and provide updates until your visa is renewed.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">When should I apply for visa renewal?</h3>
              <p className="text-gray-600">
                You should apply for visa renewal no earlier than 28 days before your current visa expires. We recommend applying 6-8 weeks before expiry to allow adequate processing time.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does visa renewal take?</h3>
              <p className="text-gray-600">
                Standard visa renewal processing takes 8-12 weeks. Priority services can reduce this to 5 working days, and Super Priority services to 1 working day.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I travel while my renewal is being processed?</h3>
              <p className="text-gray-600">
                If you apply before your current visa expires, you have Section 3C leave which allows you to stay in the UK. However, you cannot travel outside the UK during this period.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if my renewal application is refused?</h3>
              <p className="text-gray-600">
                We provide comprehensive document review to minimize refusal risks. If a refusal occurs, we can advise on appeals, administrative reviews, or reapplication options.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Renew Your UK Visa?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get professional assistance with your UK visa renewal today. Contact Anderson Carl for expert consultation and support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Get Started Now
            </a>
            <a href="mailto:support@andersoncarlconsultancy.uk?subject=Visa Renewal Consultation" className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
              Email Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
