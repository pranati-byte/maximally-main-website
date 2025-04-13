
import { WhatsApp, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Community = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="font-press-start text-3xl mb-8 text-maximally-black text-center">
          Join Our Community
        </h1>
        
        <div className="pixel-border p-8 bg-white mb-12">
          <p className="font-jetbrains text-lg mb-8 text-center text-maximally-black/70">
            Connect with ambitious teens who are building their future, today.
            Share ideas, collaborate on projects, and grow together.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="#whatsapp" className="block">
              <div className="pixel-border p-6 bg-[#25D366] hover:bg-[#128C7E] transition-colors">
                <div className="flex items-center justify-center space-x-4 text-white">
                  <WhatsApp className="h-8 w-8" />
                  <span className="font-press-start text-lg">WhatsApp</span>
                </div>
              </div>
            </a>
            
            <a href="#discord" className="block">
              <div className="pixel-border p-6 bg-[#5865F2] hover:bg-[#4752C4] transition-colors">
                <div className="flex items-center justify-center space-x-4 text-white">
                  <MessageSquare className="h-8 w-8" />
                  <span className="font-press-start text-lg">Discord</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
