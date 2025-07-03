import { useEffect, useState } from 'react';
import { ArrowRight, Users, Target, Trophy, Globe, Code, Zap, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Maximally",
    "description": "A global innovation league that hosts high-stakes hackathons for ambitious builders across disciplines worldwide",
    "url": "https://maximally.in",
    "logo": "https://maximally.in/logo.png",
    "sameAs": ["https://twitter.com/maximallyHQ", "https://instagram.com/maximallyHQ"]
  };
  
  const [text, setText] = useState('');
  const fullText = 'Welcome to the Maximally League';
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

  return (
    <>
      <SEO 
        title="Maximally | The Global Hackathon League for Builders" 
        description="Maximally hosts execution-first hackathons and challenges for global builders to showcase real work and get discovered. Join engineers, founders, and creatives worldwide." 
        keywords="global hackathons, innovation challenges, builder community, startup competitions, coding competitions, entrepreneurship platform" 
        canonicalUrl="https://maximally.in" 
        structuredData={structuredData} 
      />
      
      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Hero Section */}
        <section className="min-h-screen relative">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 bg-white" />
          <div className="absolute inset-0 pixel-grid opacity-30" />

          {/* Floating Pixels */}
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-4 h-4 bg-maximally-red/20 pixel-border animate-float" 
              style={{
                top: `${Math.random() * 90}%`,
                left: `${Math.random() * 90}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i}s`
              }} 
            />
          ))}

          <div className="relative container mx-auto px-4 pt-32 pb-20">
            <div className="max-w-4xl mx-auto text-center relative">
              <div className="absolute inset-0 pixel-grid-bg opacity-20"></div>
              
              {/* Alert Banner */}
              <div className="mb-8 inline-block group relative">
                <div className="minecraft-block bg-gradient-to-r from-maximally-red via-maximally-yellow to-maximally-red-light p-3 relative overflow-hidden">
                  <div className="flex items-center gap-2 text-white font-press-start text-xs">
                    <Terminal className="h-4 w-4 animate-pulse" />
                    <span>🚨</span>
                  </div>
                  <div className="absolute inset-0 bg-grid-white opacity-30"></div>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-press-start text-maximally-black mb-6 sm:mb-8 relative minecraft-text">
                {text}
                <span className="inline-block w-[3px] h-[1em] bg-maximally-red ml-1 animate-[cursor-blink_1s_infinite]" />
                <div className="absolute inset-0 minecraft-glow"></div>
              </h1>

              <p className="font-jetbrains text-lg sm:text-xl text-maximally-black/80 max-w-3xl mx-auto mb-4 px-4 opacity-0 animate-[fadeIn_1s_ease-in_forwards_1s]">
                A global innovation league that hosts high-stakes hackathons for ambitious builders across disciplines.
              </p>

              <p className="font-jetbrains text-base sm:text-lg text-maximally-black/60 max-w-2xl mx-auto mb-8 sm:mb-12 px-4 opacity-0 animate-[fadeIn_1s_ease-in_forwards_1.5s]">
                Whether you're an engineer, designer, founder, or creator — if you're ready to build, we have something for you.
              </p>

              {/* CTAs */}
              <div className="relative max-w-2xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Link 
                    to="/events" 
                    className="pixel-button bg-maximally-red text-white group flex items-center justify-center gap-2 hover:scale-105 transform transition-all hover:shadow-glow-red h-16 px-6 font-press-start text-sm"
                  >
                    <span>Explore Events</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link 
                    to="/community" 
                    className="pixel-button bg-maximally-yellow text-maximally-black group flex items-center justify-center gap-2 hover:scale-105 transform transition-all hover:shadow-glow-yellow h-16 px-6 font-press-start text-sm"
                  >
                    <Users className="h-4 w-4" />
                    <span>Join the League</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-maximally-red/5 to-transparent" />
          <div className="container mx-auto text-center relative">
            <h2 className="font-press-start text-3xl md:text-4xl text-maximally-black mb-8">
              What We Do
            </h2>
            
            <div className="max-w-3xl mx-auto mb-12">
              <p className="font-jetbrains text-xl md:text-2xl text-maximally-black/80 mb-6">
                We host execution-first challenges for engineers, founders, and creatives worldwide.
              </p>
              <p className="font-jetbrains text-lg md:text-xl text-maximally-black/70">
                Proof-of-work platform where ambitious builders create, launch, and compete with real solutions — designed for emerging talent across all disciplines.
              </p>
            </div>

            <Link 
              to="/events" 
              className="pixel-button bg-maximally-red text-white inline-flex items-center gap-2 px-8 py-4 text-lg hover:scale-105 transform transition-all"
            >
              <Trophy className="h-5 w-5" />
              <span>See Past Editions</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Global Innovation Stats */}
        <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div className="container mx-auto relative">
            <h2 className="font-press-start text-3xl md:text-4xl text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#39FF14] via-[#00ff99] to-[#00ffcc]">
              Born in India. Built for the World.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-black/40 p-8 rounded-lg border-2 border-[#39FF14] hover:scale-105 transform transition-all duration-300">
                  <Globe className="h-12 w-12 text-[#39FF14] mx-auto mb-4" />
                  <h3 className="font-press-start text-2xl text-white mb-2">Global</h3>
                  <p className="font-jetbrains text-white/80">Borderless innovation for builders worldwide</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-black/40 p-8 rounded-lg border-2 border-[#00ff99] hover:scale-105 transform transition-all duration-300">
                  <Code className="h-12 w-12 text-[#00ff99] mx-auto mb-4" />
                  <h3 className="font-press-start text-2xl text-white mb-2">Digital</h3>
                  <p className="font-jetbrains text-white/80">Internet-native events for digital builders</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-black/40 p-8 rounded-lg border-2 border-[#00ffcc] hover:scale-105 transform transition-all duration-300">
                  <Zap className="h-12 w-12 text-[#00ffcc] mx-auto mb-4" />
                  <h3 className="font-press-start text-2xl text-white mb-2">Fast</h3>
                  <p className="font-jetbrains text-white/80">High-pressure sprints for real proof of work</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="font-jetbrains text-xl text-white/90 max-w-3xl mx-auto mb-8">
                At Maximally, we believe innovation has no borders — and no traditional limits. Whether you're from a metro or a small town, if you're building bold things, you belong here.
              </p>
            </div>
          </div>
        </section>

        {/* Partner With Us Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="font-press-start text-3xl md:text-4xl text-maximally-black mb-8">
              Let's Build the Innovation League — Together
            </h2>
            
            <div className="max-w-3xl mx-auto mb-12">
              <p className="font-jetbrains text-xl md:text-2xl text-maximally-black/80 mb-6">
                We partner with organizations, creators, and brands to host transformative hackathons that inspire innovation and real-world impact.
              </p>
              <p className="font-jetbrains text-lg md:text-xl text-maximally-black/70">
                Ready to host a hackathon that empowers the next generation of builders? Let's collaborate.
              </p>
            </div>

            <Link 
              to="/collaborate" 
              className="pixel-button bg-maximally-yellow text-maximally-black inline-flex items-center gap-2 px-8 py-4 text-lg hover:scale-105 transform transition-all"
            >
              <Users className="h-5 w-5" />
              <span>Partner With Us</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;