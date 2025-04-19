
import { Terminal } from "lucide-react";

const teamMembers = [
  {
    name: "Rishul Chanana",
    role: "Founder & CEO",
    fact: "Built his first startup at 15"
  },
  {
    name: "Janak Walia",
    role: "Chief Community Manager",
    fact: "Heavyweight MMA champion of India with 7+ years in community management"
  },
  {
    name: "Yash Kulkarni",
    role: "Chief Partnerships Advisor",
    fact: "3+ years driving strategic partnerships with Fortune 500 companies and leading educational institutions"
  },
  {
    name: "Harsimar Singh Bhalla",
    role: "Head of Public Speaking Department",
    fact: "Leading our Public Speaking Department, bringing a wealth of experience and passion for teaching effective communication"
  },
  {
    name: "Anshika Bhatia",
    role: "Chief Marketing Officer",
    fact: "Founder of Coexist, one of the largest NGOs in India, and now drives our marketing strategy, focusing on growth and outreach"
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

      <div className="max-w-2xl mx-auto pixel-border p-8 bg-white">
        <h2 className="font-press-start text-xl mb-6 text-center">We're Always Hiring!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="pixel-border p-4">
            <h3 className="font-press-start text-sm mb-2">Community Mods</h3>
            <p className="font-jetbrains text-sm text-maximally-black/70">Manage & grow our community</p>
          </div>
          <div className="pixel-border p-4">
            <h3 className="font-press-start text-sm mb-2">Creatives</h3>
            <p className="font-jetbrains text-sm text-maximally-black/70">Memes, design, content</p>
          </div>
          <div className="pixel-border p-4">
            <h3 className="font-press-start text-sm mb-2">School Outreach</h3>
            <p className="font-jetbrains text-sm text-maximally-black/70">Connect with institutions</p>
          </div>
          <div className="pixel-border p-4">
            <h3 className="font-press-start text-sm mb-2">Sponsor Hunters</h3>
            <p className="font-jetbrains text-sm text-maximally-black/70">Find & connect with sponsors</p>
          </div>
          <div className="pixel-border p-4">
            <h3 className="font-press-start text-sm mb-2">Hackers</h3>
            <p className="font-jetbrains text-sm text-maximally-black/70">Dev, XP system, console</p>
          </div>
          <div className="pixel-border p-4">
            <h3 className="font-press-start text-sm mb-2">Ambassadors</h3>
            <p className="font-jetbrains text-sm text-maximally-black/70">Student representatives</p>
          </div>
        </div>
        <p className="font-jetbrains text-center text-lg text-maximally-black mb-4">
          Interested? Email us at{' '}
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
