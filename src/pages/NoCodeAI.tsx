import { Database, Code, Bot, Layers, Rocket, Laptop } from "lucide-react";
import SkillPageLayout from "@/components/SkillPageLayout";
import ProgramFeatures from "@/components/ProgramFeatures";
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
        </div>
      </div>
      <div className="mt-8 text-center">
        <a href="https://drive.google.com/your-nocode-ai-link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-maximally-blue text-white font-press-start rounded-lg hover:bg-maximally-blue/80 transition-colors">
          View Full Curriculum
        </a>
      </div>
    </SkillPageLayout>
  );
};

export default NoCodeAI;