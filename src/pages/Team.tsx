
import { Terminal } from "lucide-react";

const teamMembers = [
  {
    name: "Rishul Chanana",
    role: "Founder & CEO",
    fact: "Built his first startup at 15"
  }
];

const Team = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="font-press-start text-3xl text-maximally-black mb-12 text-center">
        The Squad
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
        {teamMembers.map((member, index) => (
          <div key={index} className="pixel-border p-6 bg-white">
            <h2 className="font-press-start text-lg mb-2 text-maximally-black">{member.name}</h2>
            <p className="font-jetbrains text-maximally-blue mb-2">{member.role}</p>
            <p className="font-jetbrains text-maximally-black/70 text-sm">&quot;{member.fact}&quot;</p>
          </div>
        ))}
      </div>

      <div className="text-center max-w-2xl mx-auto pixel-border p-8 bg-white">
        <p className="font-jetbrains text-lg text-maximally-black mb-4">
          Want to join our team? Send us your resume/CV at{' '}
          <a 
            href="mailto:hello@maximally.in" 
            className="text-maximally-blue hover:underline font-bold"
          >
            hello@maximally.in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Team;
