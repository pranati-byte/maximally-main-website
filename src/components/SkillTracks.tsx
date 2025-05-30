import { useState } from "react";
import { Cpu, Video, Megaphone, Rocket, Database, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const skillData = [
  {
    title: "Entrepreneurship",
    subtitle: "(Part of the Startup Makeathon tracks)",
    description: "Learn to build and scale your first startup.",
    icon: Rocket,
    color: "bg-maximally-blue",
    path: "/entrepreneurship"
  },
  {
    title: "Public Speaking & MUN",
    subtitle: "(Part of the Startup Makeathon tracks)",
    description: "Master the art of persuasive communication.",
    icon: Megaphone,
    color: "bg-maximally-red",
    path: "/public-speaking"
  },
  {
    title: "Digital Marketing",
    subtitle: "(Part of the Startup Makeathon tracks)",
    description: "Grow audiences and build online brands.",
    icon: Cpu,
    color: "bg-maximally-black",
    path: "/digital-marketing"
  },
  {
    title: "No-Code & AI",
    subtitle: "(Part of the Startup Makeathon tracks)",
    description: "Build apps without coding and leverage AI.",
    icon: Database,
    color: "bg-maximally-blue",
    path: "/no-code-ai"
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
      className={`pixel-card hover:shadow-[8px_8px_0_#1A1A1A] transition-all duration-300 hover:-translate-y-2
        ${isHovered ? "translate-y-[-10px] shadow-[0_0_15px_rgba(60,158,231,0.3)]" : ""}
        hover:border-maximally-blue/50 group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-16 h-16 ${skill.color} pixel-border flex items-center justify-center mb-4 mx-auto
        transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
        <skill.icon className="text-white h-8 w-8 transform transition-all duration-300 group-hover:scale-110" />
      </div>
      <h3 className="font-press-start text-lg mb-2 text-maximally-black">{skill.title}</h3>
      {skill.subtitle && (
            <p className="font-jetbrains text-maximally-black/60 text-xs mb-3 italic">
              {skill.subtitle}
            </p>
          )}
      <p className="font-jetbrains text-maximally-black/70">{skill.description}</p>
      <Link 
        to={skill.path} 
        className="mt-4 inline-block font-press-start text-sm text-maximally-blue hover:text-maximally-red transition-colors retro-underline"
        onClick={() => window.scrollTo(0, 0)}
      >
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
          &gt;&gt; What you'll learn while building_
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillData.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
        <p className="mt-8 text-sm text-gray-500 text-center">
          These aren’t separate courses. You’ll learn them while building your own startup in the Makeathon.
        </p>
      </div>
    </section>
  );
};

export default SkillTracks;