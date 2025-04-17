import { Database, Bot, Layers, Rocket, Laptop, ArrowRight, Users, HelpCircle, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SkillPageLayout from "@/components/SkillPageLayout";

const features = [
  {
    title: "No-Code Fundamentals",
    description: "Master popular no-code platforms and tools",
    details: "Build full-stack apps without writing a single line of code. Learn the fundamental concepts of app development through visual tools."
  },
  {
    title: "AI Integration",
    description: "Learn to leverage AI in your applications",
    details: "Harness the power of ChatGPT, Claude, and other AI tools to automate tasks and create intelligent applications."
  },
  {
    title: "Automation",
    description: "Build automated workflows and systems",
    details: "Create end-to-end automation systems that save hours of manual work. Connect apps and automate repetitive tasks."
  }
];

const tools = [
  "Bubble - Build full web apps visually",
  "Softr - Create powerful platforms on Airtable",
  "Make.com - Design complex automation workflows",
  "Zapier - Connect and automate your favorite apps",
  "GPT-4 - Build AI-powered features and chatbots",
  "Midjourney - Generate professional designs instantly"
];

const targetAudience = [
  "Future Founders - Dream of launching your own startup",
  "Creative Builders - Love designing and creating things",
  "AI Enthusiasts - Excited about the future of technology",
  "Efficiency Seekers - Always looking to automate and optimize"
];

const faq = [
  {
    question: "Do I need any coding experience?",
    answer: "Not at all! This bootcamp is designed for complete beginners. We focus on visual tools and platforms that don't require coding."
  },
  {
    question: "What can I build after this bootcamp?",
    answer: "You'll be able to create web apps, automate workflows, build AI chatbots, and launch your own digital products - all without coding!"
  },
  {
    question: "How hands-on is the learning?",
    answer: "Very! You'll build real projects from day one. By the end, you'll have a portfolio of apps and automations you've created yourself."
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
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="font-press-start text-4xl md:text-5xl gradient-text-blue">
            Build Apps Like a Tech Founder
          </h1>
          <p className="font-jetbrains text-xl text-maximally-black/80 max-w-2xl mx-auto">
            Master the tools used by successful founders to build million-dollar products—no coding required.
          </p>
          <Button onClick={() => window.location.href = '/bootcamps'} className="bg-maximally-blue hover:bg-maximally-blue/90 text-white px-8 py-6 text-lg font-jetbrains group">
            Join Our Bootcamp
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="border-2 border-maximally-black/10 hover:border-maximally-blue/50 transition-colors">
              <CardHeader>
                <CardTitle className="font-press-start text-lg">{feature.title}</CardTitle>
                <CardDescription className="font-jetbrains">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-maximally-black/80 font-jetbrains">{feature.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Wrench className="h-6 w-6 text-maximally-blue" />
            <h2 className="font-press-start text-2xl">What You'll Build With</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-jetbrains">
            {tools.map((tool) => (
              <div key={tool} className="p-4 bg-white border-2 border-maximally-black/10 rounded-lg">
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* Target Audience */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Users className="h-6 w-6 text-maximally-blue" />
            <h2 className="font-press-start text-2xl">Who This Is For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {targetAudience.map((audience) => (
              <Card key={audience} className="border-2 border-maximally-black/10">
                <CardContent className="pt-6 font-jetbrains">
                  {audience}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <HelpCircle className="h-6 w-6 text-maximally-blue" />
            <h2 className="font-press-start text-2xl">Common Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-press-start text-lg">{item.question}</AccordionTrigger>
                <AccordionContent className="font-jetbrains text-maximally-black/80">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <Button className="bg-maximally-blue hover:bg-maximally-blue/90 text-white px-8 py-6 text-lg font-jetbrains group">
            Reserve Your Spot
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </SkillPageLayout>
  );
};

export default NoCodeAI;