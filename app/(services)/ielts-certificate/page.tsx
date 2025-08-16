import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IELTS Certificate Service - Anderson Carl',
  description: 'Professional assistance with IELTS certification processes. Expert consultation and document handling services.',
};

export default function IELTSCertificatePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-primary-600">Home</a> /
          <a href="/#services" className="hover:text-primary-600"> Services</a> /
          <span className="text-gray-800"> IELTS Certificate</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            IELTS Certificate Service
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Professional support with IELTS certification processes and English language requirements. We guide you through preparation and application procedures.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              Service Fee: £600
            </div>
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
              Processing Time: 3 days
            </div>
            <div className="text-gray-700">
              Comprehensive IELTS certification assistance
            </div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Test Registration</h3>
                <p className="text-gray-600">
                  Complete assistance with IELTS test registration, including choosing the right test type and booking your preferred test date and location.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Preparation Guidance</h3>
                <p className="text-gray-600">
                  Expert advice on IELTS preparation strategies, study materials, and practice tests to help you achieve your target score.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Document Support</h3>
                <p className="text-gray-600">
                  Assistance with obtaining official IELTS certificates and ensuring they meet immigration and educational requirements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Follow-up Support</h3>
                <p className="text-gray-600">
                  Continuous support throughout your IELTS journey, including retake guidance and score improvement strategies.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">IELTS Test Types</h3>
            <ul className="space-y-2 text-gray-600 mb-8">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                IELTS Academic (for university applications)
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                IELTS General Training (for immigration)
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                IELTS Life Skills (for UK visa requirements)
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                IELTS for UKVI (UK Visa and Immigration)
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Online IELTS (computer-based testing)
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Paper-based IELTS testing
              </li>
            </ul>

            <div className="p-6 bg-blue-50 rounded-lg mb-6">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Service Fee: £600</h4>
              <p className="text-blue-600 font-semibold mb-2">Processing Time: 3 days</p>
              <p className="text-gray-600 mb-4">
                Includes test registration assistance, preparation guidance, and certificate support services.
              </p>
              <p className="text-sm text-gray-500">
                * IELTS test fees are additional and paid directly to the test center
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center">
                Start Your IELTS Journey
              </a>
              <a href="https://wa.me/447940233536?text=Hello Anderson Carl, I need assistance with IELTS certification." className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center">
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our IELTS Support Process</h2>
          <p className="text-gray-600 text-center mb-12">Simple steps to achieve your IELTS certification</p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment & Planning</h3>
              <p className="text-gray-600">
                We assess your current English level and create a personalized study plan.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Test Registration</h3>
              <p className="text-gray-600">
                We help you register for the appropriate IELTS test at your preferred location.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Preparation Support</h3>
              <p className="text-gray-600">
                We provide preparation materials and strategies to help you achieve your target score.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                04
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Certificate Assistance</h3>
              <p className="text-gray-600">
                We help you obtain and verify your IELTS certificate for your specific requirements.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What IELTS score do I need for UK immigration?</h3>
              <p className="text-gray-600">
                For UK visa applications, you typically need an overall score of 6.0 with no individual band below 5.5. Specific requirements vary by visa type and should be verified.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How much does the IELTS test cost?</h3>
              <p className="text-gray-600">
                IELTS test fees in the UK are approximately £195-215 depending on the test center and test type. IELTS for UKVI typically costs more than standard IELTS.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long is an IELTS certificate valid?</h3>
              <p className="text-gray-600">
                IELTS results are valid for 2 years from the test date. Some institutions may accept older certificates, but immigration authorities typically require recent scores.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I retake IELTS if I don't get the required score?</h3>
              <p className="text-gray-600">
                Yes, you can retake IELTS as many times as needed. We recommend waiting to identify areas for improvement and adequate preparation time between attempts.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your IELTS Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get professional assistance with your IELTS certification today. Contact Anderson Carl for expert consultation and support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Get Started Now
            </a>
            <a href="mailto:support@andersoncarlconsultancy.uk?subject=IELTS Certificate Consultation" className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
              Email Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
