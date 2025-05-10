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
              <h1 className="font-press-start text-3xl sm:text-4xl md:text-5xl mb-6 text-white">
                Maximally Hack: Future Founders Quest
              </h1>
              <p className="font-jetbrains text-xl text-white mb-4">
                July 1–3, 2025 | Virtual | Open to Teens Across India
              </p>
              <p className="text-white/90">
                $1,000 in Prizes | Beginner Friendly | AI & No-Code Welcome
              </p>
            </motion.div>

            {/* Main Content */}
            <div className="grid gap-8 md:grid-cols-2 mb-16">
              <div className="pixel-border-glow p-6 bg-black/50 backdrop-blur text-white">
                <h2 className="font-press-start text-xl mb-4">🚀 What to Expect</h2>
                <ul className="space-y-3 font-jetbrains">
                  <li>💡 Theme reveal + kickoff on July 1st</li>
                  <li>🔧 Build solo or with a team (max 4)</li>
                  <li>🚀 Use any tools: AI, no-code, or full-code</li>
                  <li>🔥 Get mentorship throughout</li>
                  <li>🎤 Submit by July 3rd at 11:59 PM IST</li>
                </ul>
              </div>
              <div className="pixel-border-glow p-6 bg-black/50 backdrop-blur text-white">
                <h2 className="font-press-start text-xl mb-4">🏆 Prizes</h2>
                <ul className="space-y-3 font-jetbrains">
                  <li>🥇 Maker of the Year: $500</li>
                  <li>🌟 Best No-Code Project: $250</li>
                  <li>💫 Social Impact Award: $250</li>
                  <li>✨ Special mentions & swag</li>
                  <li>🎯 Featured on Maximally's Hall of Fame</li>
                </ul>
              </div>
            </div>

            <div className="text-center space-y-6">
              <Link 
                to="https://maximally-makeathon-2025.devpost.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full md:w-auto bg-[#00FFFF] hover:bg-[#00FFFF]/90 text-white font-press-start px-8 py-4">
                  View on Devpost
                  <ArrowRight className="ml-2 h-5 w-5 text-white" />
                </Button>
              </Link>
              <p className="font-jetbrains text-sm text-white/60">
                Questions? Email hack@maximally.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hackathon;