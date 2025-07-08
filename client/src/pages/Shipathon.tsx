import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/SEO';

export default function Shipathon() {
  const [glitchText, setGlitchText] = useState("BUILD OR BE FORGOTTEN");

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const texts = ["BUILD OR BE FORGOTTEN", "SHIP OR SINK", "AI POWERED CHAOS"];
      setGlitchText(texts[Math.floor(Math.random() * texts.length)]);
    }, 3000);

    return () => {
      clearInterval(glitchInterval);
    };
  }, []);

  const tracks = [
    {
      title: "BUILD WITH AI",
      description: "Agents, bots, tools, extensions, automations",
      examples: ["AI agents & chatbots", "Chrome extensions & tools", "GPT workflows & automations", "Startup MVPs"]
    },
    {
      title: "CREATE WITH AI", 
      description: "Art, music, video, design, brand, memes",
      examples: ["Visuals, music, storytelling", "Podcast snippets & edits", "Design kits & voiceovers", "Creative experiments"]
    },
    {
      title: "EXPERIMENT WITH AI",
      description: "Pranks, simulations, hacks, weird stuff", 
      examples: ["Prompt hacks & sims", "Why does this exist tools", "Absurd yet brilliant bots", "Creative chaos"]
    }
  ];

  const prizes = [
    { title: "BEST BUILD", prize: "₹2,500 + LOR + internship referrals", icon: "🛠️" },
    { title: "BEST CREATE", prize: "₹2,500 + LOR + Insta feature", icon: "🎨" },
    { title: "BEST EXPERIMENT", prize: "₹2,500 + Weird Genius cert", icon: "🧪" },
    { title: "MOST VIRAL", prize: "Feature + meme drop + reel collab", icon: "🚀" }
  ];

  const timeline = [
    { date: "AUG 30", time: "12:00 AM IST", event: "Hackathon begins - Start building!" },
    { date: "SEP 1", time: "12:00 AM IST", event: "Submission deadline" },
    { date: "SEP 1-2", time: "TBD", event: "Judging period" },
    { date: "SEP 3+", time: "TBD", event: "Winners announced & featured" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <SEO 
        title="AI Shipathon 2025 - Maximally Global Hackathon"
        description="48-hour global hackathon for AI builders. Build, create, or experiment with AI. Aug 30 - Sept 1, 2025. ₹7,500+ prizes. All skill levels welcome."
        keywords="AI hackathon, global hackathon, AI builders, AI creativity, shipathon, maximally"
      />

      <div className="min-h-screen bg-black text-white overflow-hidden relative">
        {/* Pixelated background */}
        <div className="fixed inset-0 pixel-grid opacity-30 z-0"></div>

        {/* Floating pixel elements */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="fixed w-4 h-4 bg-red-600 pixel-border animate-float opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i * 0.5}s`
            }}
          />
        ))}

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
            {/* Pixel Ship Animation */}
            <div className="mb-12 pixel-float">
              <div className="relative">
                {/* Ship body */}
                <div className="w-32 h-16 bg-maximally-red minecraft-block relative">
                  <div className="absolute top-4 left-4 w-3 h-3 bg-maximally-black pixel-border"></div>
                  <div className="absolute top-4 left-12 w-3 h-3 bg-maximally-black pixel-border"></div>
                  <div className="absolute top-4 left-20 w-3 h-3 bg-maximally-black pixel-border"></div>
                </div>
                {/* Mast */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-2 h-16 bg-red-600 minecraft-block"></div>
                {/* Sail with AI circuits */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 translate-x-4 w-16 h-12 bg-red-600 minecraft-block flex items-center justify-center">
                  <span className="font-press-start text-xs text-black">AI</span>
                </div>
                {/* Flag */}
                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-maximally-red minecraft-block"></div>
              </div>
            </div>

            <div className="text-center space-y-8 max-w-4xl relative">
              {/* AI Shipathon Logo */}
              <div className="space-y-6">
                <div className="relative inline-block">
                  <div className="minecraft-block bg-red-600 p-4 md:p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-press-start text-black">
                      AI
                    </h1>
                  </div>
                  <div className="minecraft-block bg-black p-3 md:p-4 transform rotate-1 -mt-4 hover:rotate-0 transition-transform duration-300 border-2 border-red-600">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-press-start text-red-600">
                      SHIPATHON
                    </h1>
                  </div>
                </div>
                <div className="minecraft-block bg-black px-4 md:px-6 py-3 inline-block relative overflow-hidden border-2 border-red-600">
                <p className="text-sm md:text-lg lg:text-xl font-press-start text-red-600 glitch-text relative z-10">
                  {glitchText}
                </p>
                {/* Glitch overlay effects */}
                <div className="absolute inset-0 bg-red-600 opacity-20 animate-glitch-red"></div>
                <div className="absolute inset-0 bg-black opacity-20 animate-glitch-blue"></div>
                {/* Scanning line effect */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-red-600 animate-scan-line"></div>
              </div>

              {/* Event Details */}
              <div className="minecraft-block bg-red-600 max-w-md mx-auto p-4 md:p-6">
                <div className="text-black font-press-start text-sm md:text-lg mb-2">AUG 30 - SEP 1</div>
                <div className="text-black font-press-start text-sm md:text-lg">GLOBAL DIGITAL</div>
              </div>

              {/* Message Box */}
              <div className="relative my-12">
                <div className="minecraft-block bg-black p-6 max-w-2xl mx-auto hover:scale-105 transition-transform duration-300 border-2 border-red-600">
                  <div className="text-base md:text-xl font-press-start mb-4 text-red-600">
                    48-HOUR GLOBAL HACKATHON
                  </div>
                  <p className="text-red-600 font-jetbrains leading-relaxed text-sm md:text-base">
                    For the curious, the chaotic, and the creative. No pitch decks. No suits. 
                    Just ideas, friends, and a playground where weird is welcome.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open('https://maximally-ai-shipathon-2025.devpost.com/', '_blank')}
                  className="pixel-button bg-red-600 text-black font-press-start py-4 px-8 text-lg hover:scale-105 transition-all duration-300 border-2 border-red-800"
                >
                  REGISTER NOW
                </Button>
                <Button 
                  onClick={() => window.open('https://discord.gg/maximally', '_blank')}
                  className="pixel-button bg-black text-red-600 font-press-start py-4 px-8 text-lg hover:scale-105 transition-all duration-300 border-2 border-red-600"
                >
                  JOIN DISCORD
                </Button>
              </div>
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute top-20 left-10 text-4xl pixel-float">🤖</div>
            <div className="absolute top-40 right-20 text-3xl pixel-float" style={{animationDelay: '1s'}}>⚡</div>
            <div className="absolute top-1/2 left-5 text-2xl pixel-float" style={{animationDelay: '0.5s'}}>💾</div>
            <div className="absolute bottom-40 right-10 text-2xl pixel-float" style={{animationDelay: '1.5s'}}>🔧</div>
            <div className="absolute top-32 left-1/3 text-2xl pixel-float" style={{animationDelay: '3s'}}>💻</div>
          </div>
        </section>

          {/* About the Challenge */}
          <section className="py-20 px-4 bg-gray-900">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-press-start text-red-600 mb-6">
                  THE MISSION
                </h2>
                <div className="minecraft-block bg-red-600 p-6 md:p-8 max-w-4xl mx-auto">
                  <p className="text-lg md:text-xl lg:text-2xl font-jetbrains text-black leading-relaxed">
                    Whether you're a coder, artist, student, or first-time builder — if you're excited about AI 
                    and want to build something real, this event is for you.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="minecraft-block bg-red-600 hover:scale-105 transition-all duration-300">
                  <CardContent className="p-4 md:p-6 text-center">
                    <div className="text-2xl md:text-3xl mb-4">🌍</div>
                    <h3 className="font-press-start text-black mb-2 text-sm md:text-base">GLOBAL</h3>
                    <p className="text-black font-jetbrains font-bold text-sm">All skill levels</p>
                  </CardContent>
                </Card>
                <Card className="minecraft-block bg-black hover:scale-105 transition-all duration-300 border-2 border-red-600">
                  <CardContent className="p-4 md:p-6 text-center">
                    <div className="text-2xl md:text-3xl mb-4">⏰</div>
                    <h3 className="font-press-start text-red-600 mb-2 text-sm md:text-base">48 HOURS</h3>
                    <p className="text-red-600 font-jetbrains font-bold text-sm">Aug 30 - Sep 1</p>
                  </CardContent>
                </Card>
                <Card className="minecraft-block bg-red-600 hover:scale-105 transition-all duration-300">
                  <CardContent className="p-4 md:p-6 text-center">
                    <div className="text-2xl md:text-3xl mb-4">👥</div>
                    <h3 className="font-press-start text-black mb-2 text-sm md:text-base">TEAMS</h3>
                    <p className="text-black font-jetbrains font-bold text-sm">Solo or up to 4</p>
                  </CardContent>
                </Card>
                <Card className="minecraft-block bg-black hover:scale-105 transition-all duration-300 border-2 border-red-600">
                  <CardContent className="p-4 md:p-6 text-center">
                    <div className="text-2xl md:text-3xl mb-4">💻</div>
                    <h3 className="font-press-start text-red-600 mb-2 text-sm md:text-base">ONLINE</h3>
                    <p className="text-red-600 font-jetbrains font-bold text-sm">+ Chandigarh hub</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Who It's For */}
          <section className="py-20 px-4 bg-black">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-press-start text-red-600 mb-6">
                WHO CAN JOIN
              </h2>
              <div className="minecraft-block bg-red-600 px-4 md:px-6 py-3 inline-block mb-12">
                <p className="text-lg md:text-xl font-press-start text-black">
                  NO EXPERIENCE NEEDED. JUST ENERGY + IDEAS.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: "🧙‍♂️", title: "FIRST-TIMERS", desc: "Never coded? Perfect!" },
                  { icon: "👾", title: "NO-CODERS", desc: "Indie hackers welcome" },
                  { icon: "🎨", title: "CREATIVES", desc: "AI-curious designers & artists" },
                  { icon: "🧠", title: "STUDENTS", desc: "Creators of all kinds" }
                ].map((persona, i) => {
                  const isEven = i % 2 === 0;
                  return (
                    <div key={i} className={`minecraft-block ${isEven ? 'bg-red-600' : 'bg-black border-2 border-red-600'} p-4 md:p-6 hover:scale-105 transition-all duration-300`}>
                      <div className="text-4xl md:text-6xl mb-4">{persona.icon}</div>
                      <h3 className={`text-lg md:text-xl font-press-start mb-2 ${isEven ? 'text-black' : 'text-red-600'}`}>{persona.title}</h3>
                      <p className={`${isEven ? 'text-black' : 'text-red-600'} font-jetbrains font-bold text-sm md:text-base`}>{persona.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Tracks */}
          <section className="py-20 px-4 bg-gray-900">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-press-start text-red-600 text-center mb-16">
                CHOOSE YOUR TRACK
              </h2>

              <div className="grid lg:grid-cols-3 gap-8">
                {tracks.map((track, i) => {
                  const colors = [
                    { bg: "bg-red-600", text: "text-black" },
                    { bg: "bg-black border-2 border-red-600", text: "text-red-600" },
                    { bg: "bg-red-600", text: "text-black" }
                  ];
                  return (
                    <Card key={i} className={`minecraft-block ${colors[i].bg} hover:scale-105 transition-all duration-300`}>
                      <CardContent className="p-6 md:p-8">
                        <h3 className={`text-xl md:text-2xl font-press-start ${colors[i].text} mb-4`}>{track.title}</h3>
                        <p className={`${colors[i].text} mb-6 font-jetbrains font-bold text-sm md:text-base`}>{track.description}</p>
                        <div className="space-y-2">
                          <p className={`text-xs md:text-sm ${colors[i].text} font-press-start`}>IDEAS:</p>
                          {track.examples.map((example, j) => (
                            <div key={j} className={`text-xs md:text-sm ${colors[i].text} font-jetbrains`}>
                              ⚡ {example}
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
          <section className="py-20 px-4 bg-black">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-press-start text-red-600 mb-6">
                WHAT TO BUILD
              </h2>
              <div className="minecraft-block bg-red-600 px-4 md:px-6 py-3 inline-block mb-12">
                <p className="text-lg md:text-xl font-press-start text-black">
                  CODE IT. NO-CODE IT. PROMPT IT. JUST SHIP IT.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { idea: "GPT THERAPIST THAT LISTENS", icon: "🧠" },
                  { idea: "AI MEME GENERATOR", icon: "😂" },
                  { idea: "CHROME EXTENSION FOR SANITY", icon: "🔧" }, 
                  { idea: "STORYTELLER BOT", icon: "📚" },
                  { idea: "AI CODE ROASTER", icon: "🔥" },
                  { idea: "MUSIC PRODUCER AI", icon: "🎵" }
                ].map((item, i) => {
                  const isEven = i % 2 === 0;
                  return (
                    <div key={i} className={`minecraft-block ${isEven ? 'bg-red-600' : 'bg-black border-2 border-red-600'} p-4 md:p-6 hover:scale-105 transition-all duration-300`}>
                      <div className="text-3xl md:text-4xl mb-4">{item.icon}</div>
                      <p className={`${isEven ? 'text-black' : 'text-white'} font-jetbrains font-bold text-xs md:text-sm`}>{item.idea}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Submission Requirements */}
          <section className="py-20 px-4 bg-gray-900">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-press-start text-red-600 text-center mb-16">
                SUBMISSION RULES
              </h2>

              <div className="minecraft-block bg-black p-6 md:p-8 border-2 border-red-600">
                <div className="text-red-600 mb-6 text-center">
                  <div className="text-lg md:text-2xl font-press-start mb-4">
                    DEADLINE: SEP 1, 12:00 AM IST
                  </div>
                </div>
                <div className="space-y-6 text-red-600 font-jetbrains text-base md:text-lg">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl md:text-3xl">🎬</span>
                    <div>
                      <div className="font-press-start text-lg md:text-xl text-red-600">Demo Video</div>
                      <div className="text-red-600 text-sm md:text-base">Max 2 mins - screen record or natural</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl md:text-3xl">📝</span>
                    <div>
                      <div className="font-press-start text-lg md:text-xl text-red-600">Write-up</div>
                      <div className="text-red-600 text-sm md:text-base">What you built, why AI, how it works</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl md:text-3xl">🔗</span>
                    <div>
                      <div className="font-press-start text-lg md:text-xl text-red-600">Live Link</div>
                      <div className="text-red-600 text-sm md:text-base">Working link or GitHub repo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Prizes */}
          <section className="py-20 px-4 bg-black">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-press-start text-red-600 text-center mb-16">
                PRIZES & AWARDS
              </h2>

              <div className="text-center mb-8">
                <div className="minecraft-block bg-red-600 px-4 md:px-6 py-3 inline-block">
                  <p className="font-press-start text-black text-lg md:text-xl">₹7,500+ CASH + MAXIMALLY PERKS</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "BEST BUILD", prize: "₹2,500 + LOR + internship referrals", icon: "🛠️" },
                  { title: "BEST CREATE", prize: "₹2,500 + LOR + Insta feature", icon: "🎨" },
                  { title: "BEST EXPERIMENT", prize: "₹2,500 + Weird Genius cert", icon: "🧪" },
                  { title: "BEST BEGINNER", prize: "LOR + certificate + early access", icon: "🌟" },
                  { title: "MOST VIRAL", prize: "Feature + meme drop + reel collab", icon: "🚀" },
                  { title: "FUTURE FOUNDER", prize: "Inner circle + mentorship", icon: "👑" }
                ].map((prize, i) => {
                  const colors = ["bg-red-600", "bg-black border-2 border-red-600", "bg-red-600", "bg-black border-2 border-red-600", "bg-red-600", "bg-black border-2 border-red-600"];
                  const textColors = ["text-black", "text-white", "text-black", "text-white", "text-black", "text-white"];
                  return (
                    <Card key={i} className={`minecraft-block ${colors[i]} hover:scale-105 transition-all duration-300`}>
                      <CardContent className="p-4 md:p-6 text-center">
                        <div className="text-3xl md:text-4xl mb-4">{prize.icon}</div>
                        <h3 className={`font-press-start ${textColors[i]} mb-2 text-xs md:text-sm`}>{prize.title}</h3>
                        <p className={`${textColors[i]} text-xs font-jetbrains font-bold`}>{prize.prize}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-20 px-4 bg-black relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
              {[...Array(15)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-3 h-3 bg-red-600 opacity-20 pixel-float"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${3 + i * 0.2}s`
                  }}
                />
              ))}
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-press-start text-red-600 text-center mb-16 neon-glow">
                EVENT TIMELINE
              </h2>

              <div className="space-y-6">
                {timeline.map((item, i) => {
                  const isEven = i % 2 === 0;
                  return (
                    <div key={i} className={`flex items-center gap-4 md:gap-6 minecraft-block ${isEven ? 'bg-red-600' : 'bg-black border-2 border-red-600'} p-4 md:p-6 hover:scale-105 hover:rotate-1 transition-all duration-300 relative overflow-hidden`}>
                      {/* Glitch overlay for extra style */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-scan-line"></div>
                      
                      <div className="text-3xl md:text-4xl pixel-float relative z-10">🏝️</div>
                      <div className="flex-1 relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className={`font-press-start ${isEven ? 'text-black' : 'text-red-600'} text-sm md:text-lg pixel-glow`}>
                            {item.date}
                          </span>
                          <span className={`${isEven ? 'text-black' : 'text-white'} text-xs md:text-sm font-jetbrains font-bold`}>
                            {item.time}
                          </span>
                        </div>
                        <p className={`${isEven ? 'text-black' : 'text-white'} font-jetbrains font-bold text-sm md:text-base mt-2`}>
                          {item.event}
                        </p>
                      </div>
                      
                      {/* Corner accent */}
                      <div className={`absolute top-0 right-0 w-4 h-4 ${isEven ? 'bg-black' : 'bg-red-600'} minecraft-block`}></div>
                    </div>
                  );
                })}
              </div>

              {/* Floating call-to-action */}
              <div className="text-center mt-12">
                <div className="minecraft-block bg-red-600 p-4 inline-block hover:scale-110 transition-all duration-300 pixel-glow">
                  <p className="font-press-start text-black text-sm md:text-base">
                    ⏰ MARK YOUR CALENDARS! ⏰
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Judging Criteria */}
          <section className="py-20 px-4 bg-gray-900">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-press-start text-red-600 text-center mb-16">
                JUDGING CRITERIA
              </h2>

              <div className="minecraft-block bg-black p-6 md:p-8 border-2 border-red-600">
                <div className="space-y-6 text-red-600 font-jetbrains text-base md:text-lg">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl md:text-3xl">💡</span>
                    <div>
                      <div className="font-press-start text-lg md:text-xl text-maximally-red">Originality & Creativity</div>
                      <div className="text-red-600 text-sm md:text-base">Is it fresh and unexpected?</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl md:text-3xl">⚙️</span>
                    <div>
                      <div className="font-press-start text-lg md:text-xl text-maximally-red">Execution</div>
                      <div className="text-red-600 text-sm md:text-base">Does it work or at least demo clearly?</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl md:text-3xl">📝</span>
                    <div>
                      <div className="font-press-start text-lg md:text-xl text-maximally-red">Clarity</div>
                      <div className="text-red-600 text-sm md:text-base">Can we understand it easily?</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl md:text-3xl">🤖</span>
                    <div>
                      <div className="font-press-start text-lg md:text-xl text-maximally-red">AI Use</div>
                      <div className="text-red-600 text-sm md:text-base">Was AI used meaningfully?</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl md:text-3xl">🌟</span>
                    <div>
                      <div className="font-press-start text-lg md:text-xl text-maximally-red">Beginner Spirit</div>
                      <div className="text-red-600 text-sm md:text-base">Bonus for first-timers or clever hacks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tools & Resources */}
          <section className="py-20 px-4 bg-black">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-press-start text-red-600 text-center mb-16">
                TOOLS & RESOURCES
              </h2>

              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                <Card className="minecraft-block bg-red-600 hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-press-start text-white mb-4">NO-CODE TOOLS</h3>
                    <div className="space-y-2 text-white font-jetbrains text-sm md:text-base">
                      <div>⚡ Glide, Bubble, Tally</div>
                      <div>⚡ Zapier, n8n</div>
                      <div>⚡ Replit, Vercel</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="minecraft-block bg-maximally-red hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-press-start text-white mb-4">AI TOOLS</h3>
                    <div className="space-y-2 text-white font-jetbrains text-sm md:text-base">
                      <div>⚡ OpenAI, RunwayML</div>
                      <div>⚡ ElevenLabs, Replicate</div>
                      <div>⚡ Hugging Face</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="minecraft-block bg-red-600 hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-press-start text-white mb-4">DEV TOOLS</h3>
                    <div className="space-y-2 text-white font-jetbrains text-sm md:text-base">
                      <div>⚡ LangChain, Supabase</div>
                      <div>⚡ GitHub, Replit</div>
                      <div>⚡ Chrome Extensions</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="minecraft-block bg-black p-6 md:p-8 border-2 border-red-600">
                <h3 className="text-2xl md:text-3xl font-press-start text-red-600 text-center mb-6">
                  FREE LEARNING RESOURCES
                </h3>
                <div className="space-y-4 text-red-600 font-jetbrains text-base md:text-lg">
                  <div className="flex items-start gap-3">
                    <span className="text-xl md:text-2xl flex-shrink-0">📚</span>
                    <span>Andrew Ng's "AI for Everyone" - Coursera</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl md:text-2xl flex-shrink-0">☁️</span>
                    <span>Google Cloud's "Intro to Gen AI"</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl md:text-2xl flex-shrink-0">🎓</span>
                    <span>Elements of AI - University of Helsinki</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl md:text-2xl flex-shrink-0">💡</span>
                    <span>ProjectPro (40+ AI beginner ideas)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Rules */}
          <section className="py-20 px-4 bg-gray-900">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-press-start text-red-600 text-center mb-16">
                RULES & GUIDELINES
              </h2>

              <div className="minecraft-block bg-black p-6 md:p-8 border-2 border-red-600">
                <div className="space-y-4 text-red-600 font-jetbrains text-base md:text-lg">
                  <div className="flex items-start md:items-center gap-3">
                    <span className="text-xl md:text-2xl flex-shrink-0">🚫</span>
                    <span>No prebuilt projects - all builds must start after Aug 30, 12:00 AM IST</span>
                  </div>
                  <div className="flex items-start md:items-center gap-3">
                    <span className="text-xl md:text-2xl flex-shrink-0">💬</span>
                    <span>Must join Discord to qualify for prizes</span>
                  </div>
                  <div className="flex items-start md:items-center gap-3">
                    <span className="text-xl md:text-2xl flex-shrink-0">👥</span>
                    <span>Max 4 members per team (solo participation welcome)</span>
                  </div>
                  <div className="flex items-start md:items-center gap-3">
                    <span className="text-xl md:text-2xl flex-shrink-0">🏴‍☠️</span>
                    <span>Project must be safe, respectful, and follow code of conduct</span>
                  </div>
                  <div className="flex items-start md:items-center gap-3">
                    <span className="text-xl md:text-2xl flex-shrink-0">🌍</span>
                    <span>Global eligibility - all ages, all skill levels welcome</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Support Channels */}
          <section className="py-20 px-4 bg-black">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-press-start text-red-600 text-center mb-16">
                SUPPORT CHANNELS
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="minecraft-block bg-red-600 hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 md:p-8 text-center">
                    <div className="text-3xl md:text-4xl mb-4">💬</div>
                    <h3 className="font-press-start text-white mb-2 text-sm md:text-base">DISCORD</h3>
                    <p className="text-white text-xs md:text-sm font-jetbrains font-bold">Main hub for updates, teams, banter</p>
                    <Button 
                      onClick={() => window.open('https://discord.gg/EE7n8tD3WS', '_blank')}
                      className="mt-4 bg-white text-black font-press-start text-xs px-4 py-2 border border-black"
                    >
                      JOIN NOW
                    </Button>
                  </CardContent>
                </Card>

                <Card className="minecraft-block bg-black hover:scale-105 transition-all duration-300 border-2 border-red-600">
                  <CardContent className="p-6 md:p-8 text-center">
                    <div className="text-3xl md:text-4xl mb-4">📧</div>
                    <h3 className="font-press-start text-red-600 mb-2 text-sm md:text-base">EMAIL & SOCIAL</h3>
                    <div className="text-red-600 text-xs md:text-sm font-jetbrains font-bold space-y-1">
                      <div>hello@maximally.in</div>
                      <div>@maximally.in (Instagram)</div>
                      <div>www.maximally.in</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 px-4 bg-gray-900">
            <div className="max-w-4xl mx-auto text-center">
              <div className="minecraft-block bg-red-600 p-2">
                <div className="minecraft-block bg-black p-8 md:p-12 border-2 border-red-600">
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-press-start text-red-600 mb-6">
                    READY TO SHIP?
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl text-red-600 mb-8 font-jetbrains italic">
                    "This isn't school. This is the playground."
                  </p>
                  <p className="text-base md:text-lg text-red-600 mb-8 font-jetbrains font-bold">
                    Experiment wildly. Build bravely. See you inside.
                  </p>

                  {/* Final CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      onClick={() => window.open('https://maximally-ai-shipathon-2025.devpost.com/', '_blank')}
                      className="pixel-button bg-red-600 text-white font-press-start py-4 md:py-6 px-6 md:px-10 text-lg md:text-xl hover:scale-110 transition-all duration-300 border-2 border-red-800"
                    >
                      🚢 REGISTER ON DEVPOST
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}