import { Database, Bot, Layers, Rocket, Laptop, ArrowRight, Users, HelpCircle, Wrench, Zap, Brain, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SkillPageLayout from "@/components/SkillPageLayout";

const features = [
  {
    title: "Build Without Code",
    description: "Create full-stack apps visually",
    details: "Launch professional apps without writing a single line of code. Master visual development using modern no-code platforms.",
    icon: <Laptop className="h-6 w-6 text-[#3366FF]" />,
    color: "gradient-bg-blue"
  },
  {
    title: "AI Integration",
    description: "Harness AI tools and automation",
    details: "Build AI-powered features using ChatGPT, Claude, and other cutting-edge tools. Create intelligent automations effortlessly.",
    icon: <Brain className="h-6 w-6" />,
    color: "gradient-bg-purple"
  },
  {
    title: "Workflow Automation",
    description: "Design automated systems",
    details: "Create end-to-end automation workflows that save hours. Connect apps and automate repetitive tasks instantly.",
    icon: <Zap className="h-6 w-6" />,
    color: "gradient-bg-green"
  }
];

const NoCodeAI = () => {
  return (
    <SkillPageLayout
      title="No-Code & AI"
      icon={<Database className="h-10 w-10 text-white" />}
      iconBgColor="bg-[#4D89FF]"
      tagline="Build the future without code."
      skillName="Builders"
      communityType="discord"
      communityLink="https://discord.gg/maximally-builders"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="font-press-start text-4xl md:text-5xl gradient-text-rainbow animate-glow">
            Build Like a Tech Wizard
          </h1>
          <p className="font-jetbrains text-xl text-maximally-black/80 max-w-2xl mx-auto">
            Master the tools used by modern creators to build <span className="text-[#39FF14] font-bold">AI-powered apps</span> and <span className="text-[#B400FF] font-bold">automated systems</span> — no coding required.
          </p>
          <Button className="bg-[#4D89FF] hover:bg-[#4D89FF]/90 text-white px-8 py-6 text-lg font-jetbrains group shadow-xl transform hover:scale-105 transition-all">
            Join Our Bootcamp
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className={`border-2 border-maximally-black/10 hover:border-[#4D89FF]/50 transition-all ${feature.color} hover:transform hover:scale-105`}>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {feature.icon}
                  <CardTitle className="font-press-start text-lg">{feature.title}</CardTitle>
                </div>
                <CardDescription className="font-jetbrains">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-maximally-black/80 font-jetbrains">{feature.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Settings className="h-6 w-6 text-[#4D89FF]" />
            <h2 className="font-press-start text-2xl">Your Tech Arsenal</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white border-2 border-[#39FF14]/30 rounded-lg font-jetbrains hover:border-[#39FF14] transition-all">
              Bubble.io
            </div>
            <div className="p-4 bg-white border-2 border-[#B400FF]/30 rounded-lg font-jetbrains hover:border-[#B400FF] transition-all">
              ChatGPT API
            </div>
            <div className="p-4 bg-white border-2 border-[#4D89FF]/30 rounded-lg font-jetbrains hover:border-[#4D89FF] transition-all">
              Make.com
            </div>
            <div className="p-4 bg-white border-2 border-[#FF5F5F]/30 rounded-lg font-jetbrains hover:border-[#FF5F5F] transition-all">
              Zapier
            </div>
            <div className="p-4 bg-white border-2 border-[#39FF14]/30 rounded-lg font-jetbrains hover:border-[#39FF14] transition-all">
              Midjourney
            </div>
            <div className="p-4 bg-white border-2 border-[#B400FF]/30 rounded-lg font-jetbrains hover:border-[#B400FF] transition-all">
              Framer
            </div>
          </div>
        </div>

        {/* What You'll Build Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Rocket className="h-6 w-6 text-[#FF5F5F]" />
            <h2 className="font-press-start text-2xl">What You'll Build</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#39FF14]/30 hover:border-[#39FF14] transition-all">
              <CardContent className="pt-6">
                <h3 className="font-press-start text-lg mb-2">AI Applications</h3>
                <p className="font-jetbrains">Create intelligent chatbots, content generators, and AI-powered tools.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#B400FF]/30 hover:border-[#B400FF] transition-all">
              <CardContent className="pt-6">
                <h3 className="font-press-start text-lg mb-2">Automation Systems</h3>
                <p className="font-jetbrains">Build workflow automations that save hours of manual work.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <Button className="bg-[#FF5F5F] hover:bg-[#FF5F5F]/90 text-white px-8 py-6 text-lg font-jetbrains group shadow-xl transform hover:scale-105 transition-all">
            Start Building
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </SkillPageLayout>
  );
};

export default NoCodeAI;