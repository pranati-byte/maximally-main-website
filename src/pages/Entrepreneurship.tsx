import { Target } from "lucide-react";
import SkillPageLayout from "@/components/SkillPageLayout";
import ProgramFeatures from "@/components/ProgramFeatures";
import UpcomingEvents from "@/components/UpcomingEvents";
import SkillTestimonial from "@/components/SkillTestimonial";

const features = [
  {
    title: "Business Fundamentals",
    description: "Learn core business concepts and market analysis"
  },
  {
    title: "Startup Strategy",
    description: "Develop your business model and go-to-market strategy"
  },
  {
    title: "Product Development",
    description: "Build and validate your minimum viable product"
  }
];

const events = [
  {
    title: "Startup Weekend",
    date: "May 15-16, 2025",
    time: "9:00 AM - 6:00 PM",
    price: "₹4,999",
    isPopular: true
  }
];

const Entrepreneurship = () => {
  return (
    <SkillPageLayout
      title="Entrepreneurship"
      icon={<Target className="h-10 w-10 text-white" />}
      iconBgColor="bg-maximally-blue"
      tagline="Build your own startup."
      skillName="Founders"
      communityType="discord"
      communityLink="https://discord.gg/maximally-founders"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ProgramFeatures features={features} />
          <SkillTestimonial
            quote="The mentorship and community support helped me launch my first successful venture!"
            author="Rahul Sharma"
            handle="@rahul_builds"
            achievement="Founder of TechStart"
          />
          <UpcomingEvents events={events} />
        </div>
      </div>
    </SkillPageLayout>
  );
};

export default Entrepreneurship;