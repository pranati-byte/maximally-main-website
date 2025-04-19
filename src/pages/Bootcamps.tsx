import { 
  ArrowRight, 
  CalendarCheck, 
  CheckCircle, 
  Star,
  Rocket,
  BrainCircuit,
  Users,
  Mic,
  Trophy,
  DollarSign,
  PenTool,
  GraduationCap,
  Award,
  MessageCircle,
  ShoppingBag,
  Bot as BotIcon
} from 'lucide-react';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from '../components/ui/button';
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from '../components/Footer';
import TallyFormDialog from '../components/TallyFormDialog';
import VideoPitchDialog from '../components/VideoPitchDialog';
import SEO from '@/components/SEO';

const Bootcamps = () => {
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false);
  const [isVideoPitchOpen, setIsVideoPitchOpen] = useState(false);
  const [applicationStep, setApplicationStep] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleApplyNow = () => {
    setApplicationStep(1);
    setIsApplicationFormOpen(true);
  };

  const handleNextStep = () => {
    setIsApplicationFormOpen(false);
    setApplicationStep(2);
    setIsVideoPitchOpen(true);
  };

  const handleVideoPitchSuccess = () => {
    setApplicationStep(3);
  };

  const seoData = {
    title: "Maximally Summer Bootcamp 2025 | Apply Now",
    description: "Apply to join India's premier summer bootcamp for ambitious teens. 7-day intensive program focused on entrepreneurship, AI, marketing, and public speaking.",
    keywords: "teen summer bootcamp, entrepreneurship bootcamp, public speaking for teens, AI bootcamp, Maximally bootcamp",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "EducationEvent",
      "name": "Maximally Summer Bootcamp 2025",
      "description": "India's Premier Program for the Next Generation of Founders, Creators, and Leaders.",
      "eventStatus": "https://schema.org/EventScheduled",
      "startDate": "2025-05-01",
      "endDate": "2025-06-30",
      "location": {
        "@type": "VirtualLocation",
        "url": "https://maximally.in/bootcamps"
      },
      "organizer": {
        "@type": "Organization",
        "name": "Maximally",
        "url": "https://maximally.in"
      },
      "offers": {
        "@type": "Offer",
        "price": "2500",
        "priceCurrency": "INR",
        "availability": "https://schema.org/LimitedAvailability",
        "validFrom": "2025-01-01"
      }
    }
  };

  const curriculumDays = [
    {
      day: "Day 1",
      title: "Orientation & Mindset Reset",
      topics: [
        "Future of work, AI, and careers",
        "Defining your ambition and edge"
      ],
      icon: <BrainCircuit className="h-6 w-6 text-maximally-blue" />
    },
    {
      day: "Day 2",
      title: "Entrepreneurship Fundamentals",
      topics: [
        "Identifying problems worth solving",
        "MVP design using no-code",
        "Storytelling and startup pitching"
      ],
      icon: <Rocket className="h-6 w-6 text-maximally-red" />
    },
    {
      day: "Day 3",
      title: "Digital Marketing & Distribution",
      topics: [
        "Audience psychology",
        "Growth hacking 101",
        "Building a content engine"
      ],
      icon: <ShoppingBag className="h-6 w-6 text-maximally-green" />
    },
    {
      day: "Day 4",
      title: "AI & No-Code Execution",
      topics: [
        "Tools like ChatGPT, Midjourney, Glide, etc.",
        "Building fast prototypes",
        "Automating workflows"
      ],
      icon: <BotIcon className="h-6 w-6 text-maximally-purple" />
    },
    {
      day: "Day 5",
      title: "Public Speaking & Influence",
      topics: [
        "Speaking under pressure",
        "Debate + MUN simulation",
        "Owning the room"
      ],
      icon: <Mic className="h-6 w-6 text-maximally-yellow" />
    },
    {
      day: "Day 6",
      title: "Personal Branding",
      topics: [
        "Portfolio and personal site building",
        "Networking strategy",
        "Digital identity for teens"
      ],
      icon: <PenTool className="h-6 w-6 text-maximally-blue" />
    },
    {
      day: "Day 7",
      title: "Demo Day",
      topics: [
        "Present to guests from top universities and startups",
        "Live feedback from a high-stakes panel",
        "Top 10 get special awards and future perks"
      ],
      icon: <Star className="h-6 w-6 text-maximally-yellow" />
    }
  ];

  const faqItems = [
    {
      question: "What is the application process?",
      answer: "Our process consists of an application form followed by a 1-minute video pitch. Selected applicants will be invited to join the program after review by the Maximally team."
    },
    {
      question: "Who is eligible to apply?",
      answer: "The program is designed for ambitious teens aged 13-20 who are interested in entrepreneurship, technology, marketing, or leadership."
    },
    {
      question: "What is the time commitment?",
      answer: "The bootcamp runs for 7 intensive days, requiring 4-5 hours per day. There will be additional time needed for completing projects and networking."
    },
    {
      question: "Is the bootcamp online or in-person?",
      answer: "The 2025 program is fully virtual, allowing students from across India to participate."
    },
    {
      question: "What happens if I'm not selected?",
      answer: "We provide feedback to all applicants, and those not selected are encouraged to apply for future cohorts. We also offer free resources to help you prepare."
    }
  ];

  const benefits = [
    {
      title: "Certificate of Excellence",
      description: "Recognized credential for college applications.",
      icon: <GraduationCap className="h-5 w-5 text-maximally-green flex-shrink-0 mt-1" />
    },
    {
      title: "Verified alumni badge",
      description: "Use on LinkedIn and other social platforms.",
      icon: <Award className="h-5 w-5 text-maximally-green flex-shrink-0 mt-1" />
    },
    {
      title: "Private Discord with mentors & founders",
      description: "Network with successful entrepreneurs and industry experts.",
      icon: <MessageCircle className="h-5 w-5 text-maximally-green flex-shrink-0 mt-1" />
    },
    {
      title: "Access to internships & collaborations",
      description: "Exclusive opportunities with partner companies.",
      icon: <Users className="h-5 w-5 text-maximally-green flex-shrink-0 mt-1" />
    },
    {
      title: "Letters of recommendation",
      description: "Top 10 performers receive personalized recommendation letters.",
      icon: <Trophy className="h-5 w-5 text-maximally-green flex-shrink-0 mt-1" />
    },
    {
      title: "Early access to future programs",
      description: "First to know about new Maximally opportunities.",
      icon: <CalendarCheck className="h-5 w-5 text-maximally-green flex-shrink-0 mt-1" />
    }
  ];

  return (
    <>
      <SEO {...seoData} />
      <div className="min-h-screen bg-white pt-20">
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="min-h-[90vh] py-20 bg-maximally-black relative overflow-hidden flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-maximally-blue/20 via-maximally-purple/20 to-maximally-red/20 animate-gradient-x"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-grid-white/10" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-press-start text-4xl md:text-5xl lg:text-6xl text-maximally-blue mb-6 leading-tight"
              >
                The most ambitious teens in India will be here this summer.
                <span className="text-maximally-red block mt-4">Will you?</span>
              </motion.h1>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="space-y-6 mt-8"
              >
                <div className="inline-block bg-maximally-blue/20 px-6 py-3 rounded-full animate-pulse">
                  <span className="font-jetbrains text-maximally-blue">
                    🎯 Only 200 spots available | Application deadline: April 30
                  </span>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={handleApplyNow}
                    className="bg-maximally-red text-white hover:bg-maximally-red/90 font-jetbrains text-lg px-8 py-6 group animate-bounce"
                  >
                    🔥 Apply Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <section className="py-16 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-maximally-blue/5 to-transparent"></div>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {curriculumDays.map((day, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="pixel-border bg-white p-6 relative overflow-hidden transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {day.icon}
                    <div>
                      <span className="text-sm font-jetbrains text-maximally-black/60">{day.day}</span>
                      <h3 className="font-press-start text-lg text-maximally-black">{day.title}</h3>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 ml-2">
                    {day.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-maximally-blue mr-2 flex-shrink-0 mt-1" />
                        <span className="font-jetbrains text-sm text-maximally-black/80">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-16 bg-maximally-black/5"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="text-center mb-8"
              >
                <h2 className="font-press-start text-3xl text-maximally-black">
                  Accepted? <span className="text-maximally-red">You're in for life.</span>
                </h2>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-start gap-3 px-5 py-4 bg-white rounded-lg shadow-sm pixel-border"
                  >
                    {benefit.icon}
                    <div>
                      <h3 className="font-jetbrains font-bold text-maximally-black">{benefit.title}</h3>
                      <p className="font-jetbrains text-sm text-maximally-black/70">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-press-start text-3xl text-maximally-black mb-8 text-center">
                🎯 Admissions Process
              </h2>
              
              <blockquote className="border-l-4 border-maximally-blue pl-4 my-8 mx-auto text-left">
                <p className="font-jetbrains italic text-maximally-black text-lg">
                  "We don't accept payments. We accept people."
                </p>
              </blockquote>
              
              <div className="space-y-6 mt-10">
                <div className="flex items-center gap-4 pixel-border p-5 bg-white">
                  <div className="h-10 w-10 rounded-full bg-maximally-blue flex items-center justify-center flex-shrink-0">
                    <span className="font-press-start text-white">1</span>
                  </div>
                  <div>
                    <h3 className="font-press-start text-lg text-maximally-black">Fill out the application form</h3>
                    <p className="font-jetbrains text-sm text-maximally-black/70 mt-1">Tell us about yourself, your ambitions, and why you're a good fit.</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 pixel-border p-5 bg-white">
                  <div className="h-10 w-10 rounded-full bg-maximally-blue flex items-center justify-center flex-shrink-0">
                    <span className="font-press-start text-white">2</span>
                  </div>
                  <div>
                    <h3 className="font-press-start text-lg text-maximally-black">Submit a 1-minute pitch video</h3>
                    <p className="font-jetbrains text-sm text-maximally-black/70 mt-1">Record yourself explaining why you want to join and what you'll bring.</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 pixel-border p-5 bg-white">
                  <div className="h-10 w-10 rounded-full bg-maximally-blue flex items-center justify-center flex-shrink-0">
                    <span className="font-press-start text-white">3</span>
                  </div>
                  <div>
                    <h3 className="font-press-start text-lg text-maximally-black">Shortlisting by the Maximally Team</h3>
                    <p className="font-jetbrains text-sm text-maximally-black/70 mt-1">Our team reviews applications and selects the top 200 candidates.</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 pixel-border p-5 bg-white">
                  <div className="h-10 w-10 rounded-full bg-maximally-blue flex items-center justify-center flex-shrink-0">
                    <span className="font-press-start text-white">4</span>
                  </div>
                  <div>
                    <h3 className="font-press-start text-lg text-maximally-black">Pay ₹2,500 only if selected</h3>
                    <p className="font-jetbrains text-sm text-maximally-black/70 mt-1">We only ask for payment from students who have been accepted to the program.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <Button 
                  onClick={handleApplyNow}
                  className="bg-maximally-red text-white hover:bg-maximally-red/90 font-jetbrains group"
                >
                  Start Application
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-maximally-black/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-press-start text-3xl text-maximally-black mb-8 text-center">
                🎁 Perks & Alumni Privileges
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-3 px-5 py-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-maximally-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-jetbrains font-bold text-maximally-black">Certificate of Excellence</h3>
                    <p className="font-jetbrains text-sm text-maximally-black/70">Recognized credential for college applications.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 px-5 py-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-maximally-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-jetbrains font-bold text-maximally-black">Verified alumni badge</h3>
                    <p className="font-jetbrains text-sm text-maximally-black/70">Use on LinkedIn and other social platforms.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 px-5 py-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-maximally-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-jetbrains font-bold text-maximally-black">Private Discord with mentors & founders</h3>
                    <p className="font-jetbrains text-sm text-maximally-black/70">Network with successful entrepreneurs and industry experts.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 px-5 py-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-maximally-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-jetbrains font-bold text-maximally-black">Access to internships & collaborations</h3>
                    <p className="font-jetbrains text-sm text-maximally-black/70">Exclusive opportunities with partner companies.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 px-5 py-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-maximally-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-jetbrains font-bold text-maximally-black">Letters of recommendation</h3>
                    <p className="font-jetbrains text-sm text-maximally-black/70">Top 10 performers receive personalized recommendation letters.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 px-5 py-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-maximally-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-jetbrains font-bold text-maximally-black">Early access to future programs</h3>
                    <p className="font-jetbrains text-sm text-maximally-black/70">First to know about new Maximally opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-press-start text-3xl text-maximally-black mb-8 text-center">
                Who Should Apply?
              </h2>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-maximally-blue mr-3 flex-shrink-0 mt-1" />
                  <span className="font-jetbrains text-lg">Age 13–20</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-maximally-blue mr-3 flex-shrink-0 mt-1" />
                  <span className="font-jetbrains text-lg">Building or exploring side projects</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-maximally-blue mr-3 flex-shrink-0 mt-1" />
                  <span className="font-jetbrains text-lg">Curious about entrepreneurship, AI, marketing, public speaking</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-maximally-blue mr-3 flex-shrink-0 mt-1" />
                  <span className="font-jetbrains text-lg">Hungry to make ₹1CR someday, not ₹1K</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-maximally-blue mr-3 flex-shrink-0 mt-1" />
                  <span className="font-jetbrains text-lg">Seeking a community of high-performers</span>
                </li>
              </ul>
              
              <div className="text-center mt-10">
                <Button 
                  onClick={handleApplyNow}
                  className="bg-maximally-red text-white hover:bg-maximally-red/90 font-jetbrains text-lg px-8 py-6 group"
                >
                  Apply to Join
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-maximally-black/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-press-start text-2xl text-maximally-black mb-8 text-center">
                Frequently Asked Questions
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white mb-3 pixel-border">
                    <AccordionTrigger className="font-press-start text-lg px-4 py-3 text-maximally-black hover:text-maximally-blue">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-jetbrains px-4 pb-4 text-maximally-black/80">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </div>
      
      <TallyFormDialog open={isApplicationFormOpen} onOpenChange={(open) => {
        setIsApplicationFormOpen(open);
        if (!open && applicationStep === 1) setApplicationStep(1);
      }} />
      
      <VideoPitchDialog 
        open={isVideoPitchOpen} 
        onOpenChange={setIsVideoPitchOpen}
        onSubmitSuccess={handleVideoPitchSuccess}
      />
      
      <Footer />
    </>
  );
};

export default Bootcamps;
