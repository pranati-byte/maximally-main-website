
import { ReactNode, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface SkillPageLayoutProps {
  title: string;
  icon: ReactNode;
  iconBgColor: string;
  children: ReactNode;
  tagline: string;
  skillName: string;
  communityType: "discord" | "whatsapp";
  communityLink: string;
}

const SkillPageLayout = ({
  title,
  icon,
  iconBgColor,
  children,
  tagline,
  skillName,
  communityType,
  communityLink
}: SkillPageLayoutProps) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16 bg-gradient-to-b from-white to-maximally-blue/10 pixel-grid">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center mb-8 font-press-start text-sm text-maximally-black hover:text-maximally-blue transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Homepage
          </Link>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-12">
            <div className={`w-20 h-20 ${iconBgColor} pixel-border flex items-center justify-center flex-shrink-0`}>
              {icon}
            </div>
            <div>
              <h1 className="text-xl md:text-3xl font-press-start text-maximally-black mb-4">
                &gt;&gt; {title}_
              </h1>
              <p className="font-jetbrains text-maximally-black/80 italic">{tagline}</p>
            </div>
          </div>
          
          {children}
          
          <div className="mt-16 pixel-border p-8 bg-white">
            <h2 className="text-xl font-press-start text-maximally-black mb-6">
              Join the {skillName} Squad
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <p className="font-jetbrains text-maximally-black/80 mb-4">
                  Connect with like-minded peers, share your progress, and get feedback from mentors.
                </p>
              </div>
              <div>
                <a 
                  href={communityLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="pixel-button inline-flex items-center bg-maximally-blue"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Join {communityType === "discord" ? "Discord" : "WhatsApp"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SkillPageLayout;
