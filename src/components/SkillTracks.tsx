
import { useState } from "react";
import { Briefcase, Mic2, TrendingUp, Code, Video, RocketIcon } from "lucide-react";

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const SkillCard = ({ title, description, icon, color }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`pixel-card group ${isHovered ? "bg-opacity-95 transform -translate-y-1" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`h-16 w-16 flex items-center justify-center mb-4 pixel-border ${color}`}>
        {icon}
      </div>
      
      <h3 className="font-press-start text-lg mb-3 group-hover:text-maximally-blue">
        {title}
      </h3>
      
      <p className="font-jetbrains text-maximally-black/70">
        {description}
      </p>
      
      {isHovered && (
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-maximally-red"></div>
      )}
    </div>
  );
};

const SkillTracks = () => {
  const skills = [
    {
      title: "Entrepreneurship",
      description: "Learn startup building, from ideation to product launch and customer acquisition.",
      icon: <Briefcase className="h-8 w-8 text-white" />,
      color: "bg-maximally-blue"
    },
    {
      title: "Public Speaking & MUN",
      description: "Master the art of speaking confidently and winning Model UN conferences.",
      icon: <Mic2 className="h-8 w-8 text-white" />,
      color: "bg-maximally-red"
    },
    {
      title: "Digital Marketing",
      description: "Create campaigns that convert using SEO, social media and content marketing.",
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      color: "bg-maximally-blue"
    },
    {
      title: "No-Code & AI",
      description: "Build websites, apps and AI solutions without traditional coding.",
      icon: <Code className="h-8 w-8 text-white" />,
      color: "bg-maximally-black"
    },
    {
      title: "Video Editing",
      description: "Create professional videos for social media, YouTube and marketing.",
      icon: <Video className="h-8 w-8 text-white" />,
      color: "bg-maximally-red"
    },
    {
      title: "Career Launchpad",
      description: "Prep your resume, ace interviews and land your dream internship.",
      icon: <RocketIcon className="h-8 w-8 text-white" />,
      color: "bg-maximally-black"
    }
  ];
  
  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-press-start text-maximally-black mb-3 terminal">
          {">> Choose your power-ups_"}
        </h2>
        
        <p className="font-jetbrains text-maximally-black/70 mb-12 max-w-2xl">
          Level up with our skill tracks designed for ambitious teens. Each track comes with projects, 
          mentorship, and a community of peers.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillTracks;
