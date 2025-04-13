
import { Briefcase, GraduationCap, FileText, Users, LineChart, Star } from "lucide-react";
import SkillPageLayout from "@/components/SkillPageLayout";
import ProgramFeatures from "@/components/ProgramFeatures";
import UpcomingEvents from "@/components/UpcomingEvents";
import SkillTestimonial from "@/components/SkillTestimonial";

const features = [
  {
    title: "Standout Applications",
    description: "Create compelling college and internship applications that get noticed."
  },
  {
    title: "Resume Building",
    description: "Craft professional resumes that highlight your unique strengths and experiences."
  },
  {
    title: "Interview Preparation",
    description: "Master interview techniques for college admissions, scholarships, and internships."
  },
  {
    title: "Portfolio Development",
    description: "Build an impressive portfolio that showcases your skills and projects."
  },
  {
    title: "Networking Skills",
    description: "Learn to connect with professionals and build relationships that advance your career."
  },
  {
    title: "Personal Branding",
    description: "Develop a compelling personal brand that sets you apart in competitive environments."
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
  return (
    <SkillPageLayout
      title="Career Launchpad"
      icon={<Briefcase className="h-10 w-10 text-white" />}
      iconBgColor="bg-maximally-black"
      tagline="Launch your future. Land opportunities that matter."
      skillName="Career Squad"
      communityType="whatsapp"
      communityLink="https://chat.whatsapp.com/maximally-careers"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ProgramFeatures features={features} />
          
          <SkillTestimonial
            quote="The career program helped me secure an internship at a top tech company as a high school student - something I never thought possible. Their guidance on my resume and interview prep was invaluable!"
            author="Aditya Nair"
            handle="@aditya_techie"
            achievement="Secured internship at Microsoft"
          />
          
          <UpcomingEvents events={events} />
        </div>
        
        <div className="lg:col-span-1">
          <div className="pixel-border p-6 bg-white mb-6">
            <h3 className="font-press-start text-lg mb-4 text-maximally-black">Program Highlights</h3>
            <ul className="space-y-4">
              <li className="flex">
                <GraduationCap className="h-5 w-5 text-maximally-black mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">College application strategy</span>
              </li>
              <li className="flex">
                <FileText className="h-5 w-5 text-maximally-black mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">Resume & portfolio reviews</span>
              </li>
              <li className="flex">
                <Users className="h-5 w-5 text-maximally-black mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">Mock interviews with feedback</span>
              </li>
              <li className="flex">
                <LineChart className="h-5 w-5 text-maximally-black mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">Career path exploration</span>
              </li>
            </ul>
          </div>
          
          <div className="pixel-border overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" 
              alt="Students collaborating on career planning" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </SkillPageLayout>
  );
};

export default CareerLaunch;
