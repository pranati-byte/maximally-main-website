import { useEffect, useState } from 'react';
import { ArrowRight, Star, Users, Target, Rocket, Sparkles, Crown, Code, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SkillTracks from '@/components/SkillTracks';
import WhyMaximally from '@/components/WhyMaximally';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import { Helmet } from 'react-helmet';
import SEO from '@/components/SEO';
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
  const fullText = 'Level up your future';
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
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
  return <>
      <SEO title="Maximally.in | Skill-building for Indian Teenagers" description="Join India's premier teen education platform. Learn AI, Digital Marketing, Public Speaking & more through hands-on bootcamps designed for Indian students." keywords="skill-building for Indian teenagers, bootcamps for students in India, learn digital marketing AI no-code, teen education India, social impact edtech startup" canonicalUrl="https://maximally.in" structuredData={structuredData} />
      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Hero Section */}
        <section className="min-h-screen relative">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 bg-gradient-to-br from-maximally-blue/10 via-white to-maximally-red/10" />
          <div className="absolute inset-0 pixel-grid opacity-50" />

          {/* Floating Pixels */}
          {[...Array(8)].map((_, i) => <div key={i} className="absolute w-4 h-4 bg-maximally-blue/20 pixel-border animate-float" style={{
          top: `${Math.random() * 90}%`,
          left: `${Math.random() * 90}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: `${4 + i}s`
        }} />)}

          <div className="relative container mx-auto px-4 pt-32 pb-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 inline-block">
                <div className="pixel-border bg-maximally-blue p-3 animate-pulse">
                  <Target className="h-8 w-8 text-white" />
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-press-start text-maximally-black mb-8">
                {text}
                <span className="inline-block w-[3px] h-[1em] bg-maximally-blue ml-1 animate-[cursor-blink_1s_infinite]" />
              </h1>

              <p className="font-jetbrains text-xl text-maximally-black/80 max-w-2xl mx-auto mb-12 opacity-0 animate-[fadeIn_1s_ease-in_forwards_1s]">
                Join a community of ambitious teens learning real-world skills through hands-on projects.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/bootcamps" className="pixel-button bg-maximally-blue text-white group flex items-center gap-2 hover:animate-pulse w-full sm:w-auto">
                  <span>Start Learning</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link to="/community" className="pixel-button bg-white text-maximally-black border-2 border-maximally-black group flex items-center gap-2 w-full sm:w-auto">
                  <span>Join Community</span>
                  <Users className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => <div key={index} className={`pixel-border p-8 bg-white transition-all duration-500 ${activeFeature === index ? 'scale-105 shadow-xl' : 'scale-100'}`}>
                  <div className="w-12 h-12 bg-maximally-blue pixel-border flex items-center justify-center mb-6">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-press-start text-lg mb-4">{feature.title}</h3>
                  <p className="font-jetbrains text-maximally-black/70">{feature.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Industry Leaders Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-maximally-blue/10 via-white to-maximally-purple/10" />
          <div className="absolute inset-0 pixel-grid opacity-30" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-maximally-blue/20 px-6 py-2 rounded-full mb-6 animate-pulse">
                <span className="font-jetbrains text-maximally-blue font-bold">
                  🌟 Learn from the Best
                </span>
              </div>
              
              <h2 className="font-press-start text-3xl md:text-4xl mb-8 bg-gradient-to-r from-maximally-blue via-maximally-purple to-maximally-red bg-clip-text text-transparent">
                Learn From Industry Leaders & Top University Students
              </h2>
              
              <div className="space-y-6 font-jetbrains text-lg">
                <p className="mb-6">
                  Learn from industry leaders at Meta, Google, and Apple, alongside brilliant students from Harvard, MIT, and Stanford. Our mentors are shaping the future of technology and innovation.
                </p>
                
                <p>
                  Master cutting-edge skills directly from tech giants and top university talent. Get real-world knowledge and guidance from those at the forefront of their fields.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="pixel-border p-6 bg-white hover:transform hover:scale-105 transition-all duration-300 group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div className="font-press-start text-xl mb-2 group-hover:text-maximally-blue transition-colors">Meta</div>
                  <div className="font-jetbrains text-sm text-maximally-black/70">Industry Expert</div>
                </div>
                <div className="pixel-border p-6 bg-white hover:transform hover:scale-105 transition-all duration-300 group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div className="font-press-start text-xl mb-2 group-hover:text-maximally-blue transition-colors">Harvard</div>
                  <div className="font-jetbrains text-sm text-maximally-black/70">Student Mentor</div>
                </div>
                <div className="pixel-border p-6 bg-white hover:transform hover:scale-105 transition-all duration-300 group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <div className="font-press-start text-xl mb-2 group-hover:text-maximally-blue transition-colors">Google</div>
                  <div className="font-jetbrains text-sm text-maximally-black/70">Industry Expert</div>
                </div>
                <div className="pixel-border p-6 bg-white hover:transform hover:scale-105 transition-all duration-300 group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div className="font-press-start text-xl mb-2 group-hover:text-maximally-blue transition-colors">MIT</div>
                  <div className="font-jetbrains text-sm text-maximally-black/70">Student Mentor</div>
                </div>
              </div>

              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta Logo" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
                <img src="https://1000logos.net/wp-content/uploads/2017/02/Harvard-Logo.png" alt="Harvard Logo" className="h-12 object-contain grayscale hover:grayscale-0 transition-all" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google Logo" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg" alt="MIT Logo" className="h-10 object-contain grayscale hover:grayscale-0 transition-all" />
              </div>

              <div className="mt-12">
                <Link to="/bootcamps" className="pixel-button bg-maximally-blue text-white group inline-flex items-center gap-2 hover:animate-pulse px-8 py-4">
                  <span className="text-lg">Join Now & Learn from the Best</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <SkillTracks />

        {/* Summer 2025 Section */}
        <section className="py-20 bg-maximally-black relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 animate-grid-flow" />
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-12">
              <div className="inline-block bg-maximally-blue/20 px-4 py-2 rounded-full mb-6 animate-pulse">
                <span className="font-jetbrains text-maximally-blue">
                  ⭐ Limited Spots Available
                </span>
              </div>
              <h2 className="font-press-start text-4xl text-maximally-blue mb-4">
                Summer Programme 2025
              </h2>
              <p className="font-jetbrains text-white/80 mb-8 max-w-2xl mx-auto">
                Join India's most innovative summer program for teenagers. Learn real-world skills through hands-on projects and expert mentorship.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
                <div className="pixel-border bg-white/10 p-6 text-white">
                  <h3 className="font-press-start text-xl mb-2">6+ Programs</h3>
                  <p className="font-jetbrains text-white/80">From AI to Public Speaking</p>
                </div>
                <div className="pixel-border bg-white/10 p-6 text-white">
                  <h3 className="font-press-start text-xl mb-2">2-3 Weeks</h3>
                  <p className="font-jetbrains text-white/80">Intensive Learning</p>
                </div>
                <div className="pixel-border bg-white/10 p-6 text-white">
                  <h3 className="font-press-start text-xl mb-2">₹799-1299</h3>
                  <p className="font-jetbrains text-white/80">Early Bird Pricing</p>
                </div>
              </div>
              <Link to="/bootcamps" className="pixel-button bg-maximally-red text-white inline-flex items-center gap-2 hover:animate-pulse">
                <span>View All Bootcamps</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Summer Bootcamps Section */}
        <SummerBootcamps />

        {/* Why Choose Section */}
        <WhyMaximally />

        {/* Testimonials */}
        <Testimonials />

        {/* Collaboration Section */}
        <section className="py-20 bg-maximally-blue/5">
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
            <Link to="/collaborate" className="pixel-button bg-maximally-blue text-white inline-flex items-center gap-2 hover:animate-pulse">
              Start Collaborating
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-maximally-black text-white">
          <div className="container mx-auto px-4 text-center">
            <Sparkles className="h-12 w-12 text-maximally-blue mx-auto mb-6" />
            <h2 className="text-3xl font-press-start mb-8 animate-glow">
              Ready to level up?
            </h2>
            <p className="font-jetbrains text-white/80 max-w-2xl mx-auto mb-8">
              Join our community of ambitious teens and start building your future today.
            </p>
            <Link to="/bootcamps" className="pixel-button bg-maximally-blue inline-flex items-center gap-2 hover:animate-pulse">
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Scroll to Top */}
        <button onClick={() => window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })} className={`fixed bottom-8 right-8 pixel-button bg-maximally-black text-white transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          ↑
        </button>

        <Footer />
      </div>
    </>;
};
export default Index;
const SummerBootcamps = () => {
  return;
};