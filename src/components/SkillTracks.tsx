
import { Link } from "react-router-dom";
import { 
  Megaphone, 
  Target, 
  Cpu, 
  Database, 
  Video,
  Briefcase 
} from "lucide-react";

const tracks = [
  {
    title: "Public Speaking & MUN",
    description: "Master public speaking, debate, and Model UN skills",
    icon: <Megaphone className="h-6 w-6" />,
    link: "/public-speaking",
    bgColor: "bg-maximally-red"
  },
  {
    title: "Entrepreneurship",
    description: "Learn to build and launch your own startup",
    icon: <Target className="h-6 w-6" />,
    link: "/entrepreneurship",
    bgColor: "bg-maximally-blue"
  },
  {
    title: "Digital Marketing",
    description: "Master social media and digital marketing strategies",
    icon: <Cpu className="h-6 w-6" />,
    link: "/digital-marketing",
    bgColor: "bg-maximally-black"
  },
  {
    title: "No-Code & AI",
    description: "Build powerful applications without coding",
    icon: <Database className="h-6 w-6" />,
    link: "/no-code-ai",
    bgColor: "bg-maximally-blue"
  },
  {
    title: "Video Editing",
    description: "Create engaging content for social media",
    icon: <Video className="h-6 w-6" />,
    link: "/video-editing",
    bgColor: "bg-maximally-red"
  },
  {
    title: "Career Launchpad",
    description: "Launch your future with expert guidance",
    icon: <Briefcase className="h-6 w-6" />,
    link: "/career-launch",
    bgColor: "bg-maximally-black"
  }
];

const SkillTracks = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-press-start text-center text-maximally-black mb-4">
          Choose Your Power
        </h2>
        <p className="text-center font-jetbrains text-maximally-black/70 mb-12">
          Select your track and begin your journey to excellence
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <Link 
              key={index}
              to={track.link}
              className="block group"
            >
              <div className="pixel-border bg-white p-6 h-full transition-transform transform hover:-translate-y-1">
                <div className={`w-12 h-12 ${track.bgColor} pixel-border flex items-center justify-center mb-4`}>
                  {track.icon}
                </div>
                <h3 className="font-press-start text-lg text-maximally-black mb-2">
                  {track.title}
                </h3>
                <p className="font-jetbrains text-maximally-black/70">
                  {track.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillTracks;
