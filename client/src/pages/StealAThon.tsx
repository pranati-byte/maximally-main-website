import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Copy, Clock, Globe, Users, Code, Lock, Key, Target, Trophy, Star, ExternalLink, FileText, Video, Zap, Eye } from 'lucide-react';

export default function StealAThon() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fastFacts = [
    { icon: <Clock className="h-5 w-5" />, label: "Date", value: "Nov 9–10, 2025" },
    { icon: <Clock className="h-5 w-5" />, label: "Duration", value: "24 hours" },
    { icon: <Globe className="h-5 w-5" />, label: "Format", value: "Online" },
    { icon: <Users className="h-5 w-5" />, label: "Team size", value: "Solo or up to 4" },
    { icon: <Globe className="h-5 w-5" />, label: "Region", value: "Global" },
    { icon: <Code className="h-5 w-5" />, label: "Stack", value: "Any tools welcome" }
  ];

  const whoJoins = [
    "Coders",
    "No-coders", 
    "Designers",
    "First-timers",
    "Meme builders",
    "Indie hackers", 
    "Chaos coders",
    "Anyone who believes good artists copy and great artists steal"
  ];

  const howItWorksSteps = [
    { step: 1, title: "Pick an existing public project.", icon: <Eye className="h-6 w-6" /> },
    { step: 2, title: "Upgrade it fast — features, UX, speed, brand, anything.", icon: <Zap className="h-6 w-6" /> },
    { step: 3, title: "Rename it. Absurd names get smiles.", icon: <Copy className="h-6 w-6" /> },
    { step: 4, title: "Ship with links, logs, and a short write-up.", icon: <FileText className="h-6 w-6" /> }
  ];

  const rules = [
    "Base your work on a public project",
    "Transform it enough to be yours", 
    "Include a link to the original",
    "Keep it SFW and non-harmful",
    "Lazy clones get disqualified"
  ];

  const timeline = [
    { date: "Nov 9", time: "12:00 AM IST", event: "Start" },
    { date: "Nov 10", time: "12:00 AM IST", event: "Submissions close" },
    { date: "Nov 12", time: "TBD", event: "Winners announced" }
  ];

  const judgingCriteria = [
    { criteria: "Boldness of theft", weight: "25%" },
    { criteria: "Execution and improvement", weight: "25%" },
    { criteria: "Humor and branding", weight: "20%" },
    { criteria: "Creativity in rebranding", weight: "20%" },
    { criteria: "Presentation", weight: "10%" }
  ];

  const prizes = [
    { 
      title: "Grand Theft Project", 
      prize: "₹3000 + LOR + social feature",
      icon: <Trophy className="h-8 w-8 text-yellow-400" />,
      bgColor: "bg-red-500",
      textColor: "text-black"
    },
    { 
      title: "Best Makeover", 
      prize: "₹2000",
      icon: <Copy className="h-8 w-8 text-red-500" />,
      bgColor: "bg-yellow-400",
      textColor: "text-black"
    },
    { 
      title: "Petty Theft Mentions", 
      prize: "season zine feature + shoutouts",
      icon: <Star className="h-8 w-8 text-yellow-400" />,
      bgColor: "bg-red-500",
      textColor: "text-black"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <SEO 
        title="Maximally Steal-A-Thon 2025 - Remix Culture Hackathon"
        description="The only hackathon where original ideas are banned. Find a project, make it better, rename it, and ship. Nov 9-10, 2025. Grand Indian Hackathon Season."
        keywords="hackathon, remix culture, steal like artist, project improvement, indie hackers, coding competition"
      />

      {/* Ransom Note Background Effects - reduced stickers, lower opacity */}
      <div className="fixed inset-0 z-0">
        {/* Floating stickers - reduced count, lower opacity */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`sticker-${i}`}
            className="absolute opacity-5"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float ${3 + Math.random() * 2}s infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {i % 2 === 0 ? <Copy className="h-6 w-6 text-red-500" /> : <Lock className="h-6 w-6 text-yellow-400" />}
          </div>
        ))}
        {/* Random typography elements - reduced count, lower opacity */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`text-${i}`}
            className="absolute opacity-5 font-press-start text-white select-none"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${14 + Math.random() * 6}px`,
              transform: `rotate(${-10 + Math.random() * 20}deg)`,
              animation: `pulse ${4 + Math.random() * 2}s infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            {['STEAL', 'COPY', 'REMIX'][i]}
          </div>
        ))}
      </div>

      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-20">
          {/* Badge with ransom-note style */}
          <div className={`mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="bg-white text-black px-6 py-2 border-4 border-red-500 transform -rotate-2 shadow-xl">
              <span className="font-press-start text-xs">🔥 GRAND INDIAN HACKATHON SEASON 🔥</span>
            </div>
          </div>

          {/* Title with ransom-note styling */}
          <div className={`text-center mb-8 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <h1 className="font-press-start text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              <span className="text-red-500 transform inline-block rotate-2">MAXIMALLY</span>
              <br />
              <span className="text-yellow-400 transform inline-block -rotate-1">STEAL</span>
              <span className="text-white transform inline-block rotate-1">-A-</span>
              <span className="text-red-500 transform inline-block -rotate-2">THON</span>
            </h1>
            <h2 className="font-jetbrains text-xl md:text-2xl text-white mb-4">
              24 hour online hackathon
            </h2>
            <div className="bg-yellow-400 text-black px-4 py-2 inline-block transform rotate-1 border-2 border-black">
              <p className="font-press-start text-lg md:text-xl">
                "If it ain't broke... steal it."
              </p>
            </div>
          </div>

          {/* CTAs with sticker style */}
          <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <Button 
              onClick={() => window.open('#register', '_self')}
              className="bg-red-500 text-white font-press-start py-4 px-8 text-lg hover:scale-105 transition-all duration-300 border-4 border-white shadow-xl transform"
            >
              <Copy className="h-5 w-5 mr-2" />
              REGISTER NOW
            </Button>
            <Button 
              onClick={() => document.getElementById('rules')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-red-500 font-press-start py-4 px-8 text-lg hover:scale-105 transition-all duration-300 border-4 border-red-500 shadow-xl transform hover:text-white"
            >
              <FileText className="h-5 w-5 mr-2" />
              READ RULES
            </Button>
          </div>

          {/* Sticker decoration */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-4 opacity-60">
              <div className="bg-red-500 p-2 border-2 border-black transform rotate-12">
                <Copy className="h-6 w-6 text-white" />
              </div>
              <div className="bg-yellow-400 p-2 border-2 border-black transform -rotate-12">
                <Lock className="h-6 w-6 text-black" />
              </div>
              <div className="bg-white p-2 border-2 border-black transform rotate-6">
                <Key className="h-6 w-6 text-black" />
              </div>
            </div>
          </div>
        </section>

        {/* Fast Facts Bar */}
        <section className="py-8 bg-white border-y-4 border-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {fastFacts.map((fact, index) => (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center mb-2 text-black group-hover:text-red-500 transition-colors">
                    {fact.icon}
                  </div>
                  <div className="font-press-start text-xs text-black mb-1">{fact.label}</div>
                  <div className="font-jetbrains text-sm text-red-500 font-bold">{fact.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What It Is */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-press-start text-3xl md:text-4xl mb-8 text-red-500 flex items-center justify-center gap-3">
              <Copy className="h-8 w-8 text-yellow-400 transform rotate-12" />
              WHAT IT IS
              <Copy className="h-8 w-8 text-yellow-400 transform -rotate-12" />
            </h2>
            <div className="bg-white text-black p-8 border-4 border-red-500 shadow-xl -rotate-1">
              <p className="font-jetbrains text-lg md:text-xl leading-relaxed">
                The only hackathon where original ideas are banned. Find a project, make it better, rename it, and ship. 
                Remix culture. Speed upgrades. Shameless claims. Steal like an artist.
              </p>
            </div>
          </div>
        </section>

        {/* Who Joins */}
        <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-press-start text-3xl md:text-4xl mb-12 text-yellow-400 text-center flex items-center justify-center gap-3">
              <Users className="h-8 w-8 text-red-500 transform rotate-6" />
              WHO JOINS
              <Users className="h-8 w-8 text-red-500 transform -rotate-6" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whoJoins.map((person, index) => {
                let checkColor = 'text-white';
                let checkSize = 'text-xs';
                let circleBg = 'bg-red-500';
                if (person === 'Anyone who believes good artists copy and great artists steal') {
                  checkColor = 'text-white'; // Make check mark white
                  checkSize = 'text-lg'; // Make the check mark larger
                  circleBg = 'bg-red-500'; // Keep circle red for emphasis
                }
                return (
                  <div key={index} className={`bg-black text-white p-4 border-2 border-red-500 hover:scale-105 transition-all duration-300 ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 ${circleBg} rounded-full flex items-center justify-center`}>
                        <span className={`${checkSize} ${checkColor}`}>✓</span>
                      </div>
                      <span className="font-jetbrains font-medium">{person}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="font-press-start text-3xl md:text-4xl mb-12 text-red-500 text-center flex items-center justify-center gap-3">
              <Target className="h-8 w-8 text-yellow-400 transform rotate-45" />
              HOW IT WORKS
              <Target className="h-8 w-8 text-yellow-400 transform -rotate-45" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {howItWorksSteps.map((step, index) => (
                <Card key={index} className={`bg-black text-white border-2 border-red-500 hover:scale-105 transition-all duration-300 transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-red-500 text-white w-12 h-12 border-2 border-black flex items-center justify-center font-press-start text-lg flex-shrink-0 transform rotate-12 ">
                        {step.step}
                      </div>
                      <div>
                        <div className="text-red-500 mb-2">{step.icon}</div>
                        <p className="font-jetbrains leading-relaxed">{step.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Rules */}
        <section id="rules" className="py-20 px-4 bg-yellow-400">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-press-start text-3xl md:text-4xl mb-12 text-black text-center flex items-center justify-center gap-3">
              <Lock className="h-8 w-8 text-red-500 transform rotate-12" />
              RULES
              <Lock className="h-8 w-8 text-red-500 transform -rotate-12" />
            </h2>
            <div className="grid gap-4">
              {rules.map((rule, index) => (
                <div key={index} className={`bg-black text-white p-4 border-2 border-red-500 hover:scale-105 transition-all duration-300 transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-500 border-2 border-black flex items-center justify-center text-white font-press-start text-sm transform rotate-45">
                      {index + 1}
                    </div>
                    <span className="font-jetbrains font-medium">{rule}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4 bg-black">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-press-start text-3xl md:text-4xl mb-12 text-yellow-400 text-center flex items-center justify-center gap-3">
              <Clock className="h-8 w-8 text-red-500 transform rotate-12" />
              TIMELINE
              <Clock className="h-8 w-8 text-red-500 transform -rotate-12" />
            </h2>
            <div className="space-y-6">
              {timeline.map((item, index) => {
                let borderColor = 'border-black';
                let hover = 'hover:scale-105 transition-all duration-300';
                if (index === 0) borderColor = 'border-yellow-400';
                if (index === 1) borderColor = 'border-red-500';
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-6 bg-${index % 3 === 0 ? 'red' : index % 3 === 1 ? 'yellow' : 'white'}-${index % 3 === 0 ? '500' : index % 3 === 1 ? '400' : 'white'} text-${index % 3 === 2 ? 'black' : index % 3 === 1 ? 'black' : 'white'} p-6 border-4 ${borderColor} transform ${hover} ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
                  >
                    <div className="text-center flex-shrink-0">
                      <div className="font-press-start text-lg">{item.date}</div>
                      <div className="font-jetbrains text-sm opacity-80">{item.time}</div>
                    </div>
                    <div className="w-px h-12 bg-black"></div>
                    <div className="font-jetbrains text-lg font-bold">{item.event}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Judging */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-press-start text-3xl md:text-4xl mb-8 text-black text-center flex items-center justify-center gap-3">
              <Star className="h-8 w-8 text-red-500 transform rotate-12" />
              JUDGING
              <Star className="h-8 w-8 text-red-500 transform -rotate-12" />
            </h2>
            <div className="bg-black text-white p-8 border-4 border-red-500 mb-8 transform rotate-1">
              <h3 className="font-press-start text-xl text-yellow-400 mb-6">CRITERIA</h3>
              <div className="grid gap-4">
                {judgingCriteria.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-jetbrains">{item.criteria}</span>
                    <span className="font-press-start text-red-500">{item.weight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 text-black p-4 border-4 border-black transform -rotate-1">
                <p className="font-jetbrains text-lg">
                  <span className="font-bold">Judged by:</span> Founders, indie devs, and creators
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Prizes */}
        <section className="py-20 px-4 bg-black">
          <div className="container mx-auto max-w-5xl">
            <h2 className="font-press-start text-3xl md:text-4xl mb-8 text-yellow-400 text-center flex items-center justify-center gap-3">
              <Trophy className="h-8 w-8 text-red-500 transform rotate-12" />
              PRIZES
              <Trophy className="h-8 w-8 text-red-500 transform -rotate-12" />
            </h2>
            <div className="text-center mb-8">
              <div className="bg-yellow-400 text-black px-6 py-3 border-4 border-black inline-block transform -rotate-2">
                <span className="font-press-start text-lg">TOTAL POOL: ₹5000</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {prizes.map((prize, index) => (
                <Card key={index} className={`${prize.bgColor} ${prize.textColor} border-4 border-yellow-400 hover:scale-105 transition-all duration-300 transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">{prize.icon}</div>
                    <h3 className="font-press-start text-lg mb-3 leading-tight">{prize.title}</h3>
                    <p className="font-jetbrains font-bold">{prize.prize}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Submission */}
        <section className="py-20 px-4 bg-red-500">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-press-start text-3xl md:text-4xl mb-12 text-white text-center flex items-center justify-center gap-3">
              <FileText className="h-8 w-8 text-yellow-400 transform rotate-12" />
              SUBMISSION
              <FileText className="h-8 w-8 text-yellow-400 transform -rotate-12" />
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black text-white p-6 border-4 border-white transform rotate-1">
                <h3 className="font-press-start text-xl text-yellow-400 mb-6 flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  REQUIRED
                </h3>
                <ul className="space-y-3">
                  <li className="font-jetbrains flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    Link to final build or repo
                  </li>
                  <li className="font-jetbrains flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    Link to the original project
                  </li>
                  <li className="font-jetbrains flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    Short write-up: what changed and why it's better
                  </li>
                </ul>
              </div>

              <div className="bg-white text-black p-6 border-4 border-black transform rotate-1">
                <h3 className="font-press-start text-xl text-red-500 mb-6 flex items-center gap-2">
                  <Video className="h-5 w-5" />
                  OPTIONAL
                </h3>
                <ul className="space-y-3">
                  <li className="font-jetbrains flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    1–2 minute demo video
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 bg-black">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-white text-black p-12 border-4 border-red-500 transform rotate-1">
              <h2 className="font-press-start text-2xl md:text-3xl mb-6">
                READY TO STEAL THE SHOW?
              </h2>
              <Button 
                onClick={() => window.open('#register', '_self')}
                className="bg-red-500 text-white font-press-start py-6 px-12 text-xl hover:scale-105 transition-all duration-300 border-4 border-black shadow-xl transform"
              >
                <Copy className="h-6 w-6 mr-3" />
                REGISTER NOW
                <ExternalLink className="h-6 w-6 ml-3" />
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}