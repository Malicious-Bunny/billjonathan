import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UK Passport Application Service - Fast 4-Day Processing | Anderson Carl',
  description: 'Professional UK passport application assistance with 4-day processing. Expert consultation for new passports, renewals, and replacements. No appointment stress - we handle everything for £1,500. 99% success rate.',
};

export default function USPassportPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-primary-600">Home</a> /
          <a href="/#services" className="hover:text-primary-600"> Services</a> /
          <span className="text-gray-800"> UK Passport Application</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            UK Passport Application Service - Fast 4-Day Processing
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Professional UK passport assistance with 99% success rate. We handle new applications, renewals, and replacements with expert guidance from start to finish. No appointment stress - we do it all for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              Service Fee: £1,500
            </div>
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
              Processing Time: 4 days
            </div>
            <div className="text-gray-700">
              Complete passport application assistance
            </div>
          </div>
        </div>

        {/* Gallery Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          <img
            src="https://ext.same-assets.com/542609343/3412248467.jpeg"
            alt="Gallery image 2"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="https://ext.same-assets.com/542609343/940568127.jpeg"
            alt="Gallery image 1"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="/passport-3.jpg"
            alt="Gallery image 3"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        {/* Comprehensive UK Passport Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Comprehensive UK Passport Services</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Application Guidance</h3>
                <p className="text-gray-600">
                  Complete step-by-step guidance through the UK passport application process with HM Passport Office requirements. We ensure all forms are correctly completed and all criteria met for fast approval.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Document Review & Verification</h3>
                <p className="text-gray-600">
                  Comprehensive review of all supporting documents including identity verification, photo compliance check, and birth certificate validation to prevent application delays and rejections.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Renewal & Replacement Services</h3>
                <p className="text-gray-600">
                  Expert assistance with passport renewals, lost/stolen replacements, and emergency travel documents. We handle expedited processing options for urgent travel needs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Follow-up Support</h3>
                <p className="text-gray-600">
                  Continuous support throughout the 4-day processing period with progress tracking, status updates, and direct communication with HM Passport Office when needed.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Required Documents Checklist</h3>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">•</span>
                  Completed passport application form (APS)
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">•</span>
                  Two identical passport photos (regulation size)
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">•</span>
                  Current/expired passport (for renewals)
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">•</span>
                  Full UK birth certificate or naturalization certificate
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">•</span>
                  Proof of identity documents (driving licence, etc.)
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">•</span>
                  Marriage/divorce certificates (if applicable)
                </li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Service Investment:</h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>New Application:</span>
                    <span className="font-semibold">£1,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Renewal Service:</span>
                    <span className="font-semibold">£500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lost/Stolen Replacement:</span>
                    <span className="font-semibold">£1,500</span>
                  </div>
                </div>
                <p className="text-blue-600 font-semibold mt-3">** Processing: 4 days guaranteed**</p>
                <p className="text-sm text-gray-600 mt-2">
                  Includes complete application assistance, document review, submission support, and follow-up until passport delivery.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  * UK Government passport fees are additional and paid directly to HM Passport Office
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center">
                  Start Your Application
                </a>
                <a href="https://wa.me/447940233536?text=Hello Anderson Carl, I need assistance with UK passport application service." className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center">
                  WhatsApp Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our 4-Day Passport Application Process</h2>
          <p className="text-gray-600 text-center mb-12">Streamlined steps for fast UK passport processing</p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Consultation</h3>
              <p className="text-gray-600">
                We assess your passport requirements, review eligibility, and provide personalized guidance based on your specific situation and travel needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Document Preparation</h3>
              <p className="text-gray-600">
                We help gather and verify all required documents, ensuring they meet HM Passport Office standards and photo specifications for approval.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Application Submission</h3>
              <p className="text-gray-600">
                We complete and submit your application to HM Passport Office with all supporting documents, ensuring fast-track processing where possible.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                04
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow-up & Delivery</h3>
              <p className="text-gray-600">
                We track your application progress, provide regular updates, and ensure your new passport is delivered securely within 4 days.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">UK Passport Application FAQs</h2>
          <p className="text-gray-600 text-center mb-8">Common questions about UK passport application services</p>

          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">Our expert team is here to help you with personalized consultation</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Get Free Consultation
              </a>
              <a href="https://wa.me/447940233536?text=Hello, I have questions about UK passport application" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="text-center bg-primary-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your UK Passport Application?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get professional assistance with your UK passport application today. Contact Anderson Carl for expert consultation and guaranteed 4-day processing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Get Started Now
            </a>
            <a href="mailto:support@andersoncarlconsultancy.uk?subject=UK Passport Application Consultation Request" className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
              Email Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
