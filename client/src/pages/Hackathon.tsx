
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

            {/* Tracks Section */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-press-start text-2xl text-white text-center mb-8">🎮 Quest Tracks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "AI & No-Code Innovation", description: "Build the future without writing code", icon: "🤖" },
                  { name: "Social Impact", description: "Solve real problems for real people", icon: "🌍" },
                  { name: "Gaming & Web3", description: "Create immersive digital experiences", icon: "🎮" },
                  { name: "Open Innovation", description: "Your wild card to build anything", icon: "💫" }
                ].map((track) => (
                  <div key={track.name} className="pixel-border-glow p-6 bg-black/50 backdrop-blur text-white hover:transform hover:scale-105 transition-all">
                    <div className="text-3xl mb-2">{track.icon}</div>
                    <h3 className="font-press-start text-lg mb-2">{track.name}</h3>
                    <p className="font-jetbrains text-white/80">{track.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Rewards & Perks */}
            <motion.div 
              className="mb-16 pixel-border-glow p-8 bg-black/50 backdrop-blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="font-press-start text-2xl text-white text-center mb-8">🎁 Epic Rewards</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                <div className="text-center">
                  <div className="text-4xl mb-4">💎</div>
                  <h3 className="font-press-start text-lg mb-2">Cash Prizes</h3>
                  <p className="font-jetbrains">Win up to $500 for your innovation</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="font-press-start text-lg mb-2">Mentorship</h3>
                  <p className="font-jetbrains">1:1 guidance from industry experts</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="font-press-start text-lg mb-2">Launch Support</h3>
                  <p className="font-jetbrains">Help taking your project live</p>
                </div>
              </div>
            </motion.div>

            {/* Rules & Guidelines */}
            <motion.div 
              className="mb-16 pixel-border-glow p-8 bg-black/50 backdrop-blur text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="font-press-start text-2xl text-center mb-8">📜 Quest Rules</h2>
              <div className="space-y-4 font-jetbrains">
                <p>• Open to all Indian teens aged 13-19</p>
                <p>• Build something new during the hackathon</p>
                <p>• Teams of 1-4 players allowed</p>
                <p>• All code must be your own or openly licensed</p>
                <p>• AI tools and no-code platforms are welcome</p>
                <p>• Projects must solve a real problem</p>
              </div>
            </motion.div>

            {/* CTA Section */}
            <div className="text-center space-y-6">
              <Link 
                to="https://maximally-makeathon-2025.devpost.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full md:w-auto bg-[#00FFFF] hover:bg-[#00FFFF]/90 text-white font-press-start px-8 py-4">
                  Join the Quest
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
