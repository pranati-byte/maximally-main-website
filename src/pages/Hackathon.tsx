
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hackathon = () => {
  return (
    <>
      <SEO
        title="Maximally Hack: Future Founders Quest | Teen Hackathon India"
        description="Join India's boldest teen hackathon. 48 hours of building, innovating, and launching the future. Open to coders, creators, and community builders aged 13-19."
        keywords="teen hackathon, student hackathon India, coding competition, future founders"
      />
      <div className="min-h-screen bg-black overflow-hidden relative">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="stars"></div>
          <motion.div 
            className="floating-pixel pixel-rocket"
            animate={{ 
              y: [-10, 10],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="floating-pixel pixel-wand"
            animate={{ 
              y: [10, -10],
              rotate: [5, -5]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="container mx-auto px-4 pt-24 md:pt-32 pb-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-press-start text-3xl sm:text-4xl md:text-5xl mb-6 gradient-text-rainbow animate-pulse">
                Maximally Hack: Future Founders Quest
              </h1>
              <p className="font-jetbrains text-xl text-white mb-4">
                June 8–10, 2025 | Virtual | Open to Teens Across India
              </p>
              <p className="text-white/90 italic">
                (Registration Closed)
              </p>
            </motion.div>

            {/* Main Content */}
            <div className="space-y-12">
              {/* Intro */}
              <motion.div 
                className="pixel-border-glow p-6 bg-black/50 backdrop-blur"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p className="font-jetbrains text-lg mb-4 text-white/90">
                  Welcome to Maximally Hack — a 48-hour innovation sprint where India's boldest teen minds come together to imagine, build, and launch the future.
                </p>
                <p className="font-press-start text-lg text-center my-6 gradient-text-rainbow">
                  This isn't your typical hackathon.
                  <br />
                  It's a Quest. A Game. A Portal to Your Founder Era.
                </p>
              </motion.div>

              {/* Guild Points System */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {[
                  { title: "Guild Points", icon: "🏆", points: "2500 XP" },
                  { title: "Quest Level", icon: "⚔️", points: "Level 42" },
                  { title: "Power Rank", icon: "⭐", points: "#1 Guild" }
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    className="pixel-card-glow p-4 bg-black/30 backdrop-blur hover:scale-105 transition-transform"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <h3 className="font-press-start text-lg mb-2 text-white">{item.title}</h3>
                    <p className="font-jetbrains text-maximally-blue">{item.points}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Tracks */}
              <div>
                <h2 className="font-press-start text-2xl mb-6 text-center gradient-text-rainbow">Available Quests</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { name: "AI & No-Code Magic", icon: "🤖" },
                    { name: "Digital Creators & Storytelling", icon: "📚" },
                    { name: "Social Impact & Youth Mental Health", icon: "💖" },
                    { name: "Fintech for Teens", icon: "💰" },
                    { name: "Open Quest", icon: "🎯" }
                  ].map((track) => (
                    <motion.div
                      key={track.name}
                      className="quest-scroll-card"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-2xl mr-2">{track.icon}</span>
                      <span className="font-jetbrains">{track.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Golden Ticket */}
              <motion.div 
                className="golden-ticket-container"
                whileHover={{ rotate: [0, -1, 1, 0] }}
                transition={{ duration: 0.3 }}
              >
                <div className="golden-ticket">
                  <h3 className="font-press-start text-2xl mb-4">🎫 Golden Ticket</h3>
                  <p className="font-jetbrains">Fast-track access to Maximally Bootcamp 2025</p>
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div 
                className="text-center space-y-6"
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ duration: 0.6 }}
              >
                <Link to="/bootcamps">
                  <Button className="pixel-button-glow bg-maximally-blue hover:bg-maximally-blue/90 text-white px-8 py-6 text-lg font-press-start group">
                    {'>> ENTER THE QUEST <<'}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <p className="font-jetbrains text-sm text-white/60">
                  Got questions? Email team@maximally.in
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hackathon;
