import { useEffect, useState } from 'react';
import { ArrowRight, Star, Users, Target, Rocket, Sparkles, Crown, Code, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SkillTracks from '@/components/SkillTracks';
import WhyMaximally from '@/components/WhyMaximally';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import { Helmet } from 'react-helmet';


const SEO = ({ title, description, keywords, canonicalUrl, structuredData }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </Helmet>
  );
};


const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Maximally.in",
    "description": "Premier skill development platform for Indian teenagers - Learn AI, Digital Marketing, Public Speaking & more",
    "url": "https://maximally.in",
    "logo": "https://maximally.in/logo.png",
    "sameAs": [
      "https://twitter.com/maximallyHQ",
      "https://instagram.com/maximallyHQ"
    ]
  };

  const [text, setText] = useState('');
  const fullText = 'Level up your future';
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    { icon: Code, title: "Learn Real Skills", description: "No more theory. Build real projects." },
    { icon: Users, title: "Join the Community", description: "Connect with ambitious teens." },
    { icon: Zap, title: "Grow Faster", description: "Accelerate your learning journey." }
  ];

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
      <SEO 
        title="Maximally.in | Learn Real-World Skills - AI, Digital Marketing, Public Speaking"
        description="Join India's leading teen education platform. Master AI, Digital Marketing, Public Speaking & more through live bootcamps and hands-on projects."
        keywords="teen education India, digital skills for students, AI courses for teens, public speaking classes India"
        canonicalUrl="https://maximally.in"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Hero Section */}
        <section className="min-h-screen relative">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 bg-gradient-to-br from-maximally-blue/10 via-white to-maximally-red/10" />
          <div className="absolute inset-0 pixel-grid opacity-50" />

          {/* Floating Pixels */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-maximally-blue/20 pixel-border animate-float"
              style={{
                top: `${Math.random() * 90}%`,
                left: `${Math.random() * 90}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i}s`
              }}
            />
          ))}

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
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`pixel-border p-8 bg-white transition-all duration-500 ${
                    activeFeature === index ? 'scale-105 shadow-xl' : 'scale-100'
                  }`}
                >
                  <div className="w-12 h-12 bg-maximally-blue pixel-border flex items-center justify-center mb-6">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-press-start text-lg mb-4">{feature.title}</h3>
                  <p className="font-jetbrains text-maximally-black/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <SkillTracks />

        {/* Why Choose Section */}
        <WhyMaximally />

        {/* Testimonials */}
        <Testimonials />

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
            <Link 
              to="/bootcamps"
              className="pixel-button bg-maximally-blue inline-flex items-center gap-2 hover:animate-pulse"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Scroll to Top */}
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
    </>
  );
};

export default Index;