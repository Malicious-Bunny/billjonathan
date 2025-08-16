import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UK Birth Certificate Service - Anderson Carl',
  description: 'Professional assistance with UK birth certificate applications. Expert consultation and document handling services.',
};

export default function BirthCertificatePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-primary-600">Home</a> /
          <a href="/#services" className="hover:text-primary-600"> Services</a> /
          <span className="text-gray-800"> UK Birth Certificate</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            UK Birth Certificate Service
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Professional assistance with obtaining official UK birth certificates. We help with applications, replacements, and document verification.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              Service Fee: £550
            </div>
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
              Processing Time: 2 days
            </div>
            <div className="text-gray-700">
              Comprehensive birth certificate assistance
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
                  Complete assistance with UK birth certificate applications, ensuring all forms are correctly completed and requirements met.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Record Search</h3>
                <p className="text-gray-600">
                  Expert assistance with locating birth records in the General Register Office and other official UK registration systems.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Document Verification</h3>
                <p className="text-gray-600">
                  Verification of existing birth certificates and assistance with obtaining certified copies for official purposes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Follow-up Support</h3>
                <p className="text-gray-600">
                  Continuous support throughout the application process, including status tracking and communication with the General Register Office.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Required Information</h3>
            <ul className="space-y-2 text-gray-600 mb-8">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Full name at birth
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Date of birth (exact or approximate)
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Place of birth (town/city and county)
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Mother's full name (including maiden name)
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Father's full name (if known)
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Proof of identity and relationship
              </li>
            </ul>

            <div className="p-6 bg-blue-50 rounded-lg mb-6">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Service Fee: £550</h4>
              <p className="text-blue-600 font-semibold mb-2">Processing Time: 2 days</p>
              <p className="text-gray-600 mb-4">
                Includes complete application assistance, record search, and follow-up support until completion.
              </p>
              <p className="text-sm text-gray-500">
                * General Register Office fees are additional and paid directly to GRO
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center">
                Start Your Application
              </a>
              <a href="https://wa.me/447940233536?text=Hello Anderson Carl, I need assistance with obtaining a UK birth certificate." className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center">
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Birth Certificate Process</h2>
          <p className="text-gray-600 text-center mb-12">Simple steps to obtain your UK birth certificate</p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Information Gathering</h3>
              <p className="text-gray-600">
                We collect all necessary information about the birth registration you're seeking.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Record Search</h3>
              <p className="text-gray-600">
                We search the official records to locate the correct birth registration entry.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Application Submission</h3>
              <p className="text-gray-600">
                We complete and submit your application to the General Register Office.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                04
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Certificate Delivery</h3>
              <p className="text-gray-600">
                We track the application and ensure your birth certificate is delivered safely.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does it take to get a UK birth certificate?</h3>
              <p className="text-gray-600">
                Standard applications take 15 working days. Priority services (48 hours) and Premium services (24 hours) are available for urgent requests.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What are the current birth certificate fees?</h3>
              <p className="text-gray-600">
                Standard certificate: £15. Priority service: £35. Premium service: £45. These fees are paid directly to the General Register Office.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I get a birth certificate for someone else?</h3>
              <p className="text-gray-600">
                You can apply for certificates of your children, spouse, or if you have legal authority. Proof of relationship or legal authority is required.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if the birth wasn't registered in England or Wales?</h3>
              <p className="text-gray-600">
                We can assist with births registered in Scotland (NRS) or Northern Ireland (GRONI), each with different procedures and requirements.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Obtain Your UK Birth Certificate?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get professional assistance with your UK birth certificate application today. Contact Anderson Carl for expert consultation and support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Get Started Now
            </a>
            <a href="mailto:support@andersoncarlconsultancy.uk?subject=Birth Certificate Application" className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
              Email Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
