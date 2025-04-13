
import { useState } from "react";
import { Cpu, Video, Megaphone, Rocket, Database, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const skillData = [
  {
    title: "Entrepreneurship",
    description: "Learn to build and scale your first startup.",
    icon: Rocket,
    color: "bg-maximally-blue",
    path: "/entrepreneurship"
  },
  {
    title: "Public Speaking & MUN",
    description: "Master the art of persuasive communication.",
    icon: Megaphone,
    color: "bg-maximally-red",
    path: "/public-speaking"
  },
  {
    title: "Digital Marketing",
    description: "Grow audiences and build online brands.",
    icon: Cpu,
    color: "bg-maximally-black",
    path: "/digital-marketing"
  },
  {
    title: "No-Code & AI",
    description: "Build apps without coding and leverage AI.",
    icon: Database,
    color: "bg-maximally-blue",
    path: "/no-code-ai"
  },
  {
    title: "Video Editing",
    description: "Create professional videos that captivate.",
    icon: Video,
    color: "bg-maximally-red",
    path: "/video-editing"
  },
  {
    title: "Career Launchpad",
    description: "Prepare for college and your dream career.",
    icon: Briefcase,
    color: "bg-maximally-black",
    path: "/career-launch"
  }
];

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`pixel-card transform transition-all duration-300 ${
        isHovered ? "translate-y-[-10px]" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-16 h-16 ${skill.color} pixel-border flex items-center justify-center mb-4 mx-auto`}>
        <skill.icon className="text-white h-8 w-8" />
      </div>
      <h3 className="font-press-start text-lg mb-2 text-maximally-black">{skill.title}</h3>
      <p className="font-jetbrains text-maximally-black/70">{skill.description}</p>
      <Link to={skill.path} className="mt-4 inline-block font-press-start text-sm text-maximally-blue hover:text-maximally-red transition-colors retro-underline">
        Level Up &gt;
      </Link>
    </div>
  );
};

const SkillTracks = () => {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-press-start text-maximally-black mb-12 text-center">
          &gt;&gt; Choose your power-ups_
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillData.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillTracks;
