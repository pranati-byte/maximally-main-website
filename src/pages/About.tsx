
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="font-press-start text-3xl text-maximally-black mb-12 text-center">
        Level Up Your Future
      </h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="pixel-border p-8 bg-white mb-12">
          <h2 className="font-press-start text-xl mb-6 text-maximally-black">Our Mission</h2>
          <p className="font-jetbrains text-maximally-black/80 mb-4">
            Maximally exists to help ambitious teens (13-20) build real-world skills that school doesn't teach. We believe in learning by doing, guided by peers who've walked the same path.
          </p>
          <p className="font-jetbrains text-maximally-black/80 mb-4">
            Just like in games, we believe every skill is learnable, every challenge beatable, and every goal achievable with the right strategy and persistence.
          </p>
        </div>

        <div className="text-center">
          <Button className="font-press-start bg-maximally-blue hover:bg-maximally-blue/90">
            Join Our Community
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
