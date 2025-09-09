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
  Github,
  ExternalLink,
  Calendar,
  Play,
  FileText,
  Cpu,
  Database,
  Palette,
  TestTube,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const [text, setText] = useState("");
  const fullText = "WE HOST HACKATHONS";
  const [floatingPixels, setFloatingPixels] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate floating pixels
    const pixels = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setFloatingPixels(pixels);

    // Typing effect
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <SEO
        title="Maximally - World's First AI-Native Hackathon Platform"
        description="Built by hackers, for hackers. Not another DevPost clone. Join the global innovation league hosting high-stakes hackathons."
        keywords="hackathon platform, AI-native, hacker culture, Grand Indian Hackathon Season, developer tools"
        canonicalUrl="https://maximally.in"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Maximally",
          "description": "World's first AI-native hackathon platform built by hackers, for hackers",
          "url": "https://maximally.in"
        }}
      />

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Pixel Grid Background */}
        <div className="fixed inset-0 bg-black" />
        <div className="fixed inset-0 bg-[linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating Pixels */}
        {floatingPixels.map((pixel) => (
          <div
            key={pixel.id}
            className="fixed w-2 h-2 bg-maximally-red pixel-border animate-float pointer-events-none"
            style={{
              left: `${pixel.x}%`,
              top: `${pixel.y}%`,
              animationDelay: `${pixel.delay}s`,
              animationDuration: `${4 + pixel.delay}s`,
            }}
          />
        ))}

        {/* Hero Section */}
        <section className="min-h-screen relative flex items-center">
          <div className="container mx-auto px-4 z-10">
            <div className="max-w-6xl mx-auto text-center">
              {/* System Alert */}
              <div className="mb-8">
                <div className="inline-block minecraft-block bg-maximally-red p-3">
                  <div className="flex items-center gap-2 text-white font-press-start text-xs">
                    <Terminal className="h-4 w-4 animate-pulse" />
                    <span>SYSTEM.STATUS: DISRUPTING_HACKATHON_INDUSTRY</span>
                  </div>
                </div>
              </div>

              {/* Main Title */}
              <h1 className="font-press-start text-4xl md:text-7xl lg:text-8xl font-bold mb-8 minecraft-text">
                <span className="text-maximally-red drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  {text}
                </span>
                <span className="inline-block w-2 h-16 bg-maximally-red ml-2 animate-[cursor-blink_1s_infinite]" />
              </h1>

              <div className="text-xl md:text-2xl font-press-start text-gray-300 mb-4">
                <span className="text-maximally-red">but not the boring ones</span> ⚡
              </div>

              <p className="text-gray-400 text-lg max-w-3xl mx-auto font-jetbrains leading-relaxed mb-12">
                A global innovation league that hosts high-stakes hackathons for
                ambitious builders. Built by hackers, for hackers.
              </p>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link
                  to="/events"
                  className="pixel-button bg-maximally-red text-white group flex items-center justify-center gap-2 hover:scale-105 transform transition-all hover:shadow-glow-red h-16 px-8 font-press-start text-sm"
                >
                  <Terminal className="h-5 w-5" />
                  <span>EXPLORE_EVENTS</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="https://discord.gg/MpBnYk8qMX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-button bg-maximally-yellow text-maximally-black group flex items-center justify-center gap-2 hover:scale-105 transform transition-all hover:shadow-glow-yellow h-16 px-8 font-press-start text-sm"
                >
                  <Users className="h-5 w-5" />
                  <span>JOIN_DISCORD</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Grand Indian Hackathon Season Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <div className="minecraft-block bg-gradient-to-r from-orange-500 to-red-500 text-black px-6 py-3 inline-block mb-6">
                  <span className="font-press-start text-sm">🇮🇳 GRAND INDIAN HACKATHON SEASON 2025</span>
                </div>
                <h2 className="font-press-start text-4xl md:text-6xl font-bold mb-6 minecraft-text">
                  <span className="text-maximally-red drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                    10 HACKATHONS
                  </span>
                </h2>
                <p className="text-gray-300 text-xl font-press-start">
                  September → November • India's Biggest Hackathon Season
                </p>
              </div>

              {/* Event Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
                {[
                  { name: "CODE HYPOTHESIS", date: "SEP 2025", icon: "🧪" },
                  { name: "PROTOCOL 404", date: "OCT 2025", icon: "⚡" },
                  { name: "PROJECT CODEGEN", date: "OCT 2025", icon: "📝" },
                  { name: "HACKTOBER", date: "OCT 2025", icon: "🍂" },
                  { name: "PROMPTSTORM", date: "OCT 25-26", icon: "⚡" },
                  { name: "TECH ASSEMBLY", date: "NOV 1-7", icon: "🎮" },
                  { name: "STEAL-A-THON", date: "NOV 9-10", icon: "🔥" },
                  { name: "CODEPOCALYPSE", date: "OCT 18-19", icon: "☢️" },
                ].slice(0, 10).map((event, i) => (
                  <div
                    key={i}
                    className="pixel-card bg-gray-900 border-2 border-maximally-red hover:border-maximally-yellow transition-all duration-300 hover:scale-105 p-4"
                  >
                    <div className="text-2xl mb-2 text-center">{event.icon}</div>
                    <div className="font-press-start text-xs text-maximally-red text-center mb-1">
                      {event.name}
                    </div>
                    <div className="font-press-start text-xs text-gray-400 text-center">
                      {event.date}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  to="/events"
                  className="pixel-button bg-maximally-red text-white inline-flex items-center gap-2 px-8 py-4 font-press-start hover:scale-105 transition-all duration-300"
                >
                  <Calendar className="h-5 w-5" />
                  <span>VIEW_ALL_EVENTS</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Building Maximally Hack Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              {/* Header */}
              <div className="mb-16">
                <div className="minecraft-block bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-6 py-3 inline-block mb-6">
                  <span className="font-press-start text-sm">🚀 WE'RE BUILDING</span>
                </div>
                <h2 className="font-press-start text-4xl md:text-6xl font-bold mb-6 minecraft-text">
                  <span className="text-maximally-red drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                    MAXIMALLY HACK
                  </span>
                </h2>
                <p className="text-2xl md:text-3xl font-press-start text-gray-300 mb-6">
                  the world's first ai-native hackathon platform ⚡
                </p>
                <p className="text-xl font-press-start text-maximally-red">
                  not another devpost clone — built by hackers, for hackers.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="pixel-card bg-black border-2 border-maximally-red p-6 hover:border-maximally-yellow transition-all duration-300">
                  <div className="minecraft-block bg-maximally-red w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="font-press-start text-sm text-maximally-red mb-2">
                    AI-POWERED
                  </h3>
                  <p className="font-jetbrains text-gray-300 text-sm">
                    Smart project matching, automated judging, real-time insights
                  </p>
                </div>
                <div className="pixel-card bg-black border-2 border-maximally-red p-6 hover:border-maximally-yellow transition-all duration-300">
                  <div className="minecraft-block bg-maximally-red w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Terminal className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="font-press-start text-sm text-maximally-red mb-2">
                    HACKER-FIRST
                  </h3>
                  <p className="font-jetbrains text-gray-300 text-sm">
                    Built for the community, by the community. Zero corporate BS.
                  </p>
                </div>
                <div className="pixel-card bg-black border-2 border-maximally-red p-6 hover:border-maximally-yellow transition-all duration-300">
                  <div className="minecraft-block bg-maximally-red w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="font-press-start text-sm text-maximally-red mb-2">
                    GLOBAL SCALE
                  </h3>
                  <p className="font-jetbrains text-gray-300 text-sm">
                    Connect builders worldwide. Break geographical barriers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contributors Section */}
        <section className="py-20 bg-black relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <div className="minecraft-block bg-gradient-to-r from-green-500 to-emerald-500 text-black px-6 py-3 inline-block mb-6">
                  <span className="font-press-start text-sm">👩‍💻 WE NEED CONTRIBUTORS</span>
                </div>
                <h2 className="font-press-start text-4xl md:text-5xl font-bold mb-6 minecraft-text">
                  <span className="text-maximally-red drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                    JOIN THE BUILD
                  </span>
                </h2>
                <p className="text-gray-300 text-xl font-jetbrains mb-8">
                  Help us revolutionize how hackathons work. Open source, community-driven.
                </p>
              </div>

              {/* Roles Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                {[
                  { role: "FRONTEND", icon: <Code className="h-6 w-6" />, color: "bg-blue-600" },
                  { role: "BACKEND", icon: <Database className="h-6 w-6" />, color: "bg-green-600" },
                  { role: "DESIGN", icon: <Palette className="h-6 w-6" />, color: "bg-purple-600" },
                  { role: "TESTING", icon: <TestTube className="h-6 w-6" />, color: "bg-yellow-600" },
                  { role: "DEVOPS", icon: <Settings className="h-6 w-6" />, color: "bg-red-600" },
                  { role: "AI/ML", icon: <Cpu className="h-6 w-6" />, color: "bg-cyan-600" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="pixel-card bg-black border-2 border-maximally-red p-4 text-center hover:border-maximally-yellow transition-all duration-300 hover:scale-105"
                  >
                    <div className={`minecraft-block ${item.color} w-10 h-10 mx-auto mb-2 flex items-center justify-center text-white`}>
                      {item.icon}
                    </div>
                    <div className="font-press-start text-xs text-maximally-red">
                      {item.role}
                    </div>
                  </div>
                ))}
              </div>

              {/* Links */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href="https://www.notion.so/Maximally-Hack-Contributor-Handbook-264ecfba8afb807aa9cbeef6e8d294c1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-card bg-black border-2 border-blue-500 p-6 hover:scale-105 transition-all duration-300 hover:border-maximally-yellow group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="minecraft-block bg-blue-500 w-8 h-8 flex items-center justify-center">
                      <FileText className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-press-start text-sm text-blue-400">HANDBOOK</span>
                    <ExternalLink className="h-4 w-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="font-jetbrains text-sm text-gray-300">
                    Complete contributor guide with setup instructions and project roadmap
                  </p>
                </a>

                <a
                  href="https://forms.gle/yk5twiS5HX189JiR8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-card bg-black border-2 border-green-500 p-6 hover:scale-105 transition-all duration-300 hover:border-maximally-yellow group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="minecraft-block bg-green-500 w-8 h-8 flex items-center justify-center">
                      <FileText className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-press-start text-sm text-green-400">APPLICATION</span>
                    <ExternalLink className="h-4 w-4 text-green-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="font-jetbrains text-sm text-gray-300">
                    Apply to join our core contributor team and help shape the future
                  </p>
                </a>

                <a
                  href="https://www.youtube.com/watch?v=qBvCwtzUjdE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-card bg-black border-2 border-red-500 p-6 hover:scale-105 transition-all duration-300 hover:border-maximally-yellow group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="minecraft-block bg-red-500 w-8 h-8 flex items-center justify-center">
                      <Play className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-press-start text-sm text-red-400">EXPLAINER</span>
                    <ExternalLink className="h-4 w-4 text-red-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="font-jetbrains text-sm text-gray-300">
                    Watch our vision video to understand what we're building
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-press-start text-3xl md:text-4xl font-bold text-center mb-16 minecraft-text">
                <span className="text-maximally-red drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  BUILT GLOBAL. MADE FOR BUILDERS.
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="pixel-card bg-black border-2 border-maximally-red p-8 hover:scale-105 transition-all duration-300 hover:border-maximally-yellow">
                    <div className="minecraft-block bg-maximally-red w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Globe className="h-8 w-8 text-black" />
                    </div>
                    <h3 className="font-press-start text-lg text-maximally-red mb-2">
                      GLOBAL
                    </h3>
                    <p className="font-jetbrains text-gray-300">
                      Borderless innovation for builders worldwide
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="pixel-card bg-black border-2 border-maximally-red p-8 hover:scale-105 transition-all duration-300 hover:border-maximally-yellow">
                    <div className="minecraft-block bg-maximally-red w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Terminal className="h-8 w-8 text-black" />
                    </div>
                    <h3 className="font-press-start text-lg text-maximally-red mb-2">
                      DIGITAL
                    </h3>
                    <p className="font-jetbrains text-gray-300">
                      Internet-native events for digital builders
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="pixel-card bg-black border-2 border-maximally-red p-8 hover:scale-105 transition-all duration-300 hover:border-maximally-yellow">
                    <div className="minecraft-block bg-maximally-red w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Zap className="h-8 w-8 text-black" />
                    </div>
                    <h3 className="font-press-start text-lg text-maximally-red mb-2">
                      FAST
                    </h3>
                    <p className="font-jetbrains text-gray-300">
                      High-pressure sprints for real proof of work
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-16">
                <p className="font-jetbrains text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  At Maximally, we believe innovation has no borders — and no traditional limits. 
                  Whether you're from a major city or a small town, if you're building bold things, 
                  <span className="text-maximally-red"> you belong here</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;