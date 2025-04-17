import { Megaphone, Mic, Globe, Award, UserCheck, Check, Target, ArrowRight } from "lucide-react";
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
      iconBgColor="bg-maximally-red"
      tagline="Find your voice. Change the world."
    >
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="font-press-start text-4xl md:text-5xl gradient-text">
            Speak with Impact, Lead with Confidence
          </h1>
          <p className="font-jetbrains text-xl text-maximally-black/80 max-w-2xl mx-auto">
            From classroom to TEDx stage, master the art of influential communication. Where future leaders find their voice.
          </p>
          <Link to="/bootcamps">
            <Button className="bg-maximally-red hover:bg-maximally-red/90 text-white px-8 py-6 text-lg font-jetbrains group">
              Join Next Cohort
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Modules Section */}
        <div className="grid grid-cols-1 gap-6 mb-16">
          <Card className="p-6 hover-lift glow-effect gradient-bg">
            <h3 className="font-press-start text-xl mb-3 text-maximally-black">Speech Mastery</h3>
            <p className="font-jetbrains text-maximally-black/80 mb-4">
              Craft compelling stories, master stage presence, and learn pro techniques that turn nervous speakers into confident communicators.
            </p>
          </Card>

          <Card className="p-6 hover-lift glow-effect gradient-bg">
            <h3 className="font-press-start text-xl mb-3 text-maximally-black">MUN Training</h3>
            <p className="font-jetbrains text-maximally-black/80 mb-4">
              Navigate complex global issues, perfect diplomatic speech, and become a standout delegate at any conference.
            </p>
          </Card>

          <Card className="p-6 hover-lift glow-effect gradient-bg">
            <h3 className="font-press-start text-xl mb-3 text-maximally-black">Leadership Skills</h3>
            <p className="font-jetbrains text-maximally-black/80 mb-4">
              Develop executive presence, persuasive abilities, and the confidence to lead teams and inspire action.
            </p>
          </Card>
        </div>

        {/* What You'll Learn Section */}
        <div className="mb-16">
          <h2 className="font-press-start text-2xl mb-6 text-maximally-black">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Craft attention-grabbing speech openings",
              "Master body language and voice modulation",
              "Structure persuasive arguments",
              "Write powerful position papers",
              "Handle Q&A sessions like a pro",
              "Navigate MUN rules of procedure",
              "Build credibility with any audience",
              "Develop your signature speaking style"
            ].map((skill, index) => (
              <div key={index} className="flex items-center gap-3 font-jetbrains text-maximally-black/80">
                <Check className="h-5 w-5 text-maximally-green flex-shrink-0" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Who This Is For Section */}
        <div className="mb-16">
          <h2 className="font-press-start text-2xl mb-6 text-maximally-black">Who This Is For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Aspiring Leaders",
                desc: "Future club presidents, student body representatives, and change-makers"
              },
              {
                title: "MUN Enthusiasts",
                desc: "Students ready to excel in Model UN conferences and diplomatic debates"
              },
              {
                title: "TEDx Dreamers",
                desc: "Young innovators with ideas worth spreading to larger audiences"
              },
              {
                title: "Debate Champions",
                desc: "Competitors looking to sharpen their rhetorical and argumentative skills"
              }
            ].map((profile, index) => (
              <Card key={index} className="p-4">
                <h3 className="font-press-start text-lg mb-2 text-maximally-black">{profile.title}</h3>
                <p className="font-jetbrains text-maximally-black/80">{profile.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="font-press-start text-2xl mb-6 text-maximally-black">FAQ</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-press-start text-lg">
                How will this help my college applications?
              </AccordionTrigger>
              <AccordionContent className="font-jetbrains">
                Public speaking skills and MUN achievements significantly boost your profile, demonstrating leadership, critical thinking, and global awareness—qualities top colleges actively seek.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-press-start text-lg">
                Do I need prior speaking experience?
              </AccordionTrigger>
              <AccordionContent className="font-jetbrains">
                No prior experience needed! We start with fundamentals and gradually build your confidence through structured practice and personalized feedback.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-press-start text-lg">
                Will I get to participate in real MUN conferences?
              </AccordionTrigger>
              <AccordionContent className="font-jetbrains">
                Yes! We prepare you for and connect you with upcoming MUN conferences. Many of our students have won Best Delegate awards at prestigious conferences.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/bootcamps">
            <Button className="bg-maximally-red hover:bg-maximally-red/90 text-white px-8 py-6 text-lg font-jetbrains group">
              Reserve Your Spot
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </SkillPageLayout>
  );
};

export default PublicSpeaking;