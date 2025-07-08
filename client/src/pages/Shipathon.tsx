import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/SEO';

export default function Shipathon() {
  const [glitchText, setGlitchText] = useState("BUILD OR BE FORGOTTEN");
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const texts = ["BUILD OR BE FORGOTTEN", "SHIP OR SINK", "BUILD OR BE FORGOTTEN"];
      setGlitchText(texts[Math.floor(Math.random() * texts.length)]);
    }, 3000);

    return () => {
      clearInterval(glitchInterval);
    };
  }, []);

  const tracks = [
    {
      title: "🛠️ Build with AI",
      description: "Tools, agents, bots that actually work",
      examples: ["GPT therapist", "Smart Chrome extension", "AI coding buddy"]
    },
    {
      title: "🎨 Create with AI", 
      description: "Visuals, memes, music that slaps",
      examples: ["Meme generator", "AI music producer", "Story visualizer"]
    },
    {
      title: "🧪 Experiment with AI",
      description: "Hacks, pranks, weird genius stuff",
      examples: ["Absurd prompt prank", "AI personality test", "Dream decoder"]
    }
  ];

  const prizes = [
    { title: "Track Winners", prize: "₹2,500 each", icon: "🏆" },
    { title: "Best Beginner", prize: "LOR + Certificate", icon: "🌟" },
    { title: "Most Viral", prize: "Meme Collab + IG Feature", icon: "🔥" },
    { title: "Future Founder", prize: "Maximally Inner Circle Access", icon: "👑" }
  ];

  const timeline = [
    { date: "Aug 30", event: "🚀 Shipathon Begins", time: "12:00 AM IST" },
    { date: "Sept 1", event: "⏰ Submission Deadline", time: "12:00 AM IST" },
    { date: "Sept 2", event: "🔍 Judging Phase", time: "All Day" },
    { date: "Sept 3", event: "🎉 Feature Drops Begin", time: "Evening" }
  ];

  return (
    <>
      <SEO 
        title="AI Shipathon - Maximally"
        description="48-hour global hackathon for teen builders. AI x Chaos x Creativity. Aug 30 - Sept 1, 2025. Build or be forgotten."
        keywords="AI hackathon, teen developers, global hackathon, AI creativity, shipathon, maximally"
      />

      <div className="min-h-screen bg-gradient-to-b from-sky-300 via-blue-400 to-blue-600 text-white overflow-hidden relative">
        {/* Ocean Background */}
        <div className="fixed inset-0 bg-gradient-to-b from-sky-200 via-blue-300 to-blue-800 z-0"></div>
        {/* Floating clouds */}
        <div className="fixed top-10 left-20 w-32 h-16 bg-white rounded-full opacity-70 animate-float"></div>
        <div className="fixed top-20 right-32 w-24 h-12 bg-white rounded-full opacity-60 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="fixed top-5 left-1/2 w-40 h-20 bg-white rounded-full opacity-50 animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="relative z-10">
          {/* Hero Section - Pixel Ocean */}
          <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
            {/* Shipwreck Island Scene */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-yellow-200 via-yellow-100 to-transparent"></div>
            <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-yellow-600 rounded-full opacity-80"></div>
            <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-yellow-500 rounded-full opacity-70"></div>
            
            {/* Shipwreck elements */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
              <div className="text-8xl">🏴‍☠️</div>
            </div>
            <div className="absolute bottom-16 left-1/3 text-6xl">⚓</div>
            <div className="absolute bottom-12 right-1/4 text-4xl">📦</div>

            <div className="text-center space-y-8 max-w-4xl relative z-10">
              {/* Shipwrecked Logo */}
              <div className="space-y-4">
                <div className="relative inline-block">
                  <div className="bg-white rounded-2xl p-6 shadow-2xl border-4 border-blue-600 transform -rotate-2">
                    <h1 className="text-4xl md:text-6xl font-black text-blue-600" style={{fontFamily: 'Press Start 2P, monospace'}}>
                      SHIP
                    </h1>
                  </div>
                  <div className="bg-orange-400 rounded-2xl p-4 shadow-2xl border-4 border-orange-600 transform rotate-1 -mt-4">
                    <h1 className="text-3xl md:text-5xl font-black text-white" style={{fontFamily: 'Press Start 2P, monospace'}}>
                      WRECKED
                    </h1>
                  </div>
                </div>
                <p className="text-xl md:text-2xl font-bold text-blue-900 bg-white bg-opacity-80 rounded-lg px-6 py-2 inline-block">
                  {glitchText}
                </p>
              </div>

              {/* Event Details */}
              <div className="bg-yellow-400 rounded-2xl p-6 border-4 border-yellow-600 shadow-2xl max-w-md mx-auto">
                <div className="text-blue-900 font-bold text-lg mb-2">📅 AUGUST 30 - SEPT 1, 2025</div>
                <div className="text-blue-900 font-bold text-lg">📍 GLOBAL VIRTUAL ISLAND</div>
              </div>

              {/* Message in a Bottle */}
              <div className="relative my-12">
                <div className="bg-white bg-opacity-90 border-4 border-blue-600 rounded-2xl p-6 max-w-2xl mx-auto transform rotate-1 hover:rotate-0 transition-transform shadow-2xl">
                  <div className="text-lg md:text-xl font-bold mb-4 text-blue-900">
                    🏝️ Message from the Shipwreck
                  </div>
                  <p className="text-blue-800 leading-relaxed font-semibold">
                    "No pitch decks. No suits. Just ideas, friends, and a playground where weird is welcome."
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open('https://maximally-ai-shipathon.devpost.com/', '_blank')}
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-black py-4 px-8 text-lg border-4 border-yellow-600 rounded-xl shadow-2xl transform hover:scale-105 transition-all"
                  style={{fontFamily: 'Press Start 2P, monospace'}}
                >
                  🚢 LOG INTO THE BAY
                </Button>
                <Button 
                  onClick={() => window.open('https://discord.gg/maximally', '_blank')}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-black py-4 px-8 text-lg border-4 border-blue-700 rounded-xl shadow-2xl transform hover:scale-105 transition-all"
                  style={{fontFamily: 'Press Start 2P, monospace'}}
                >
                  💬 JOIN THE CREW
                </Button>
              </div>
            </div>

            {/* Floating Tropical Elements */}
            <div className="absolute top-20 left-10 text-4xl animate-float">🌴</div>
            <div className="absolute top-40 right-20 text-3xl animate-float" style={{animationDelay: '1s'}}>🐚</div>
            <div className="absolute top-1/2 left-5 text-2xl animate-float" style={{animationDelay: '0.5s'}}>⭐</div>
            <div className="absolute bottom-40 right-10 text-2xl animate-float" style={{animationDelay: '1.5s'}}>🦜</div>
            <div className="absolute top-32 left-1/3 text-2xl animate-float" style={{animationDelay: '3s'}}>🏖️</div>
          </section>

          {/* About the Challenge */}
          <section className="py-20 px-4 bg-gradient-to-b from-blue-600 to-blue-800">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-black text-yellow-400 mb-6" style={{fontFamily: 'Press Start 2P, monospace'}}>
                  🏝️ THE ADVENTURE
                </h2>
                <div className="bg-white bg-opacity-90 border-4 border-yellow-400 rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
                  <p className="text-xl md:text-2xl leading-relaxed text-blue-900 font-bold">
                    "48 hours. One mission: <span className="text-orange-600 font-black">build with AI</span>. 
                    Doesn't matter who you are — coder, creator, or chaotic tinkerer — 
                    if you've got Wi-Fi and curiosity, you're in."
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-yellow-400 border-4 border-yellow-600 rounded-xl shadow-2xl transform hover:scale-105 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-4">🌍</div>
                    <h3 className="font-black text-blue-900" style={{fontFamily: 'Press Start 2P, monospace'}}>GLOBAL</h3>
                    <p className="text-blue-800 font-bold">All ages, all skill levels</p>
                  </CardContent>
                </Card>
                <Card className="bg-blue-400 border-4 border-blue-600 rounded-xl shadow-2xl transform hover:scale-105 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-4">⏰</div>
                    <h3 className="font-black text-white" style={{fontFamily: 'Press Start 2P, monospace'}}>48 HOURS</h3>
                    <p className="text-blue-100 font-bold">Aug 30 – Sept 1, 2025</p>
                  </CardContent>
                </Card>
                <Card className="bg-orange-400 border-4 border-orange-600 rounded-xl shadow-2xl transform hover:scale-105 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-4">👥</div>
                    <h3 className="font-black text-white" style={{fontFamily: 'Press Start 2P, monospace'}}>CREW UP</h3>
                    <p className="text-orange-100 font-bold">Solo or teams up to 4</p>
                  </CardContent>
                </Card>
                <Card className="bg-green-400 border-4 border-green-600 rounded-xl shadow-2xl transform hover:scale-105 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-4">🏝️</div>
                    <h3 className="font-black text-white" style={{fontFamily: 'Press Start 2P, monospace'}}>VIRTUAL</h3>
                    <p className="text-green-100 font-bold">Online + Chandigarh hub</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Who It's For */}
          <section className="py-20 px-4 bg-gradient-to-b from-blue-800 to-green-400">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6" style={{fontFamily: 'Press Start 2P, monospace'}}>
                🏴‍☠️ WHO'S INVITED
              </h2>
              <p className="text-2xl text-yellow-300 mb-12 font-bold bg-white bg-opacity-20 rounded-xl px-6 py-3 inline-block">
                "No experience needed. Just energy. And ideas."
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: "🧙‍♂️", title: "First-time Sailors", desc: "Never coded? Perfect!", bg: "bg-purple-400", border: "border-purple-600" },
                  { icon: "👾", title: "No-code Pirates", desc: "Indie hackers welcome", bg: "bg-pink-400", border: "border-pink-600" },
                  { icon: "🎨", title: "Creative Crew", desc: "Designers, writers, memers", bg: "bg-orange-400", border: "border-orange-600" },
                  { icon: "🧠", title: "Curious Explorers", desc: "Students & tinkerers", bg: "bg-green-400", border: "border-green-600" }
                ].map((persona, i) => (
                  <div key={i} className={`${persona.bg} ${persona.border} border-4 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform`}>
                    <div className="text-6xl mb-4">{persona.icon}</div>
                    <h3 className="text-xl font-black text-white mb-2" style={{fontFamily: 'Press Start 2P, monospace'}}>{persona.title}</h3>
                    <p className="text-white font-bold">{persona.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tracks */}
          <section className="py-20 px-4 bg-gradient-to-b from-green-400 to-blue-600">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-16" style={{fontFamily: 'Press Start 2P, monospace'}}>
                🧭 CHOOSE YOUR ROUTE
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {tracks.map((track, i) => {
                  const colors = [
                    { bg: "bg-yellow-400", border: "border-yellow-600", text: "text-blue-900" },
                    { bg: "bg-orange-400", border: "border-orange-600", text: "text-white" },
                    { bg: "bg-purple-400", border: "border-purple-600", text: "text-white" }
                  ];
                  return (
                    <Card key={i} className={`${colors[i].bg} ${colors[i].border} border-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-all`}>
                      <CardContent className="p-8">
                        <h3 className={`text-2xl font-black ${colors[i].text} mb-4`} style={{fontFamily: 'Press Start 2P, monospace'}}>{track.title}</h3>
                        <p className={`${colors[i].text} mb-6 font-bold`}>{track.description}</p>
                        <div className="space-y-2">
                          <p className={`text-sm ${colors[i].text} font-black`}>Treasure Ideas:</p>
                          {track.examples.map((example, j) => (
                            <div key={j} className={`text-sm ${colors[i].text} font-bold`}>
                              🏴‍☠️ {example}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* What to Build */}
          <section className="py-20 px-4 bg-gradient-to-b from-blue-600 to-orange-400">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6" style={{fontFamily: 'Press Start 2P, monospace'}}>
                ⚒️ WHAT TO CRAFT
              </h2>
              <p className="text-2xl text-yellow-200 mb-12 font-bold bg-white bg-opacity-20 rounded-xl px-6 py-3 inline-block">
                "Code it. No-code it. Prompt it. Doesn't matter — just ship it."
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { idea: "GPT therapist that actually listens", icon: "🧠" },
                  { idea: "Meme generator for your mood", icon: "😂" },
                  { idea: "Chrome extension that saves sanity", icon: "🔧" }, 
                  { idea: "Storyteller bot with personality", icon: "📚" },
                  { idea: "AI that roasts your code", icon: "🔥" },
                  { idea: "Music producer that gets you", icon: "🎵" }
                ].map((item, i) => {
                  const colors = [
                    "bg-yellow-400 border-yellow-600",
                    "bg-pink-400 border-pink-600", 
                    "bg-green-400 border-green-600",
                    "bg-blue-400 border-blue-600",
                    "bg-red-400 border-red-600",
                    "bg-purple-400 border-purple-600"
                  ];
                  return (
                    <div key={i} className={`${colors[i]} border-4 rounded-2xl p-6 shadow-2xl hover:scale-105 transition-all`}>
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <p className="text-white font-bold">{item.idea}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Submission Requirements */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-[#FFD700] text-center mb-16">
                📦 WHAT TO SUBMIT
              </h2>
              
              <div className="bg-black border-2 border-[#E50914] rounded-lg p-8 font-mono">
                <div className="text-[#FFD700] mb-4">
                  &gt; DEADLINE: Sept 1, 12:00 AM IST
                </div>
                <div className="space-y-4 text-gray-300">
                  <div>1. 2-min demo video (can be casual AF)</div>
                  <div>2. Short write-up (what, why AI, how it works)</div>
                  <div>3. GitHub or live link</div>
                </div>
              </div>
            </div>
          </section>

          {/* Prizes */}
          <section className="py-20 px-4 bg-gradient-to-b from-orange-400 to-yellow-500">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-16" style={{fontFamily: 'Press Start 2P, monospace'}}>
                💰 TREASURE AWAITS
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {prizes.map((prize, i) => {
                  const colors = [
                    "bg-yellow-300 border-yellow-500",
                    "bg-orange-300 border-orange-500", 
                    "bg-red-300 border-red-500",
                    "bg-purple-300 border-purple-500"
                  ];
                  return (
                    <Card key={i} className={`${colors[i]} border-4 rounded-2xl shadow-2xl hover:scale-105 transition-all`}>
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-4">{prize.icon}</div>
                        <h3 className="font-black text-blue-900 mb-2" style={{fontFamily: 'Press Start 2P, monospace'}}>{prize.title}</h3>
                        <p className="text-blue-800 text-sm font-bold">{prize.prize}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Submission Requirements */}
          <section className="py-20 px-4 bg-gradient-to-b from-blue-600 to-purple-600">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-16" style={{fontFamily: 'Press Start 2P, monospace'}}>
                📦 SHIP YOUR TREASURE
              </h2>
              
              <div className="bg-white bg-opacity-90 border-4 border-yellow-400 rounded-2xl p-8 shadow-2xl">
                <div className="text-yellow-600 mb-6 text-center">
                  <div className="text-2xl font-black" style={{fontFamily: 'Press Start 2P, monospace'}}>
                    ⏰ DEADLINE: SEPT 1, 12:00 AM IST
                  </div>
                </div>
                <div className="space-y-6 text-blue-900 font-bold text-lg">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">🎬</span>
                    <div>
                      <div className="font-black text-xl">2-min demo video</div>
                      <div className="text-blue-600">(can be casual - just show it working!)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">📝</span>
                    <div>
                      <div className="font-black text-xl">Short write-up</div>
                      <div className="text-blue-600">(what it does, why AI, how it works)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">🔗</span>
                    <div>
                      <div className="font-black text-xl">GitHub or live link</div>
                      <div className="text-blue-600">(so we can explore your creation)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-20 px-4 bg-gradient-to-b from-yellow-500 to-orange-600">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-16" style={{fontFamily: 'Press Start 2P, monospace'}}>
                🗺️ THE TREASURE MAP
              </h2>
              
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <div key={i} className="flex items-center gap-6 bg-white bg-opacity-90 border-4 border-blue-600 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all">
                    <div className="text-3xl">🏝️</div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="font-black text-blue-900 text-lg" style={{fontFamily: 'Press Start 2P, monospace'}}>{item.date}</span>
                        <span className="text-blue-600 text-sm font-bold">{item.time}</span>
                      </div>
                      <p className="text-blue-800 font-bold">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Rules */}
          <section className="py-20 px-4 bg-gradient-to-b from-orange-600 to-red-500">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-16" style={{fontFamily: 'Press Start 2P, monospace'}}>
                ⚖️ PIRATE CODE
              </h2>
              
              <div className="bg-white bg-opacity-90 border-4 border-yellow-400 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4 text-blue-900 font-bold text-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🚫</span>
                    <span>No prebuilt projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💬</span>
                    <span>Must join Discord crew</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">👥</span>
                    <span>Max 4 sailors per ship</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏴‍☠️</span>
                    <span>Be cool. Be safe. Don't cheat the vibe.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 px-4 bg-gradient-to-b from-red-500 to-blue-800">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-yellow-400 border-4 border-yellow-600 rounded-2xl p-2 shadow-2xl">
                <div className="bg-blue-900 rounded-xl p-12">
                  <h2 className="text-4xl md:text-6xl font-black text-yellow-400 mb-6" style={{fontFamily: 'Press Start 2P, monospace'}}>
                    🌅 FINAL CALL
                  </h2>
                  <p className="text-xl md:text-2xl text-white mb-8 font-bold italic">
                    "This isn't school. This is the adventure."
                  </p>
                  <p className="text-lg text-yellow-200 mb-8 font-bold">
                    Ship wildly. Build bravely. See you on the island.
                  </p>
                  
                  {/* Final CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      onClick={() => window.open('https://maximally-ai-shipathon.devpost.com/', '_blank')}
                      className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-black py-6 px-10 text-xl border-4 border-yellow-600 rounded-xl shadow-2xl transform hover:scale-110 transition-all"
                      style={{fontFamily: 'Press Start 2P, monospace'}}
                    >
                      🚢 BOARD THE SHIP NOW
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .glitch-text {
          animation: glitch 2s infinite;
        }
        
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </>
  );
}