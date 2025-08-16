import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UK Death Certificate Service - Anderson Carl',
  description: 'Professional assistance with UK death certificate applications. Expert consultation and expedited document processing services.',
};

export default function UKDeathCertificatePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-primary-600">Home</a> /
          <a href="/#services" className="hover:text-primary-600"> Services</a> /
          <span className="text-gray-800"> UK Death Certificate</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            UK Death Certificate Service
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Professional assistance with obtaining official UK death certificates. Expedited processing for urgent legal, probate, and administrative requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
              Service Fee: £1,000
            </div>
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
              Processing Time: 1-2 working days
            </div>
            <div className="text-gray-700">
              Expedited death certificate service
            </div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expedited Processing</h3>
                <p className="text-gray-600">
                  Priority processing of UK death certificate applications with completion in 1-2 working days for urgent legal and administrative needs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Record Search & Verification</h3>
                <p className="text-gray-600">
                  Expert assistance with locating death records in the General Register Office and verification of existing death registrations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Probate & Legal Support</h3>
                <p className="text-gray-600">
                  Specialized assistance for probate proceedings, estate administration, and legal matters requiring certified death certificates.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Priority Support</h3>
                <p className="text-gray-600">
                  Dedicated support throughout the expedited process with direct communication channels for urgent matters and status updates.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Required Information</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Full name of the deceased
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Date of death (exact date required)
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Place of death (hospital, address, or district)
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Date of birth of the deceased
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Spouse's name (if applicable)
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Proof of identity and relationship/legal authority
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Reason for urgent processing
              </li>
            </ul>

            <div className="mt-8 p-6 bg-red-50 rounded-lg">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Expedited Service: £1,000</h4>
              <p className="text-blue-600 font-semibold mb-2">Processing Time: 1-2 working days</p>
              <p className="text-gray-600 mb-4">
                Includes expedited application processing, priority record search, and dedicated support until completion.
              </p>
              <p className="text-sm text-gray-500">
                * General Register Office fees are additional and paid directly to GRO
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="/contact" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center">
                Start Urgent Application
              </a>
              <a href="https://wa.me/447940233536?text=Hello Anderson Carl, I need urgent assistance with obtaining a UK death certificate." className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center">
                Emergency WhatsApp Support
              </a>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Expedited Death Certificate Process</h2>
          <p className="text-gray-600 text-center mb-12">Fast-track steps to obtain your UK death certificate urgently</p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Urgent Consultation</h3>
              <p className="text-gray-600">
                Immediate assessment of your requirements and collection of all necessary death registration information.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Priority Record Search</h3>
              <p className="text-gray-600">
                Expedited search of official death records with direct access to General Register Office systems.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast-Track Application</h3>
              <p className="text-gray-600">
                Priority application submission with expedited processing through our established GRO connections.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                04
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Express Delivery</h3>
              <p className="text-gray-600">
                Expedited certificate delivery within 1-2 working days with tracking and secure handling.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Why does expedited death certificate processing cost £1,000?</h3>
              <p className="text-gray-600">
                Our expedited service provides 1-2 working day processing compared to standard 15-day processing. This includes priority handling, direct GRO liaison, and dedicated support for urgent legal and probate matters.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Who can apply for a death certificate?</h3>
              <p className="text-gray-600">
                Close relatives, legal representatives, solicitors handling probate, or those with demonstrable legal interest. Proof of relationship or legal authority is required for all applications.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What are the additional GRO fees for death certificates?</h3>
              <p className="text-gray-600">
                Standard certificate: £15. Priority service (48 hours): £35. Premium service (24 hours): £45. Our expedited service ensures fastest possible processing regardless of GRO service level chosen.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if the death was registered outside England and Wales?</h3>
              <p className="text-gray-600">
                We can assist with deaths registered in Scotland (NRS) or Northern Ireland (GRONI), each requiring different procedures. Our expedited service applies to all UK jurisdictions.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-red-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need an Urgent UK Death Certificate?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get expedited professional assistance with your UK death certificate application. Anderson Carl provides priority processing for urgent legal, probate, and administrative requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Start Urgent Application
            </a>
            <a href="mailto:support@andersoncarlconsultancy.uk?subject=Urgent Death Certificate Request" className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
              Emergency Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
