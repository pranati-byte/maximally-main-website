
import { Cpu, TrendingUp, BarChart, Instagram, Zap, Target, Globe, Users, Trophy } from "lucide-react";
import SkillPageLayout from "@/components/SkillPageLayout";
import ProgramFeatures from "@/components/ProgramFeatures";
import SkillTestimonial from "@/components/SkillTestimonial";
import SEO from "@/components/SEO";

const features = [
  {
    title: "Social Media Mastery",
    description: "Master content creation and strategy across Instagram, YouTube, LinkedIn and emerging platforms. Learn viral content frameworks and engagement techniques."
  },
  {
    title: "Performance Marketing",
    description: "Run high-converting ad campaigns on Meta, Google, and LinkedIn. Track ROI and optimize for maximum results."
  },
  {
    title: "Content Strategy",
    description: "Create content calendars, develop brand voice, and build content systems that consistently drive engagement and growth."
  },
  {
    title: "Community Building",
    description: "Transform followers into engaged community members. Learn moderation, events, and relationship building at scale."
  },
  {
    title: "Analytics & Growth",
    description: "Master data-driven decision making using Google Analytics, social insights, and growth experimentation frameworks."
  },
  {
    title: "Personal Branding",
    description: "Build your personal brand as a thought leader. Create a content engine that positions you as an industry expert."
  }
];

const DigitalMarketing = () => {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Course",
    "name": "Digital Marketing",
    "description": "Master digital marketing with hands-on experience in social media, content creation, and analytics.",
    "provider": {
      "@type": "Organization",
      "name": "Maximally",
      "url": "https://maximally.in"
    }
  };

  return (
    <>
      <SEO 
        title="Digital Marketing Mastery Program | Maximally"
        description="Transform into a digital marketing expert. Master social media, content creation, analytics, and campaign management through hands-on projects."
        canonicalUrl="/digital-marketing"
        structuredData={structuredData}
      />
      <SkillPageLayout
        title="Digital Marketing"
        icon={<Globe className="h-10 w-10 text-white" />}
        iconBgColor="bg-maximally-blue"
        tagline="Master Digital. Drive Growth. Build Brands."
        skillName="Marketers"
        communityType="discord"
        communityLink="https://discord.gg/maximally-marketers"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProgramFeatures features={features} />
            
            <div className="mb-12">
              <h2 className="font-press-start text-2xl mb-6 text-maximally-black">Success Stories</h2>
              <div className="space-y-6">
                <SkillTestimonial
                  quote="The program helped me grow my art page from 200 to 5,000+ followers in just 3 months. The strategies actually work!"
                  author="Rohan Kapoor"
                  handle="@rohan_creates"
                  achievement="5K+ Instagram Growth"
                />
                <SkillTestimonial
                  quote="Learned how to run profitable ad campaigns. Now managing a monthly budget of ₹1L+ with consistent ROAS."
                  author="Priya Shah"
                  handle="@priya.digital"
                  achievement="Digital Marketing Lead"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="pixel-border p-6 bg-white mb-6">
              <h3 className="font-press-start text-lg mb-4 text-maximally-black">Program Benefits</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <Instagram className="h-5 w-5 text-maximally-black mr-3 flex-shrink-0" />
                  <span className="font-jetbrains text-maximally-black/80">Platform-specific growth tactics</span>
                </li>
                <li className="flex">
                  <TrendingUp className="h-5 w-5 text-maximally-black mr-3 flex-shrink-0" />
                  <span className="font-jetbrains text-maximally-black/80">Real account growth projects</span>
                </li>
                <li className="flex">
                  <Users className="h-5 w-5 text-maximally-black mr-3 flex-shrink-0" />
                  <span className="font-jetbrains text-maximally-black/80">Network with industry experts</span>
                </li>
                <li className="flex">
                  <Trophy className="h-5 w-5 text-maximally-black mr-3 flex-shrink-0" />
                  <span className="font-jetbrains text-maximally-black/80">Portfolio-ready campaigns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SkillPageLayout>
    </>
  );
};

export default DigitalMarketing;
