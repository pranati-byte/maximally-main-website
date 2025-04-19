import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import TallyFormDialog from "@/components/TallyFormDialog";
import VideoPitchDialog from '../components/VideoPitchDialog';
import React from 'react'; // Added React import


const Bootcamps = () => {
  // Calculate countdown to May 29, 11:59 PM IST
  const targetDate = new Date('2025-05-29T23:59:00+05:30').getTime();
  const [timeLeft, setTimeLeft] = React.useState('');

  React.useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft(`${days}d ${hours}h ${minutes}m`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-press-start text-4xl md:text-5xl mb-6">
            Our <span className="bg-[#39FF14]/20">most ambitious</span> teens join us{" "}
            <span className="bg-[#FF5F5F]/20">this summer</span>. Will you?
          </h1>
          <p className="font-jetbrains text-xl mb-8">
            Only <span className="bg-yellow-200">200 students</span> get{" "}
            <span className="bg-blue-100">accepted</span> into our{" "}
            <span className="bg-green-100">certificate of excellence</span> program.
            Once <span className="bg-purple-100">you're in for life</span>.
          </p>
          <p>Application Deadline: {timeLeft}</p> {/* Added Countdown Timer */}
          <TallyFormDialog />
        </div>
      </section>

      {/* Application Timeline Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="font-press-start text-3xl mb-8">Application Timeline</h2>
          <p className="font-jetbrains">Placeholder for application timeline details.</p>
        </div>
      </section>

      {/* Accepted Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="font-press-start text-3xl mb-8">🏆 Accepted? You're In for Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-[#39FF14]/30 hover:border-[#39FF14] transition-all">
              <CardContent className="p-6">
                <h3 className="font-press-start text-xl mb-4">Certificate of Excellence</h3>
                <p className="font-jetbrains">Your badge of honor in the digital age</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#FF5F5F]/30 hover:border-[#FF5F5F] transition-all">
              <CardContent className="p-6">
                <h3 className="font-press-start text-xl mb-4">Alumni-Only Privileges</h3>
                <p className="font-jetbrains">Exclusive access to future opportunities</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#B400FF]/30 hover:border-[#B400FF] transition-all">
              <CardContent className="p-6">
                <h3 className="font-press-start text-xl mb-4">Lifetime Network</h3>
                <p className="font-jetbrains">Connect with India's future leaders</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="font-press-start text-3xl mb-8 text-center">🎁 Perks & Alumni Privileges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#39FF14]/10 p-6 rounded-lg">
              <h3 className="font-press-start text-xl mb-4">💼 Professional Network</h3>
              <p className="font-jetbrains">Private Discord with mentors & founders</p>
            </div>
            <div className="bg-[#FF5F5F]/10 p-6 rounded-lg">
              <h3 className="font-press-start text-xl mb-4">🚀 Career Growth</h3>
              <p className="font-jetbrains">Access to internships and collaborations</p>
            </div>
            <div className="bg-[#B400FF]/10 p-6 rounded-lg">
              <h3 className="font-press-start text-xl mb-4">📜 Recognition</h3>
              <p className="font-jetbrains">Letters of recommendation for top performers</p>
            </div>
            <div className="bg-[#3C9EE7]/10 p-6 rounded-lg">
              <h3 className="font-press-start text-xl mb-4">🌟 Exclusive Events</h3>
              <p className="font-jetbrains">Priority access to future Maximally events</p>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="font-press-start text-3xl mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {/* Add FAQ items here */}
            <AccordionItem value="faq1">
              <AccordionTrigger className="font-press-start">What is the application process?</AccordionTrigger>
              <AccordionContent className="font-jetbrains">Placeholder for FAQ 1 answer.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Who Should Apply Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="font-press-start text-3xl mb-8">👥 Who Should Apply</h2>
          <div className="space-y-4">
            <p className="font-jetbrains text-xl">
              <span className="bg-[#39FF14]/20 px-2">Teen founders</span> ready to{" "}
              <span className="bg-[#FF5F5F]/20 px-2">build their first ₹1CR</span> startup
            </p>
            <p className="font-jetbrains text-xl">
              <span className="bg-[#B400FF]/20 px-2">Ambitious teens</span> who want to{" "}
              <span className="bg-[#3C9EE7]/20 px-2">lead the future</span>
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="font-press-start text-3xl mb-8 text-center">📚 Curriculum</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="day1">
              <AccordionTrigger className="font-press-start">Day 1: Orientation & Mindset Reset</AccordionTrigger>
              <AccordionContent className="font-jetbrains">
                • Future of work, AI, and careers<br />
                • Defining your ambition and edge
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="day2">
              <AccordionTrigger className="font-press-start">Day 2: Entrepreneurship Fundamentals</AccordionTrigger>
              <AccordionContent className="font-jetbrains">
                • Identifying problems worth solving<br />
                • MVP design using no-code<br />
                • Storytelling and startup pitching
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="day3">
              <AccordionTrigger className="font-press-start">Day 3: Digital Marketing & Distribution</AccordionTrigger>
              <AccordionContent className="font-jetbrains">
                • Audience psychology<br />
                • Growth hacking 101<br />
                • Building a content engine
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="day4">
              <AccordionTrigger className="font-press-start">Day 4: AI & No-Code Execution</AccordionTrigger>
              <AccordionContent className="font-jetbrains">
                • Tools like ChatGPT, Midjourney, Glide<br />
                • Building fast prototypes<br />
                • Automating workflows
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="day5">
              <AccordionTrigger className="font-press-start">Day 5: Public Speaking & Influence</AccordionTrigger>
              <AccordionContent className="font-jetbrains">
                • Speaking under pressure<br />
                • Debate + MUN simulation<br />
                • Owning the room
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="day6">
              <AccordionTrigger className="font-press-start">Day 6: Personal Branding</AccordionTrigger>
              <AccordionContent className="font-jetbrains">
                • Portfolio and personal site building<br />
                • Networking strategy<br />
                • Digital identity for teens
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="day7">
              <AccordionTrigger className="font-press-start">Day 7: Demo Day</AccordionTrigger>
              <AccordionContent className="font-jetbrains">
                • Present to guests from top universities and startups<br />
                • Live feedback from a high-stakes panel<br />
                • Top 10 get special awards and future perks
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <VideoPitchDialog open={false} onOpenChange={()=> {}} onSubmitSuccess={()=> {}}/>
    </div>
  );
};

export default Bootcamps;