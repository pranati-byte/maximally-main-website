
import { useEffect } from "react";
import Footer from "@/components/Footer";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <h1 className="font-press-start text-3xl mb-8 text-maximally-black">Terms & Conditions</h1>
        <div className="max-w-2xl mx-auto font-jetbrains">
          <div className="space-y-6 text-maximally-black/70">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>
              These Terms & Conditions govern your use of Maximally's services and website.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
