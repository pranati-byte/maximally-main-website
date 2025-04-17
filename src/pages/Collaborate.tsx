import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { School, Users, Briefcase, HeartHandshake, ArrowRight, Rocket, Megaphone, Building2, UserPlus, BookOpen, Target, Star, Trophy, Sparkles, Check, Heart, Zap, Globe, Mail } from 'lucide-react';
import TallyFormDialog from '@/components/TallyFormDialog';

const Collaborate = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const collaborators = [
    { icon: School, title: 'Schools', desc: 'Partner to bring practical skills to your students', color: 'bg-gradient-to-br from-blue-500 to-purple-500' },
    { icon: Megaphone, title: 'Guest Speakers', desc: 'Share your expertise with ambitious teens', color: 'bg-gradient-to-br from-green-500 to-teal-500' },
    { icon: Building2, title: 'Startups & NGOs', desc: 'Create impact through youth collaboration', color: 'bg-gradient-to-br from-orange-500 to-red-500' },
    { icon: HeartHandshake, title: 'Mentors', desc: 'Guide the next generation of leaders', color: 'bg-gradient-to-br from-pink-500 to-purple-500' }
  ];

  const benefits = [
    { icon: Target, title: 'Real-world Impact', desc: 'Shape the future of teen education in India' },
    { icon: Users, title: 'Recognition', desc: 'Connect with our growing community' },
    { icon: Rocket, title: 'Flexible Formats', desc: 'Remote or live, one-time or long-term' }
  ];



  const ways = [
    { icon: Rocket, title: 'Run a Bootcamp' },
    { icon: Megaphone, title: 'Be a Guest Speaker' },
    { icon: Building2, title: 'Refer a School' },
    { icon: Heart, title: 'Sponsor Us' },
    { icon: UserPlus, title: 'Mentor Teens' },
    { icon: BookOpen, title: 'Co-create Curriculum' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Animated Background */}
      <section className="pt-24 pb-12 px-4 relative overflow-hidden bg-gradient-to-br from-maximally-purple/10 to-maximally-blue/10">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute w-64 h-64 rounded-full bg-maximally-blue/20 -top-32 -left-32 blur-3xl animate-pulse"></div>
          <div className="absolute w-64 h-64 rounded-full bg-maximally-purple/20 -bottom-32 -right-32 blur-3xl animate-pulse delay-700"></div>
        </div>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h1 className="font-press-start text-4xl md:text-5xl text-maximally-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-maximally-blue to-maximally-purple">
            Let's Shape the Future—Together
          </h1>
          <p className="font-jetbrains text-lg text-maximally-black/80 mb-8">
            Join India's most innovative teen education platform. Together, we can empower the next generation of leaders.
          </p>
          <Button 
            onClick={() => window.location.href = 'mailto:hello@maximally.in'} 
            className="bg-maximally-blue hover:bg-maximally-blue/90 transform hover:scale-105 transition-all duration-300"
          >
            Email Us to Collaborate <Mail className="ml-2 h-4 w-4 animate-bounce" />
          </Button>
        </motion.div>
      </section>



      {/* Who Can Collaborate - Enhanced with gradients and hover effects */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-press-start text-2xl text-center mb-12">Who Can Collaborate</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {collaborators.map((item, i) => (
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                key={i}
                className={`p-6 rounded-lg shadow-lg border-2 border-maximally-black hover:transform hover:scale-105 transition-all duration-300 ${item.color} text-white`}
              >
                <item.icon className="h-8 w-8 mb-4" />
                <h3 className="font-press-start text-lg mb-2">{item.title}</h3>
                <p className="font-jetbrains opacity-90">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-12 px-4 bg-gradient-to-br from-maximally-purple/5 to-maximally-blue/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-press-start text-2xl text-center mb-12">Why Partner With Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((item, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                key={i}
                className="bg-white p-6 rounded-lg shadow-lg border-2 border-maximally-black hover:transform hover:scale-105 transition-all duration-300"
              >
                <item.icon className="h-12 w-12 text-maximally-blue mb-4 animate-bounce" />
                <h3 className="font-press-start text-lg mb-2">{item.title}</h3>
                <p className="font-jetbrains text-maximally-black/70 mb-4">{item.desc}</p>
                {/*Removed stat here*/}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Collaborate */}
      <section className="py-12 px-4 bg-maximally-red/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-press-start text-2xl text-center mb-12">Ways to Collaborate</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {ways.map((item, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                key={i}
                className="bg-white p-4 rounded-lg text-center border-2 border-maximally-black cursor-pointer hover:bg-maximally-blue/5 transition-colors"
              >
                <item.icon className="h-8 w-8 mx-auto mb-3 text-maximally-blue" />
                <h3 className="font-press-start text-sm">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-press-start text-2xl text-center mb-12">FAQ</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-press-start text-left">Do I need prior experience?</AccordionTrigger>
              <AccordionContent className="font-jetbrains">
                No, we welcome collaborators at all experience levels. What matters most is your passion for teen education and willingness to share your knowledge.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-press-start text-left">Do you pay creators/speakers?</AccordionTrigger>
              <AccordionContent className="font-jetbrains">
                Yes, we offer competitive compensation for professional creators and speakers based on engagement format and duration.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-press-start text-left">Can we do in-person collabs?</AccordionTrigger>
              <AccordionContent className="font-jetbrains">
                Yes, we're open to both virtual and in-person collaborations, depending on location and format.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-maximally-purple/5 to-maximally-blue/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-press-start text-2xl text-center mb-6">Become a Sponsor</h2>
          <p className="font-jetbrains text-center text-maximally-black/80 max-w-2xl mx-auto mb-12">
            Join us in weaponizing ambition. Back the builders of tomorrow and fuel India's first social-edtech movement.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="pixel-border p-6 bg-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-12 w-12 bg-maximally-blue rounded-lg mb-4 flex items-center justify-center">
                <Star className="h-6 w-6 text-white animate-spin-slow" />
              </div>
              <h3 className="font-press-start text-lg mb-4">Pixel Patron</h3>
              <p className="font-jetbrains text-maximally-blue mb-4">INR 25,000+</p>
              <ul className="font-jetbrains space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-maximally-blue" />
                  Featured on Sponsor Wall
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-maximally-blue" />
                  Social media shoutouts
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-maximally-blue" />
                  Quarterly impact updates
                </li>
              </ul>
            </div>

            <div className="pixel-border p-6 bg-white hover:transform hover:scale-105 transition-all duration-300 relative">
              <div className="absolute -top-2 -right-2 bg-maximally-red text-white px-2 py-1 text-xs font-press-start animate-pulse">
                Popular
              </div>
              <div className="h-12 w-12 bg-maximally-red rounded-lg mb-4 flex items-center justify-center">
                <Trophy className="h-6 w-6 text-white animate-bounce" />
              </div>
              <h3 className="font-press-start text-lg mb-4">Resolution Partner</h3>
              <p className="font-jetbrains text-maximally-red mb-4">INR 1,00,000+</p>
              <ul className="font-jetbrains space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-maximally-red" />
                  All Pixel Patron benefits
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-maximally-red" />
                  Batch sponsorship (20+ students)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-maximally-red" />
                  Custom badge + certificate
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-maximally-red" />
                  Featured in impact report
                </li>
              </ul>
            </div>

            <div className="pixel-border p-6 bg-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-12 w-12 bg-maximally-purple rounded-lg mb-4 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white animate-pulse" />
              </div>
              <h3 className="font-press-start text-lg mb-4">Infinite Mode</h3>
              <p className="font-jetbrains text-maximally-purple mb-4">INR 5,00,000+</p>
              <ul className="font-jetbrains space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-maximally-purple" />
                  All Resolution Partner benefits
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-maximally-purple" />
                  Co-branded events
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-maximally-purple" />
                  Strategic Partner Spotlight
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-maximally-purple" />
                  Quarterly roundtable access
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="font-jetbrains text-maximally-black/60 mb-4">
              * 100% of sponsorship funds go toward free access for ambitious teens from underserved backgrounds
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-maximally-blue/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-press-start text-2xl mb-4">Have an idea? We'd love to hear it.</h2>
          <p className="font-jetbrains text-maximally-black/80 mb-6">
            Email us at hello@maximally.in to discuss how we can tailor a collaboration that works for you.
          </p>
          <Button onClick={() => window.location.href = 'mailto:hello@maximally.in'} size="lg" className="bg-maximally-blue hover:bg-maximally-blue/90">
            Email Us to Collaborate <Mail className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <TallyFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </div>
  );
};

export default Collaborate;