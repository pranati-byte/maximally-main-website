import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="font-press-start text-3xl text-maximally-black mb-12 text-center">
        Join The Team
      </h1>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mt-12">
          <p className="font-jetbrains text-maximally-black/70 mb-4">
            No open positions at the moment. Email us at hello@maximally.in to explore opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careers;