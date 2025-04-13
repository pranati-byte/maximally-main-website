
import { useEffect } from "react";
import { ArrowRight, Star, Users, Zap } from "lucide-react";
import Footer from "@/components/Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      <div className="animated-bg" />
      
      {/* Hero Section */}
      <section className="py-24 px-4">
        <h1 className="glow-text text-4xl md:text-5xl text-center text-maximally-black mb-8">
          Maximally: Unlock Your Future
        </h1>
        <p className="font-jetbrains text-center text-maximally-black/80 max-w-2xl mx-auto terminal">
          Building the next generation of innovators, one skill at a time.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-maximally-blue/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-press-start text-3xl text-maximally-red mb-8 text-center float-element">
            Our Mission
          </h2>
          <p className="font-jetbrains text-lg text-center text-maximally-black/80 mb-12">
            We empower ambitious teens by helping them build the real-world skills they need for the future.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="pixel-card p-6 text-center float-element">
              <Star className="h-8 w-8 text-maximally-blue mx-auto mb-4" />
              <h3 className="font-press-start text-sm mb-2">Innovation</h3>
              <p className="font-jetbrains text-sm">We don't just teach; we inspire.</p>
            </div>
            
            <div className="pixel-card p-6 text-center float-element" style={{ animationDelay: "0.2s" }}>
              <Users className="h-8 w-8 text-maximally-blue mx-auto mb-4" />
              <h3 className="font-press-start text-sm mb-2">Collaboration</h3>
              <p className="font-jetbrains text-sm">Learn together, grow together.</p>
            </div>
            
            <div className="pixel-card p-6 text-center float-element" style={{ animationDelay: "0.4s" }}>
              <Zap className="h-8 w-8 text-maximally-blue mx-auto mb-4" />
              <h3 className="font-press-start text-sm mb-2">Ambition</h3>
              <p className="font-jetbrains text-sm">Dream big, achieve big.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-press-start text-3xl text-maximally-blue mb-12 text-center float-element">
            How We Empower You
          </h2>
          
          <div className="space-y-8">
            {[
              {
                title: "Interactive Courses",
                description: "Learn at your own pace with expert-guided projects."
              },
              {
                title: "Mentorship",
                description: "Get real-time guidance from professionals."
              },
              {
                title: "Build a Portfolio",
                description: "Showcase your work through industry projects."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="pixel-card p-6 float-element"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="font-press-start text-lg mb-2">{item.title}</h3>
                <p className="font-jetbrains text-maximally-black/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-maximally-black">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-press-start text-2xl text-white mb-6 float-element">
            Ready to start? Unlock your potential now.
          </h2>
          <button 
            className="pixel-button group flex items-center gap-2 mx-auto"
            onClick={() => window.location.href = '/bootcamps'}
          >
            <span>Start Learning</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
