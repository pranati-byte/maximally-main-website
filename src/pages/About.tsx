
import { Terminal, Award, Users, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="font-press-start text-4xl md:text-5xl text-maximally-black mb-6">
            About Maximally
          </h1>
          <p className="font-jetbrains text-lg text-maximally-black/80 max-w-2xl mx-auto">
            Empowering teens with real-world skills that schools forgot to teach
          </p>
        </section>

        {/* Mission Section */}
        <section className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="font-press-start text-2xl text-maximally-black">Our Mission</h2>
            <p className="font-jetbrains text-maximally-black/80">
              Maximally was founded with a clear vision: to bridge the gap between traditional education
              and real-world success. We believe that every teen deserves access to practical skills
              that will shape their future.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="pixel-border bg-maximally-blue/10 p-6">
              <h3 className="font-press-start text-sm mb-2">Innovation</h3>
              <p className="font-jetbrains text-sm">Leading edge learning.</p>
            </div>
            <div className="pixel-border bg-maximally-red/10 p-6">
              <h3 className="font-press-start text-sm mb-2">Growth</h3>
              <p className="font-jetbrains text-sm">Continuous improvement.</p>
            </div>
            <div className="pixel-border bg-maximally-black/10 p-6">
              <h3 className="font-press-start text-sm mb-2">Community</h3>
              <p className="font-jetbrains text-sm">Strong together.</p>
            </div>
            <div className="pixel-border bg-maximally-blue/10 p-6">
              <h3 className="font-press-start text-sm mb-2">Ambition</h3>
              <p className="font-jetbrains text-sm">Dream big, achieve big.</p>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-20">
          <h2 className="font-press-start text-2xl text-maximally-black mb-8">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="pixel-border p-6 text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-maximally-blue" />
              <h3 className="font-press-start text-lg mb-2">1000+</h3>
              <p className="font-jetbrains">Active Community Members</p>
            </div>
            <div className="pixel-border p-6 text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-maximally-red" />
              <h3 className="font-press-start text-lg mb-2">50+</h3>
              <p className="font-jetbrains">Success Stories</p>
            </div>
            <div className="pixel-border p-6 text-center">
              <Rocket className="h-12 w-12 mx-auto mb-4 text-maximally-black" />
              <h3 className="font-press-start text-lg mb-2">10+</h3>
              <p className="font-jetbrains">Skill Tracks</p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="mb-20">
          <h2 className="font-press-start text-2xl text-maximally-black mb-8">&gt;&gt; Choose your power-ups_</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="pixel-border p-6 hover:bg-maximally-blue/5 transition-colors">
              <h3 className="font-press-start text-lg mb-4">Entrepreneurship</h3>
              <p className="font-jetbrains text-maximally-black/80 mb-4">
                Learn to build and scale your first startup.
              </p>
              <Link to="/entrepreneurship" className="font-press-start text-sm text-maximally-blue hover:text-maximally-blue/80">
                Level Up &gt;
              </Link>
            </div>
            <div className="pixel-border p-6 hover:bg-maximally-blue/5 transition-colors">
              <h3 className="font-press-start text-lg mb-4">Public Speaking & MUN</h3>
              <p className="font-jetbrains text-maximally-black/80 mb-4">
                Master the art of persuasive communication.
              </p>
              <Link to="/public-speaking" className="font-press-start text-sm text-maximally-blue hover:text-maximally-blue/80">
                Level Up &gt;
              </Link>
            </div>
            <div className="pixel-border p-6 hover:bg-maximally-blue/5 transition-colors">
              <h3 className="font-press-start text-lg mb-4">Digital Marketing</h3>
              <p className="font-jetbrains text-maximally-black/80 mb-4">
                Grow audiences and build online brands.
              </p>
              <Link to="/digital-marketing" className="font-press-start text-sm text-maximally-blue hover:text-maximally-blue/80">
                Level Up &gt;
              </Link>
            </div>
            <div className="pixel-border p-6 hover:bg-maximally-blue/5 transition-colors">
              <h3 className="font-press-start text-lg mb-4">No-Code & AI</h3>
              <p className="font-jetbrains text-maximally-black/80 mb-4">
                Build apps without coding and leverage AI.
              </p>
              <Link to="/no-code-ai" className="font-press-start text-sm text-maximally-blue hover:text-maximally-blue/80">
                Level Up &gt;
              </Link>
            </div>
            <div className="pixel-border p-6 hover:bg-maximally-blue/5 transition-colors">
              <h3 className="font-press-start text-lg mb-4">Video Editing</h3>
              <p className="font-jetbrains text-maximally-black/80 mb-4">
                Create professional videos that captivate.
              </p>
              <Link to="/video-editing" className="font-press-start text-sm text-maximally-blue hover:text-maximally-blue/80">
                Level Up &gt;
              </Link>
            </div>
            <div className="pixel-border p-6 hover:bg-maximally-blue/5 transition-colors">
              <h3 className="font-press-start text-lg mb-4">Career Launchpad</h3>
              <p className="font-jetbrains text-maximally-black/80 mb-4">
                Prepare for college and your dream career.
              </p>
              <Link to="/career-launch" className="font-press-start text-sm text-maximally-blue hover:text-maximally-blue/80">
                Level Up &gt;
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="font-press-start text-2xl text-maximally-black mb-6">
            Ready to Max Out Your Potential?
          </h2>
          <button 
            onClick={() => window.location.href = '/community'}
            className="pixel-button bg-maximally-blue text-white hover:bg-maximally-blue/90"
          >
            Join Our Community
          </button>
        </section>
      </main>
    </div>
  );
};

export default About;
