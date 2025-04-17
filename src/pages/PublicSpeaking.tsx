import { Megaphone, Mic, Globe, Award, UserCheck, Check, Target, ArrowRight, Brain, Users, MessageSquare } from "lucide-react";
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

const PublicSpeaking = () => {
  return (
    <SkillPageLayout
      title="Public Speaking & MUN"
      icon={<Megaphone className="h-10 w-10 text-white" />}
      iconBgColor="bg-[#FF5F5F]"
      tagline="Find your voice. Change the world."
      skillName="Speakers"
      communityType="discord"
      communityLink="https://discord.gg/maximally-speakers"
    >
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="font-press-start text-4xl md:text-5xl gradient-text-rainbow">
            Master the Art of Public Speaking
          </h1>
          <p className="font-jetbrains text-xl text-maximally-black/80 max-w-2xl mx-auto">
            From classroom to <span className="text-[#FF5F5F] font-bold">TEDx stage</span>, develop the <span className="text-[#4D89FF] font-bold">confidence</span> to speak with impact.
          </p>
          <Link to="/bootcamps">
            <Button className="bg-[#FF5F5F] hover:bg-[#FF5F5F]/90 text-white px-8 py-6 text-lg font-jetbrains group shadow-lg transform hover:scale-105 transition-all">
              Join Next Cohort
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Key Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 hover:shadow-xl transition-all hover:scale-105 border-2 border-[#FF5F5F]/20">
            <Brain className="h-8 w-8 text-[#FF5F5F] mb-4" />
            <h3 className="font-press-start text-lg mb-3 text-[#FF5F5F]">Confidence</h3>
            <p className="font-jetbrains">Master stage presence and overcome fear</p>
          </Card>
          <Card className="p-6 hover:shadow-xl transition-all hover:scale-105 border-2 border-[#4D89FF]/20">
            <Users className="h-8 w-8 text-[#4D89FF] mb-4" />
            <h3 className="font-press-start text-lg mb-3 text-[#4D89FF]">Persuasion</h3>
            <p className="font-jetbrains">Influence and inspire any audience</p>
          </Card>
          <Card className="p-6 hover:shadow-xl transition-all hover:scale-105 border-2 border-[#9B4DFF]/20">
            <MessageSquare className="h-8 w-8 text-[#9B4DFF] mb-4" />
            <h3 className="font-press-start text-lg mb-3 text-[#9B4DFF]">Engagement</h3>
            <p className="font-jetbrains">Keep audiences hooked and excited</p>
          </Card>
        </div>

        {/* Topics Section */}
        <div className="mb-16 space-y-8">
          <h2 className="font-press-start text-2xl text-center mb-8">Essential Skills You'll Master</h2>
          <div className="space-y-4">
            {[
              { title: "Stage Fear Mastery", color: "#FF5F5F" },
              { title: "Body Language & Voice", color: "#4D89FF" },
              { title: "Story Crafting", color: "#FFEA00" },
              { title: "Audience Connection", color: "#9B4DFF" }
            ].map((topic, index) => (
              <div key={index} 
                className="p-6 rounded-xl border-2 hover:shadow-lg transition-all cursor-pointer"
                style={{ borderColor: `${topic.color}20` }}>
                <h3 className="font-press-start text-lg" style={{ color: topic.color }}>
                  {topic.title}
                </h3>
              </div>
            ))}
          </div>
        </div>


        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="font-press-start text-2xl mb-6 text-center">Common Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-2 border-[#FF5F5F]/20 rounded-xl">
              <AccordionTrigger className="font-press-start text-lg px-4">
                When will I see results?
              </AccordionTrigger>
              <AccordionContent className="font-jetbrains px-4">
                Most students see significant confidence improvement within the first month of practice and structured training.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-2 border-[#4D89FF]/20 rounded-xl">
              <AccordionTrigger className="font-press-start text-lg px-4">
                Do I need prior experience?
              </AccordionTrigger>
              <AccordionContent className="font-jetbrains px-4">
                No prior experience needed! We start with fundamentals and gradually build your confidence through structured practice.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h2 className="font-press-start text-2xl gradient-text-rainbow">Ready to Find Your Voice?</h2>
          <Link to="/bootcamps">
            <Button className="bg-[#FF5F5F] hover:bg-[#FF5F5F]/90 text-white px-8 py-6 text-lg font-jetbrains group shadow-lg transform hover:scale-105 transition-all">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </SkillPageLayout>
  );
};

export default PublicSpeaking;