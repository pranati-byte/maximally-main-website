import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from '../components/ui/button';
import { ArrowRight, Users, Star, Calendar, Clock, Trophy, Rocket } from 'lucide-react';
import Footer from '../components/Footer';
import TallyFormDialog from '../components/TallyFormDialog';

const summerBootcamps = [
  {
    title: "The Founder Lab",
    description: "Build something real. Learn how to start, validate, and pitch your first startup.",
    skills: ["Entrepreneurship", "MVPs", "Pitching"],
    duration: 1,
    price: 1299,
    icon: <Rocket className="h-6 w-6 text-maximally-blue" />,
    highlight: "Most Popular",
    learnMoreLink: "/entrepreneurship"
  },
  {
    title: "Speak for Impact",
    description: "Become a confident communicator. Master public speaking, debate, and persuasion.",
    skills: ["Speaking", "Debate", "Articulation"],
    duration: 1,
    price: 999,
    icon: <Star className="h-6 w-6 text-maximally-yellow" />,
    learnMoreLink: "/public-speaking"
  },
  {
    title: "Digital Influence 101",
    description: "Build your personal brand and grow on platforms like Instagram, YouTube, LinkedIn.",
    skills: ["Content Creation", "Social Media", "Branding"],
    duration: 1,
    price: 999,
    icon: <Users className="h-6 w-6 text-maximally-purple" />,
    learnMoreLink: "/digital-marketing"
  },
  {
    title: "Build with AI & No-Code",
    description: "Use ChatGPT, Notion AI, Bubble and more to build automations & tools.",
    skills: ["AI Tools", "No-Code Apps", "Automation"],
    duration: 1,
    price: 999,
    icon: <Trophy className="h-6 w-6 text-maximally-green" />,
    highlight: "Trending",
    learnMoreLink: "/no-code-ai"
  },

  {
    title: "Career Starter Pack",
    description: "Build a strong resume, network on LinkedIn, and find real internships.",
    skills: ["Resume Building", "LinkedIn", "Outreach"],
    duration: 1,
    price: 799,
    icon: <Clock className="h-6 w-6 text-maximally-orange" />,
    learnMoreLink: "/career-launch"
  }
];

const Bootcamps = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePreRegister = () => {
    setIsDialogOpen(true);
  };

  return (
    <>
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20 bg-maximally-black relative overflow-hidden animate-gradient-x">
        <div className="absolute inset-0 bg-gradient-to-r from-maximally-blue via-maximally-purple to-maximally-red opacity-20 animate-pulse"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-grid-white/10" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="font-press-start text-4xl text-maximally-blue mb-4 animate-fade-in">
              Summer Bootcamp 2025
            </h2>
            <p className="font-jetbrains text-white/80 mb-6 max-w-2xl mx-auto">
                Level up your skills this summer. Bootcamps run June 1-8, followed by hackathons, competitions, and a special 2-day challenge!
              </p>
            <div className="inline-block bg-maximally-blue/20 px-4 py-2 rounded-full animate-pulse">
              <span className="font-jetbrains text-maximally-blue">
                ⏰ Early bird registration open
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
            {summerBootcamps.map((bootcamp) => (
              <div 
                key={bootcamp.title} 
                className="pixel-border bg-white p-4 md:p-6 relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group animate-fade-in hover:bg-gradient-to-br hover:from-white hover:to-maximally-blue/5"
              >
                {bootcamp.highlight && (
                  <div className="absolute top-0 right-0 bg-maximally-red text-white px-3 py-1 text-sm font-jetbrains transform translate-x-2 -translate-y-2 rotate-3">
                    {bootcamp.highlight}
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  {bootcamp.icon}
                  <h3 className="font-press-start text-xl text-maximally-black">{bootcamp.title}</h3>
                </div>

                <p className="font-jetbrains text-maximally-black/80 mb-4">{bootcamp.description}</p>

                <div className="mb-4">
                  <div className="text-sm font-jetbrains text-maximally-black/60 mb-2">Skills:</div>
                  <div className="flex flex-wrap gap-2">
                    {bootcamp.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="bg-maximally-blue/10 text-maximally-blue px-2 py-1 rounded text-sm font-jetbrains group-hover:bg-maximally-blue group-hover:text-white transition-all duration-300 hover:scale-110 animate-pulse"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="space-y-1">
                    <div className="font-press-start text-maximally-black">₹{bootcamp.price}</div>
                    <div className="text-sm text-maximally-black/60">{bootcamp.duration} week</div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 w-full">
                    <Button 
                      onClick={handlePreRegister}
                      className="w-full sm:w-auto bg-maximally-red text-white hover:bg-maximally-red/90 font-jetbrains group text-sm md:text-base"
                    >
                      Register 
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Link to={bootcamp.learnMoreLink} className="w-full sm:w-auto">
                      <Button 
                        variant="outline"
                        className="w-full border-maximally-blue text-maximally-blue hover:bg-maximally-blue hover:text-white font-jetbrains text-sm md:text-base"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white pixel-border p-8 text-center transform hover:scale-[1.01] transition-transform">
            <h3 className="font-press-start text-2xl text-maximally-black mb-6">
              Bundle & Save
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-2xl mx-auto px-4 md:px-0">
              <div className="pixel-border p-4 md:p-6 hover:bg-maximally-blue/5 transition-colors">
                <h4 className="font-press-start text-lg mb-2">Any 2 Bootcamps</h4>
                <p className="font-press-start text-2xl text-maximally-blue mb-4">₹1,799</p>
                <Button 
                  onClick={handlePreRegister}
                  className="bg-maximally-red text-white w-full group"
                >
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="pixel-border p-6 bg-maximally-blue/5 hover:bg-maximally-blue/10 transition-colors">
                <div className="absolute top-0 right-0 bg-maximally-green text-white px-2 py-1 text-xs transform translate-x-2 -translate-y-2 rotate-3">
                  Best Value
                </div>
                <h4 className="font-press-start text-lg mb-2">All-Access Pass</h4>
                <p className="font-press-start text-2xl text-maximally-blue mb-4">₹3,999</p>
                <Button 
                  onClick={handlePreRegister}
                  className="bg-maximally-red text-white w-full group"
                >
                  Register All Access
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            <p className="font-jetbrains text-maximally-black/60 mt-6">
              * Scholarships available for select students
            </p>
          </div>
        </div>
      </section>

      <TallyFormDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
    <Footer />
    </>
  );
};

export default Bootcamps;