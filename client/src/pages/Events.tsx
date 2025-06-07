
import { ArrowRight, Mail, Zap, Rocket, Users, Target, Globe, Trophy, Code, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Events = () => {
  const formats = [
    { name: "48-Hour Virtual Hackathons", icon: "💻", description: "Code, build, ship in 2 days" },
    { name: "7-Day Startup Makeathons", icon: "🚀", description: "Idea to MVP sprint" },
    { name: "Creator Economy Bootcamps", icon: "🎨", description: "Build your personal brand" },
    { name: "No-Code Builder Wars", icon: "🛠️", description: "Build without coding" },
    { name: "AI Innovation Challenges", icon: "🤖", description: "Future tech solutions" },
    { name: "Social Impact Marathons", icon: "🌍", description: "Build for good" },
    { name: "Demo Day Showcases", icon: "🎤", description: "Pitch your vision" },
    { name: "Founder Speed Dating", icon: "💼", description: "Find your co-founder" },
    { name: "Skill Sprint Weekends", icon: "⚡", description: "Master new skills fast" },
    { name: "Innovation Tournaments", icon: "🏆", description: "Compete to win" },
    { name: "Build-in-Public Events", icon: "🔥", description: "Create with community" },
    { name: "Teen Startup Summits", icon: "🎯", description: "Network and learn" }
  ];

  const whyPoints = [
    {
      title: "Teen-First Design",
      description: "Built by teens, for teens. We get it because we are it."
    },
    {
      title: "Real-World Impact",
      description: "Your projects don't just win prizes—they solve real problems."
    },
    {
      title: "Industry Mentorship",
      description: "Learn from founders, VCs, and tech leaders who've been there."
    },
    {
      title: "No Geographic Barriers",
      description: "Tier 1, Tier 2, or village—talent knows no boundaries."
    },
    {
      title: "Build-First Philosophy",
      description: "Less theory, more building. Ship first, perfect later."
    },
    {
      title: "Community That Lasts",
      description: "Events end, but the network you build stays forever."
    }
  ];

  return (
    <>
      <SEO
        title="Maximally Events | Teen Innovation Ecosystem"
        description="Join India's fastest-growing ecosystem for teen innovation. From virtual hackathons to startup makeathons - we throw startup wars and creator battles for young builders."
        keywords="teen events, hackathons, startup makeathons, innovation events, teen builders India"
      />
      <div className="min-h-screen bg-white overflow-hidden relative">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="pixel-grid opacity-20"></div>
          {[...Array(6)].map((_, i) => (
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
              <br />
              Whether you're from Tier 1, Tier 2, or a college dorm in the middle of nowhere — if you can build, you belong.
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
                  <strong className="text-[#E50914]">The IPL of Innovation:</strong> We're creating India's most exciting platform where teenage builders compete, collaborate, and create the future.
                </p>
                <p className="text-black/80">
                  Think of us as the bridge between classroom theory and real-world impact. Our events aren't just competitions—they're launchpads for the next generation of Indian innovators.
                </p>
                <p className="text-black/80">
                  From weekend hackathons that birth actual startups to week-long makeathons that transform ideas into MVPs, we're building an ecosystem where talent meets opportunity, mentorship meets ambition, and dreams meet reality.
                </p>
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
            <h2 className="font-press-start text-3xl text-center mb-12 text-black">Our Event Formats</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {formats.map((format, index) => (
                <motion.div
                  key={index}
                  className="pixel-border p-6 bg-white hover:transform hover:scale-105 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl mb-4">{format.icon}</div>
                  <h3 className="font-press-start text-lg mb-2 group-hover:text-[#E50914] transition-colors">{format.name}</h3>
                  <p className="font-jetbrains text-black/70">{format.description}</p>
                </motion.div>
              ))}
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
                Ready to bring the Maximally experience to your community? Let's create something incredible together.
              </p>
              <a href="mailto:hello@maximally.in" className="pixel-button bg-[#E50914] text-white inline-flex items-center gap-2 hover:scale-105 transform transition-all">
                <Mail className="h-5 w-5" />
                <span>Mail us at hello@maximally.in</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.section>

          {/* Vision */}
          <motion.section 
            className="mb-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            <div className="pixel-border p-8 bg-gradient-to-r from-[#E50914]/10 via-[#FFD700]/10 to-[#E50914]/10">
              <Trophy className="h-16 w-16 text-[#FFD700] mx-auto mb-6" />
              <h2 className="font-press-start text-4xl mb-6 bg-gradient-to-r from-[#E50914] to-[#FFD700] bg-clip-text text-transparent">
                The IPL of Innovation
              </h2>
              <p className="font-jetbrains text-xl text-black/80 max-w-3xl mx-auto">
                Just like IPL transformed cricket, we're transforming how India discovers, develops, and celebrates young talent. 
                Every event is a championship. Every participant is a potential game-changer.
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
