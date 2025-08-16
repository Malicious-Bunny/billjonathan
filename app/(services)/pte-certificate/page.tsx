import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PTE Certificate Service - Anderson Carl',
  description: 'Professional assistance with PTE certification processes. Expert consultation and document handling services.',
};

export default function PTECertificatePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-primary-600">Home</a> /
          <a href="/#services" className="hover:text-primary-600"> Services</a> /
          <span className="text-gray-800"> PTE Certificate</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            PTE Certificate Service
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Professional assistance with PTE (Pearson Test of English) certification. We guide you through the entire process from registration to results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              Service Fee: £620
            </div>
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
              Processing Time: 3 days
            </div>
            <div className="text-gray-700">
              Comprehensive PTE certification assistance
            </div>
          </div>
        </div>

        {/* Gallery Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          <img
            src="https://ext.same-assets.com/542609343/3503346672.jpeg"
            alt="Gallery image 2"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="https://ext.same-assets.com/542609343/3503346672.jpeg"
            alt="Gallery image 2"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        {/* What We Offer Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Test Registration</h3>
                <p className="text-gray-600">
                  Complete assistance with PTE Academic test registration, including choosing test centers and booking your preferred test date.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Preparation Guidance</h3>
                <p className="text-gray-600">
                  Expert advice on PTE preparation strategies, practice materials, and computer-based test techniques to achieve your target score.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Score Verification</h3>
                <p className="text-gray-600">
                  Assistance with obtaining and verifying PTE Academic scores for immigration, university, and professional requirements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Follow-up Support</h3>
                <p className="text-gray-600">
                  Continuous support throughout your PTE journey, including retake guidance and score improvement strategies.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">PTE Test Features</h3>
            <ul className="space-y-2 text-gray-600 mb-8">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Computer-based testing
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Quick results (typically within 2 business days)
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                AI-powered scoring system
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Accepted by UKVI for visa applications
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Integrated skills assessment
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Flexible test scheduling
              </li>
            </ul>

            <div className="p-6 bg-blue-50 rounded-lg mb-6">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Service Fee: £620</h4>
              <p className="text-blue-600 font-semibold mb-2">Processing Time: 3 days</p>
              <p className="text-gray-600 mb-4">
                Includes test registration assistance, preparation guidance, and score verification support.
              </p>
              <p className="text-sm text-gray-500">
                * PTE Academic test fees are additional and paid directly to Pearson
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center">
                Start Your PTE Journey
              </a>
              <a href="https://wa.me/447940233536?text=Hello Anderson Carl, I need assistance with PTE certification." className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center">
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our PTE Support Process</h2>
          <p className="text-gray-600 text-center mb-12">Simple steps to achieve your PTE certification</p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment & Planning</h3>
              <p className="text-gray-600">
                We assess your current English level and create a personalized PTE study plan.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Test Registration</h3>
              <p className="text-gray-600">
                We help you register for PTE Academic at your preferred test center and date.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Preparation Support</h3>
              <p className="text-gray-600">
                We provide preparation materials and computer-based test strategies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                04
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Score Assistance</h3>
              <p className="text-gray-600">
                We help you understand your results and send scores to required institutions.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What PTE score do I need for UK immigration?</h3>
              <p className="text-gray-600">
                For UK visa applications, you typically need an overall score of 59 with no individual skill below 59. Specific requirements may vary by visa type and should be verified.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How much does the PTE Academic test cost?</h3>
              <p className="text-gray-600">
                PTE Academic test fees in the UK are approximately £195. The test is entirely computer-based and results are available much faster than other tests.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long are PTE Academic scores valid?</h3>
              <p className="text-gray-600">
                PTE Academic scores are valid for 2 years from the test date. Immigration authorities and institutions typically accept scores within this period.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I retake PTE Academic if needed?</h3>
              <p className="text-gray-600">
                Yes, you can retake PTE Academic as many times as needed. There's no limit, but we recommend adequate preparation between attempts for score improvement.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your PTE Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get professional assistance with your PTE Academic certification today. Contact Anderson Carl for expert consultation and support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Get Started Now
            </a>
            <a href="mailto:support@andersoncarlconsultancy.uk?subject=PTE Certificate Consultation" className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
              Email Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
