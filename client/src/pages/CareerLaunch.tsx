import { GraduationCap, FileText, Users, Briefcase, Network, Star, ArrowRight, MessageSquare } from "lucide-react";
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

const CareerLaunch = () => {
  return (
    <SkillPageLayout
      title="Career Launch"
      icon={<GraduationCap className="h-10 w-10 text-white" />}
      iconBgColor="bg-[#4D89FF]"
      tagline="Future-proof your career."
      skillName="Career Builders"
      communityType="discord"
      communityLink="https://discord.gg/maximally-careers"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="font-press-start text-4xl md:text-5xl gradient-text-career animate-glow">
            Build Your Dream Career
          </h1>
          <p className="font-jetbrains text-xl text-maximally-black/80 max-w-2xl mx-auto">
            Create your <span className="text-[#FFD700] font-bold">future-ready</span> career roadmap. Master the skills that make you <span className="text-[#00CED1] font-bold">stand out</span>.
          </p>
          <Link to="/bootcamps">
            <Button className="bg-[#4D89FF] hover:bg-[#4D89FF]/90 text-white px-8 py-6 text-lg font-jetbrains group shadow-xl transform hover:scale-105 transition-all">
              Launch Your Career
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="pixel-border hover:translate-y-[-4px] transition-transform">
            <CardHeader>
              <FileText className="h-8 w-8 text-maximally-blue mb-2" />
              <CardTitle>Resume Building</CardTitle>
              <CardDescription>Create a professional resume that highlights your experiences, skills, and potential.</CardDescription>
            </CardHeader>
          </Card>

          <Card className="pixel-border hover:translate-y-[-4px] transition-transform">
            <CardHeader>
              <MessageSquare className="h-8 w-8 text-maximally-blue mb-2" />
              <CardTitle>Interview Preparation</CardTitle>
              <CardDescription>Master the art of interviews with practical techniques and real-world scenarios.</CardDescription>
            </CardHeader>
          </Card>

          <Card className="pixel-border hover:translate-y-[-4px] transition-transform">
            <CardHeader>
              <Briefcase className="h-8 w-8 text-maximally-blue mb-2" />
              <CardTitle>Portfolio Development</CardTitle>
              <CardDescription>Build a standout portfolio that demonstrates your projects and capabilities.</CardDescription>
            </CardHeader>
          </Card>

          <Card className="pixel-border hover:translate-y-[-4px] transition-transform">
            <CardHeader>
              <Network className="h-8 w-8 text-maximally-blue mb-2" />
              <CardTitle>Networking Skills</CardTitle>
              <CardDescription>Learn to build meaningful connections and relationships in professional settings.</CardDescription>
            </CardHeader>
          </Card>

          <Card className="pixel-border hover:translate-y-[-4px] transition-transform">
            <CardHeader>
              <Users className="h-8 w-8 text-maximally-blue mb-2" />
              <CardTitle>Professional Communication</CardTitle>
              <CardDescription>Master the art of effective communication in professional environments.</CardDescription>
            </CardHeader>
          </Card>

          <Card className="pixel-border hover:translate-y-[-4px] transition-transform">
            <CardHeader>
              <Star className="h-8 w-8 text-maximally-blue mb-2" />
              <CardTitle>Personal Branding</CardTitle>
              <CardDescription>Create a unique personal brand that makes you memorable in competitive environments.</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h2 className="font-press-start text-2xl gradient-text-career">Ready to Level Up?</h2>
          <Link to="/bootcamps">
            <Button className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-black px-8 py-6 text-lg font-jetbrains group shadow-xl transform hover:scale-105 transition-all">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </SkillPageLayout>
  );
};

export default CareerLaunch;