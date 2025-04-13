import { Database, Code, Bot, Layers, Rocket, Laptop } from "lucide-react";
import SkillPageLayout from "@/components/SkillPageLayout";
import ProgramFeatures from "@/components/ProgramFeatures";
import UpcomingEvents from "@/components/UpcomingEvents";
import SkillTestimonial from "@/components/SkillTestimonial";

const features = [
  {
    title: "No-Code Fundamentals",
    description: "Master popular no-code platforms and tools"
  },
  {
    title: "AI Integration",
    description: "Learn to leverage AI in your applications"
  },
  {
    title: "Automation",
    description: "Build automated workflows and systems"
  }
];

const events = [
  {
    title: "No-Code Bootcamp",
    date: "May 20, 2025",
    time: "10:00 AM - 4:00 PM",
    price: "₹2,999",
    isPopular: true
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
            quote="Built my first app without writing a single line of code!"
            author="Vikram Singh"
            handle="@vikram_builds"
            achievement="Creator of EventsHub"
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