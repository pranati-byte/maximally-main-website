
import { Terminal, Award, Users, Rocket } from "lucide-react";

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
          <h2 className="font-press-start text-2xl text-maximally-black mb-8">Our Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="pixel-border p-6">
              <h3 className="font-press-start text-lg mb-4">Entrepreneurship</h3>
              <p className="font-jetbrains text-maximally-black/80">
                Learn to build and launch your own ventures through hands-on projects
                and real-world case studies.
              </p>
            </div>
            <div className="pixel-border p-6">
              <h3 className="font-press-start text-lg mb-4">Public Speaking</h3>
              <p className="font-jetbrains text-maximally-black/80">
                Master the art of communication and presentation through our
                structured program and live practice sessions.
              </p>
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
