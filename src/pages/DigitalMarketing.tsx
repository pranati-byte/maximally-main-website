import { Link } from "react-router-dom";
import { Target, ArrowRight, Check, Instagram, Youtube, BarChart, Users, Star, Zap } from "lucide-react";
import SkillPageLayout from "@/components/SkillPageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DigitalMarketing = () => {
  return (
    <SkillPageLayout
      title="Digital Marketing"
      icon={<Target className="h-10 w-10 text-white" />}
      iconBgColor="bg-[#FF5F5F]"
      tagline="Master the Art of Digital Growth"
      skillName="Marketers"
      communityType="discord"
      communityLink="https://discord.gg/maximally-marketers"
    >
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="font-press-start text-4xl md:text-5xl gradient-text-marketing">
            Level Up Your Digital Game
          </h1>
          <p className="font-jetbrains text-xl text-maximally-black/80 max-w-2xl mx-auto">
            Learn to create viral content, build engaged communities, and master modern <span className="text-[#FF5F5F] font-bold">SEO</span> and <span className="text-[#4D89FF] font-bold">social media</span> strategies.
          </p>
          <Link to="/bootcamps">
            <Button className="bg-[#32CD32] hover:bg-[#32CD32]/90 text-white px-8 py-6 text-lg font-jetbrains group">
              Join Next Cohort
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 gap-6 mb-16">
          <Card className="p-6 hover-lift glow-effect gradient-bg-red">
            <h3 className="font-press-start text-xl mb-3 text-maximally-black flex items-center gap-2">
              <Instagram className="h-5 w-5" /> Social Media Mastery
            </h3>
            <p className="font-jetbrains text-maximally-black/80">
              Master the art of <span className="text-[#4D89FF] font-bold">content strategy</span> across Instagram, YouTube, and emerging platforms. Create engagement that converts.
            </p>
          </Card>

          <Card className="p-6 hover-lift glow-effect gradient-bg-blue">
            <h3 className="font-press-start text-xl mb-3 text-maximally-black flex items-center gap-2">
              <Youtube className="h-5 w-5" /> Content Creation Lab
            </h3>
            <p className="font-jetbrains text-maximally-black/80">
              Build <span className="text-[#FFA500] font-bold">viral-worthy content</span> that stops thumbs. Master reels, stories, and posts that resonate with Gen Z.
            </p>
          </Card>

          <Card className="p-6 hover-lift glow-effect gradient-bg-green">
            <h3 className="font-press-start text-xl mb-3 text-maximally-black flex items-center gap-2">
              <BarChart className="h-5 w-5" /> Analytics & Growth
            </h3>
            <p className="font-jetbrains text-maximally-black/80">
              Learn to read and leverage <span className="text-[#32CD32] font-bold">data insights</span> to optimize your content strategy and drive real results.
            </p>
          </Card>

          <Card className="p-6 hover-lift glow-effect gradient-bg-orange">
            <h3 className="font-press-start text-xl mb-3 text-maximally-black flex items-center gap-2">
              <Zap className="h-5 w-5" /> Digital Ad Campaigns
            </h3>
            <p className="font-jetbrains text-maximally-black/80">
              Create and optimize <span className="text-[#FF5F5F] font-bold">ad campaigns</span> that convert. Master paid social media marketing fundamentals.
            </p>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="font-press-start text-2xl mb-6 text-maximally-black">Skills You'll Master</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Create viral social media content",
              "Build effective marketing funnels",
              "Master SEO fundamentals",
              "Design high-converting campaigns",
              "Analyze marketing metrics",
              "Create content calendars",
              "Run influencer campaigns",
              "Build community engagement"
            ].map((skill, index) => (
              <div key={index} className="flex items-center gap-3 font-jetbrains text-maximally-black/80">
                <Check className="h-5 w-5 text-[#32CD32] flex-shrink-0" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="font-press-start text-2xl mb-6 text-maximally-black">FAQ</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-press-start text-lg">
                Do I need prior marketing experience?
              </AccordionTrigger>
              <AccordionContent className="font-jetbrains">
                Not at all! We start from the basics and build up to advanced strategies. Your enthusiasm is all you need!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-press-start text-lg">
                Will I work on real campaigns?
              </AccordionTrigger>
              <AccordionContent className="font-jetbrains">
                Yes! You'll create actual social media campaigns, content strategies, and marketing plans that you can showcase in your portfolio.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/bootcamps">
            <Button className="bg-[#FF5F5F] hover:bg-[#FF5F5F]/90 text-white px-8 py-6 text-lg font-jetbrains group">
              Start Your Marketing Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </SkillPageLayout>
  );
};

export default DigitalMarketing;