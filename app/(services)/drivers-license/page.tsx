import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UK Driver Licence Services - Anderson Carl',
  description: 'Professional assistance with UK driver licence applications, renewals, and replacements. Expert consultation and document handling services.',
};

export default function DriversLicensePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-primary-600">Home</a> /
          <a href="/#services" className="hover:text-primary-600"> Services</a> /
          <span className="text-gray-800"> Driver Licence</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            UK Driver Licence Services
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Professional assistance with UK driving licence applications, renewals, replacements, and address changes. We handle all DVLA processes from start to finish.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              Service Fee: £65
            </div>
            <div className="text-gray-700">
              Complete driving licence assistance
            </div>
          </div>
        </div>

        {/* Gallery Images */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          <img
            src="https://ext.same-assets.com/542609343/2797916078.jpeg"
            alt="Gallery image 2"
            className="w-full h-32 object-cover rounded-lg"
          />
          <img
            src="/driverlicense-4.jpg"
            alt="Gallery image 4"
            className="w-full h-32 object-cover rounded-lg"
          />
          <img
            src="https://ext.same-assets.com/542609343/53704669.jpeg"
            alt="Gallery image 1"
            className="w-full h-32 object-cover rounded-lg"
          />
          <img
            src="https://ext.same-assets.com/542609343/3533851477.jpeg"
            alt="Gallery image 3"
            className="w-full h-32 object-cover rounded-lg"
          />
          <img
            src="/driverlicense-5.jpg"
            alt="Gallery image 5"
            className="w-full h-32 object-cover rounded-lg"
          />
        </div>

        {/* What We Offer Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Provisional Licence Applications</h3>
                <p className="text-gray-600">
                  Complete assistance with first-time provisional driving licence applications, ensuring all forms are correctly completed and requirements met.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Licence Renewals</h3>
                <p className="text-gray-600">
                  Expert help with driving licence renewals, including special procedures for drivers over 70 and medical licence renewals.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Lost Licence Replacement</h3>
                <p className="text-gray-600">
                  Fast replacement services for lost, stolen, or damaged driving licences, with expedited processing options available.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Address Changes</h3>
                <p className="text-gray-600">
                  Simple and quick address updates on your driving licence, ensuring your records remain current with DVLA.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Required Documents</h3>
            <ul className="space-y-2 text-gray-600 mb-8">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Completed DVLA application form
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Passport-style photograph
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Proof of identity documents
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Proof of current address
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Current licence (for renewals/changes)
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Medical reports (if applicable)
              </li>
            </ul>

            <div className="p-6 bg-blue-50 rounded-lg mb-6">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Service Fee: £65</h4>
              <p className="text-gray-600 mb-4">
                Includes complete application assistance, document review, and follow-up support until completion.
              </p>
              <p className="text-sm text-gray-500">
                * DVLA fees are additional and paid directly to DVLA
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center">
                Start Your Application
              </a>
              <a href="https://wa.me/447940233536?text=Hello Anderson Carl, I need assistance with UK driving licence services." className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center">
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Driver Licence Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Driver Licence Services</h2>
          <p className="text-gray-600 text-center mb-12">Complete assistance for all your driving licence needs</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">UK PROVISIONAL LICENCE SERVICE</h3>
              <p className="text-gray-600 mb-4">Complete assistance with UK provisional driving licence applications and processing</p>
              <p className="text-primary-600 font-bold">From £65</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">UK THEORY TEST SERVICE</h3>
              <p className="text-gray-600 mb-4">Expert assistance with UK theory test preparation and certification</p>
              <p className="text-primary-600 font-bold">From £65</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">UK PRACTICAL TEST SERVICE</h3>
              <p className="text-gray-600 mb-4">Submit your documents and we complete the tests</p>
              <p className="text-primary-600 font-bold">From £65</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">UK FULL LICENCE SERVICE</h3>
              <p className="text-gray-600 mb-4">Complete UK full driving license no test</p>
              <p className="text-primary-600 font-bold">From £65</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border lg:col-span-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">CONVERT INTERNATIONAL LICENCE TO UK FULL LICENCE</h3>
              <p className="text-gray-600 mb-4">Convert your international licence to UK full licence no test</p>
              <p className="text-primary-600 font-bold">From £65</p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Driver Licence Process</h2>
          <p className="text-gray-600 text-center mb-12">Simple steps to get your driving licence sorted</p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Assessment</h3>
              <p className="text-gray-600">
                We assess your specific requirements and review what type of licence service you need.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Document Collection</h3>
              <p className="text-gray-600">
                We help you gather all required documents and ensure they meet DVLA standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Application Processing</h3>
              <p className="text-gray-600">
                We complete and submit your application to DVLA with all supporting documentation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                04
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Delivery Support</h3>
              <p className="text-gray-600">
                We track progress and provide updates until your licence is successfully delivered.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does a driving licence application take?</h3>
              <p className="text-gray-600">
                Standard driving licence applications typically take 2-3 weeks to process. Urgent applications can be processed in 2-3 working days for an additional fee.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What are the current DVLA fees?</h3>
              <p className="text-gray-600">
                Provisional licence: £34 online, £43 by post. Full licence renewal: £14 online, £17 by post. These fees are paid directly to DVLA and are separate from our service fee.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can you help with medical licence renewals?</h3>
              <p className="text-gray-600">
                Yes, we assist with medical licence renewals for drivers with medical conditions, including guidance on required medical reports and forms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you handle licence applications for all ages?</h3>
              <p className="text-gray-600">
                Yes, we assist with licence applications for all eligible ages, including special procedures for drivers over 70 and young drivers applying for their first licence.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Your Driving Licence Sorted?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get professional assistance with your UK driving licence needs today. Contact Anderson Carl for expert consultation and support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Get Started Now
            </a>
            <a href="mailto:support@andersoncarlconsultancy.uk?subject=Driver Licence Services Consultation" className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
              Email Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
