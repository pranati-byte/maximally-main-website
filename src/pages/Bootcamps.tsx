
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { Button } from '../components/ui/button';
import { ArrowRight, Users } from 'lucide-react';

interface Bootcamp {
  title: string;
  date: string;
  time: string;
  price: string;
  description: string;
  category: string;
  isPopular?: boolean;
}

const currentBootcamps: Bootcamp[] = [
  {
    title: "Team-Based Startup Bootcamp",
    date: "June 1-15, 2025",
    time: "4:00 PM - 6:00 PM IST",
    price: "₹2,499",
    description: "Build a real startup with a team of ambitious teens. Learn entrepreneurship, leadership, and teamwork through hands-on experience.",
    category: "Entrepreneurship",
    isPopular: true
  }
];

const summerBootcamps = [
  {
    title: "The Founder Lab",
    description: "Build something real. Learn how to start, validate, and pitch your first startup.",
    skills: ["Entrepreneurship", "MVPs", "Pitching"],
    duration: 3,
    price: 1299,
  },
  {
    title: "Speak for Impact",
    description: "Become a confident communicator. Master public speaking, debate, and persuasion.",
    skills: ["Speaking", "Debate", "Articulation"],
    duration: 2,
    price: 999,
  },
  {
    title: "Digital Influence 101",
    description: "Build your personal brand and grow on platforms like Instagram, YouTube, LinkedIn.",
    skills: ["Content Creation", "Social Media", "Branding"],
    duration: 2,
    price: 999,
  },
  {
    title: "Build with AI & No-Code",
    description: "Use ChatGPT, Notion AI, Bubble and more to build automations & tools.",
    skills: ["AI Tools", "No-Code Apps", "Automation"],
    duration: 2,
    price: 999,
  },
  {
    title: "Creative Editing Studio",
    description: "Learn video editing and storytelling to make content that actually gets attention.",
    skills: ["Editing", "Visual Storytelling", "Content"],
    duration: 2,
    price: 999,
  },
  {
    title: "Career Starter Pack",
    description: "Build a strong resume, network on LinkedIn, and find real internships.",
    skills: ["Resume Building", "LinkedIn", "Outreach"],
    duration: 2,
    price: 799,
  }
];

const Bootcamps = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedBootcamp, setSelectedBootcamp] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePreRegister = (bootcampTitle: string) => {
    setSelectedBootcamp(bootcampTitle);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Current Bootcamps Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-press-start text-maximally-black mb-4 text-center">
            &gt;&gt; Current Bootcamps_
          </h1>
          
          <p className="text-center font-jetbrains text-maximally-black/80 mb-12 max-w-2xl mx-auto">
            Level up your skills with our intensive, live bootcamps.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentBootcamps.map((bootcamp, index) => (
              <div key={index} className="pixel-border bg-white p-6 relative">
                {bootcamp.isPopular && (
                  <div className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-maximally-red text-white font-press-start text-xs px-3 py-1">
                    Popular!
                  </div>
                )}
                <span className="inline-block font-press-start text-xs text-maximally-blue mb-2 px-2 py-1 bg-maximally-blue/10 rounded">
                  [{bootcamp.category}]
                </span>
                <h3 className="font-press-start text-lg mb-3">{bootcamp.title}</h3>
                <p className="font-jetbrains text-maximally-black/70 mb-4">
                  {bootcamp.description}
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center font-jetbrains text-maximally-black/70">
                    <span className="w-20">Date:</span>
                    <span>{bootcamp.date}</span>
                  </div>
                  <div className="flex items-center font-jetbrains text-maximally-black/70">
                    <span className="w-20">Time:</span>
                    <span>{bootcamp.time}</span>
                  </div>
                  <div className="flex items-center font-jetbrains">
                    <span className="w-20">Price:</span>
                    <span className="text-maximally-red font-press-start">{bootcamp.price}</span>
                  </div>
                </div>
                <button className="pixel-button bg-maximally-black text-white w-full">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summer Bootcamps 2025 Section */}
      <section className="py-20 bg-maximally-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-press-start text-4xl text-maximally-blue mb-4">
              Summer Bootcamp 2025
            </h2>
            <p className="font-jetbrains text-white/80 mb-6">
              Level up your skills this summer. Bootcamps start May 2025.
            </p>
            <div className="inline-block bg-maximally-blue/20 px-4 py-2 rounded-full">
              <span className="font-jetbrains text-maximally-blue animate-pulse">
                ⏰ Early bird registration open
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {summerBootcamps.map((bootcamp) => (
              <div key={bootcamp.title} className="pixel-border bg-white p-6 relative overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="absolute top-0 right-0 bg-maximally-blue text-white px-3 py-1 text-sm font-jetbrains">
                  {bootcamp.duration} weeks
                </div>
                
                <h3 className="font-press-start text-xl mb-4 text-maximally-black">{bootcamp.title}</h3>
                <p className="font-jetbrains text-maximally-black/80 mb-4">{bootcamp.description}</p>
                
                <div className="mb-4">
                  <div className="text-sm font-jetbrains text-maximally-black/60 mb-2">Skills:</div>
                  <div className="flex flex-wrap gap-2">
                    {bootcamp.skills.map((skill, index) => (
                      <span key={index} className="bg-maximally-blue/10 text-maximally-blue px-2 py-1 rounded text-sm font-jetbrains">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-6">
                  <div className="font-press-start text-maximally-black">₹{bootcamp.price}</div>
                  <Button 
                    onClick={() => handlePreRegister(bootcamp.title)}
                    className="bg-maximally-red text-white hover:bg-maximally-red/90 font-jetbrains"
                  >
                    Pre-register <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white pixel-border p-8 text-center">
            <h3 className="font-press-start text-2xl text-maximally-black mb-6">
              Bundle & Save
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="pixel-border p-6">
                <h4 className="font-press-start text-lg mb-2">Any 2 Bootcamps</h4>
                <p className="font-press-start text-2xl text-maximally-blue mb-4">₹1,799</p>
                <Button 
                  onClick={() => handlePreRegister('Bundle - 2 Bootcamps')}
                  className="bg-maximally-red text-white w-full"
                >
                  Choose Bootcamps
                </Button>
              </div>
              <div className="pixel-border p-6 bg-maximally-blue/5">
                <h4 className="font-press-start text-lg mb-2">All-Access Pass</h4>
                <p className="font-press-start text-2xl text-maximally-blue mb-4">₹3,999</p>
                <Button 
                  onClick={() => handlePreRegister('All-Access Pass')}
                  className="bg-maximally-red text-white w-full"
                >
                  Get All Access
                </Button>
              </div>
            </div>
            <p className="font-jetbrains text-maximally-black/60 mt-6">
              * Scholarships available for select students
            </p>
          </div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pre-register for {selectedBootcamp}</DialogTitle>
            <DialogDescription>
              Join the waitlist to secure your spot in the Summer 2025 cohort.
            </DialogDescription>
          </DialogHeader>
          {/* Add your form component here */}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Bootcamps;
