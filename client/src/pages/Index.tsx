import { useEffect, useState } from 'react';
import { ArrowRight, Star, Users, Target, Rocket, Sparkles, Crown, Code, Zap, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

import WhyMaximally from '@/components/WhyMaximally';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import { Helmet } from 'react-helmet';
import SEO from '@/components/SEO';
import TallyFormDialog from "../components/TallyFormDialog";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Maximally.in",
    "description": "Premier skill development platform for Indian teenagers - Learn AI, Digital Marketing, Public Speaking & more",
    "url": "https://maximally.in",
    "logo": "https://maximally.in/logo.png",
    "sameAs": ["https://twitter.com/maximallyHQ", "https://instagram.com/maximallyHQ"]
  };
  const [text, setText] = useState('');
  const fullText = 'Be Better, Be Maximally';
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isTallyFormOpen, setIsTallyFormOpen] = useState(false);
  const features = [{
    icon: Code,
    title: "Learn Real Skills",
    description: "No more theory. Build real projects."
  }, {
    icon: Users,
    title: "Join the Community",
    description: "Connect with ambitious teens."
  }, {
    icon: Zap,
    title: "Grow Faster",
    description: "Accelerate your learning journey."
  }];
  
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
    const featureTimer = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 3000);
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      clearInterval(featureTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <SEO title="Maximally.in | Skill-building for Indian Teenagers" description="Join India's premier teen education platform. Learn AI, Digital Marketing, Public Speaking & more through hands-on bootcamps designed for Indian students." keywords="skill-building for Indian teenagers, bootcamps for students in India, learn digital marketing AI no-code, teen education India, social impact edtech startup" canonicalUrl="https://maximally.in" structuredData={structuredData} />
      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Hero Section */}
        <section className="min-h-screen relative">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 bg-white" />
          <div className="absolute inset-0 pixel-grid opacity-30" />

          {/* Floating Pixels */}
          {[...Array(8)].map((_, i) => <div key={i} className="absolute w-4 h-4 bg-maximally-red/20 pixel-border animate-float" style={{
          top: `${Math.random() * 90}%`,
          left: `${Math.random() * 90}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: `${4 + i}s`
        }} />)}

          <div className="relative container mx-auto px-4 pt-32 pb-20">
            <div className="max-w-4xl mx-auto text-center relative">
              <div className="absolute inset-0 pixel-grid-bg opacity-20"></div>
              <div className="mb-6 inline-block group relative">
                <div className="minecraft-block bg-gradient-to-r from-maximally-red via-maximally-yellow to-maximally-red-light p-3 relative overflow-hidden">
                  <Target className="h-8 w-8 text-white animate-float" />
                  <div className="absolute inset-0 bg-grid-white opacity-30"></div>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-press-start text-maximally-black mb-6 sm:mb-8 relative minecraft-text">
                {text}
                <span className="inline-block w-[3px] h-[1em] bg-maximally-red ml-1 animate-[cursor-blink_1s_infinite]" />
                <div className="absolute inset-0 minecraft-glow"></div>
              </h1>

              <p className="font-jetbrains text-lg sm:text-xl text-maximally-black/80 max-w-2xl mx-auto mb-8 sm:mb-12 px-4 opacity-0 animate-[fadeIn_1s_ease-in_forwards_1s]">
                💻 Zero to One K<br />
                Build your first ₹1,000 with code. No startup capital. No experience required. Just APIs, apps, and algorithms.
              </p>

              {/* Floating pixel elements behind buttons */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute w-2 h-2 bg-maximally-red/20 pixel-border animate-float" 
                    style={{
                      top: `${30 + Math.random() * 40}%`,
                      left: `${10 + Math.random() * 80}%`,
                      animationDelay: `${i * 0.8}s`,
                      animationDuration: `${3 + i * 0.5}s`
                    }} 
                  />
                ))}
              </div>

              {/* 2x2 Button Grid */}
              <div className="relative max-w-3xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Top Row */}
                  <Link 
                    to="/makeathon" 
                    className="pixel-button bg-maximally-red text-white group flex items-center justify-center gap-2 hover:scale-105 transform transition-all hover:shadow-glow-red h-16 px-6 font-press-start text-sm"
                  >
                    <span>Start Learning</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button 
                    onClick={() => window.location.href = 'https://tally.so/r/wQEGEA'} 
                    className="pixel-button bg-maximally-yellow text-maximally-black group flex items-center justify-center gap-2 hover:scale-105 transform transition-all hover:shadow-glow-yellow h-16 px-6 font-press-start text-sm"
                  >
                    <span>Apply for Makeathon</span>
                    <CalendarCheck className="h-4 w-4 animate-bounce" />
                  </button>

                  {/* Bottom Row */}
                  <Link 
                    to="/events" 
                    className="pixel-button bg-maximally-red text-white group flex items-center justify-center gap-2 hover:scale-105 transform transition-all hover:shadow-glow-red h-16 px-6 font-press-start text-sm"
                  >
                    <span>Explore Events</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link 
                    to="/community" 
                    className="pixel-button bg-white text-maximally-black border-2 border-maximally-black group flex items-center justify-center gap-2 hover:scale-105 transform transition-all hover:bg-maximally-red hover:text-white h-16 px-6 font-press-start text-sm"
                  >
                    <span>Join Community</span>
                    <Users className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
              </div>
              <TallyFormDialog open={isTallyFormOpen} onOpenChange={setIsTallyFormOpen} />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 px-4 sm:px-0">
              {features.map((feature, index) => <div key={index} className={`pixel-border p-6 sm:p-8 bg-white transition-all duration-500 ${activeFeature === index ? 'scale-105 shadow-xl' : 'scale-100'}`}>
                  <div className="w-12 h-12 bg-maximally-red pixel-border flex items-center justify-center mb-6">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-press-start text-lg mb-4">{feature.title}</h3>
                  <p className="font-jetbrains text-maximally-black/70">{feature.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        

        {/* Summer 2025 Section */}
        <section className="py-16 bg-maximally-black relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 animate-grid-flow" />
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-12">
              <div className="inline-block bg-maximally-red/20 px-4 py-2 rounded-full mb-6 animate-pulse">
                <span className="font-jetbrains text-maximally-red font-bold">
                  🚨 The Summer of a Lifetime Starts Here
                </span>
              </div>
              <h2 className="font-press-start text-3xl md:text-4xl text-maximally-red mb-4">
                Maximally Startup Makeathon 2025
              </h2>
              <p className="font-jetbrains text-white/90 text-xl mb-6 max-w-3xl mx-auto">
                India's wildest startup sprint for teens is now live. 7 days. Idea to MVP to pitch.
                <br />First 500 get in free. Once you're in, you're in for life.
              </p>
              <p className="font-jetbrains text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Builders. Dreamers. Designers. Coders. Marketers. If you're a teen who builds, this is your league.
                <br />This isn't your average Zoom class — this is the launchpad.
              </p>
              <Link to="/makeathon" className="pixel-button bg-maximally-red text-white inline-flex items-center gap-2 hover:animate-pulse text-lg px-8 py-4">
                <span>Apply for Makeathon</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Maximally Studios Section */}
        <section className="py-20 bg-gradient-to-br from-maximally-red/5 via-white to-maximally-yellow/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/20" />
          
          {/* Floating Media Elements */}
          {[
            { icon: '🎙️', delay: '0s', duration: '4s' },
            { icon: '🎬', delay: '1s', duration: '5s' },
            { icon: '📹', delay: '2s', duration: '6s' },
            { icon: '🎵', delay: '0.5s', duration: '4.5s' },
            { icon: '🎞️', delay: '1.5s', duration: '5.5s' },
            { icon: '📱', delay: '2.5s', duration: '4.2s' }
          ].map((media, i) => (
            <div 
              key={i} 
              className="absolute text-2xl opacity-30 animate-float select-none pointer-events-none" 
              style={{
                top: `${15 + Math.random() * 70}%`,
                left: `${5 + Math.random() * 90}%`,
                animationDelay: media.delay,
                animationDuration: media.duration
              }}
            >
              {media.icon}
            </div>
          ))}

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="font-press-start text-3xl md:text-5xl text-maximally-red mb-6 leading-tight relative">
                <span className="inline-block animate-pulse">maximally studios</span>
                <br />
                <span className="text-maximally-black/90 text-xl md:text-2xl mt-2 block">
                  where gen z builders go viral
                </span>
                <div className="absolute inset-0 bg-maximally-red/5 blur-xl -z-10 animate-pulse" />
              </h2>
              
              <p className="font-jetbrains text-lg md:text-xl text-maximally-black/80 mb-8 leading-relaxed max-w-3xl mx-auto">
                founder reels, mini-docs, podcasts, storytelling sprints — we help young builders create content that slaps.
                <br />
                <span className="text-maximally-red font-semibold">get featured or collab with our media squad</span> and showcase your startup to the world.
              </p>
              
              <div className="relative inline-block">
                <Link 
                  to="/studios" 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-maximally-red to-maximally-red/90 text-white font-press-start text-lg px-8 py-4 pixel-border hover:scale-105 transform transition-all duration-300 group relative overflow-hidden"
                  style={{
                    boxShadow: '0 0 20px rgba(229, 9, 20, 0.3), 4px 4px 0 rgba(0, 0, 0, 0.8)',
                    animation: 'studio-flicker 8s infinite'
                  }}
                >
                  <span className="relative z-10">explore studios</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-maximally-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Underground Events Teaser Section */}
        <section className="py-16 bg-maximally-black relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5" />
          
          {/* Repositioned Glitch Overlays */}
          {[...Array(4)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-3 h-3 bg-maximally-red/20 pixel-border animate-float" 
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
                animationDelay: `${i * 1}s`,
                animationDuration: `${4 + i}s`
              }} 
            />
          ))}

          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-press-start text-2xl md:text-3xl text-white mb-4 leading-tight group">
                <span className="text-maximally-red group-hover:animate-pulse">maximally events</span>
                <br />
                <span className="text-white/90">india's underground innovation league</span>
              </h2>
              
              <p className="font-jetbrains text-lg text-white/80 mb-6 leading-relaxed">
                from <span className="text-maximally-yellow">stealth hackathons</span> to 
                <span className="text-maximally-yellow"> ₹99 hustle wars</span> —
                <br />
                this isn't a school competition. this is startup warfare.
              </p>
              
              <Link 
                to="/events" 
                className="inline-flex items-center gap-2 bg-maximally-red text-white font-press-start text-sm px-6 py-3 pixel-border hover:scale-105 transform transition-all duration-300 hover:shadow-glow-red group"
              >
                <span>see all formats</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Pixel Divider */}
        <div className="relative bg-maximally-black">
          <div className="absolute inset-0 bg-grid-white/10" />
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center py-4">
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-2 h-2 bg-maximally-red pixel-border animate-pulse" 
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why Maximally Section */}
        <section className="py-16 bg-maximally-red text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-press-start text-center mb-8">
              &gt;&gt; Why Maximally_
            </h2>
            <p className="text-center font-jetbrains text-lg mb-12 opacity-90">
              The Startup Makeathon is built on this promise:
            </p>
            
            <WhyMaximally />
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="py-16 bg-maximally-red/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-press-start mb-8">Partner With Us</h2>
            <p className="font-jetbrains text-maximally-black/80 max-w-2xl mx-auto mb-8">
              We partner with schools, creators, and changemakers to bring real-world learning to ambitious teens.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
              <div className="pixel-border bg-white p-6">
                <h3 className="font-press-start text-xl mb-2">Schools</h3>
                <p className="font-jetbrains text-maximally-black/80">Partner to bring practical skills to your students</p>
              </div>
              <div className="pixel-border bg-white p-6">
                <h3 className="font-press-start text-xl mb-2">Creators</h3>
                <p className="font-jetbrains text-maximally-black/80">Share your expertise with ambitious teens</p>
              </div>
              <div className="pixel-border bg-white p-6">
                <h3 className="font-press-start text-xl mb-2">Organizations</h3>
                <p className="font-jetbrains text-maximally-black/80">Create impact through youth collaboration</p>
              </div>
            </div>
            <Link to="/collaborate" className="pixel-button bg-maximally-red text-white inline-flex items-center gap-2 hover:animate-pulse">
              Start Collaborating
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-maximally-black text-white">
          <div className="container mx-auto px-4 text-center">
            <Sparkles className="h-12 w-12 text-maximally-yellow mx-auto mb-6" />
            <h2 className="text-3xl font-press-start mb-8 animate-glow">
              Ready to level up?
            </h2>
            <p className="font-jetbrains text-white/80 max-w-2xl mx-auto mb-8">
              Join our community of ambitious teens and start building your future today.
            </p>
            <Link to="/bootcamps" className="pixel-button bg-maximally-red inline-flex items-center gap-2 hover:animate-pulse">
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Scroll to Top */}
        <button onClick={() => window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })} className={`fixed bottom-24 right-8 pixel-button bg-maximally-black text-white transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          ↑
        </button>

        <Footer />
        <TallyFormDialog open={isTallyFormOpen} onOpenChange={setIsTallyFormOpen} />
      </div>
    </>
  );
};
export default Index;
const SummerBootcamps = () => {
  return;
};
