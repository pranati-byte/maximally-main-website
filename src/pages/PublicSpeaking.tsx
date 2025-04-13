import { Megaphone, Mic, Globe, Award, BookOpen, UserCheck } from "lucide-react";
import SkillPageLayout from "@/components/SkillPageLayout";
import ProgramFeatures from "@/components/ProgramFeatures";
import SkillTestimonial from "@/components/SkillTestimonial";

const features = [
  {
    title: "Speech Mastery",
    description: "Master public speaking techniques and delivery"
  },
  {
    title: "MUN Training",
    description: "Learn Model UN protocols and debate skills"
  },
  {
    title: "Leadership Skills",
    description: "Develop confidence and presence"
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
            quote="From shy to confident, the transformation was incredible!"
            author="Priya Sharma"
            handle="@priya_speaks"
            achievement="Best Delegate - HMUN 2024"
          />
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
        </div>
      </div>
    </SkillPageLayout>
  );
};

export default PublicSpeaking;