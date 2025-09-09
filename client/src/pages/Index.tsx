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
  const fullText = "WE BUILD HACKATHONS";
  const [matrixRain, setMatrixRain] = useState<Array<{ id: number; delay: number; duration: number; left: number }>>([]);

  useEffect(() => {
    // Matrix rain effect
    const generateMatrixRain = () => {
      const rain = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        left: Math.random() * 100,
      }));
      setMatrixRain(rain);
    };
    generateMatrixRain();

    // Typing effect
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

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
        {/* Matrix Rain Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {matrixRain.map((drop) => (
            <div
              key={drop.id}
              className="absolute top-0 text-green-400 opacity-20 font-mono text-sm"
              style={{
                left: `${drop.left}%`,
                animation: `matrix-fall ${drop.duration}s linear ${drop.delay}s infinite`,
              }}
            >
              {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className="block">
                  {Math.random() > 0.5 ? '1' : '0'}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Animated Grid Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="fixed inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse" />

        {/* Hero Section */}
        <section className="min-h-screen relative flex items-center">
          <div className="container mx-auto px-4 z-10">
            <div className="max-w-6xl mx-auto">
              {/* Glitch Alert */}
              <div className="mb-8 text-center">
                <div className="inline-block bg-red-500/20 border border-red-500 px-4 py-2 rounded-lg">
                  <span className="font-mono text-red-400 text-sm animate-pulse">
                    {">>> SYSTEM.STATUS: DISRUPTING_HACKATHON_INDUSTRY"}
                  </span>
                </div>
              </div>

              {/* Main Title */}
              <div className="text-center mb-12">
                <h1 className="font-mono text-3xl md:text-6xl lg:text-7xl font-bold mb-6 relative">
                  <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {text}
                  </span>
                  <span className="inline-block w-1 h-16 bg-green-400 ml-2 animate-pulse" />
                  
                  {/* Glitch effect */}
                  <div className="absolute inset-0 text-red-500 opacity-50 animate-ping" style={{ animationDuration: '3s' }}>
                    {text}
                  </div>
                </h1>

                <div className="text-xl md:text-2xl font-mono text-gray-300 mb-4">
                  <span className="text-red-400">but not the boring ones</span> ⚡
                </div>

                <p className="text-gray-400 text-lg max-w-3xl mx-auto font-mono leading-relaxed">
                  A global innovation league that hosts high-stakes hackathons for
                  ambitious builders. Built by hackers, for hackers.
                </p>
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link
                  to="/events"
                  className="group bg-gradient-to-r from-green-500 to-cyan-500 text-black px-8 py-4 rounded-lg font-mono font-bold hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] flex items-center justify-center gap-2"
                >
                  <Terminal className="h-5 w-5" />
                  EXPLORE_EVENTS.exe
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="https://discord.gg/MpBnYk8qMX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-mono font-bold hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] flex items-center justify-center gap-2"
                >
                  <Users className="h-5 w-5" />
                  JOIN_DISCORD.sh
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
                <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-black px-6 py-2 rounded-full font-mono font-bold mb-4">
                  🇮🇳 GRAND INDIAN HACKATHON SEASON 2025
                </div>
                <h2 className="font-mono text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    10 HACKATHONS
                  </span>
                </h2>
                <p className="text-gray-300 text-xl font-mono">
                  September → November • India's Biggest Hackathon Season
                </p>
              </div>

              {/* Event Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
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
                    className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 hover:border-orange-500 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-2xl mb-2">{event.icon}</div>
                    <div className="font-mono text-sm font-bold text-orange-400">
                      {event.name}
                    </div>
                    <div className="font-mono text-xs text-gray-400">
                      {event.date}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  to="/events"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-black px-8 py-4 rounded-lg font-mono font-bold hover:scale-105 transition-all duration-300"
                >
                  <Calendar className="h-5 w-5" />
                  VIEW_ALL_EVENTS.json
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
                <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-6 py-2 rounded-full font-mono font-bold mb-4">
                  🚀 WE'RE BUILDING
                </div>
                <h2 className="font-mono text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    MAXIMALLY HACK
                  </span>
                </h2>
                <p className="text-2xl md:text-3xl font-mono text-gray-300 mb-6">
                  the world's first ai-native hackathon platform ⚡
                </p>
                <p className="text-xl font-mono text-red-400">
                  not another devpost clone — built by hackers, for hackers.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-gray-800/30 border border-gray-600 rounded-lg p-6">
                  <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="font-mono text-lg font-bold text-yellow-400 mb-2">
                    AI-POWERED
                  </h3>
                  <p className="font-mono text-gray-300 text-sm">
                    Smart project matching, automated judging, real-time insights
                  </p>
                </div>
                <div className="bg-gray-800/30 border border-gray-600 rounded-lg p-6">
                  <Terminal className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h3 className="font-mono text-lg font-bold text-green-400 mb-2">
                    HACKER-FIRST
                  </h3>
                  <p className="font-mono text-gray-300 text-sm">
                    Built for the community, by the community. Zero corporate BS.
                  </p>
                </div>
                <div className="bg-gray-800/30 border border-gray-600 rounded-lg p-6">
                  <Globe className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="font-mono text-lg font-bold text-blue-400 mb-2">
                    GLOBAL SCALE
                  </h3>
                  <p className="font-mono text-gray-300 text-sm">
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
                <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-black px-6 py-2 rounded-full font-mono font-bold mb-4">
                  👩‍💻 WE NEED CONTRIBUTORS
                </div>
                <h2 className="font-mono text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    JOIN THE BUILD
                  </span>
                </h2>
                <p className="text-gray-300 text-xl font-mono mb-8">
                  Help us revolutionize how hackathons work. Open source, community-driven.
                </p>
              </div>

              {/* Roles Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                {[
                  { role: "FRONTEND", icon: <Code className="h-6 w-6" />, color: "text-blue-400" },
                  { role: "BACKEND", icon: <Database className="h-6 w-6" />, color: "text-green-400" },
                  { role: "DESIGN", icon: <Palette className="h-6 w-6" />, color: "text-purple-400" },
                  { role: "TESTING", icon: <TestTube className="h-6 w-6" />, color: "text-yellow-400" },
                  { role: "DEVOPS", icon: <Settings className="h-6 w-6" />, color: "text-red-400" },
                  { role: "AI/ML", icon: <Cpu className="h-6 w-6" />, color: "text-cyan-400" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 text-center hover:border-green-500 transition-all duration-300 hover:scale-105"
                  >
                    <div className={`${item.color} mb-2 flex justify-center`}>
                      {item.icon}
                    </div>
                    <div className={`font-mono text-sm font-bold ${item.color}`}>
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
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 border border-blue-500 rounded-lg p-6 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="h-6 w-6 text-blue-300" />
                    <span className="font-mono font-bold text-blue-300">HANDBOOK</span>
                    <ExternalLink className="h-4 w-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="font-mono text-sm text-blue-200">
                    Complete contributor guide with setup instructions and project roadmap
                  </p>
                </a>

                <a
                  href="https://forms.gle/yk5twiS5HX189JiR8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-green-600 to-green-700 border border-green-500 rounded-lg p-6 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="h-6 w-6 text-green-300" />
                    <span className="font-mono font-bold text-green-300">APPLICATION</span>
                    <ExternalLink className="h-4 w-4 text-green-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="font-mono text-sm text-green-200">
                    Apply to join our core contributor team and help shape the future
                  </p>
                </a>

                <a
                  href="https://www.youtube.com/watch?v=qBvCwtzUjdE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-red-600 to-red-700 border border-red-500 rounded-lg p-6 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Play className="h-6 w-6 text-red-300" />
                    <span className="font-mono font-bold text-red-300">EXPLAINER</span>
                    <ExternalLink className="h-4 w-4 text-red-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="font-mono text-sm text-red-200">
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
              <h2 className="font-mono text-3xl md:text-4xl font-bold text-center mb-16">
                <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  BUILT GLOBAL. MADE FOR BUILDERS.
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gray-900/50 border-2 border-green-500 rounded-lg p-8 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                    <Globe className="h-16 w-16 text-green-400 mx-auto mb-4" />
                    <h3 className="font-mono text-2xl font-bold text-white mb-2">
                      GLOBAL
                    </h3>
                    <p className="font-mono text-gray-300">
                      Borderless innovation for builders worldwide
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-gray-900/50 border-2 border-cyan-500 rounded-lg p-8 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                    <Terminal className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
                    <h3 className="font-mono text-2xl font-bold text-white mb-2">
                      DIGITAL
                    </h3>
                    <p className="font-mono text-gray-300">
                      Internet-native events for digital builders
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-gray-900/50 border-2 border-blue-500 rounded-lg p-8 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                    <Zap className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                    <h3 className="font-mono text-2xl font-bold text-white mb-2">
                      FAST
                    </h3>
                    <p className="font-mono text-gray-300">
                      High-pressure sprints for real proof of work
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-16">
                <p className="font-mono text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  At Maximally, we believe innovation has no borders — and no traditional limits. 
                  Whether you're from a major city or a small town, if you're building bold things, 
                  <span className="text-green-400"> you belong here</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes matrix-fall {
          0% {
            transform: translateY(-100vh);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}} />
    </>
  );
};

export default Index;