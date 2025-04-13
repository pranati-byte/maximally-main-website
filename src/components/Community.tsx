
import { MessagesSquare, Users, Trophy, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";

const CommunityFeature = ({ 
  title, 
  description, 
  icon 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode 
}) => (
  <div className="flex items-start mb-6">
    <div className="h-10 w-10 pixel-border bg-maximally-blue flex items-center justify-center mr-4 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-press-start text-sm mb-2">{title}</h4>
      <p className="font-jetbrains text-maximally-black/70">{description}</p>
    </div>
  </div>
);

const Community = () => {
  return (
    <section id="community" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-press-start text-maximally-black mb-6 terminal">
              {">> Join the Community_"}
            </h2>
            
            <p className="font-jetbrains text-maximally-black/80 mb-8">
              Connect with 1000+ ambitious teens in our Discord community. Learn together, 
              build projects, and get feedback from mentors and peers.
            </p>
            
            <div className="mb-8">
              <CommunityFeature
                title="Weekly Events"
                description="Join workshops, hackathons, and networking sessions with industry experts."
                icon={<MessagesSquare className="h-5 w-5 text-white" />}
              />
              
              <CommunityFeature
                title="XP Leaderboards"
                description="Earn experience points for completing courses, helping others, and building projects."
                icon={<Trophy className="h-5 w-5 text-white" />}
              />
              
              <CommunityFeature
                title="Peer Projects"
                description="Collaborate with other members on real projects that solve problems and build your portfolio."
                icon={<GitFork className="h-5 w-5 text-white" />}
              />
            </div>
            
            <Button className="pixel-button bg-maximally-black hover:bg-maximally-black/90 group">
              <Users className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Join Discord Community
            </Button>
          </div>
          
          <div className="pixel-grid bg-gray-50 p-8 pixel-border relative">
            {/* Pixel Map of Discord Server */}
            <div className="grid grid-cols-3 gap-4">
              {[...Array(9)].map((_, index) => (
                <div 
                  key={index} 
                  className={`aspect-square pixel-border ${
                    [0, 2, 6, 8].includes(index) 
                      ? "bg-maximally-blue/20" 
                      : index === 4 
                        ? "bg-maximally-red/30" 
                        : "bg-maximally-blue/10"
                  }`}
                >
                  {index === 4 && (
                    <div className="h-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-maximally-black" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-12 h-12 pixel-border bg-maximally-red flex items-center justify-center animate-pulse">
              <span className="font-press-start text-white text-xs">LIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
