
import { Database, Code, Bot, Layers, Rocket, Laptop } from "lucide-react";
import SkillPageLayout from "@/components/SkillPageLayout";
import ProgramFeatures from "@/components/ProgramFeatures";
import UpcomingEvents from "@/components/UpcomingEvents";
import SkillTestimonial from "@/components/SkillTestimonial";

const features = [
  {
    title: "No-Code App Building",
    description: "Create functional apps without writing code using platforms like Bubble, Webflow, and Adalo."
  },
  {
    title: "Automation Mastery",
    description: "Build workflows that save time and reduce manual tasks using Zapier and Make."
  },
  {
    title: "AI Integration",
    description: "Learn to integrate AI capabilities into your projects and platforms."
  },
  {
    title: "Database Design",
    description: "Structure data effectively for your applications using Airtable and other visual databases."
  },
  {
    title: "MVP Development",
    description: "Rapidly prototype and test your app ideas without technical limitations."
  },
  {
    title: "AI Prompt Engineering",
    description: "Master creating effective prompts for ChatGPT, DALL-E, and other AI tools."
  }
];

const events = [
  {
    title: "No-Code App Building Weekend",
    date: "May 25-26, 2025",
    time: "10:00 AM - 5:00 PM",
    price: "₹2,499",
    isPopular: true
  },
  {
    title: "AI Tools Masterclass",
    date: "June 8, 2025",
    time: "3:00 PM - 6:00 PM",
    price: "₹999"
  }
];

const NoCodeAI = () => {
  return (
    <SkillPageLayout
      title="No-Code & AI"
      icon={<Database className="h-10 w-10 text-white" />}
      iconBgColor="bg-maximally-blue"
      tagline="Build the future without coding."
      skillName="Builders"
      communityType="discord"
      communityLink="https://discord.gg/maximally-builders"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ProgramFeatures features={features} />
          
          <SkillTestimonial
            quote="I built my first app for my school's event management using no-code tools, and now I'm expanding it into a business! The mentors helped me overcome technical challenges I never thought I could handle."
            author="Vikram Singh"
            handle="@vikram_builds"
            achievement="Creator of EventsHub app"
          />
          
          <UpcomingEvents events={events} />
        </div>
        
        <div className="lg:col-span-1">
          <div className="pixel-border p-6 bg-white mb-6">
            <h3 className="font-press-start text-lg mb-4 text-maximally-black">Program Highlights</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Laptop className="h-5 w-5 text-maximally-blue mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">Hands-on project building</span>
              </li>
              <li className="flex">
                <Bot className="h-5 w-5 text-maximally-blue mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">Latest AI tool training</span>
              </li>
              <li className="flex">
                <Layers className="h-5 w-5 text-maximally-blue mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">Multi-platform integration</span>
              </li>
              <li className="flex">
                <Rocket className="h-5 w-5 text-maximally-blue mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">Launch your own product</span>
              </li>
            </ul>
          </div>
          
          <div className="pixel-border overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1677442135136-760c813a7e63" 
              alt="AI and no-code tools visualization" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </SkillPageLayout>
  );
};

export default NoCodeAI;
