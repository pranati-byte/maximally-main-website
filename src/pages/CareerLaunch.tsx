import { GraduationCap, FileText, Users, Briefcase, Network, Star, ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const CareerLaunch = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen w-full bg-white overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-4 py-20 max-w-screen-lg mx-auto text-center relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-20 animate-gradient-x" />
        <h1 className="font-press-start text-5xl md:text-6xl lg:text-7xl text-maximally-black mb-6 leading-tight gradient-text-blue">
          Launch Your Future
        </h1>
        <p className="font-jetbrains text-xl md:text-2xl text-maximally-black/70 mb-8 max-w-3xl mx-auto">
          Build the career foundation that gets you noticed. Land opportunities that matter.
        </p>
        <Button onClick={() => window.location.href = '/bootcamps'} className="pixel-button text-lg px-8 py-6 group hover:scale-105 transition-all duration-300 bg-gradient-to-r from-maximally-blue to-maximally-purple hover:shadow-xl">
          Join Our Bootcamp
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.section>

      {/* Modules Grid */}
      <motion.section 
        variants={container}
        initial="hidden"
        animate="show"
        className="px-4 py-16 max-w-screen-lg mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <GraduationCap className="h-6 w-6 text-maximally-blue" />,
              title: "Standout Applications",
              description: "Craft compelling college and internship applications that showcase your unique story and achievements.",
              tags: ["Hands-on", "Project-based"]
            },
            {
              icon: <FileText className="h-6 w-6 text-maximally-purple" />,
              title: "Resume Building",
              description: "Create a professional resume that highlights your experiences, skills, and potential.",
              tags: ["Beginner-Friendly", "Interactive"]
            },
            {
              icon: <MessageSquare className="h-6 w-6 text-maximally-blue" />,
              title: "Interview Preparation",
              description: "Master the art of interviews with practical techniques and real-world scenarios.",
              tags: ["Practical", "Scenario-based"]
            },
            {
              icon: <Briefcase className="h-6 w-6 text-maximally-purple" />,
              title: "Portfolio Development",
              description: "Build a standout portfolio that demonstrates your projects and capabilities.",
              tags: ["Creative", "Showcase"]
            },
            {
              icon: <Network className="h-6 w-6 text-maximally-blue" />,
              title: "Networking Skills",
              description: "Learn to build meaningful connections and relationships in professional settings.",
              tags: ["Networking", "Relationship Building"]
            },
            {
              icon: <Star className="h-6 w-6 text-maximally-purple" />,
              title: "Personal Branding",
              description: "Create a unique personal brand that makes you memorable in competitive environments.",
              tags: ["Branding", "Marketing"]
            },
          ].map((module, index) => (
            <motion.div key={index} variants={item}>
              <Card className="group hover:scale-105 transition-all duration-300 border-2 border-black/5 hover:border-maximally-blue/20 hover:shadow-xl overflow-hidden">
                <CardHeader className="space-y-1 p-6 bg-gradient-to-r from-white to-blue-50">
                  {module.icon}
                  <CardTitle className="text-2xl">{module.title}</CardTitle>
                  <CardDescription className="text-base">{module.description}</CardDescription>
                  <div className="flex gap-2 mt-2">
                    {module.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="bg-white/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Program Highlights */}
      <section className="px-4 py-16 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="font-press-start text-3xl mb-8 gradient-text-purple">Program Highlights</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                title: "🎯 Career Strategy",
                content: "Develop a personalized roadmap for your career journey"
              },
              {
                title: "💼 Portfolio Building",
                content: "Create an impressive portfolio that stands out"
              },
              {
                title: "🗣️ Interview Skills",
                content: "Master the art of acing job interviews"
              },
              {
                title: "🤝 Networking",
                content: "Build valuable connections in your field"
              },
              {
                title: "🚀 Personal Branding",
                content: "Craft a compelling personal brand"
              }
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="pixel-border bg-white/80 backdrop-blur-sm mb-4">
                <AccordionTrigger className="font-press-start text-lg px-4">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="font-jetbrains px-4 pb-4">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 text-center bg-gradient-to-r from-maximally-blue/5 via-maximally-purple/5 to-maximally-blue/5">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="font-press-start text-3xl mb-6 gradient-text">Ready to Launch Your Career?</h2>
          <Button onClick={() => window.location.href = '/bootcamps'} className="pixel-button text-lg px-8 py-6 group hover:scale-105 transition-all duration-300 animate-pulse">
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CareerLaunch;