
const teamMembers = [
  {
    name: "Aryan M.",
    role: "Founder & CEO",
    fact: "Built first startup at 15"
  },
  {
    name: "Priya S.",
    role: "Community Lead",
    fact: "MUN champion turned mentor"
  },
  {
    name: "Vikram R.",
    role: "Tech Lead",
    fact: "Launched 3 apps before 18"
  }
];

const Team = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="font-press-start text-3xl text-maximally-black mb-12 text-center">
        The Squad
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="pixel-border p-6 bg-white">
            <h2 className="font-press-start text-lg mb-2 text-maximally-black">{member.name}</h2>
            <p className="font-jetbrains text-maximally-blue mb-2">{member.role}</p>
            <p className="font-jetbrains text-maximally-black/70 text-sm">&quot;{member.fact}&quot;</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
