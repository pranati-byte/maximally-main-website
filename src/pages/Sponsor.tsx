
import { useEffect } from "react";
import { ArrowRight, Heart, Star, Sparkles, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Sponsor = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 bg-white relative overflow-hidden">
      <div className="animated-bg"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-press-start text-maximally-black mb-8 glow-text">
            Sponsor the Revolution
          </h1>
          <p className="text-xl font-jetbrains text-maximally-black/80 typewriter">
            Back the Builders of Tomorrow
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="pixel-border p-8 mb-12 hover:transform hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur">
            <p className="font-jetbrains text-lg mb-6 animate-fade-in">
              At Maximally, we're not just teaching. We're weaponizing ambition.
            </p>
            <p className="font-jetbrains mb-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
              We're building India's first social-edtech startup for teenagers — teaching them real-world skills like entrepreneurship, digital marketing, AI, public speaking, no-code, and the tools that actually matter in 2025 and beyond.
            </p>
            <p className="font-jetbrains animate-fade-in" style={{animationDelay: "0.4s"}}>
              We're a mission-driven venture focused on access, excellence, and impact — and we're inviting partners who believe in a future built by bold, brilliant young minds.
            </p>
          </div>

          <div className="mb-16 animate-fade-in" style={{animationDelay: "0.6s"}}>
            <h2 className="font-press-start text-2xl mb-6 flex items-center justify-center gap-2">
              <Heart className="text-maximally-red animate-pulse" /> Why Partner With Us?
            </h2>
            <ul className="font-jetbrains space-y-4 text-maximally-black/80">
              <li className="flex items-center gap-2 pixel-border p-4 hover:bg-maximally-blue/5">
                <Star className="h-5 w-5 text-maximally-blue animate-spin-slow" />
                You're not just funding a program. You're fueling a movement.
              </li>
              <li className="flex items-center gap-2 pixel-border p-4 hover:bg-maximally-blue/5">
                <Trophy className="h-5 w-5 text-maximally-gold animate-bounce" />
                100% of sponsorship funds go toward free access for ambitious teens from underserved backgrounds.
              </li>
              <li className="flex items-center gap-2 pixel-border p-4 hover:bg-maximally-blue/5">
                <Sparkles className="h-5 w-5 text-maximally-purple animate-pulse" />
                You'll be part of a visible, high-impact, mission-aligned initiative.
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="pixel-border p-6 hover:bg-maximally-blue/5 hover:transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: "0.8s"}}>
              <h3 className="font-press-start text-lg mb-4">Pixel Patron</h3>
              <p className="font-jetbrains text-maximally-blue mb-4">INR 25,000+</p>
              <ul className="font-jetbrains space-y-2 text-sm">
                <li>• Featured on Sponsor Wall</li>
                <li>• Social media shoutouts</li>
                <li>• Quarterly impact updates</li>
              </ul>
            </div>

            <div className="pixel-border p-6 hover:bg-maximally-red/5 hover:transform hover:scale-105 transition-all duration-300 animate-fade-in relative" style={{animationDelay: "1s"}}>
              <div className="absolute -top-2 -right-2 bg-maximally-red text-white px-2 py-1 text-xs font-press-start">Popular</div>
              <h3 className="font-press-start text-lg mb-4">Resolution Partner</h3>
              <p className="font-jetbrains text-maximally-red mb-4">INR 1,00,000+</p>
              <ul className="font-jetbrains space-y-2 text-sm">
                <li>• All Pixel Patron benefits</li>
                <li>• Batch sponsorship (20+ students)</li>
                <li>• Custom badge + certificate</li>
                <li>• Featured in impact report</li>
              </ul>
            </div>

            <div className="pixel-border p-6 hover:bg-maximally-purple/5 hover:transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: "1.2s"}}>
              <h3 className="font-press-start text-lg mb-4">Infinite Mode</h3>
              <p className="font-jetbrains text-maximally-purple mb-4">INR 5,00,000+</p>
              <ul className="font-jetbrains space-y-2 text-sm">
                <li>• All Resolution Partner benefits</li>
                <li>• Co-branded events</li>
                <li>• Strategic Partner Spotlight</li>
                <li>• Quarterly roundtable access</li>
              </ul>
            </div>
          </div>

          <div className="text-center animate-fade-in" style={{animationDelay: "1.4s"}}>
            <h2 className="font-press-start text-2xl mb-6">Let's Build the Future Together</h2>
            <p className="font-jetbrains mb-8">
              Want to sponsor a batch, fund a program, or brainstorm a custom partnership?
            </p>
            <Link 
              to="/contact"
              className="pixel-button bg-maximally-blue text-white inline-flex items-center gap-2 hover:transform hover:scale-105 transition-all duration-300"
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
