
import { Megaphone, Mic, Globe, Award, BookOpen, UserCheck } from "lucide-react";
import SkillPageLayout from "@/components/SkillPageLayout";
import ProgramFeatures from "@/components/ProgramFeatures";
import UpcomingEvents from "@/components/UpcomingEvents";
import SkillTestimonial from "@/components/SkillTestimonial";

const features = [
  {
    title: "Speech Structure",
    description: "Learn how to organize your thoughts into compelling narratives with clear beginnings, middles, and ends."
  },
  {
    title: "Vocal Techniques",
    description: "Master volume, pace, pitch, and tone to captivate audiences and emphasize key points."
  },
  {
    title: "Body Language",
    description: "Develop confident posture, purposeful movement, and effective gestures to enhance your message."
  },
  {
    title: "Debate Skills",
    description: "Learn argumentation, rebuttal techniques, and how to think on your feet under pressure."
  },
  {
    title: "MUN Protocols",
    description: "Understand the rules, procedures, and diplomatic language used in Model United Nations conferences."
  },
  {
    title: "Audience Management",
    description: "Handle Q&A sessions, engage with diverse audiences, and adapt your message for different contexts."
  }
];

const events = [
  {
    title: "Public Speaking Intensive",
    date: "April 28-30, 2025",
    time: "5:00 PM - 7:00 PM",
    price: "₹1,499",
    isPopular: true
  },
  {
    title: "Mini-MUN Conference",
    date: "May 20-21, 2025",
    time: "9:00 AM - 5:00 PM",
    price: "₹2,499"
  }
];

const PublicSpeaking = () => {
  return (
    <SkillPageLayout
      title="Public Speaking & MUN"
      icon={<Megaphone className="h-10 w-10 text-white" />}
      iconBgColor="bg-maximally-red"
      tagline="Find your voice. Change the world."
      skillName="Speakers"
      communityType="whatsapp"
      communityLink="https://chat.whatsapp.com/maximally-speakers"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ProgramFeatures features={features} />
          
          <SkillTestimonial
            quote="I went from being terrified of speaking in class to winning Best Delegate at my first MUN conference. The coaches at Maximally pushed me to grow while making the process fun!"
            author="Priya Sharma"
            handle="@priya_speaks"
            achievement="Best Delegate - HMUN India 2024"
          />
          
          <UpcomingEvents events={events} />
        </div>
        
        <div className="lg:col-span-1">
          <div className="pixel-border p-6 bg-white mb-6">
            <h3 className="font-press-start text-lg mb-4 text-maximally-black">Program Highlights</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Mic className="h-5 w-5 text-maximally-red mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">Weekly speech workshops</span>
              </li>
              <li className="flex">
                <Globe className="h-5 w-5 text-maximally-red mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">MUN conference preparation</span>
              </li>
              <li className="flex">
                <Award className="h-5 w-5 text-maximally-red mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">In-house competitions with prizes</span>
              </li>
              <li className="flex">
                <UserCheck className="h-5 w-5 text-maximally-red mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">1:1 coaching & personalized feedback</span>
              </li>
            </ul>
          </div>
          
          <div className="pixel-border overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
              alt="Teen speaking at podium" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </SkillPageLayout>
  );
};

export default PublicSpeaking;
