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
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { stat: "500+", label: "Startups Launched", color: "bg-blue-500" },
              { stat: "₹2Cr+", label: "Funding Raised", color: "bg-green-500" },
              { stat: "50+", label: "Mentors", color: "bg-purple-500" }
            ].map((item) => (
              <div className={`${item.color} text-white p-4 rounded-lg text-center transform hover:scale-105 transition-transform`}>
                <div className="text-2xl font-bold">{item.stat}</div>
                <div className="text-sm">{item.label}</div>
              </div>
            ))}
          </div>
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
      <div className="mt-8 text-center">
        <a href="https://drive.google.com/your-entrepreneurship-link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-maximally-blue text-white font-press-start rounded-lg hover:bg-maximally-blue/80 transition-colors">
          View Full Curriculum
        </a>
      </div>
    </SkillPageLayout>
  );
};

export default Entrepreneurship;