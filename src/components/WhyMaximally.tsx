
import { useState, useEffect } from "react";
import { Lightbulb, Users, Zap } from "lucide-react";

const EvolutionStage = ({ stage, isActive }: { stage: string; isActive: boolean }) => (
  <div className={`flex flex-col items-center ${isActive ? "" : "opacity-40"}`}>
    <div className={`h-12 w-12 pixel-border flex items-center justify-center ${
      isActive ? "bg-maximally-blue" : "bg-gray-300"
    }`}>
      <span className="font-press-start text-white text-xs">{stage}</span>
    </div>
    <div className={`h-1 w-8 ${isActive ? "bg-maximally-blue" : "bg-gray-300"} mt-2`}></div>
  </div>
);

const WhyMaximally = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const stages = ["Noob", "Learner", "Builder", "Founder"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % stages.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  const features = [
    {
      title: "No boring lectures.",
      description: "We teach through projects, challenges, and real-world application.",
      icon: <Lightbulb className="h-10 w-10 text-maximally-red" />
    },
    {
      title: "No PDF dumps.",
      description: "Interactive content that adapts to your learning style and pace.",
      icon: <Zap className="h-10 w-10 text-maximally-blue" />
    },
    {
      title: "Built by ambitious teens, for ambitious teens.",
      description: "Our curriculum comes from teens who've built startups, won competitions, and landed dream internships.",
      icon: <Users className="h-10 w-10 text-maximally-black" />
    }
  ];
  
  return (
    <section id="why" className="py-20 px-4 bg-maximally-black text-white pixel-grid">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-press-start mb-16 text-center terminal">
          {">> Why Maximally?_"}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center pixel-border bg-white/5 p-6 hover:bg-white/10 transition-all">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-press-start text-lg mb-4 text-maximally-blue">
                {feature.title}
              </h3>
              <p className="font-jetbrains text-white/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-white/5 pixel-border p-8 max-w-2xl mx-auto">
          <h3 className="font-press-start text-xl mb-6 text-center">
            Your Evolution
          </h3>
          
          <div className="flex justify-between items-center">
            {stages.map((stage, index) => (
              <EvolutionStage 
                key={index}
                stage={stage} 
                isActive={index <= currentStage} 
              />
            ))}
          </div>
          
          <p className="font-jetbrains text-white/80 text-center mt-8">
            Track your progress as you evolve from a beginner to a skilled creator and leader. 
            Our curriculum is designed to help you level up quickly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyMaximally;
