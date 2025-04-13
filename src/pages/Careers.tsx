
import { Button } from "@/components/ui/button";

const roles = [
  {
    title: "Content Creator",
    type: "Volunteer",
    description: "Help create engaging educational content for our community."
  },
  {
    title: "Discord Moderator",
    type: "Volunteer",
    description: "Keep our community safe and engaging for all members."
  },
  {
    title: "UI/UX Designer",
    type: "Intern",
    description: "Design pixel-perfect interfaces for our platform."
  }
];

const Careers = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="font-press-start text-3xl text-maximally-black mb-12 text-center">
        Join The Team
      </h1>
      
      <div className="max-w-4xl mx-auto">
        {roles.map((role, index) => (
          <div key={index} className="pixel-border p-6 bg-white mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="font-press-start text-lg text-maximally-black">{role.title}</h2>
                <span className="font-jetbrains text-maximally-blue text-sm">{role.type}</span>
              </div>
              <Button className="font-press-start text-sm">Apply</Button>
            </div>
            <p className="font-jetbrains text-maximally-black/70">{role.description}</p>
          </div>
        ))}
        
        <div className="text-center mt-12">
          <p className="font-jetbrains text-maximally-black/70 mb-4">
            Don't see a role that fits? Email us at team@maximally.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careers;
