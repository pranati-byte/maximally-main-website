
import { Video, Film, Play, Scissors, Camera, Monitor, TrendingUp, Trophy } from "lucide-react";
import SkillPageLayout from "@/components/SkillPageLayout";
import ProgramFeatures from "@/components/ProgramFeatures";
import UpcomingEvents from "@/components/UpcomingEvents";
import SkillTestimonial from "@/components/SkillTestimonial";
import SEO from "@/components/SEO";

const features = [
  {
    title: "Pro Editing Techniques",
    description: "Master advanced transitions, effects, and professional post-production workflows in Premier Pro and DaVinci Resolve."
  },
  {
    title: "Viral Content Creation",
    description: "Learn the secrets of creating engaging short-form content for Instagram Reels, YouTube Shorts, and TikTok."
  },
  {
    title: "Motion Graphics & VFX",
    description: "Create stunning animations, text effects, and visual effects using After Effects and Motion Graphics templates."
  },
  {
    title: "Color Grading Mastery",
    description: "Develop professional color grading skills to enhance mood and visual aesthetics in your videos."
  },
  {
    title: "Audio Production",
    description: "Master audio editing, sound design, music selection, and voice-over techniques for professional sound quality."
  },
  {
    title: "Content Strategy",
    description: "Build a content strategy that grows your audience and maximizes engagement across platforms."
  }
];

const events = [
  {
    title: "Advanced Video Editing Masterclass",
    date: "May 25-26, 2025",
    time: "2:00 PM - 6:00 PM",
    price: "₹2,499",
    isPopular: true
  },
  {
    title: "Viral Video Creation Workshop",
    date: "June 15, 2025",
    time: "11:00 AM - 3:00 PM",
    price: "₹1,499"
  }
];

const VideoEditing = () => {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Course",
    "name": "Video Editing",
    "description": "Master video editing with hands-on training in professional tools and techniques.",
    "provider": {
      "@type": "Organization",
      "name": "Maximally",
      "url": "https://maximally.in"
    }
  };

  return (
    <>
      <SEO 
        title="Video Editing Course | Maximally"
        description="Transform your creativity into professional video content. Learn advanced editing, motion graphics, and content strategy."
        canonicalUrl="/video-editing"
        structuredData={structuredData}
      />
      <SkillPageLayout
        title="Video Editing"
        icon={<Video className="h-10 w-10 text-white" />}
        iconBgColor="bg-maximally-red"
        tagline="Create content that captures attention. Build your creator empire."
        skillName="Creators"
        communityType="discord"
        communityLink="https://discord.gg/maximally-creators"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProgramFeatures features={features} />
            
            <div className="mb-12">
              <h2 className="font-press-start text-2xl mb-6 text-maximally-black">Creator Success Stories</h2>
              <div className="space-y-6">
                <SkillTestimonial
                  quote="The editing techniques I learned helped me grow my YouTube channel from 100 to 100K subscribers in just 8 months!"
                  author="Rahul Sharma"
                  handle="@rahul_creates"
                  achievement="100K YouTube Subscribers"
                />
                <SkillTestimonial
                  quote="My Instagram reels now consistently get 1M+ views thanks to the content strategy and editing skills I developed here."
                  author="Priya Patel"
                  handle="@priya_reels"
                  achievement="1M+ Views per Reel"
                />
              </div>
            </div>
            
            <UpcomingEvents events={events} />
          </div>
          
          <div className="lg:col-span-1">
            <div className="pixel-border p-6 bg-white mb-6">
              <h3 className="font-press-start text-lg mb-4 text-maximally-black">Program Highlights</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <Film className="h-5 w-5 text-maximally-red mr-3 flex-shrink-0" />
                  <span className="font-jetbrains text-maximally-black/80">Pro editing software mastery</span>
                </li>
                <li className="flex">
                  <TrendingUp className="h-5 w-5 text-maximally-red mr-3 flex-shrink-0" />
                  <span className="font-jetbrains text-maximally-black/80">Viral content techniques</span>
                </li>
                <li className="flex">
                  <Trophy className="h-5 w-5 text-maximally-red mr-3 flex-shrink-0" />
                  <span className="font-jetbrains text-maximally-black/80">Portfolio development</span>
                </li>
                <li className="flex">
                  <Monitor className="h-5 w-5 text-maximally-red mr-3 flex-shrink-0" />
                  <span className="font-jetbrains text-maximally-black/80">Multi-platform optimization</span>
                </li>
              </ul>
            </div>
            
            <div className="pixel-border overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1574717024453-354056afd6fc" 
                alt="Professional video editing setup"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </SkillPageLayout>
    </>
  );
};

export default VideoEditing;
