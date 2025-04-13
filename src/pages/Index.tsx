
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import SkillTracks from '@/components/SkillTracks';
import WhyMaximally from '@/components/WhyMaximally';
import Footer from '@/components/Footer';

const Index = () => {
  const [text, setText] = useState('');
  const fullText = 'Max out your potential';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSkills = () => {
    document.getElementById('skills-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-maximally-blue/5 to-maximally-red/5 animate-gradient" />
      <div className="pixel-grid-bg" />
      <div className="pixel-cube" style={{ top: '10%', left: '10%', animationDelay: '0s' }} />
      <div className="pixel-cube" style={{ top: '70%', left: '80%', animationDelay: '0.5s' }} />
      <div className="pixel-cube" style={{ top: '30%', left: '85%', animationDelay: '1s' }} />
      <div className="pixel-cube" style={{ top: '80%', left: '20%', animationDelay: '1.5s' }} />
      <div className="pixel-cube" style={{ top: '20%', left: '60%', animationDelay: '2s' }} />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-press-start text-maximally-black mb-8 relative">
              {text}
              <span className="inline-block w-[3px] h-[1em] bg-maximally-blue ml-1 animate-[cursor-blink_1s_infinite]" />
            </h1>
            
            <p className="font-jetbrains text-lg md:text-xl text-maximally-black/80 max-w-2xl mx-auto mb-12 opacity-0 animate-[fadeIn_1s_ease-in_forwards_1s]">
              Build real-world skills. Start learning. Join the community.
            </p>
            
            <button 
              onClick={scrollToSkills}
              className="pixel-button bg-maximally-blue text-white group flex items-center gap-2 mx-auto hover:animate-pulse"
            >
              <span>Start Learning</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills-section" className="py-24 px-4 bg-white relative">
          <div className="max-w-6xl mx-auto">
            <div className="opacity-0 animate-[fadeIn_1s_ease-in_forwards_0.5s]">
              <SkillTracks />
            </div>
          </div>
        </section>

        {/* Why Maximally Section */}
        <WhyMaximally />

        {/* CTA Section */}
        <section className="py-16 px-4 bg-maximally-black text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-press-start mb-8 animate-glow">
              Ready to maximize your potential?
            </h2>
            <p className="font-jetbrains text-white/80 max-w-2xl mx-auto mb-8">
              Join our community of ambitious teens learning real-world skills.
            </p>
            <button 
              onClick={() => window.location.href = '/bootcamps'}
              className="pixel-button bg-maximally-blue group flex items-center gap-2 mx-auto hover:animate-pulse"
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
