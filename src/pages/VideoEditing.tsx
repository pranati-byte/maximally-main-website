
import { Video, Film, Play, Scissors, Camera, Monitor } from "lucide-react";
import SkillPageLayout from "@/components/SkillPageLayout";
import ProgramFeatures from "@/components/ProgramFeatures";
import UpcomingEvents from "@/components/UpcomingEvents";
import SkillTestimonial from "@/components/SkillTestimonial";

const features = [
  {
    title: "Video Editing Fundamentals",
    description: "Master the basics of cutting, trimming, transitions, and effects."
  },
  {
    title: "Storytelling Through Video",
    description: "Learn to craft compelling narratives that engage viewers from start to finish."
  },
  {
    title: "Short-Form Content",
    description: "Create thumb-stopping reels, TikToks, and YouTube Shorts optimized for engagement."
  },
  {
    title: "Motion Graphics",
    description: "Add professional animations, text effects, and visual elements to your videos."
  },
  {
    title: "Color Grading",
    description: "Develop an eye for color to enhance mood and visual appeal in your content."
  },
  {
    title: "Audio Enhancement",
    description: "Master sound design, music selection, and voice-over techniques."
  }
];

const events = [
  {
    title: "Video Editing Masterclass",
    date: "May 18-19, 2025",
    time: "2:00 PM - 5:00 PM",
    price: "₹1,799",
    isPopular: true
  },
  {
    title: "Short-Form Video Workshop",
    date: "June 15, 2025",
    time: "11:00 AM - 3:00 PM",
    price: "₹999"
  }
];

const VideoEditing = () => {
  return (
    <SkillPageLayout
      title="Video Editing"
      icon={<Video className="h-10 w-10 text-white" />}
      iconBgColor="bg-maximally-red"
      tagline="Tell stories that captivate. Create content that converts."
      skillName="Creators"
      communityType="discord"
      communityLink="https://discord.gg/maximally-creators"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ProgramFeatures features={features} />
          
          <SkillTestimonial
            quote="My YouTube channel went from 10 to 10,000 subscribers after applying the editing techniques I learned. Their mentors helped me find my style and optimize my workflow."
            author="Tanvi Desai"
            handle="@tanvi_creates"
            achievement="10K YouTube subscribers"
          />
          
          <UpcomingEvents events={events} />
        </div>
        
        <div className="lg:col-span-1">
          <div className="pixel-border p-6 bg-white mb-6">
            <h3 className="font-press-start text-lg mb-4 text-maximally-black">Program Highlights</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Film className="h-5 w-5 text-maximally-red mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">Software mastery (Premiere Pro, CapCut)</span>
              </li>
              <li className="flex">
                <Play className="h-5 w-5 text-maximally-red mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">Create portfolio-worthy projects</span>
              </li>
              <li className="flex">
                <Scissors className="h-5 w-5 text-maximally-red mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">Edit for different platforms</span>
              </li>
              <li className="flex">
                <Camera className="h-5 w-5 text-maximally-red mr-3 flex-shrink-0" />
                <span className="font-jetbrains text-maximally-black/80">Shooting tips for better editing</span>
              </li>
            </ul>
          </div>
          
          <div className="pixel-border overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1574717024453-354056afd6fc" 
              alt="Video editing workspace" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </SkillPageLayout>
  );
};

export default VideoEditing;
