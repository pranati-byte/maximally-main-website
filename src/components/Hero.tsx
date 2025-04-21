import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-maximally-blue/5 to-maximally-purple/5">
      <div className="absolute inset-0 w-full h-full bg-[url('/pixel-clouds.svg')] opacity-20 animate-float"></div>

      <div className="container mx-auto px-4 py-24 text-center relative z-10">
        <h1 className="font-press-start text-4xl md:text-6xl text-maximally-black mb-6 animate-fadeIn">
          The Real-World School for
          <span className="text-maximally-blue block mt-2">
            Ambitious Teenagers
          </span>
        </h1>

        <p className="font-jetbrains text-xl md:text-2xl text-maximally-black/80 mb-12 max-w-3xl mx-auto">
          Learn what school doesn't teach. Build projects. 
          <span className="text-maximally-purple">Speak with power.</span>
          <span className="text-maximally-green">Launch your first startup.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/bootcamps">
            <Button 
              size="lg"
              className="pixel-border bg-maximally-green hover:bg-maximally-green/90 text-white font-press-start px-8 py-6 text-lg group"
            >
              Start Learning
              <span className="group-hover:translate-x-1 transition-transform inline-block ml-2">
                →
              </span>
            </Button>
          </Link>

          <Link to="/community">
            <Button 
              variant="outline"
              size="lg"
              className="pixel-border border-2 font-press-start px-8 py-6 text-lg hover:bg-maximally-blue/5"
            >
              Join the Community
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;