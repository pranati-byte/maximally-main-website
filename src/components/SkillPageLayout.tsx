import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface SkillPageLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

const SkillPageLayout = ({ title, description, children }: SkillPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-16">
        <Link 
          to="/"
          className="inline-flex items-center mb-8 text-maximally-black hover:text-maximally-blue font-jetbrains"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="font-press-start text-3xl md:text-4xl text-maximally-black mb-6">
            {title}
          </h1>
          <p className="font-jetbrains text-lg text-gray-700 mb-12">
            {description}
          </p>

          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SkillPageLayout;