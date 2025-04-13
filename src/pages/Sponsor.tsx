
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Sponsor = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-press-start text-maximally-black mb-8">
            Sponsor the Revolution
          </h1>
          <p className="text-xl font-jetbrains text-maximally-black/80">
            Back the Builders of Tomorrow
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="pixel-border p-8 mb-12">
            <p className="font-jetbrains text-lg mb-6">
              At Maximally, we're not just teaching. We're weaponizing ambition.
            </p>
            <p className="font-jetbrains mb-6">
              We're building India's first social-edtech startup for teenagers — teaching them real-world skills like entrepreneurship, digital marketing, AI, public speaking, no-code, and the tools that actually matter in 2025 and beyond.
            </p>
            <p className="font-jetbrains">
              We're a mission-driven venture focused on access, excellence, and impact — and we're inviting partners who believe in a future built by bold, brilliant young minds.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="font-press-start text-2xl mb-6">Why Partner With Us?</h2>
            <ul className="font-jetbrains space-y-4 text-maximally-black/80">
              <li>• You're not just funding a program. You're fueling a movement.</li>
              <li>• 100% of sponsorship funds go toward free access for ambitious teens from underserved backgrounds.</li>
              <li>• You'll be part of a visible, high-impact, mission-aligned initiative.</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="pixel-border p-6 hover:bg-maximally-blue/5">
              <h3 className="font-press-start text-lg mb-4">Pixel Patron</h3>
              <p className="font-jetbrains text-maximally-blue mb-4">INR 25,000+</p>
              <ul className="font-jetbrains space-y-2 text-sm">
                <li>• Featured on Sponsor Wall</li>
                <li>• Social media shoutouts</li>
                <li>• Quarterly impact updates</li>
              </ul>
            </div>

            <div className="pixel-border p-6 hover:bg-maximally-blue/5">
              <h3 className="font-press-start text-lg mb-4">Resolution Partner</h3>
              <p className="font-jetbrains text-maximally-blue mb-4">INR 1,00,000+</p>
              <ul className="font-jetbrains space-y-2 text-sm">
                <li>• All Pixel Patron benefits</li>
                <li>• Batch sponsorship (20+ students)</li>
                <li>• Custom badge + certificate</li>
                <li>• Featured in impact report</li>
              </ul>
            </div>

            <div className="pixel-border p-6 hover:bg-maximally-blue/5">
              <h3 className="font-press-start text-lg mb-4">Infinite Mode</h3>
              <p className="font-jetbrains text-maximally-blue mb-4">INR 5,00,000+</p>
              <ul className="font-jetbrains space-y-2 text-sm">
                <li>• All Resolution Partner benefits</li>
                <li>• Co-branded events</li>
                <li>• Strategic Partner Spotlight</li>
                <li>• Quarterly roundtable access</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-press-start text-2xl mb-6">Let's Build the Future Together</h2>
            <p className="font-jetbrains mb-8">
              Want to sponsor a batch, fund a program, or brainstorm a custom partnership?
            </p>
            <Link 
              to="/contact"
              className="pixel-button bg-maximally-blue text-white inline-flex items-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
