import { Cpu, TrendingUp, BarChart, Instagram, Zap, Target } from "lucide-react";
import SkillPageLayout from "@/components/SkillPageLayout";
import ProgramFeatures from "@/components/ProgramFeatures";
import SkillTestimonial from "@/components/SkillTestimonial";

const features = [
  {
    title: "Social Media Strategy",
    description: "Learn to build effective strategies across Instagram, YouTube, and emerging platforms."
  },
  {
    title: "Content Creation",
    description: "Master creating engaging posts, reels, and stories that capture attention."
  },
  {
    title: "Community Building",
    description: "Develop techniques to grow and nurture online communities around brands."
  },
  {
    title: "Analytics & Insights",
    description: "Understand key metrics and use data to optimize your content performance."
  },
  {
    title: "Influencer Marketing",
    description: "Learn to collaborate with influencers and build your own personal brand."
  },
  {
    title: "Digital Ad Campaigns",
    description: "Create and manage effective ad campaigns across social platforms."
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
        title="Digital Marketing Course | Maximally"
        description="Learn digital marketing through hands-on projects. Master social media, content creation, analytics, and campaign management."
        canonicalUrl="/digital-marketing"
        structuredData={structuredData}
      />
    <SkillPageLayout
      title="Digital Marketing"
      icon={<Cpu className="h-10 w-10 text-white" />}
      iconBgColor="bg-maximally-black"
      tagline="Build your brand. Grow your audience."
      skillName="Marketers"
      communityType="discord"
      communityLink="https://discord.gg/maximally-marketers"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ProgramFeatures features={features} />
          <SkillTestimonial
            quote="The digital marketing program helped me grow my art page from 200 to over 5,000 followers in just 3 months. The strategies they teach actually work!"
            author="Rohan Kapoor"
            handle="@rohan_creates"
            achievement="5K+ followers on Instagram"
          />
        </div>
        <div className="lg:col-span-1">
          <div className="pixel-border p-6 bg-white mb-6">
            <h3 className="font-press-start text-lg mb-4 text-maximally-black">Program Highlights</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Instagram className="h-5 w-5 text-maximally-black mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">Platform-specific strategies</span>
              </li>
              <li className="flex">
                <TrendingUp className="h-5 w-5 text-maximally-black mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">Real-time growth experiments</span>
              </li>
              <li className="flex">
                <BarChart className="h-5 w-5 text-maximally-black mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">Analytics deep dives</span>
              </li>
              <li className="flex">
                <Zap className="h-5 w-5 text-maximally-black mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">Case studies & success stories</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SkillPageLayout>
  );
};

export default DigitalMarketing;