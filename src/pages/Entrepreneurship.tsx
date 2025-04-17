import { Target, ArrowRight, Check, ChevronDown, Rocket, Brain, Code } from "lucide-react";
import { Link } from "react-router-dom";
import SkillPageLayout from "@/components/SkillPageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const idealStudent = [
  "You have a business idea but don't know where to start",
  "You want to learn by building, not just theory",
  "You're ready to commit 10-15 hours/week",
  "You dream of starting up but fear failing",
  "You want to meet other teen founders"
];

const modules = [
  {
    title: "Business Fundamentals",
    description: "Learn core business concepts and market analysis",
    teaser: "Decode market opportunities and build a business mindset that lasts",
    icon: <Brain className="h-5 w-5" />
  },
  {
    title: "Startup Strategy",
    description: "Develop your business model and go-to-market strategy",
    teaser: "Turn your idea into a scalable business model that investors love",
    icon: <Rocket className="h-5 w-5" />
  },
  {
    title: "Product Development",
    description: "Build and validate your minimum viable product",
    teaser: "Launch your MVP fast and get real users, not just theory",
    icon: <Code className="h-5 w-5" />
  }
];

const deliverables = [
  "Professional Pitch Deck",
  "Working MVP/Prototype",
  "Go-to-Market Strategy",
  "Financial Model",
  "Customer Personas",
  "Competitor Analysis"
];

export default function Entrepreneurship() {
  return (
    <SkillPageLayout
      title="Entrepreneurship Bootcamp"
      subtitle="Launch your startup like a pro"
      description="Transform your ideas into a real business through hands-on learning and expert guidance."
      className="bg-gradient-to-b from-maximally-red/5"
    >
      {/* Main Content */}
      <div className="container max-w-6xl mx-auto px-4 py-12">
        {/* Who Is This For */}
        <section className="mb-16">
          <h2 className="font-press-start text-2xl mb-8">Perfect For You If...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {idealStudent.map((trait, index) => (
              <Card key={index} className="p-6 pixel-border">
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-maximally-red flex-shrink-0" />
                  <p className="font-jetbrains">{trait}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Modules */}
        <section className="mb-16">
          <h2 className="font-press-start text-2xl mb-8">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="p-6 pixel-border">
                <div className="flex flex-col gap-4">
                  <div className="bg-maximally-red/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    {module.icon}
                  </div>
                  <h3 className="font-press-start text-lg">{module.title}</h3>
                  <p className="text-maximally-black/70">{module.description}</p>
                  <p className="text-sm italic">{module.teaser}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Deliverables */}
        <section className="mb-16">
          <h2 className="font-press-start text-2xl mb-8">What You'll Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-center gap-3 font-jetbrains">
                <Check className="h-5 w-5 text-maximally-green flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Button asChild size="lg" className="font-press-start">
            <Link to="/contact">
              Join Waitlist <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </section>
      </div>
    </SkillPageLayout>
  );
}