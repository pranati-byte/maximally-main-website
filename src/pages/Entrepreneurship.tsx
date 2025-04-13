
import { Target, Lightbulb, Users, TrendingUp, PieChart, Award, Rocket } from "lucide-react";
import SkillPageLayout from "@/components/SkillPageLayout";
import ProgramFeatures from "@/components/ProgramFeatures";
import UpcomingEvents from "@/components/UpcomingEvents";
import SkillTestimonial from "@/components/SkillTestimonial";

const features = [
  {
    title: "Business Fundamentals",
    description: "Master core business concepts including market analysis, financial planning, and business model development. Learn to identify opportunities and validate ideas."
  },
  {
    title: "Startup Strategy",
    description: "Develop comprehensive business plans, learn fundraising strategies, and create compelling pitch decks that attract investors."
  },
  {
    title: "Product Development",
    description: "Build and validate MVPs, conduct user research, and iterate based on market feedback using lean startup methodology."
  },
  {
    title: "Growth & Marketing",
    description: "Learn customer acquisition strategies, digital marketing fundamentals, and how to scale your startup effectively."
  },
  {
    title: "Leadership Skills",
    description: "Develop team management abilities, decision-making skills, and learn to build and lead high-performing startup teams."
  },
  {
    title: "Networking",
    description: "Connect with successful founders, mentors, and potential investors through our extensive entrepreneurship network."
  }
];

const events = [
  {
    title: "Startup Weekend Intensive",
    date: "May 15-16, 2025",
    time: "9:00 AM - 6:00 PM",
    price: "₹4,999",
    isPopular: true
  },
  {
    title: "Pitch Perfect Workshop",
    date: "June 1, 2025",
    time: "2:00 PM - 5:00 PM",
    price: "₹1,999"
  }
];

const Entrepreneurship = () => {
  return (
    <SkillPageLayout
      title="Entrepreneurship"
      icon={<Target className="h-10 w-10 text-white" />}
      iconBgColor="bg-maximally-blue"
      tagline="Transform your ideas into successful ventures. Learn from experienced founders and build your dream startup."
      skillName="Founders"
      communityType="discord"
      communityLink="https://discord.gg/maximally-founders"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-12">
            <h2 className="font-press-start text-2xl mb-6 text-maximally-black">Why Choose Our Program?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pixel-border p-4 bg-white hover:shadow-lg transition-all">
                <Lightbulb className="h-8 w-8 text-maximally-blue mb-3" />
                <h3 className="font-press-start text-lg mb-2">Hands-on Learning</h3>
                <p className="font-jetbrains text-sm">Build real projects and get practical experience in entrepreneurship</p>
              </div>
              <div className="pixel-border p-4 bg-white hover:shadow-lg transition-all">
                <Users className="h-8 w-8 text-maximally-blue mb-3" />
                <h3 className="font-press-start text-lg mb-2">Expert Mentorship</h3>
                <p className="font-jetbrains text-sm">Learn from successful founders and industry experts</p>
              </div>
            </div>
          </div>

          <ProgramFeatures features={features} />
          
          <div className="mb-12">
            <h2 className="font-press-start text-2xl mb-6 text-maximally-black">Success Stories</h2>
            <div className="space-y-6">
              <SkillTestimonial
                quote="The mentorship and community support helped me launch my first successful venture! The practical approach to learning made all the difference."
                author="Rahul Sharma"
                handle="@rahul_builds"
                achievement="Founder of TechStart"
              />
              <SkillTestimonial
                quote="From idea to profitable business in 6 months - the program gave me all the tools I needed to succeed."
                author="Priya Mehta"
                handle="@priya_ventures"
                achievement="CEO of EduTech Solutions"
              />
            </div>
          </div>

          <UpcomingEvents events={events} />
        </div>

        <div className="lg:col-span-1">
          <div className="pixel-border p-6 bg-white mb-6">
            <h3 className="font-press-start text-lg mb-4 text-maximally-black">Program Benefits</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Rocket className="h-5 w-5 text-maximally-blue mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">Launch your startup in 12 weeks</span>
              </li>
              <li className="flex">
                <TrendingUp className="h-5 w-5 text-maximally-blue mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">Growth strategy mentoring</span>
              </li>
              <li className="flex">
                <PieChart className="h-5 w-5 text-maximally-blue mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">Financial modeling support</span>
              </li>
              <li className="flex">
                <Award className="h-5 w-5 text-maximally-blue mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">Pitch competition opportunities</span>
              </li>
            </ul>
          </div>

          <div className="pixel-border p-6 bg-white">
            <h3 className="font-press-start text-lg mb-4 text-maximally-black">What You'll Build</h3>
            <div className="space-y-3">
              <p className="font-jetbrains text-sm text-maximally-black/80">• Business Model Canvas</p>
              <p className="font-jetbrains text-sm text-maximally-black/80">• Financial Projections</p>
              <p className="font-jetbrains text-sm text-maximally-black/80">• Pitch Deck</p>
              <p className="font-jetbrains text-sm text-maximally-black/80">• MVP</p>
              <p className="font-jetbrains text-sm text-maximally-black/80">• Marketing Strategy</p>
            </div>
          </div>
        </div>
      </div>
    </SkillPageLayout>
  );
};

export default Entrepreneurship;
