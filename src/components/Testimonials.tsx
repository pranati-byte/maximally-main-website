
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  handle: string;
  quote: string;
  achievement: string;
  icon: React.ReactNode;
}

const Testimonial = ({ name, handle, quote, achievement, icon }: TestimonialProps) => (
  <div className="pixel-card h-full flex flex-col">
    <div className="flex items-center mb-4">
      <div className="h-12 w-12 bg-maximally-blue pixel-border flex items-center justify-center mr-4">
        {icon}
      </div>
      <div>
        <h4 className="font-press-start text-sm">{name}</h4>
        <p className="font-jetbrains text-maximally-black/70 text-sm">{handle}</p>
      </div>
    </div>
    
    <div className="flex-1">
      <p className="font-jetbrains text-maximally-black/80 mb-4">"{quote}"</p>
      
      <div className="flex items-center mt-auto">
        <span className="font-press-start text-xs text-maximally-red">
          {achievement}
        </span>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const testimonials = [
    {
      name: "Shiv Kumar",
      handle: "@shiv_speaksfire",
      quote: "Maximally's public speaking track helped me win the national MUN competition. The techniques are practical and the community feedback is gold!",
      achievement: "🎤 MUN Winner",
      icon: <Star className="h-6 w-6 text-white" />
    },
    {
      name: "Aanya Patel",
      handle: "@aanya_builds",
      quote: "I built my first website through the No-Code track and landed an internship at a startup. The project-based learning made all the difference.",
      achievement: "🧠 Startup Intern",
      icon: <Star className="h-6 w-6 text-white" />
    },
    {
      name: "Rohan Mehta",
      handle: "@rohan_creators",
      quote: "The video editing track helped me gain 10K followers on Instagram in just 3 months. I'm now creating content for brands as a side hustle!",
      achievement: "📱 Content Creator",
      icon: <Star className="h-6 w-6 text-white" />
    }
  ];
  
  const next = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };
  
  const prev = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-press-start text-maximally-black mb-12 text-center terminal">
          {">> Student Success Stories_"}
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Mobile view - single testimonial */}
          <div className="md:hidden">
            <Testimonial {...testimonials[activeSlide]} />
            
            <div className="flex justify-center mt-6 space-x-4">
              <button 
                className="p-2 pixel-border bg-white hover:bg-gray-100"
                onClick={prev}
              >
                <ChevronLeft className="h-5 w-5 text-maximally-black" />
              </button>
              <button 
                className="p-2 pixel-border bg-white hover:bg-gray-100"
                onClick={next}
              >
                <ChevronRight className="h-5 w-5 text-maximally-black" />
              </button>
            </div>
          </div>
          
          {/* Desktop view - all testimonials */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
