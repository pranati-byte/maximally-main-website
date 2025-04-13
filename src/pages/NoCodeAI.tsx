
import { Database, Code, Bot, Layers, Rocket, Laptop, Zap, Brain } from "lucide-react";
import SkillPageLayout from "@/components/SkillPageLayout";
import ProgramFeatures from "@/components/ProgramFeatures";
import SkillTestimonial from "@/components/SkillTestimonial";
import SEO from "@/components/SEO";

const features = [
  {
    title: "No-Code Platform Mastery",
    description: "Master popular platforms like Webflow, Bubble, and Adalo to build fully functional web and mobile apps."
  },
  {
    title: "AI Integration & Automation",
    description: "Learn to leverage ChatGPT, Midjourney, and other AI tools to automate workflows and enhance productivity."
  },
  {
    title: "App Development",
    description: "Build and launch real applications without coding using visual development tools and databases."
  },
  {
    title: "Automation Workflows",
    description: "Create powerful automation using Zapier, Make (Integromat), and native platform automations."
  },
  {
    title: "AI-Powered Business Tools",
    description: "Implement AI solutions for customer service, content creation, and business operations."
  },
  {
    title: "Project Management",
    description: "Learn to manage complex no-code projects and collaborate with teams effectively."
  }
];

const NoCodeAI = () => {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Course",
    "name": "No-Code & AI Development",
    "description": "Master no-code development and AI integration to build powerful applications without coding.",
    "provider": {
      "@type": "Organization",
      "name": "Maximally",
      "url": "https://maximally.in"
    }
  };

  return (
    <>
      <SEO 
        title="No-Code & AI Development Course | Maximally"
        description="Build powerful applications without coding. Master no-code tools and AI integration."
        canonicalUrl="/no-code-ai"
        structuredData={structuredData}
      />
      <SkillPageLayout
        title="No-Code & AI"
        icon={<Database className="h-10 w-10 text-white" />}
        iconBgColor="bg-maximally-blue"
        tagline="Build the future without coding. Harness the power of AI."
        skillName="Builders"
        communityType="discord"
        communityLink="https://discord.gg/maximally-builders"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProgramFeatures features={features} />
            
            <div className="mb-12">
              <h2 className="font-press-start text-2xl mb-6 text-maximally-black">Builder Success Stories</h2>
              <div className="space-y-6">
                <SkillTestimonial
                  quote="Built and launched my SaaS product in just 6 weeks using no-code tools. Now serving 1000+ customers!"
                  author="Arun Kumar"
                  handle="@arun_builds"
                  achievement="Founder of TaskFlow"
                />
                <SkillTestimonial
                  quote="The AI integration skills helped me automate my entire business operations. Saving 20+ hours per week!"
                  author="Neha Singh"
                  handle="@neha_automates"
                  achievement="Creator of AutoFlow"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="pixel-border p-6 bg-white mb-6">
              <h3 className="font-press-start text-lg mb-4 text-maximally-black">Program Highlights</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <Laptop className="h-5 w-5 text-maximally-blue mr-3 flex-shrink-0" />
                  <span className="font-jetbrains text-maximally-black/80">Build without code</span>
                </li>
                <li className="flex">
                  <Brain className="h-5 w-5 text-maximally-blue mr-3 flex-shrink-0" />
                  <span className="font-jetbrains text-maximally-black/80">AI tool mastery</span>
                </li>
                <li className="flex">
                  <Zap className="h-5 w-5 text-maximally-blue mr-3 flex-shrink-0" />
                  <span className="font-jetbrains text-maximally-black/80">Automation expertise</span>
                </li>
                <li className="flex">
                  <Rocket className="h-5 w-5 text-maximally-blue mr-3 flex-shrink-0" />
                  <span className="font-jetbrains text-maximally-black/80">Launch real products</span>
                </li>
              </ul>
            </div>
            
            <div className="pixel-border overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
                alt="No-code development workspace"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </SkillPageLayout>
    </>
  );
};

export default NoCodeAI;
