import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/SEO';

export default function Shipathon() {
  const [glitchText, setGlitchText] = useState("BUILD OR BE FORGOTTEN");
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const texts = ["BUILD OR BE FORGOTTEN", "B̴U̷I̸L̶D̴ ̵O̶R̸ ̷B̶E̴ ̸F̷O̵R̶G̸O̶T̸T̶E̷N̴", "BUILD OR BE FORGOTTEN"];
      setGlitchText(texts[Math.floor(Math.random() * texts.length)]);
    }, 2000);

    const terminalInterval = setInterval(() => {
      const newLines = [
        "> initializing shipathon.exe...",
        "> loading rebel_protocols...",
        "> scanning for builders...",
        "> chaos_mode: ENABLED",
        "> AI_dust: LOADED",
        "> vibe_check: PASSED"
      ];
      setTerminalLines(prev => [...prev, newLines[prev.length % newLines.length]]);
    }, 1000);

    setTimeout(() => clearInterval(terminalInterval), 6000);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(terminalInterval);
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

      <div className="min-h-screen bg-black text-white overflow-hidden relative">
        {/* Glitch Effects */}
        <div className="fixed inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90 z-0"></div>
        <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDEwIDAgTCAwIDAgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative z-10">
          {/* Hero Section - Pixel Ocean */}
          <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
            <div className="text-center space-y-8 max-w-4xl">
              {/* Terminal Loading */}
              <div className="font-mono text-sm text-green-400 mb-8 h-32 terminal-cursor">
                {terminalLines.map((line, i) => (
                  <div key={i} className="animate-fade-in" style={{animationDelay: `${i * 1000}ms`}}>
                    {line}
                  </div>
                ))}
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-black text-[#E50914] glitch-text">
                  SHIPATHON
                </h1>
                <p className="text-2xl md:text-4xl font-mono text-[#FFD700] animate-pulse">
                  {glitchText}
                </p>
              </div>

              {/* Message in a Bottle */}
              <div className="relative my-12">
                <div className="bg-gray-900 border-2 border-[#FFD700] rounded-lg p-6 max-w-2xl mx-auto transform rotate-1 hover:rotate-0 transition-transform">
                  <div className="text-lg md:text-xl font-semibold mb-4">
                    📜 Message from the Digital Islands
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    "No pitch decks. No suits. Just ideas, friends, and a playground where weird is welcome."
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open('https://maximally-ai-shipathon.devpost.com/', '_blank')}
                  className="bg-[#E50914] hover:bg-red-700 text-white font-bold py-4 px-8 text-lg border-2 border-[#FFD700] hover:shadow-[0_0_20px_#FFD700] transition-all neon-border"
                >
                  ⚡ Register on Devpost
                </Button>
                <Button 
                  onClick={() => window.open('https://discord.gg/maximally', '_blank')}
                  variant="outline" 
                  className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black font-bold py-4 px-8 text-lg"
                >
                  💬 Join the Discord
                </Button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 text-4xl pixel-float">🏴‍☠️</div>
            <div className="absolute top-40 right-20 text-3xl pixel-float" style={{animationDelay: '1s'}}>⚓</div>
            <div className="absolute bottom-20 left-20 text-2xl pixel-float" style={{animationDelay: '2s'}}>🗝️</div>
            <div className="absolute top-1/2 left-5 text-2xl pixel-float" style={{animationDelay: '0.5s'}}>💎</div>
            <div className="absolute bottom-40 right-10 text-2xl pixel-float" style={{animationDelay: '1.5s'}}>🚀</div>
          </section>

          {/* About the Challenge */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-black text-[#FFD700] mb-6">
                  🔥 THE CHALLENGE
                </h2>
                <div className="bg-gray-900 border border-[#E50914] rounded-lg p-8 max-w-4xl mx-auto">
                  <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
                    "48 hours. One mission: <span className="text-[#E50914] font-bold">build with AI</span>. 
                    Doesn't matter who you are — coder, creator, or chaotic tinkerer — 
                    if you've got Wi-Fi and curiosity, you're in."
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-gray-900 border-[#FFD700]">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-4">📍</div>
                    <h3 className="font-bold text-[#FFD700]">Global</h3>
                    <p className="text-gray-400">All ages, all skill levels</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-900 border-[#FFD700]">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-4">🕒</div>
                    <h3 className="font-bold text-[#FFD700]">48 Hours</h3>
                    <p className="text-gray-400">Aug 30 – Sept 1, 2025</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-900 border-[#FFD700]">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-4">🧑‍🤝‍🧑</div>
                    <h3 className="font-bold text-[#FFD700]">Solo or Team</h3>
                    <p className="text-gray-400">Max 4 per team</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-900 border-[#FFD700]">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-4">🌐</div>
                    <h3 className="font-bold text-[#FFD700]">Online</h3>
                    <p className="text-gray-400">+ Chandigarh collab zone</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Who It's For */}
          <section className="py-20 px-4 bg-gray-900">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-black text-[#E50914] mb-6">
                🎯 WHO'S INVITED
              </h2>
              <p className="text-2xl text-[#FFD700] mb-12 font-mono">
                "No experience needed. Just energy. And ideas."
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: "🧙‍♂️", title: "First-time Builders", desc: "Never coded? Perfect." },
                  { icon: "👾", title: "No-code Makers", desc: "Indie hackers welcome" },
                  { icon: "🎨", title: "Creative Chaos", desc: "Designers, writers, memers" },
                  { icon: "🧠", title: "Curious Weirdos", desc: "Students & tinkerers" }
                ].map((persona, i) => (
                  <div key={i} className="transform hover:scale-105 transition-transform">
                    <div className="text-6xl mb-4">{persona.icon}</div>
                    <h3 className="text-xl font-bold text-[#FFD700] mb-2">{persona.title}</h3>
                    <p className="text-gray-400">{persona.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tracks */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-[#FFD700] text-center mb-16">
                🧭 CHOOSE YOUR TRACK
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {tracks.map((track, i) => (
                  <Card key={i} className="bg-gray-900 border-2 border-[#E50914] hover:border-[#FFD700] transition-colors transform hover:scale-105">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-[#FFD700] mb-4">{track.title}</h3>
                      <p className="text-gray-300 mb-6">{track.description}</p>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-500 font-semibold">Build ideas:</p>
                        {track.examples.map((example, j) => (
                          <div key={j} className="text-sm text-gray-400 font-mono">
                            → {example}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* What to Build */}
          <section className="py-20 px-4 bg-gray-900">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-black text-[#E50914] mb-6">
                🧱 WHAT TO BUILD
              </h2>
              <p className="text-2xl text-[#FFD700] mb-12 font-mono">
                "Code it. No-code it. Prompt it. Doesn't matter — just ship it."
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "GPT therapist that actually listens",
                  "Meme generator for your mood",
                  "Chrome extension that saves sanity", 
                  "Storyteller bot with personality",
                  "AI that roasts your code",
                  "Music producer that gets you"
                ].map((idea, i) => (
                  <div key={i} className="bg-black border border-[#FFD700] rounded-lg p-6 hover:shadow-[0_0_20px_#FFD700] transition-all">
                    <div className="text-2xl mb-2">📦</div>
                    <p className="text-gray-300">{idea}</p>
                  </div>
                ))}
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
          <section className="py-20 px-4 bg-gray-900">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-[#E50914] text-center mb-16">
                🏆 TREASURE AWAITS
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {prizes.map((prize, i) => (
                  <Card key={i} className="bg-black border-2 border-[#FFD700] hover:shadow-[0_0_30px_#FFD700] transition-all">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-4">{prize.icon}</div>
                      <h3 className="font-bold text-[#FFD700] mb-2">{prize.title}</h3>
                      <p className="text-gray-300 text-sm">{prize.prize}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-[#FFD700] text-center mb-16">
                📅 THE MAP
              </h2>
              
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <div key={i} className="flex items-center gap-6 bg-gray-900 border border-[#E50914] rounded-lg p-6">
                    <div className="text-2xl">🏴‍☠️</div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="font-bold text-[#FFD700]">{item.date}</span>
                        <span className="text-gray-400 text-sm">{item.time}</span>
                      </div>
                      <p className="text-gray-300">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Rules */}
          <section className="py-20 px-4 bg-gray-900">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-[#E50914] text-center mb-16">
                ✅ THE RULES
              </h2>
              
              <div className="bg-black border border-[#FFD700] rounded-lg p-8 font-mono text-green-400">
                <div className="space-y-2">
                  <div>&gt; No prebuilt projects</div>
                  <div>&gt; Must join Discord</div>
                  <div>&gt; Max 4 per team</div>
                  <div>&gt; Be cool. Be safe. Don't cheat the vibe.</div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-[#E50914] to-[#FFD700] p-1 rounded-lg">
                <div className="bg-black rounded-lg p-12">
                  <h2 className="text-4xl md:text-6xl font-black text-[#FFD700] mb-6">
                    👋 FINAL TRANSMISSION
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 italic">
                    "This isn't school. This is the arena."
                  </p>
                  <p className="text-lg text-gray-400 mb-8">
                    Ship wildly. Build bravely. See you inside.
                  </p>
                  <div className="font-mono text-green-400">
                    &gt; log off &amp; start building
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