
import { ArrowRight, Mail, Zap, Rocket, Users, Target, Globe, Trophy, Code, Lightbulb, Star, Shield, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const Events = () => {
  const flagshipEvents = [
    {
      name: "Startup Makeathon",
      description: "7-day sprint from idea to MVP to public pitch. Real teams, real mentors, real pressure.",
      icon: "🚀"
    },
    {
      name: "Stealth Hackathon", 
      description: "You don't know the prompt until the timer starts. 48hr to build something wild.",
      icon: "🥷"
    },
    {
      name: "Brand-a-thon",
      description: "Flip iconic brands into new verticals. You get ₹15K, 3 days, and full creative freedom.",
      icon: "🎨"
    },
    {
      name: "Case Raid",
      description: "No boring slides. Real-world problem statements, fast-paced formats, and competitive analysis under fire.",
      icon: "⚔️"
    },
    
  ];

  const chaosFormats = [
    {
      name: "Scrapyard Showdown",
      description: "Use discarded ideas, rogue APIs, weird UIs — just make something work and ship it.",
      icon: "🔧"
    },
    {
      name: "Zero to One K",
      description: "Build your first ₹1,000 with code. No startup capital. No experience required. Just APIs, apps, and algorithms.",
      icon: "💻"
    },
    {
      name: "Shipwreck",
      description: "Build something broken, weird, or ugly — but make it functional. Glitches welcome.",
      icon: "🚢"
    },
    {
      name: "Startup Lab Rats",
      description: "Test a bizarre startup concept publicly. If it flops, pivot. If it works, scale.",
      icon: "🧪"
    },
    {
      name: "Viral or Die",
      description: "Keep posting until one piece of content hits a goal (e.g. 10K views). Prove your virality.",
      icon: "📈"
    },
    {
      name: "The Click War",
      description: "Create an ad + landing page. Track clicks, conversions, and win on performance.",
      icon: "🎯"
    },
    {
      name: "CTRL + ALT + BUILD",
      description: "Restart a dead project. Rebuild it cleaner, stronger, faster — within 72 hours.",
      icon: "⌨️"
    }
  ];

  

  interface EventType {
    name: string;
    description: string;
    icon: string;
  }

  const EventCard = ({ event, bgColor = "bg-white", textColor = "text-black" }: { event: EventType, bgColor?: string, textColor?: string }) => (
    <motion.div
      className={`pixel-border p-4 sm:p-6 ${bgColor} ${textColor} hover:transform hover:scale-105 transition-all duration-300 group cursor-pointer`}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{event.icon}</div>
      <h3 className="font-press-start text-sm sm:text-lg mb-2 sm:mb-3 group-hover:text-[#E50914] transition-colors leading-tight">
        {event.name}
      </h3>
      <p className="font-jetbrains text-xs sm:text-sm opacity-80 leading-relaxed">
        {event.description}
      </p>
    </motion.div>
  );

  return (
    <>
      <SEO
        title="Maximally Events | High-Energy Innovation Battles"
        description="We don't run events. We throw startup wars, code battles, and creator faceoffs for India's youngest builders. Join the chaos."
        keywords="teen events, hackathons, startup makeathons, innovation battles, chaos formats, wildcard sprints"
      />
      <div className="min-h-screen bg-white overflow-hidden relative">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="pixel-grid opacity-20"></div>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-[#E50914]/30 pixel-border animate-float"
              style={{
                top: `${Math.random() * 90}%`,
                left: `${Math.random() * 90}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-16 relative z-10">
          {/* Hero Section */}
          <motion.div 
            className="max-w-5xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-press-start text-2xl sm:text-3xl md:text-5xl lg:text-7xl mb-4 sm:mb-6 lg:mb-8 text-[#E50914] leading-tight px-2">
              We don't run events.
            </h1>
            <h2 className="font-press-start text-lg sm:text-xl md:text-2xl lg:text-4xl mb-4 sm:mb-6 lg:mb-8 text-black leading-tight px-2">
              We throw startup wars, code battles, and creator faceoffs for India's youngest builders.
            </h2>
            <p className="font-jetbrains text-base sm:text-lg md:text-xl text-black/80 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
              From virtual hackathons to physical startup makeathons, Maximally is India's fastest-growing ecosystem for teen innovation.
            </p>
          </motion.div>

          {/* Flagships Section */}
          <motion.section 
            className="mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="font-press-start text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 text-[#E50914] px-2">🧱 FLAGSHIPS</h2>
              <p className="font-jetbrains text-sm sm:text-base md:text-lg text-black/80 px-2">The main events. The big leagues. Where legends are born.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {flagshipEvents.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          </motion.section>

          {/* Chaos Formats Section */}
          <motion.section 
            className="mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="font-press-start text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 text-[#FFD700] px-2">⚔️ CHAOS FORMATS</h2>
              <p className="font-jetbrains text-sm sm:text-base md:text-lg text-black/80 px-2">Unhinged. Unpredictable. Unforgettable.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {chaosFormats.map((event, index) => (
                <EventCard 
                  key={index} 
                  event={event} 
                  bgColor="bg-black" 
                  textColor="text-white" 
                />
              ))}
            </div>
          </motion.section>

          

          {/* CTA Section */}
          <motion.section 
            className="text-center pixel-border p-6 sm:p-8 md:p-12 bg-gradient-to-r from-[#E50914]/10 via-black/5 to-[#FFD700]/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="font-press-start text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-[#E50914] leading-tight px-2">
              Want to host an event with us?
            </h2>
            <p className="font-jetbrains text-base sm:text-lg md:text-xl text-black/80 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Partner with Maximally, or let us run the whole thing for you.
            </p>
            <a href="mailto:hello@maximally.in" className="pixel-button bg-[#E50914] text-white inline-flex items-center gap-2 sm:gap-3 hover:scale-105 transform transition-all text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 min-h-[48px]">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
              <span className="font-press-start">hello@maximally.in</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            </a>
          </motion.section>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default Events;
