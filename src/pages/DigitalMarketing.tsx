
import { Link } from "react-router-dom";
import { Target, ArrowRight, Check, Instagram, Youtube, Users, BarChart, Star, MessageCircle } from "lucide-react";
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
      iconBgColor="bg-maximally-green"
      tagline="Build your brand. Grow your audience."
      skillName="Marketers"
      communityType="discord"
      communityLink="https://discord.gg/maximally-marketers"
    >
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="font-press-start text-4xl md:text-5xl text-maximally-black">
            Become a Digital Marketing Expert
          </h1>
          <p className="font-jetbrains text-xl text-maximally-black/80 max-w-2xl mx-auto">
            Learn to create viral content, build engaged communities, and master the platforms that shape today's digital landscape.
          </p>
          <Link to="/bootcamps">
            <Button className="bg-maximally-green hover:bg-maximally-green/90 text-white px-8 py-6 text-lg font-jetbrains group">
              Join Next Cohort
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Modules Section */}
        <div className="grid grid-cols-1 gap-6 mb-16">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-press-start text-xl mb-3 text-maximally-black flex items-center gap-2">
              <Instagram className="h-5 w-5" /> Social Media Strategy
            </h3>
            <p className="font-jetbrains text-maximally-black/80 mb-4">
              Decode what makes content go viral on Instagram, YouTube, and emerging platforms. Learn to craft strategies that build real engagement, not just followers.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-press-start text-xl mb-3 text-maximally-black flex items-center gap-2">
              <Youtube className="h-5 w-5" /> Content Creation
            </h3>
            <p className="font-jetbrains text-maximally-black/80 mb-4">
              Create thumb-stopping content that gets noticed. Master the art of storytelling through reels, stories, and posts that resonate with Gen Z audiences.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-press-start text-xl mb-3 text-maximally-black flex items-center gap-2">
              <Users className="h-5 w-5" /> Community Building
            </h3>
            <p className="font-jetbrains text-maximally-black/80 mb-4">
              Build and nurture engaged online communities. Learn proven techniques for growing your tribe and keeping them actively involved.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-press-start text-xl mb-3 text-maximally-black flex items-center gap-2">
              <BarChart className="h-5 w-5" /> Analytics & Insights
            </h3>
            <p className="font-jetbrains text-maximally-black/80 mb-4">
              Turn data into decisions. Learn to read metrics that matter and use insights to continuously improve your content strategy.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-press-start text-xl mb-3 text-maximally-black flex items-center gap-2">
              <Star className="h-5 w-5" /> Influencer Marketing
            </h3>
            <p className="font-jetbrains text-maximally-black/80 mb-4">
              Learn the art of influencer collaborations and build your own personal brand that stands out in a crowded digital space.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-press-start text-xl mb-3 text-maximally-black flex items-center gap-2">
              <MessageCircle className="h-5 w-5" /> Digital Ad Campaigns
            </h3>
            <p className="font-jetbrains text-maximally-black/80 mb-4">
              Create and optimize ad campaigns that convert. Master the fundamentals of paid social media marketing on a practical level.
            </p>
          </Card>
        </div>

        {/* What You'll Learn Section */}
        <div className="mb-16">
          <h2 className="font-press-start text-2xl mb-6 text-maximally-black">Real Skills You'll Gain</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Build a viral Instagram content strategy",
              "Create engaging reels and stories",
              "Design high-converting ad campaigns",
              "Grow an authentic following from scratch",
              "Track and analyze content performance",
              "Build your personal brand",
              "Run influencer collaborations",
              "Master social media analytics"
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
                title: "Content Creators",
                desc: "Aspiring influencers and creators looking to build a strong online presence"
              },
              {
                title: "Young Entrepreneurs",
                desc: "Startup founders who want to market their products effectively"
              },
              {
                title: "Digital Marketers",
                desc: "Future professionals aiming for careers in social media marketing"
              },
              {
                title: "Brand Builders",
                desc: "Students interested in building and growing online communities"
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
                Do I need existing social media following?
              </AccordionTrigger>
              <AccordionContent className="font-jetbrains">
                No! We'll teach you how to grow from zero. What matters is your willingness to learn and create content consistently.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-press-start text-lg">
                Will I create real campaigns?
              </AccordionTrigger>
              <AccordionContent className="font-jetbrains">
                Yes! You'll work on live projects, run actual campaigns, and build a portfolio of real digital marketing work.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-press-start text-lg">
                Can this lead to internships?
              </AccordionTrigger>
              <AccordionContent className="font-jetbrains">
                Absolutely! Many of our students have landed marketing internships using their course projects and personal brand growth as proof of their skills.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/bootcamps">
            <Button className="bg-maximally-green hover:bg-maximally-green/90 text-white px-8 py-6 text-lg font-jetbrains group">
              Reserve Your Spot
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </SkillPageLayout>
  );
};

export default DigitalMarketing;
