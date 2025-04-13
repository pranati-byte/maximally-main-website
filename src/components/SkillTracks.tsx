
import { useState } from "react";
import { Cpu, Video, Megaphone, Rocket, Database, Briefcase, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const skillData = [
  {
    title: "Entrepreneurship",
    description: "Learn to build and scale your first startup.",
    icon: Rocket,
    color: "bg-maximally-blue",
    hoverColor: "hover:bg-maximally-blue hover:text-white",
    path: "/entrepreneurship"
  },
  {
    title: "Public Speaking & MUN",
    description: "Master the art of persuasive communication.",
    icon: Megaphone,
    color: "bg-maximally-red",
    hoverColor: "hover:bg-maximally-red hover:text-white",
    path: "/public-speaking"
  },
  {
    title: "Digital Marketing",
    description: "Grow audiences and build online brands.",
    icon: Cpu,
    color: "bg-maximally-black",
    hoverColor: "hover:bg-maximally-black hover:text-white",
    path: "/digital-marketing"
  },
  {
    title: "No-Code & AI",
    description: "Build apps without coding and leverage AI.",
    icon: Database,
    color: "bg-maximally-blue",
    hoverColor: "hover:bg-maximally-blue hover:text-white",
    path: "/no-code-ai"
  },
  {
    title: "Video Editing",
    description: "Create professional videos that captivate.",
    icon: Video,
    color: "bg-maximally-red",
    hoverColor: "hover:bg-maximally-red hover:text-white",
    path: "/video-editing"
  },
  {
    title: "Career Launchpad",
    description: "Prepare for college and your dream career.",
    icon: Briefcase,
    color: "bg-maximally-black",
    hoverColor: "hover:bg-maximally-black hover:text-white",
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
      <p className="font-jetbrains text-maximally-black/70 mb-4">{skill.description}</p>
      
      <Link 
        to={skill.path} 
        className={`mt-2 inline-flex items-center font-press-start text-sm transition-colors duration-300 border-2 border-transparent px-3 py-1 ${skill.hoverColor}`}
      >
        Level Up <ChevronRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

const SkillTracks = () => {
  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-maximally-blue/5 rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-maximally-red/5 rotate-12"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-maximally-black/5 -rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-press-start text-maximally-black mb-4">
            &gt;&gt; Choose your power-ups_
          </h2>
          <div className="w-24 h-1 bg-maximally-blue mx-auto"></div>
        </div>
        
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
