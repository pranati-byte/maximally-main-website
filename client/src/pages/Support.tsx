
import { useEffect } from "react";
import Footer from "@/components/Footer";

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <h1 className="font-press-start text-3xl mb-8 text-maximally-black">Support</h1>
        <div className="max-w-2xl mx-auto font-jetbrains">
          <div className="pixel-card p-6 mb-8">
            <h2 className="font-press-start text-xl mb-4">How Can We Help?</h2>
            <p className="text-maximally-black/70 mb-4">
              We're here to help you with any questions or issues you might have about Maximally's programs and services.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
