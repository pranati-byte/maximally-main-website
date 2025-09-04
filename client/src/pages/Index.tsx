import { useEffect, useState } from "react";
import {
  ArrowRight,
  Users,
  Target,
  Trophy,
  Globe,
  Code,
  Zap,
  Terminal,
} from "lucide-react";
import { Link } from "react-router-dom";

import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Maximally",
    description:
      "A global innovation league that hosts high-stakes hackathons for ambitious builders across disciplines worldwide",
    url: "https://maximally.in",
    logo: "https://maximally.in/logo.png",
    sameAs: [
      "https://twitter.com/maximallyHQ",
      "https://instagram.com/maximallyHQ",
    ],
  };

  const [text, setText] = useState("");
  const fullText = "We Host Hackathons";
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

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <SEO
        title="Maximally - Global Teen Hackathon Platform"
        description="Join the world's premier teen hackathon platform. AI shipathons, startup makeathons & Gen Z builder challenges. Global innovation league for ambitious teens."
        keywords="teen hackathons, global hackathons, startup makeathons, AI shipathon, Gen Z builders, teen innovation, global tech"
        canonicalUrl="https://maximally.in"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Event",
          "name": "Maximally AI Shipathon",
          "description": "The world's premier teen hackathon platform for AI projects and startup makeathons",
          "organizer": {
            "@type": "Organization",
            "name": "Maximally",
            "url": "https://maximally.in"
          },
          "location": {
            "@type": "Place",
            "name": "Online and Global",
            "address": "Worldwide"
          },
          "audience": {
            "@type": "Audience",
            "name": "Teen builders, students, Gen Z innovators"
          }
        }}
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
                animationDuration: `${4 + i}s`,
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

              {/* Floating Subtext with Twist */}
              <div className="relative mb-8 opacity-0 animate-[fadeIn_1s_ease-in_forwards_1.5s]">
                <div className="inline-block relative">
                  <p
                    className="font-jetbrains text-base sm:text-lg text-maximally-black/60 font-medium"
                    style={{ animation: "float-twist 4s ease-in-out infinite" }}
                  >
                    but not the boring ones
                  </p>
                  <div
                    className="absolute -top-1 -right-6 transform"
                    style={{
                      animation: "sparkle 2s ease-in-out infinite",
                      animationDelay: "2s",
                    }}
                  >
                    <span className="text-maximally-red text-lg">⚡</span>
                  </div>
                  <div
                    className="absolute -bottom-1 -left-4 transform"
                    style={{
                      animation: "sparkle 2.5s ease-in-out infinite",
                      animationDelay: "3s",
                    }}
                  >
                    <span className="text-maximally-yellow text-sm">✨</span>
                  </div>
                </div>
              </div>

              <p className="font-jetbrains text-lg sm:text-xl text-maximally-black/80 max-w-3xl mx-auto mb-8 sm:mb-12 px-4 opacity-0 animate-[fadeIn_1s_ease-in_forwards_2s]">
                A global innovation league that hosts high-stakes hackathons for
                ambitious builders across disciplines.
              </p>

              {/* CTAs */}
              <div className="relative max-w-2xl mx-auto space-y-6">
                {/* Primary CTAs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Link
                    to="/events"
                    className="pixel-button bg-maximally-red text-white group flex items-center justify-center gap-2 hover:scale-105 transform transition-all hover:shadow-glow-red h-16 px-6 font-press-start text-sm"
                  >
                    <span>Explore Events</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/join"
                    className="bg-maximally-yellow text-maximally-black group flex items-center justify-center gap-2 hover:scale-105 transform transition-all hover:bg-maximally-red hover:text-white h-16 px-6 font-body font-medium rounded-hero-cta"
                  >
                    <Users className="h-4 w-4" />
                    <span>Join the League</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Featured Event Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
          <div className="container mx-auto relative">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-maximally-black mb-4">
                Featured Event
              </h2>
              <p className="font-body text-lg text-maximally-gray">
                Join our next high-stakes innovation sprint
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="glass-card rounded-card p-8 md:p-12 relative overflow-hidden group hover:scale-102 transition-all duration-300">
                <div className="absolute top-4 right-4 bg-maximally-red text-white px-3 py-1 rounded-full font-body font-medium text-xs">
                  FEATURED
                </div>
                
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-maximally-black mb-4">
                      Maximally AI Shipathon
                    </h3>
                    <p className="font-body text-maximally-gray mb-6 text-lg">
                      Build AI products that ship. 48 hours of pure execution - no lectures, just coding and launching real solutions.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-maximally-red rounded-full"></div>
                        <span className="font-body text-sm text-maximally-gray">Feb 15-17, 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-maximally-yellow rounded-full"></div>
                        <span className="font-body text-sm text-maximally-gray">48 Hours</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-maximally-blue rounded-full"></div>
                        <span className="font-body text-sm text-maximally-gray">Online Global</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-maximally-green rounded-full"></div>
                        <span className="font-body text-sm text-maximally-gray">$5K+ Prizes</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center md:text-right">
                    <Link
                      to="/events/ai-shipathon"
                      className="bg-maximally-red text-white px-8 py-4 rounded-hero-cta font-body font-medium hover:bg-maximally-yellow hover:text-maximally-black transition-all duration-200 inline-flex items-center gap-2"
                    >
                      <span>Register Now</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                    <p className="font-body text-xs text-maximally-gray mt-2">Registration closes Feb 10</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Past Event Section */}
        <section className="py-20 px-4 bg-white relative overflow-hidden">
          <div className="container mx-auto relative">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-maximally-black mb-4">
                Recent Success
              </h2>
              <p className="font-body text-lg text-maximally-gray">
                Highlights from our latest innovation sprint
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="glass-card rounded-card p-8 md:p-12 relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="px-3 py-1 bg-maximally-green/20 text-maximally-green rounded-full font-body font-medium text-xs">
                        COMPLETED
                      </div>
                      <span className="font-body text-sm text-maximally-gray">Dec 14-15, 2024</span>
                    </div>
                    
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-maximally-black mb-4">
                      Protocol 404
                    </h3>
                    <p className="font-body text-maximally-gray mb-6 text-lg">
                      When the system is broken, build anyway. 36 hours of chaos engineering and problem-solving innovation.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-6 mb-6">
                      <div className="text-center">
                        <div className="font-display font-bold text-2xl text-maximally-red mb-1">450+</div>
                        <div className="font-body text-sm text-maximally-gray">Builders</div>
                      </div>
                      <div className="text-center">
                        <div className="font-display font-bold text-2xl text-maximally-yellow mb-1">127</div>
                        <div className="font-body text-sm text-maximally-gray">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="font-display font-bold text-2xl text-maximally-blue mb-1">25</div>
                        <div className="font-body text-sm text-maximally-gray">Countries</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center md:text-right">
                    <Link
                      to="/events/protocol-404"
                      className="glass-button px-6 py-3 rounded-hero-cta font-body font-medium text-maximally-black hover:bg-white/30 transition-all duration-200 inline-flex items-center gap-2"
                    >
                      <span>View Results</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="container mx-auto relative">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-maximally-black mb-4">
                Built Global. Made for Builders.
              </h2>
              <p className="font-body text-lg text-maximally-gray max-w-2xl mx-auto">
                Real proof of work from our global hackathon league
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="glass-card rounded-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="font-display font-bold text-3xl md:text-4xl text-maximally-red mb-2">5,000+</div>
                <div className="font-body text-sm text-maximally-gray">Total Builders</div>
              </div>
              
              <div className="glass-card rounded-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="font-display font-bold text-3xl md:text-4xl text-maximally-yellow mb-2">2,500+</div>
                <div className="font-body text-sm text-maximally-gray">Projects Shipped</div>
              </div>
              
              <div className="glass-card rounded-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="font-display font-bold text-3xl md:text-4xl text-maximally-blue mb-2">150+</div>
                <div className="font-body text-sm text-maximally-gray">Judges & Partners</div>
              </div>
              
              <div className="glass-card rounded-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="font-display font-bold text-3xl md:text-4xl text-maximally-green mb-2">25+</div>
                <div className="font-body text-sm text-maximally-gray">Countries Reached</div>
              </div>
            </div>

            <div className="text-center">
              <p className="font-body text-lg text-maximally-gray max-w-3xl mx-auto">
                At Maximally, we believe innovation has no borders. Whether you're from a major city or a small town, if you're building bold things, you belong here.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-white relative overflow-hidden">
          <div className="container mx-auto relative">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-maximally-black mb-4">
                Builder Stories
              </h2>
              <p className="font-body text-lg text-maximally-gray">
                Real experiences from our global community
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="glass-card rounded-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-maximally-red/20 rounded-full flex items-center justify-center">
                    <span className="font-display font-bold text-maximally-red">A</span>
                  </div>
                  <div>
                    <div className="font-body font-semibold text-maximally-black">Arjun M.</div>
                    <div className="font-body text-xs text-maximally-gray">Mumbai, India</div>
                  </div>
                </div>
                <blockquote className="font-body text-maximally-gray italic mb-4">
                  "Protocol 404 pushed me way beyond my comfort zone. Built my first startup MVP in 36 hours and got real user feedback."
                </blockquote>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-maximally-yellow text-sm">★</span>
                  ))}
                </div>
              </div>
              
              <div className="glass-card rounded-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-maximally-blue/20 rounded-full flex items-center justify-center">
                    <span className="font-display font-bold text-maximally-blue">S</span>
                  </div>
                  <div>
                    <div className="font-body font-semibold text-maximally-black">Sarah K.</div>
                    <div className="font-body text-xs text-maximally-gray">London, UK</div>
                  </div>
                </div>
                <blockquote className="font-body text-maximally-gray italic mb-4">
                  "The AI Shipathon connected me with builders from 20+ countries. Now I'm working on an AI startup with my hackathon team."
                </blockquote>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-maximally-yellow text-sm">★</span>
                  ))}
                </div>
              </div>
              
              <div className="glass-card rounded-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-maximally-green/20 rounded-full flex items-center justify-center">
                    <span className="font-display font-bold text-maximally-green">M</span>
                  </div>
                  <div>
                    <div className="font-body font-semibold text-maximally-black">Marcus T.</div>
                    <div className="font-body text-xs text-maximally-gray">São Paulo, Brazil</div>
                  </div>
                </div>
                <blockquote className="font-body text-maximally-gray italic mb-4">
                  "Code Hypothesis taught me that the craziest ideas can become real products. shipped 3 projects and landed my dream internship."
                </blockquote>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-maximally-yellow text-sm">★</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link
                to="/stories"
                className="glass-button px-6 py-3 rounded-hero-cta font-body font-medium text-maximally-black hover:bg-white/30 transition-all duration-200 inline-flex items-center gap-2"
              >
                <span>Read More Stories</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>


        {/* Partners Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="container mx-auto relative">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-maximally-black mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="font-body text-lg text-maximally-gray">
                Organizations supporting our global hackathon league
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="glass-card rounded-card p-6 flex items-center justify-center hover:scale-105 transition-all duration-300">
                <div className="font-display font-bold text-lg text-maximally-gray">Partner 1</div>
              </div>
              <div className="glass-card rounded-card p-6 flex items-center justify-center hover:scale-105 transition-all duration-300">
                <div className="font-display font-bold text-lg text-maximally-gray">Partner 2</div>
              </div>
              <div className="glass-card rounded-card p-6 flex items-center justify-center hover:scale-105 transition-all duration-300">
                <div className="font-display font-bold text-lg text-maximally-gray">Partner 3</div>
              </div>
              <div className="glass-card rounded-card p-6 flex items-center justify-center hover:scale-105 transition-all duration-300">
                <div className="font-display font-bold text-lg text-maximally-gray">Partner 4</div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-display font-semibold text-xl text-maximally-black mb-4">
                Want to Partner With Us?
              </h3>
              <p className="font-body text-maximally-gray mb-8 max-w-2xl mx-auto">
                We partner with organizations, creators, and brands to host transformative hackathons that inspire innovation and real-world impact.
              </p>
              <Link
                to="/collaborate"
                className="bg-maximally-yellow text-maximally-black px-8 py-4 rounded-hero-cta font-body font-medium hover:bg-maximally-red hover:text-white transition-all duration-200 inline-flex items-center gap-2"
              >
                <Users className="h-5 w-5" />
                <span>Partner With Us</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section className="py-20 px-4 bg-maximally-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
          <div className="container mx-auto relative text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to Join the League?
            </h2>
            <p className="font-body text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              Connect with builders worldwide and be part of the next generation of innovators.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Link
                to="/events"
                className="glass-button border border-white/20 text-white px-8 py-4 rounded-hero-cta font-body font-medium hover:bg-white/10 transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                <Trophy className="h-5 w-5" />
                <span>Explore Events</span>
              </Link>
              
              <Link
                to="/join"
                className="bg-maximally-red text-white px-8 py-4 rounded-hero-cta font-body font-medium hover:bg-maximally-yellow hover:text-maximally-black transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                <Users className="h-5 w-5" />
                <span>Join Community</span>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
