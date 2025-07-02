
import { useEffect } from "react";
import Footer from "@/components/Footer";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <h1 className="font-press-start text-3xl mb-8 text-maximally-black">Privacy Policy</h1>
        <div className="max-w-2xl mx-auto font-jetbrains">
          <div className="space-y-6 text-maximally-black/70">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>
              This Privacy Policy describes how Maximally collects and uses your personal information when you use our services.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
