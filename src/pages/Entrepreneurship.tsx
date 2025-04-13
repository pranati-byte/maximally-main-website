
import { Rocket, Lightbulb, Presentation, Target, Users } from "lucide-react";
import SkillPageLayout from "@/components/SkillPageLayout";
import ProgramFeatures from "@/components/ProgramFeatures";
import UpcomingEvents from "@/components/UpcomingEvents";
import SkillTestimonial from "@/components/SkillTestimonial";

const features = [
  {
    title: "Startup Ideation",
    description: "Learn how to identify problems worth solving and transform them into business ideas."
  },
  {
    title: "Build an MVP",
    description: "Create minimum viable products to test your ideas with real users."
  },
  {
    title: "Pitch Your Vision",
    description: "Master the art of pitching to investors, customers, and potential team members."
  },
  {
    title: "Growth Strategies",
    description: "Scale your startup with proven user acquisition and retention strategies."
  },
  {
    title: "Fundraising Essentials",
    description: "Understand funding options and how to approach investors for capital."
  },
  {
    title: "Founder Mindset",
    description: "Develop resilience, creative problem-solving, and leadership skills."
  }
];

const events = [
  {
    title: "TeenBiz Bootcamp - Weekend Edition",
    date: "May 15-16, 2025",
    time: "10:00 AM - 4:00 PM",
    price: "₹1,999",
    isPopular: true
  },
  {
    title: "Startup Pitch Competition",
    date: "June 5, 2025",
    time: "2:00 PM - 6:00 PM",
    price: "₹499"
  }
];

const Entrepreneurship = () => {
  return (
    <SkillPageLayout
      title="Entrepreneurship"
      icon={<Rocket className="h-10 w-10 text-white" />}
      iconBgColor="bg-maximally-blue"
      tagline="Built by teen founders, for teen founders"
      skillName="Founders"
      communityType="discord"
      communityLink="https://discord.gg/maximally-founders"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ProgramFeatures features={features} />
          
          <SkillTestimonial
            quote="Maximally taught me more about starting a business in 8 weeks than I learned in a whole year of business studies. I launched my first e-commerce store and made ₹25,000 in sales!"
            author="Aryan Mehta"
            handle="@aryan_startupguy"
            achievement="Founder of EcoThreads"
          />
          
          <UpcomingEvents events={events} />
        </div>
        
        <div className="lg:col-span-1">
          <div className="pixel-border p-6 bg-white mb-6">
            <h3 className="font-press-start text-lg mb-4 text-maximally-black">Program Highlights</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Lightbulb className="h-5 w-5 text-maximally-blue mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">8-week structured program</span>
              </li>
              <li className="flex">
                <Presentation className="h-5 w-5 text-maximally-blue mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">Weekly workshops with founders</span>
              </li>
              <li className="flex">
                <Target className="h-5 w-5 text-maximally-blue mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">Launch your own micro-startup</span>
              </li>
              <li className="flex">
                <Users className="h-5 w-5 text-maximally-blue mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">Network with teen entrepreneurs</span>
              </li>
            </ul>
          </div>
          
          <div className="pixel-border overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
              alt="Teen entrepreneur working on laptop" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </SkillPageLayout>
  );
};

export default Entrepreneurship;
