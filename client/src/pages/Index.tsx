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
                {/* Featured Shipathon CTA */}
                <div className="w-full">
                  <Link
                    to="/shipathon"
                    className="pixel-button bg-gradient-to-r from-black via-red-600 to-black text-white group flex items-center justify-center gap-2 hover:scale-105 transform transition-all hover:shadow-glow-red h-18 px-8 font-press-start text-sm w-full border-4 border-red-600"
                  >
                    <span>🚢</span>
                    <span>Register for AI Shipathon</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Secondary CTAs */}
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

        {/* AI Shipathon CTA Section */}
        <section className="py-20 px-4 bg-black relative overflow-hidden">
          {/* Pixel stars background */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-red-500 animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto text-center relative z-10">
            {/* Pixel Ship */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div
                  className="w-24 h-12 bg-red-600 relative"
                  style={{
                    clipPath:
                      "polygon(10% 100%, 0% 70%, 20% 0%, 80% 0%, 100% 70%, 90% 100%)",
                  }}
                >
                  <div className="absolute top-4 left-2 w-2 h-2 bg-black"></div>
                  <div className="absolute top-4 left-6 w-2 h-2 bg-black"></div>
                  <div className="absolute top-4 left-10 w-2 h-2 bg-black"></div>
                </div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-red-500"></div>
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 translate-x-2 w-8 h-6 bg-red-500 border-2 border-red-700">
                  <div className="text-xs text-black font-bold">AI</div>
                </div>
              </div>
            </div>

            <h2 className="font-press-start text-3xl md:text-5xl text-red-500 mb-6">
              AI SHIPATHON
            </h2>

            <div className="bg-red-600 border-4 border-red-800 p-6 max-w-4xl mx-auto mb-8">
              <p className="font-press-start text-lg md:text-xl text-white leading-relaxed">
                48 HOURS. BUILD WITH AI. SHIP YOUR FIRST PROJECT. MEET BUILDERS
                LIKE YOU.
              </p>
            </div>

            <div className="text-center mb-8">
              <div className="bg-black border-4 border-red-600 px-6 py-3 inline-block mb-4">
                <p className="font-press-start text-red-500 text-lg">
                  AUG 30 - SEP 1, 2025
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/shipathon"
                className="bg-red-600 hover:bg-red-700 text-white font-black py-4 px-8 text-lg border-4 border-red-800 shadow-2xl transform hover:scale-105 transition-all inline-flex items-center gap-2"
                style={{ fontFamily: "Press Start 2P, monospace" }}
              >
                <span>⚡</span>
                LEARN MORE
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="https://maximally-ai-shipathon-2025.devpost.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-900 text-red-500 font-black py-4 px-8 text-lg border-4 border-red-600 shadow-2xl transform hover:scale-105 transition-all inline-flex items-center gap-2"
                style={{ fontFamily: "Press Start 2P, monospace" }}
              >
                <span>🚢</span>
                REGISTER NOW
              </a>
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
                We host execution-first challenges for engineers, founders, and
                creatives worldwide.
              </p>
              <p className="font-jetbrains text-lg md:text-xl text-maximally-black/70">
                Proof-of-work platform where ambitious builders create, launch,
                and compete with real solutions — designed for emerging talent
                across all disciplines.
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
                  <h3 className="font-press-start text-2xl text-white mb-2">
                    Global
                  </h3>
                  <p className="font-jetbrains text-white/80">
                    Borderless innovation for builders worldwide
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-black/40 p-8 rounded-lg border-2 border-[#00ff99] hover:scale-105 transform transition-all duration-300">
                  <Code className="h-12 w-12 text-[#00ff99] mx-auto mb-4" />
                  <h3 className="font-press-start text-2xl text-white mb-2">
                    Digital
                  </h3>
                  <p className="font-jetbrains text-white/80">
                    Internet-native events for digital builders
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-black/40 p-8 rounded-lg border-2 border-[#00ffcc] hover:scale-105 transform transition-all duration-300">
                  <Zap className="h-12 w-12 text-[#00ffcc] mx-auto mb-4" />
                  <h3 className="font-press-start text-2xl text-white mb-2">
                    Fast
                  </h3>
                  <p className="font-jetbrains text-white/80">
                    High-pressure sprints for real proof of work
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="font-jetbrains text-xl text-white/90 max-w-3xl mx-auto mb-8">
                At Maximally, we believe innovation has no borders — and no
                traditional limits. Whether you're from a metro or a small town,
                if you're building bold things, you belong here.
              </p>
            </div>
          </div>
        </section>

        {/* Featured AI Shipathon Blog Posts */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="font-press-start text-3xl md:text-4xl text-center text-maximally-black mb-16">
              AI Shipathon Guide
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link 
                to="/blog/maximally-ai-shipathon-guide"
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="bg-maximally-blue/10 p-3 rounded-lg mb-4 w-fit">
                  <Zap className="h-6 w-6 text-maximally-blue" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-maximally-black group-hover:text-maximally-blue">
                  What is the AI Shipathon?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Your complete guide to joining the Maximally AI Shipathon and building your first AI project.
                </p>
                <span className="text-maximally-blue text-sm font-medium">8 min read →</span>
              </Link>

              <Link 
                to="/blog/top-ai-hackathons-students-2025"
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="bg-maximally-green/10 p-3 rounded-lg mb-4 w-fit">
                  <Trophy className="h-6 w-6 text-maximally-green" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-maximally-black group-hover:text-maximally-green">
                  Top AI Hackathons 2025
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Compare the best AI hackathons for students and discover why ours is different.
                </p>
                <span className="text-maximally-green text-sm font-medium">10 min read →</span>
              </Link>

              <Link 
                to="/blog/no-code-ai-shipathon"
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="bg-purple-100 p-3 rounded-lg mb-4 w-fit">
                  <Code className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-maximally-black group-hover:text-purple-600">
                  No Code? No Problem
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn how anyone can join the AI Shipathon using no-code tools and creativity.
                </p>
                <span className="text-purple-600 text-sm font-medium">7 min read →</span>
              </Link>

              <Link 
                to="/blog/first-ai-project-48-hours"
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="bg-orange-100 p-3 rounded-lg mb-4 w-fit">
                  <Terminal className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-maximally-black group-hover:text-orange-600">
                  48-Hour Success Story
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Real story of building a first AI project in 48 hours and how you can too.
                </p>
                <span className="text-orange-600 text-sm font-medium">9 min read →</span>
              </Link>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/blog"
                className="pixel-button bg-maximally-blue text-white inline-flex items-center gap-2 px-8 py-4 text-lg hover:scale-105 transform transition-all"
              >
                <span>Read All Blog Posts</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Partner With Us Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto text-center">
            <div className="container mx-auto text-center">
              <h2 className="font-press-start text-3xl md:text-4xl text-maximally-black mb-8">
                Let's Build the Innovation League — Together
              </h2>

              <div className="max-w-3xl mx-auto mb-12">
                <p className="font-jetbrains text-xl md:text-2xl text-maximally-black/80 mb-6">
                  We partner with organizations, creators, and brands to host
                  transformative hackathons that inspire innovation and
                  real-world impact.
                </p>
                <p className="font-jetbrains text-lg md:text-xl text-maximally-black/70">
                  Ready to host a hackathon that empowers the next generation of
                  builders? Let's collaborate.
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
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
