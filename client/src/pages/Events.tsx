
import { ArrowRight, Mail, Zap, Rocket, Users, Target, Globe, Trophy, Code, Lightbulb, Star, Shield, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Events = () => {
  const flagshipFormats = [
    { name: "Maximally Startup Makeathon", icon: "🚀", description: "7-day idea to MVP sprint" },
    { name: "Stealth Hackathon", icon: "🥷", description: "Secret missions, public reveals" },
    { name: "Brand Remix Battles", icon: "🎨", description: "Redesign brands for Gen Z" },
    { name: "Campus Clashes", icon: "🏫", description: "Inter-college competitions" },
    { name: "Startup StoryJam", icon: "🎤", description: "Pitch your vision live" }
  ];

  const experimentalFormats = [
    { name: "Drop Week", icon: "📦", description: "Weekly surprise challenges" },
    { name: "Build-a-Brand", icon: "🏗️", description: "Create brands from scratch" },
    { name: "Content Code War", icon: "⚔️", description: "Code meets creativity" },
    { name: "Pod Clash", icon: "🎙️", description: "Podcast battle royale" },
    { name: "Offline Arena", icon: "🏟️", description: "IRL innovation showdowns" }
  ];

  const whyPoints = [
    {
      title: "Teen-native UX + Discord vibes",
      description: "Built by teens, for teens. We speak your language."
    },
    {
      title: "Real startup mentors",
      description: "Learn from founders who've raised millions and built unicorns."
    },
    {
      title: "Amplified via Maximally Studios",
      description: "Your story gets told to thousands through our content engine."
    },
    {
      title: "Proof-of-work > certificates",
      description: "Build real products that solve real problems."
    },
    {
      title: "Plug-and-play for brands and schools",
      description: "Easy integration for institutions and corporate partners."
    }
  ];

  return (
    <>
      <SEO
        title="Maximally Events | Teen Innovation Ecosystem"
        description="We don't run events. We throw startup wars, code battles, and creator faceoffs for India's youngest builders. Join the IPL of Innovation."
        keywords="teen events, hackathons, startup makeathons, innovation events, teen builders India"
      />
      <div className="min-h-screen bg-white overflow-hidden relative">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="pixel-grid opacity-20"></div>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-[#E50914]/20 pixel-border animate-float"
              style={{
                top: `${Math.random() * 90}%`,
                left: `${Math.random() * 90}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 pt-24 md:pt-32 pb-16 relative z-10">
          {/* Hero Section */}
          <motion.div 
            className="max-w-5xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-press-start text-3xl sm:text-4xl md:text-6xl mb-8 text-[#E50914] leading-tight">
              We don't run events.
            </h1>
            <h2 className="font-press-start text-2xl sm:text-3xl md:text-4xl mb-8 text-black">
              We throw startup wars, code battles, and creator faceoffs for India's youngest builders.
            </h2>
            <p className="font-jetbrains text-xl text-black/80 max-w-4xl mx-auto mb-8 leading-relaxed">
              From virtual hackathons to physical startup makeathons, Maximally is India's fastest-growing ecosystem for teen innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <a href="mailto:hello@maximally.in" className="pixel-button bg-[#E50914] text-white group flex items-center gap-2 hover:scale-105 transform transition-all">
                <Zap className="h-5 w-5" />
                <span>Host an Event With Us</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="mailto:hello@maximally.in" className="pixel-button bg-[#FFD700] text-black group flex items-center gap-2 hover:scale-105 transform transition-all">
                <Rocket className="h-5 w-5" />
                <span>Want Us to Run Your Hackathon?</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* What We're Building */}
          <motion.section 
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="pixel-border p-8 bg-[#E50914]/5 backdrop-blur">
              <h2 className="font-press-start text-3xl text-center mb-8 text-[#E50914]">What We're Building</h2>
              <div className="max-w-4xl mx-auto space-y-6 font-jetbrains text-lg">
                <p className="text-black/80">
                  <strong className="text-[#E50914]">Maximally Events</strong> is on a mission to host India's wildest, most ambitious innovation challenges for teenagers.
                </p>
                <p className="text-black/80">
                  We're not an edtech company. We're a high-stakes competition engine.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="space-y-4">
                    <p className="text-black/80">✅ Virtual + On-ground formats</p>
                    <p className="text-black/80">✅ Tier 1, Tier 2, Tier 3 — all welcome</p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-black/80">✅ Real deadlines, real mentors, real MVPs</p>
                    <p className="text-black/80">✅ Designed for 13–20 y/o teens</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Our Formats */}
          <motion.section 
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="font-press-start text-3xl text-center mb-12 text-black">Our Formats</h2>
            
            {/* Flagship Events */}
            <div className="mb-12">
              <h3 className="font-press-start text-2xl mb-6 text-[#E50914]">🏆 Flagship Events</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {flagshipFormats.map((format, index) => (
                  <motion.div
                    key={index}
                    className="pixel-border p-6 bg-white hover:transform hover:scale-105 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl mb-4">{format.icon}</div>
                    <h4 className="font-press-start text-lg mb-2 group-hover:text-[#E50914] transition-colors">{format.name}</h4>
                    <p className="font-jetbrains text-black/70">{format.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experimental Drops */}
            <div>
              <h3 className="font-press-start text-2xl mb-6 text-[#FFD700]">⚡ Experimental Drops</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {experimentalFormats.map((format, index) => (
                  <motion.div
                    key={index}
                    className="pixel-border p-6 bg-black text-white hover:transform hover:scale-105 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl mb-4">{format.icon}</div>
                    <h4 className="font-press-start text-lg mb-2 group-hover:text-[#FFD700] transition-colors">{format.name}</h4>
                    <p className="font-jetbrains text-white/70">{format.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Why Maximally */}
          <motion.section 
            className="mb-20 pixel-border p-8 bg-black text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="font-press-start text-3xl text-center mb-12 text-[#FFD700]">Why Maximally?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {whyPoints.map((point, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="font-press-start text-xl text-[#E50914]">{point.title}</h3>
                  <p className="font-jetbrains text-white/90">{point.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Partner With Us */}
          <motion.section 
            className="mb-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="pixel-border p-8 bg-[#FFD700]/10">
              <h2 className="font-press-start text-3xl mb-6 text-[#E50914]">Partner With Us</h2>
              <p className="font-jetbrains text-xl text-black/80 mb-8 max-w-2xl mx-auto">
                Want us to run a full event for you? Or collab on something wild?
                <br />
                Just drop us a mail at hello@maximally.in.
              </p>
              <a href="mailto:hello@maximally.in" className="pixel-button bg-[#E50914] text-white inline-flex items-center gap-2 hover:scale-105 transform transition-all">
                <Mail className="h-5 w-5" />
                <span>hello@maximally.in</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.section>

          {/* Our Vision */}
          <motion.section 
            className="mb-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            <div className="pixel-border p-8 bg-gradient-to-r from-[#E50914]/10 via-[#FFD700]/10 to-[#E50914]/10">
              <Trophy className="h-16 w-16 text-[#FFD700] mx-auto mb-6" />
              <h2 className="font-press-start text-4xl mb-6 bg-gradient-to-r from-[#E50914] to-[#FFD700] bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="font-jetbrains text-xl text-black/80 max-w-3xl mx-auto mb-4">
                We're not building one event.
              </p>
              <p className="font-jetbrains text-2xl font-bold text-[#E50914] max-w-3xl mx-auto">
                We're building the IPL of Innovation for India's next-gen builders.
              </p>
            </div>
          </motion.section>

          {/* Footer CTA */}
          <motion.section 
            className="text-center pixel-border p-8 bg-black text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <h2 className="font-press-start text-3xl mb-6 text-[#FFD700]">
              Build with us. Partner with us. Or bring Maximally to your city.
            </h2>
            <a href="mailto:hello@maximally.in" className="pixel-button bg-[#E50914] text-white inline-flex items-center gap-2 hover:scale-105 transform transition-all text-lg px-8 py-4">
              <Mail className="h-5 w-5" />
              <span>hello@maximally.in</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default Events;
