
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import SkillTracks from '@/components/SkillTracks';
import WhyMaximally from '@/components/WhyMaximally';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="animated-bg" />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-press-start text-maximally-black mb-8 typewriter">
              Max out your potential
            </h1>
            <p className="font-jetbrains text-lg md:text-xl text-maximally-black/80 max-w-2xl mx-auto mb-12 fade-in">
              Build real-world skills, start learning now, and join a community of like-minded individuals.
            </p>
            <button 
              className="pixel-button group flex items-center gap-2 mx-auto hover:scale-105 transition-transform"
              onClick={() => window.location.href = '/bootcamps'}
            >
              <span>Start Learning</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* Power-ups Section */}
        <section className="py-16 px-4 bg-maximally-blue/5">
          <div className="container mx-auto">
            <h2 className="text-3xl font-press-start text-maximally-black mb-12 text-center slide-up">
              Power up your skills
            </h2>
            <SkillTracks />
          </div>
        </section>

        <WhyMaximally />
        
        {/* CTA Section */}
        <section className="py-16 px-4 bg-maximally-black text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-press-start mb-8 glow-text">
              Ready to maximize your potential?
            </h2>
            <p className="font-jetbrains text-white/80 max-w-2xl mx-auto mb-8">
              Join our community of ambitious teens learning real-world skills.
            </p>
            <button 
              className="pixel-button bg-maximally-blue group flex items-center gap-2 mx-auto"
              onClick={() => window.location.href = '/bootcamps'}
            >
              <span>Join Now</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
