
import { Briefcase, GraduationCap, FileText, Users, Star, Target, Award, Rocket } from "lucide-react";
import SkillPageLayout from "@/components/SkillPageLayout";
import ProgramFeatures from "@/components/ProgramFeatures";
import UpcomingEvents from "@/components/UpcomingEvents";
import SkillTestimonial from "@/components/SkillTestimonial";
import SEO from "@/components/SEO";

const features = [
  {
    title: "College Application Strategy",
    description: "Create standout applications for top universities. Master essays, interviews, and build impressive portfolios."
  },
  {
    title: "Internship Success",
    description: "Land prestigious internships through targeted resume building, networking, and interview preparation."
  },
  {
    title: "Professional Development",
    description: "Develop crucial workplace skills including communication, leadership, and project management."
  },
  {
    title: "Career Discovery",
    description: "Explore career paths through industry mentorship, job shadowing, and hands-on projects."
  },
  {
    title: "Personal Brand Building",
    description: "Create a compelling personal brand across LinkedIn and professional platforms."
  },
  {
    title: "Tech Career Preparation",
    description: "Master technical interviews, build project portfolios, and prepare for tech industry roles."
  }
];

const events = [
  {
    title: "College Application Workshop",
    date: "May 22-23, 2025",
    time: "4:00 PM - 6:00 PM",
    price: "₹1,499",
    isPopular: true
  },
  {
    title: "Summer Internship Bootcamp",
    date: "April 27, 2025",
    time: "10:00 AM - 2:00 PM",
    price: "₹999"
  }
];

const CareerLaunch = () => {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Course",
    "name": "Career Launchpad",
    "description": "Comprehensive career preparation program for high school and college students.",
    "provider": {
      "@type": "Organization",
      "name": "Maximally",
      "url": "https://maximally.in"
    }
  };

  return (
    <>
      <SEO 
        title="Career Launchpad Program | Maximally"
        description="Launch your dream career. Master college applications, internships, and professional development."
        canonicalUrl="/career-launch"
        structuredData={structuredData}
      />
      <SkillPageLayout
        title="Career Launchpad"
        icon={<Rocket className="h-10 w-10 text-white" />}
        iconBgColor="bg-maximally-red"
        tagline="Launch Your Future. Land Dream Opportunities."
        skillName="Career Squad"
        communityType="whatsapp"
        communityLink="https://chat.whatsapp.com/maximally-careers"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProgramFeatures features={features} />
            
            <div className="mb-12">
              <h2 className="font-press-start text-2xl mb-6 text-maximally-black">Success Stories</h2>
              <div className="space-y-6">
                <SkillTestimonial
                  quote="Got accepted into my dream college with a full scholarship! The application guidance was invaluable."
                  author="Aarav Mehta"
                  handle="@aarav_m"
                  achievement="Full Scholarship Winner"
                />
                <SkillTestimonial
                  quote="Landed a product management internship at Microsoft as a high school student. The interview prep made all the difference!"
                  author="Zara Khan"
                  handle="@zara.tech"
                  achievement="Microsoft Intern"
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
                  <Target className="h-5 w-5 text-maximally-black mr-3 flex-shrink-0" />
                  <span className="font-jetbrains text-maximally-black/80">Personalized guidance</span>
                </li>
                <li className="flex">
                  <Users className="h-5 w-5 text-maximally-black mr-3 flex-shrink-0" />
                  <span className="font-jetbrains text-maximally-black/80">Industry mentorship</span>
                </li>
                <li className="flex">
                  <Star className="h-5 w-5 text-maximally-black mr-3 flex-shrink-0" />
                  <span className="font-jetbrains text-maximally-black/80">Placement support</span>
                </li>
                <li className="flex">
                  <Award className="h-5 w-5 text-maximally-black mr-3 flex-shrink-0" />
                  <span className="font-jetbrains text-maximally-black/80">Career certifications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SkillPageLayout>
    </>
  );
};

export default CareerLaunch;
