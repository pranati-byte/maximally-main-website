import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function GrandTechAssembly() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-orange-900/20 to-black text-white overflow-hidden">
      <SEO 
        title="Grand Tech Assembly - GTA Themed Hackathon | Maximally"
        description="The World's First GTA Hackathon. Pick your mission. Build your city. Earn respect. Nov 1-7, 2025 | 100% Online"
        keywords="GTA hackathon, Grand Tech Assembly, Grand Indian Hackathon Season, gaming hackathon, online hackathon 2025"
      />

      {/* Glitch Background Effect */}
      <div className="fixed inset-0 opacity-10 bg-gradient-to-r from-red-500 via-transparent to-green-500 animate-pulse"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20">
        {/* Scanlines Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent opacity-30 animate-pulse"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <Badge className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 text-lg font-bold border-2 border-yellow-400 shadow-lg shadow-orange-500/50">
              Nov 1–7, 2025
            </Badge>
            <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 text-lg font-bold border-2 border-green-400 shadow-lg shadow-green-500/50">
              100% Online
            </Badge>
            <Badge className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-6 py-2 text-lg font-bold border-2 border-red-400 shadow-lg shadow-red-500/50">
              GTA Hackathon
            </Badge>
          </div>

          {/* Main Title */}
          <h1 className="font-black text-6xl md:text-8xl lg:text-9xl mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
            GRAND TECH
            <br />
            <span className="text-5xl md:text-7xl lg:text-8xl text-green-400 drop-shadow-lg">ASSEMBLY</span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl font-bold mb-4 text-yellow-300 drop-shadow-lg">
            The World's First GTA Hackathon
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Pick your mission. Build your city. Earn respect.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold px-8 py-4 text-lg border-2 border-yellow-400 shadow-lg shadow-orange-500/50 transform hover:scale-105 transition-all duration-200"
            >
              🎯 Join on Devpost
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-500/30 hover:to-purple-500/30 text-green-400 font-bold px-8 py-4 text-lg border-2 border-green-400 shadow-lg shadow-green-500/50 transform hover:scale-105 transition-all duration-200"
            >
              🏙️ Enter Discord City
            </Button>
          </div>
        </div>

        {/* HUD Elements */}
        <div className="absolute top-8 left-8 bg-black/80 border-2 border-green-400 p-4 rounded font-mono text-green-400">
          <div className="text-xs">RESPECT POINTS</div>
          <div className="text-2xl font-bold">★★★★☆</div>
        </div>
        
        <div className="absolute top-8 right-8 bg-black/80 border-2 border-red-400 p-4 rounded font-mono text-red-400">
          <div className="text-xs">MISSION STATUS</div>
          <div className="text-lg font-bold">ACTIVE</div>
        </div>
      </section>

      {/* What Is Grand Tech Assembly */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900/90 to-black/90 border-2 border-orange-500 rounded-lg p-8 mb-8 shadow-2xl shadow-orange-500/30">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-orange-400 border-b-2 border-orange-500 pb-4">
              🎮 WHAT IS GRAND TECH ASSEMBLY?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              A 7-day global hackathon styled like the nostalgia and chaos of <strong className="text-yellow-400">Grand Theft Auto</strong>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              Not crime — but <strong className="text-red-400">missions, respect, and chaos</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* The Idea */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900/90 to-purple-900/90 border-2 border-blue-500 rounded-lg p-8 mb-8 shadow-2xl shadow-blue-500/30">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-blue-400 border-b-2 border-blue-500 pb-4">
              🧠 THE IDEA
            </h2>
            <p className="text-xl text-yellow-300 mb-4 italic">
              "If hackathons were an open-world game, what would you build?"
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              This is a <strong className="text-green-400">sandbox hackathon</strong>.
            </p>
            <ul className="text-lg text-gray-300 space-y-2">
              <li>• No fixed theme, only <strong className="text-orange-400">missions</strong> and <strong className="text-red-400">side quests</strong></li>
              <li>• Every project = a story in the GTA: Maximally "city"</li>
              <li>• The vibe = <strong className="text-yellow-400">chaotic, nostalgic, and beginner-friendly</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-green-900/90 to-teal-900/90 border-2 border-green-500 rounded-lg p-8 mb-8 shadow-2xl shadow-green-500/30">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-green-400 border-b-2 border-green-500 pb-4">
              📆 DATES & FORMAT
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-black/50 p-4 rounded border border-green-400">
                  <div className="text-sm text-green-400 font-mono">DATE</div>
                  <div className="text-xl font-bold text-white">November 1–7, 2025</div>
                </div>
                <div className="bg-black/50 p-4 rounded border border-green-400">
                  <div className="text-sm text-green-400 font-mono">DURATION</div>
                  <div className="text-xl font-bold text-white">7 days</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-black/50 p-4 rounded border border-green-400">
                  <div className="text-sm text-green-400 font-mono">FORMAT</div>
                  <div className="text-xl font-bold text-white">Devpost + Discord</div>
                </div>
                <div className="bg-black/50 p-4 rounded border border-green-400">
                  <div className="text-sm text-green-400 font-mono">RESULTS</div>
                  <div className="text-xl font-bold text-white">Grand Ceremony</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Joins */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-red-900/90 to-pink-900/90 border-2 border-red-500 rounded-lg p-8 mb-8 shadow-2xl shadow-red-500/30">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-red-400 border-b-2 border-red-500 pb-4">
              ⚙️ WHO CAN JOIN?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-lg text-gray-300">
              <ul className="space-y-3">
                <li className="flex items-center"><span className="text-yellow-400 mr-2">★</span> Anyone, anywhere</li>
                <li className="flex items-center"><span className="text-yellow-400 mr-2">★</span> Solo or teams of up to 4</li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center"><span className="text-yellow-400 mr-2">★</span> Beginners, no-coders, designers, hackers</li>
                <li className="flex items-center"><span className="text-yellow-400 mr-2">★</span> No prep needed, no fixed stack</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Missions (Tracks) */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center text-yellow-400 drop-shadow-lg">
            🎯 MISSIONS (TRACKS)
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "The Heist",
                description: "automation, AI, or time/resource-saving builds",
                color: "from-orange-600 to-red-600",
                border: "border-orange-500"
              },
              {
                title: "Street Hustle",
                description: "scrappy, quick, chaotic MVPs (memes, tools, apps)",
                color: "from-green-600 to-teal-600",
                border: "border-green-500"
              },
              {
                title: "Chaos Mode",
                description: "cursed, weird, experimental, art-tech mashups",
                color: "from-purple-600 to-pink-600",
                border: "border-purple-500"
              },
              {
                title: "Rise to Power",
                description: "ambitious, startup-scale, serious builds",
                color: "from-blue-600 to-indigo-600",
                border: "border-blue-500"
              },
              {
                title: "Vice Streets",
                description: "beginner's lane: no-code, first projects, student hacks",
                color: "from-yellow-600 to-orange-600",
                border: "border-yellow-500"
              }
            ].map((mission, index) => (
              <div key={index} className={`bg-gradient-to-br ${mission.color} p-6 rounded-lg border-2 ${mission.border} shadow-2xl transform hover:scale-105 transition-all duration-300`}>
                <h3 className="text-xl font-bold mb-3 text-white">{mission.title}</h3>
                <p className="text-gray-100 text-sm leading-relaxed">{mission.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Side Quests */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/90 to-indigo-900/90 border-2 border-purple-500 rounded-lg p-8 mb-8 shadow-2xl shadow-purple-500/30">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-purple-400 border-b-2 border-purple-500 pb-4">
              🎲 SIDE QUESTS (MINI CHALLENGES)
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-lg text-gray-300">
              <ul className="space-y-3">
                <li className="flex items-center"><span className="text-green-400 mr-2">•</span> Meme contest (best GTA-style hack meme)</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">•</span> Speed Build (3 hours → ship anything fast)</li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center"><span className="text-green-400 mr-2">•</span> Chaos Drop (wildest project mid-hackathon)</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">•</span> Funniest Demo Pitch (most entertaining submission video)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-900/90 to-orange-900/90 border-2 border-yellow-500 rounded-lg p-8 mb-8 shadow-2xl shadow-yellow-500/30">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-yellow-400 border-b-2 border-yellow-500 pb-4">
              🏆 PRIZE POOL
            </h2>
            <div className="text-center mb-8">
              <div className="text-5xl font-black text-green-400 mb-2">₹5,000 CASH</div>
              <div className="text-xl text-gray-300">+ ridiculous GTA-styled awards</div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="bg-black/50 p-4 rounded border border-yellow-400">
                <h4 className="text-yellow-400 font-bold mb-2">🎖️ RESPECT AWARDS</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Respect Rookie Award</li>
                  <li>• Crime Boss Energy</li>
                  <li>• Mission Failed Successfully</li>
                </ul>
              </div>
              <div className="bg-black/50 p-4 rounded border border-yellow-400">
                <h4 className="text-yellow-400 font-bold mb-2">🏅 CHAOS AWARDS</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Most Cursed Build</li>
                  <li>• This Shouldn't Exist</li>
                  <li>• Bugged but Beautiful</li>
                </ul>
              </div>
              <div className="bg-black/50 p-4 rounded border border-yellow-400">
                <h4 className="text-yellow-400 font-bold mb-2">👑 KINGPIN AWARDS</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• The Kingpin Award</li>
                  <li>• Discord Kingpin</li>
                  <li>• San Hackdreas Spirit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Judging */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-900/90 to-blue-900/90 border-2 border-indigo-500 rounded-lg p-8 mb-8 shadow-2xl shadow-indigo-500/30">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-indigo-400 border-b-2 border-indigo-500 pb-4">
              🧑‍⚖️ JUDGING
            </h2>
            <p className="text-xl text-yellow-300 mb-6">Judges = <strong>City Kingpins</strong></p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-3">Process:</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Async judging on Devpost</li>
                  <li>• Optional 60s video demo</li>
                  <li>• Feedback loop → written comments</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-3">Criteria:</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Originality</li>
                  <li>• Execution</li>
                  <li>• Creativity (includes no-code)</li>
                  <li>• Gut feeling → does it scream GTA chaos?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-red-900/90 to-orange-900/90 border-2 border-red-500 rounded-lg p-8 mb-8 shadow-2xl shadow-red-500/30">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-red-400 border-b-2 border-red-500 pb-4">
              📣 SUBMISSION
            </h2>
            <div className="text-center">
              <p className="text-lg text-gray-300 mb-4">Upload on Devpost, optional 60s video</p>
              <p className="text-xl font-bold text-yellow-400 mb-4">Deadline: Nov 7, 11:59 PM IST</p>
              <p className="text-lg text-gray-300">Results at the <strong className="text-green-400">Grand Ceremony</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 px-4 bg-black/80">
        <div className="max-w-6xl mx-auto text-center">
          <div className="border-2 border-yellow-500 bg-gradient-to-r from-yellow-900/50 to-orange-900/50 p-8 rounded-lg shadow-2xl">
            <p className="text-2xl font-bold text-yellow-400 mb-4">
              Grand Tech Assembly is powered by <span className="text-red-400">Maximally</span>
            </p>
            <p className="text-lg text-gray-300">
              The chaos never stops.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}