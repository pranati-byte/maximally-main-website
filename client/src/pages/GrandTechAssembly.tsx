import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function GrandTechAssembly() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#0B0B0B]">
      <SEO 
        title="Grand Tech Assembly - GTA Styled Hackathon | Maximally"
        description="A 7-day GTA-styled sandbox hackathon. Pick a mission, ship your city, earn respect. Nov 1-7, 2025 | 100% online"
        keywords="Grand Tech Assembly, GTA hackathon, Grand Indian Hackathon Season, sandbox hackathon, Maximally"
      />

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F7F7F7]/95 backdrop-blur-sm border-b border-[#0B0B0B]/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight text-[#E50914]">
            Grand Tech Assembly
          </div>
          <div className="flex gap-3">
            <Button 
              size="sm" 
              className="bg-[#E50914] hover:bg-[#E50914]/90 text-white font-medium px-6"
            >
              Join on Devpost
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="border-[#0B0B0B] text-[#0B0B0B] hover:bg-[#0B0B0B] hover:text-white font-medium px-6"
            >
              Enter Discord
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Mission Badge */}
          <div className="inline-flex items-center gap-2 bg-[#0B0B0B] text-[#39FF14] px-6 py-2 rounded-full font-mono text-sm font-medium mb-8 border border-[#39FF14]/30">
            <div className="w-2 h-2 bg-[#39FF14] rounded-full animate-pulse"></div>
            Nov 1–7, 2025 • 100% online
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-none">
            <span className="text-[#E50914]">Grand</span><br />
            <span className="text-[#FFD700]">Tech</span><br />
            <span className="text-[#0B0B0B]">Assembly</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-medium text-[#0B0B0B]/70 mb-4">
            A 7-day GTA-styled sandbox hackathon
          </p>

          {/* Tagline */}
          <p className="text-lg text-[#0B0B0B]/60 mb-12">
            Pick a mission, ship your city, earn respect
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#E50914] hover:bg-[#E50914]/90 text-white font-semibold px-8 py-4 text-lg"
            >
              Join on Devpost
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-[#0B0B0B] text-[#0B0B0B] hover:bg-[#0B0B0B] hover:text-white font-semibold px-8 py-4 text-lg"
            >
              Enter Discord
            </Button>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#E50914]/5 border-l-4 border-[#E50914] p-8 rounded-r-lg">
            <h2 className="text-3xl font-black tracking-tight mb-4 text-[#E50914]">
              What it is
            </h2>
            <p className="text-lg leading-relaxed text-[#0B0B0B]/80">
              A global online hackathon with GTA mission energy. Not crime, only builds. You choose a mission and ship.
            </p>
          </div>
        </div>
      </section>

      {/* Fast Facts */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black tracking-tight mb-8 text-[#0B0B0B]">
            Fast facts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Date", value: "Nov 1–7, 2025" },
              { label: "Duration", value: "7 days" },
              { label: "Mode", value: "Devpost + Discord" },
              { label: "Teams", value: "Solo to 4" },
              { label: "Open to", value: "All" },
            ].map((fact, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-[#0B0B0B]/10 shadow-sm">
                <div className="text-sm font-medium text-[#0B0B0B]/60 mb-1">{fact.label}</div>
                <div className="text-xl font-bold text-[#0B0B0B]">{fact.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who joins */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#FFD700]/10 border-l-4 border-[#FFD700] p-8 rounded-r-lg">
            <h2 className="text-3xl font-black tracking-tight mb-4 text-[#FFD700]">
              Who joins
            </h2>
            <p className="text-lg leading-relaxed text-[#0B0B0B]/80">
              Coders, no-coders, designers, artists, first-timers, indie makers. Any stack. Just ship.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black tracking-tight mb-8 text-[#0B0B0B]">
            How it works
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { step: "01", text: "Pick a mission" },
              { step: "02", text: "Build through the week" },
              { step: "03", text: "Optional side quests drop on Discord" },
              { step: "04", text: "Submit on Devpost with an optional 60-second video" },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg border border-[#0B0B0B]/10">
                <div className="bg-[#39FF14] text-[#0B0B0B] font-black px-3 py-1 rounded text-sm">
                  {item.step}
                </div>
                <p className="text-lg text-[#0B0B0B]/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#39FF14]/10 border-l-4 border-[#39FF14] p-8 rounded-r-lg">
            <h2 className="text-3xl font-black tracking-tight mb-4 text-[#39FF14]">
              Timeline
            </h2>
            <p className="text-lg leading-relaxed text-[#0B0B0B]/80">
              Nov 1, 12:00 AM IST start. Daily mission pings on Discord. Nov 7, 11:59 PM IST final submission. Results at the Grand Ceremony in mid-November.
            </p>
          </div>
        </div>
      </section>

      {/* Missions */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black tracking-tight mb-12 text-center text-[#0B0B0B]">
            Missions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "The Heist",
                description: "automation, AI, time-savers",
                color: "bg-[#E50914]",
                accent: "border-[#E50914]"
              },
              {
                title: "Street Hustle",
                description: "fast MVPs, scrappy tools",
                color: "bg-[#FFD700]",
                accent: "border-[#FFD700]"
              },
              {
                title: "Chaos Mode",
                description: "weird, experimental, art-tech",
                color: "bg-[#39FF14]",
                accent: "border-[#39FF14]"
              },
              {
                title: "Rise to Power",
                description: "serious, scalable builds",
                color: "bg-[#0B0B0B]",
                accent: "border-[#0B0B0B]"
              },
              {
                title: "Vice Streets",
                description: "beginner lane and no-code",
                color: "bg-gradient-to-br from-[#E50914] to-[#FFD700]",
                accent: "border-[#E50914]"
              }
            ].map((mission, index) => (
              <Card key={index} className={`border-2 ${mission.accent} hover:shadow-lg transition-all duration-200 group`}>
                <CardHeader className="pb-3">
                  <div className={`w-full h-2 ${mission.color} rounded-full mb-4`}></div>
                  <CardTitle className="text-xl font-black tracking-tight text-[#0B0B0B] group-hover:text-[#E50914] transition-colors">
                    {mission.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#0B0B0B]/70 text-base">
                    {mission.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Judging */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black tracking-tight mb-8 text-[#0B0B0B]">
            Judging
          </h2>
          <div className="bg-white p-8 rounded-lg border border-[#0B0B0B]/10 shadow-sm">
            <p className="text-lg leading-relaxed text-[#0B0B0B]/80 mb-6">
              Async on Devpost. Criteria: originality, execution, creativity, and gut vibe. Written feedback for finalists. Optional 60-second pitch helps.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Originality", "Execution", "Creativity", "Gut Vibe"].map((criteria, index) => (
                <div key={index} className="text-center p-4 bg-[#F7F7F7] rounded border">
                  <div className="font-bold text-[#E50914]">{criteria}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black tracking-tight mb-8 text-[#0B0B0B]">
            Prizes
          </h2>
          <div className="bg-gradient-to-r from-[#FFD700]/20 to-[#E50914]/20 p-8 rounded-lg border-2 border-[#FFD700]">
            <div className="text-center mb-6">
              <div className="text-4xl font-black text-[#E50914] mb-2">₹5,000</div>
              <div className="text-lg text-[#0B0B0B]/70">cash total</div>
            </div>
            <div className="text-center">
              <p className="text-lg text-[#0B0B0B]/80 mb-4">Plus themed awards:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Respect Rookie", "Built on Duct Tape", "Most Cursed Build", 
                  "Crime Boss Energy", "First Blood", "Discord Kingpin", 
                  "Mission Failed Successfully"
                ].map((award, index) => (
                  <Badge key={index} variant="outline" className="bg-white text-[#0B0B0B] border-[#0B0B0B]/20">
                    {award}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0B0B0B] text-white p-8 rounded-lg">
            <h2 className="text-3xl font-black tracking-tight mb-4 text-[#39FF14]">
              Submission
            </h2>
            <p className="text-lg leading-relaxed text-white/90 mb-4">
              Devpost project page, repo link, short write-up, and optional 60-second demo.
            </p>
            <p className="text-xl font-bold text-[#E50914]">
              Deadline: Nov 7, 11:59 PM IST
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#E50914] to-[#FFD700] p-8 rounded-lg">
            <p className="text-2xl font-black text-white tracking-tight">
              Maximally runs the city. You bring the chaos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}