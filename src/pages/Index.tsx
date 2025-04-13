
import { useEffect, useState } from 'react';
import { ArrowRight, Star, Users, Target, Rocket, Sparkles, Crown } from 'lucide-react';
import SkillTracks from '@/components/SkillTracks';
import WhyMaximally from '@/components/WhyMaximally';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';

const Index = () => {
  const [text, setText] = useState('');
  const fullText = 'Max out your potential';
  const [isVisible, setIsVisible] = useState(false);
  
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

    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSkills = () => {
    document.getElementById('skills-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { number: '1000+', label: 'Active Students', icon: Users },
    { number: '95%', label: 'Success Rate', icon: Star },
    { number: '50+', label: 'Startups Founded', icon: Rocket },
    { number: '100+', label: 'Events Hosted', icon: Crown }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-maximally-blue/10 via-white to-maximally-red/10 animate-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(60,158,231,0.1),transparent)]" />
      <div className="pixel-grid-bg" />
      
      {/* Floating Pixel Cubes */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="pixel-cube"
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}
      
      <main className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4 flex justify-center">
              <div className="pixel-border bg-maximally-blue p-2 inline-block">
                <Target className="h-6 w-6 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-press-start text-maximally-black mb-8 relative">
              {text}
              <span className="inline-block w-[3px] h-[1em] bg-maximally-blue ml-1 animate-[cursor-blink_1s_infinite]" />
            </h1>
            
            <p className="font-jetbrains text-lg md:text-xl text-maximally-black/80 max-w-2xl mx-auto mb-12 opacity-0 animate-[fadeIn_1s_ease-in_forwards_1s]">
              Learn real-world skills. Build amazing projects. Join a community of ambitious teens.
            </p>
            
            <div className="flex gap-4 justify-center">
              <button 
                onClick={scrollToSkills}
                className="pixel-button bg-maximally-blue text-white group flex items-center gap-2 hover:animate-pulse"
              >
                <span>Start Learning</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => window.location.href = '/community'}
                className="pixel-button bg-white text-maximally-black border-2 border-maximally-black group flex items-center gap-2"
              >
                <span>Join Community</span>
                <Users className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-maximally-black pixel-border flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-press-start text-maximally-black mb-2">
                    {stat.number}
                  </h3>
                  <p className="font-jetbrains text-maximally-black/70">{stat.label}</p>
                </div>
              ))}
            </div>
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

        {/* Testimonials Section */}
        <Testimonials />

        {/* CTA Section */}
        <section className="py-16 px-4 bg-maximally-black text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Sparkles className="h-12 w-12 text-maximally-blue mx-auto" />
            </div>
            <h2 className="text-2xl md:text-3xl font-press-start mb-8 animate-glow">
              Ready to maximize your potential?
            </h2>
            <p className="font-jetbrains text-white/80 max-w-2xl mx-auto mb-8">
              Join our community of ambitious teens learning real-world skills.
              Get access to exclusive bootcamps, events, and mentorship.
            </p>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/bootcamps'}
                className="pixel-button bg-maximally-blue group flex items-center gap-2 hover:animate-pulse"
              >
                <span>Join Now</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 pixel-button bg-maximally-black text-white transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        ↑
      </button>

      <Footer />
    </div>
  );
};

export default Index;
