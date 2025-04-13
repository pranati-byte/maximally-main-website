
import { Megaphone, Mic, Globe, Award, BookOpen, UserCheck, Trophy, Target, Users, PresentationChart } from "lucide-react";
import SkillPageLayout from "@/components/SkillPageLayout";
import ProgramFeatures from "@/components/ProgramFeatures";
import SkillTestimonial from "@/components/SkillTestimonial";

const features = [
  {
    title: "Speech Mastery",
    description: "Master advanced public speaking techniques, body language, voice modulation, and delivery methods to captivate any audience."
  },
  {
    title: "MUN Training",
    description: "Comprehensive training in Model UN protocols, international relations, debate techniques, and diplomatic communication."
  },
  {
    title: "Leadership Development",
    description: "Build confidence, executive presence, and the ability to inspire and influence others through powerful communication."
  },
  {
    title: "Debate Skills",
    description: "Learn structured argumentation, critical thinking, and persuasive speaking techniques for competitive debates."
  },
  {
    title: "Stage Presence",
    description: "Develop compelling stage presence, audience engagement techniques, and performance skills."
  },
  {
    title: "Crisis Management",
    description: "Master impromptu speaking, crisis communication, and quick thinking under pressure."
  }
];

const upcomingEvents = [
  {
    title: "Advanced MUN Training Camp",
    date: "April 20-21, 2025",
    time: "10:00 AM - 4:00 PM",
    price: "₹3,999",
    isPopular: true
  },
  {
    title: "Public Speaking Intensive",
    date: "May 5, 2025",
    time: "2:00 PM - 6:00 PM",
    price: "₹2,499"
  }
];

const PublicSpeaking = () => {
  return (
    <SkillPageLayout
      title="Public Speaking & MUN"
      icon={<Megaphone className="h-10 w-10 text-white" />}
      iconBgColor="bg-maximally-red"
      tagline="Master the art of powerful communication. Become a confident speaker and influential leader."
      skillName="Speakers"
      communityType="whatsapp"
      communityLink="https://chat.whatsapp.com/maximally-speakers"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-12">
            <h2 className="font-press-start text-2xl mb-6 text-maximally-black">Program Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="pixel-border p-4 bg-white text-center hover:shadow-lg transition-all">
                <Trophy className="h-8 w-8 text-maximally-red mx-auto mb-3" />
                <h3 className="font-press-start text-3xl mb-2">50+</h3>
                <p className="font-jetbrains text-sm">Competition Wins</p>
              </div>
              <div className="pixel-border p-4 bg-white text-center hover:shadow-lg transition-all">
                <Target className="h-8 w-8 text-maximally-red mx-auto mb-3" />
                <h3 className="font-press-start text-3xl mb-2">95%</h3>
                <p className="font-jetbrains text-sm">Success Rate</p>
              </div>
              <div className="pixel-border p-4 bg-white text-center hover:shadow-lg transition-all">
                <Users className="h-8 w-8 text-maximally-red mx-auto mb-3" />
                <h3 className="font-press-start text-3xl mb-2">1000+</h3>
                <p className="font-jetbrains text-sm">Students Trained</p>
              </div>
            </div>
          </div>

          <ProgramFeatures features={features} />

          <div className="mb-12">
            <h2 className="font-press-start text-2xl mb-6 text-maximally-black">Student Achievements</h2>
            <div className="space-y-6">
              <SkillTestimonial
                quote="From being afraid to speak in public to winning Best Delegate at HMUN - this program transformed my life!"
                author="Priya Sharma"
                handle="@priya_speaks"
                achievement="Best Delegate - HMUN 2024"
              />
              <SkillTestimonial
                quote="The MUN training here is world-class. I've won multiple international conferences thanks to the skills I learned."
                author="Arjun Mehta"
                handle="@arjun_delegate"
                achievement="Outstanding Delegate - WMUN 2024"
              />
            </div>
          </div>
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
                <span className="font-jetbrains text-maximally-black/80">Monthly competitions</span>
              </li>
              <li className="flex">
                <UserCheck className="h-5 w-5 text-maximally-red mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">1:1 coaching sessions</span>
              </li>
              <li className="flex">
                <PresentationChart className="h-5 w-5 text-maximally-red mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">Recorded feedback analysis</span>
              </li>
            </ul>
          </div>

          <div className="pixel-border p-6 bg-white mb-6">
            <h3 className="font-press-start text-lg mb-4 text-maximally-black">Upcoming Events</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-press-start text-sm mb-2">{event.title}</h4>
                  <p className="font-jetbrains text-sm text-maximally-black/70">{event.date}</p>
                  <p className="font-jetbrains text-sm text-maximally-black/70">{event.time}</p>
                  <p className="font-press-start text-sm text-maximally-red mt-2">{event.price}</p>
                  {event.isPopular && (
                    <span className="inline-block bg-maximally-red text-white text-xs px-2 py-1 rounded mt-2">
                      Popular
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SkillPageLayout>
  );
};

export default PublicSpeaking;
