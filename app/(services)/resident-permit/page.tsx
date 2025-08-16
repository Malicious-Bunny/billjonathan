import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UK Resident Permit Service - Anderson Carl',
  description: 'Professional assistance with UK residence permit applications. Expert consultation and document handling services.',
};

export default function ResidentPermitPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-primary-600">Home</a> /
          <a href="/#services" className="hover:text-primary-600"> Services</a> /
          <span className="text-gray-800"> Resident Permit</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            UK Resident Permit Service
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Professional assistance with UK residence permit applications and documentation. We handle the complex process from start to finish.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              Service Fee: £85
            </div>
            <div className="text-gray-700">
              Comprehensive residence permit assistance
            </div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Application Guidance</h3>
                <p className="text-gray-600">
                  Complete step-by-step guidance through the UK residence permit application process, ensuring all forms are correctly filled and requirements met.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Document Review</h3>
                <p className="text-gray-600">
                  Thorough review of all supporting documents to ensure they meet Home Office requirements and prevent application delays.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Residency Proof</h3>
                <p className="text-gray-600">
                  Expert help with compiling evidence of residence, including utilities, council tax, and other supporting documentation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Follow-up Support</h3>
                <p className="text-gray-600">
                  Continuous support throughout the application process, including status tracking and communication with the Home Office.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Required Documents</h3>
            <ul className="space-y-2 text-gray-600 mb-8">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Completed application form
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Passport and current visa
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Proof of residence (5 years)
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Employment history and payslips
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Council tax and utility bills
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Life in the UK test certificate
              </li>
            </ul>

            <div className="p-6 bg-blue-50 rounded-lg mb-6">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Service Fee: £85</h4>
              <p className="text-gray-600 mb-4">
                Includes complete application assistance, document review, and follow-up support until completion.
              </p>
              <p className="text-sm text-gray-500">
                * Home Office application fees are additional and paid directly to UKVI
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center">
                Start Your Application
              </a>
              <a href="https://wa.me/447940233536?text=Hello Anderson Carl, I need assistance with UK residence permit application." className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center">
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Residence Permit Process</h2>
          <p className="text-gray-600 text-center mb-12">Simple steps to get your UK residence permit</p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Eligibility Assessment</h3>
              <p className="text-gray-600">
                We assess your eligibility for residence permit and review your existing documentation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Document Preparation</h3>
              <p className="text-gray-600">
                We help you gather and prepare all required documents, ensuring they meet official standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Application Submission</h3>
              <p className="text-gray-600">
                We complete and submit your application to UKVI with all supporting documents.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                04
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow-up & Delivery</h3>
              <p className="text-gray-600">
                We track your application progress and provide updates until your permit is approved.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does the residence permit process take?</h3>
              <p className="text-gray-600">
                UK residence permit applications typically take 4-6 months to process. Premium services can reduce this timeline to 2-6 weeks depending on the application type.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What are the current residence permit fees?</h3>
              <p className="text-gray-600">
                Indefinite Leave to Remain: £2,885. Settlement as partner: £1,048. These fees are paid directly to UKVI and are separate from our service fee.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need to take the Life in the UK test?</h3>
              <p className="text-gray-600">
                Yes, most residence permit applications require passing the Life in the UK test and meeting English language requirements. We can guide you through this process.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if my application is refused?</h3>
              <p className="text-gray-600">
                We provide comprehensive document review to minimize refusal risks. If issues arise, we offer continued support to address them and can assist with appeals if necessary.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Residence Permit Application?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get professional assistance with your UK residence permit application today. Contact Anderson Carl for expert consultation and support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Get Started Now
            </a>
            <a href="mailto:support@andersoncarlconsultancy.uk?subject=Residence Permit Application" className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
              Email Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
