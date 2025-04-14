
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { School, Users, Briefcase, HeartHandshake, ArrowRight, Rocket, Megaphone, Building2, UserPlus, BookOpen, Target } from 'lucide-react';
import TallyFormDialog from '@/components/TallyFormDialog';

const Collaborate = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const collaborators = [
    { icon: School, title: 'Schools', desc: 'Partner to bring practical skills to your students' },
    { icon: Megaphone, title: 'Guest Speakers', desc: 'Share your expertise with ambitious teens' },
    { icon: Building2, title: 'Startups & NGOs', desc: 'Create impact through youth collaboration' },
    { icon: HeartHandshake, title: 'Mentors', desc: 'Guide the next generation of leaders' }
  ];

  const benefits = [
    { icon: Target, title: 'Real-world Impact', desc: 'Shape the future of teen education in India' },
    { icon: Users, title: 'Recognition', desc: 'Connect with our growing community' },
    { icon: Rocket, title: 'Flexible Formats', desc: 'Remote or live, one-time or long-term' }
  ];

  const ways = [
    { icon: BookOpen, title: 'Run a Bootcamp' },
    { icon: Megaphone, title: 'Be a Guest Speaker' },
    { icon: School, title: 'Refer a School' },
    { icon: HeartHandshake, title: 'Sponsor Us' },
    { icon: UserPlus, title: 'Mentor Teens' },
    { icon: Target, title: 'Co-create Curriculum' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-press-start text-3xl md:text-4xl text-maximally-black mb-6">
            Let's Shape the Future—Together
          </h1>
          <p className="font-jetbrains text-lg text-maximally-black/80 mb-8">
            We partner with schools, creators, and changemakers to bring real-world learning to ambitious teens.
          </p>
          <Button onClick={() => setIsFormOpen(true)} className="bg-maximally-blue hover:bg-maximally-blue/90">
            Start a Collaboration <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Who Can Collaborate */}
      <section className="py-12 px-4 bg-maximally-blue/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-press-start text-2xl text-center mb-12">Who Can Collaborate</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {collaborators.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-lg border-2 border-maximally-black flex items-start">
                <item.icon className="h-8 w-8 text-maximally-blue mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-press-start text-lg mb-2">{item.title}</h3>
                  <p className="font-jetbrains text-maximally-black/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-press-start text-2xl text-center mb-12">Why Partner With Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((item, i) => (
              <div key={i} className="text-center">
                <div className="mb-4 flex justify-center">
                  <item.icon className="h-12 w-12 text-maximally-blue" />
                </div>
                <h3 className="font-press-start text-lg mb-2">{item.title}</h3>
                <p className="font-jetbrains text-maximally-black/70">{item.desc}</p>
              </div>
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
              <div key={i} className="bg-white p-4 rounded-lg text-center border-2 border-maximally-black cursor-pointer hover:bg-maximally-blue/5 transition-colors">
                <item.icon className="h-8 w-8 mx-auto mb-3 text-maximally-blue" />
                <h3 className="font-press-start text-sm">{item.title}</h3>
              </div>
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

      {/* Final CTA */}
      <section className="py-16 px-4 bg-maximally-blue/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-press-start text-2xl mb-4">Have an idea? We'd love to hear it.</h2>
          <Button onClick={() => setIsFormOpen(true)} size="lg" className="bg-maximally-blue hover:bg-maximally-blue/90">
            Start a Collaboration <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <TallyFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </div>
  );
};

export default Collaborate;
