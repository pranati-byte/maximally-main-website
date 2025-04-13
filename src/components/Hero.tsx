import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Users, Rocket } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = ">> Max out your potential_";
  const textRef = useRef(null);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // Pixel avatar coordinates for background effect
  const avatarPositions = [
    { x: "10%", y: "20%", delay: 0 },
    { x: "85%", y: "15%", delay: 1 },
    { x: "75%", y: "70%", delay: 2 },
    { x: "20%", y: "80%", delay: 1.5 },
    { x: "50%", y: "40%", delay: 0.5 },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 overflow-hidden bg-gradient-to-tr from-maximally-blue/20 via-white to-maximally-red/10 pixel-grid">
      {/* Background floating pixel avatars */}
      {avatarPositions.map((pos, index) => (
        <div 
          key={index}
          className="absolute w-10 h-10 md:w-16 md:h-16 bg-maximally-blue opacity-20 pixel-border animate-float"
          style={{ 
            top: pos.y, 
            left: pos.x, 
            animationDelay: `${pos.delay}s`,
            animationDuration: `${4 + pos.delay}s`
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Users className="text-white h-5 w-5 md:h-8 md:w-8" />
          </div>
        </div>
      ))}

      <div className="z-10 text-center max-w-4xl">
        <h1 
          ref={textRef} 
          className="text-3xl md:text-5xl lg:text-6xl font-press-start text-maximally-black mb-6 terminal"
        >
          {text}
        </h1>

        <p className="text-xl md:text-2xl font-jetbrains text-maximally-black/80 mb-12 max-w-2xl mx-auto">
          Learn the real-world skills schools forgot to teach.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
          <Button 
            className="pixel-button bg-maximally-blue hover:bg-maximally-blue/90 group"
            onClick={() => window.location.href = '/bootcamps'}
          >
            <Rocket className="mr-2 h-4 w-4 group-hover:animate-bounce" />
            Start Learning
          </Button>

          <Button 
            className="pixel-button bg-maximally-black hover:bg-maximally-black/90 group"
            onClick={() => window.location.href = '/community'}
          >
            <Users className="mr-2 h-4 w-4 group-hover:animate-bounce" />
            Join Our Community
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-maximally-black" />
      </div>
    </div>
  );
};

export default Hero;