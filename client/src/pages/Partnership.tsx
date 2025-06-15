import SEO from '@/components/SEO';
import BenefitCarousel from '@/components/BenefitCarousel';
import MutualPactSection from '@/components/MutualPactSection';

export default function Partnership() {
  return (
    <>
      <SEO 
        title="Partnership - Join the Collective | Maximally"
        description="Partner with Maximally and join our collective of student organizations. Get funding, mentorship, and exclusive resources for your events and competitions."
        keywords="partnership, student organizations, funding, mentorship, collective"
      />
      
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-gray-900 via-black to-red-900 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-mono mb-6 glitch-effect" data-text="JOIN THE COLLECTIVE">
              JOIN THE COLLECTIVE
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Partner with Maximally and unlock exclusive opportunities for your student organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="pixel-button bg-red-600 hover:bg-yellow-500 text-white hover:text-black px-8 py-4">
                APPLY NOW
              </button>
              <button className="pixel-button bg-gray-700 hover:bg-gray-600 text-white px-8 py-4">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>

        {/* Benefit Carousel */}
        <BenefitCarousel />

        {/* Mutual Pact Section */}
        <MutualPactSection />

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-yellow-500 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-mono">
              READY TO LEVEL UP?
            </h2>
            <p className="text-lg text-black mb-8">
              Join 50+ organizations in the Maximally collective and transform your events
            </p>
            <button className="pixel-button bg-black text-white hover:bg-gray-800 px-12 py-4 text-lg">
              START PARTNERSHIP APPLICATION
            </button>
          </div>
        </div>
      </div>
    </>
  );
}