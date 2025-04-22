
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const Hackathon = () => {
  return (
    <>
      <SEO
        title="Maximally Hack: Future Founders Quest | Teen Hackathon India"
        description="Join India's boldest teen hackathon. 48 hours of building, innovating, and launching the future. Open to coders, creators, and community builders aged 13-19."
        keywords="teen hackathon, student hackathon India, coding competition, future founders"
      />
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 pt-24 md:pt-32 pb-16">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="font-press-start text-3xl sm:text-4xl md:text-5xl mb-6 gradient-text-rainbow animate-pulse">
                Maximally Hack: Future Founders Quest
              </h1>
              <p className="font-jetbrains text-xl text-maximally-black/80 mb-4">
                June 8–10, 2025 | Virtual | Open to Teens Across India
              </p>
              <p className="text-maximally-black/60 italic">
                (Registration Closed)
              </p>
            </div>

            {/* Main Content */}
            <div className="space-y-12">
              {/* Intro */}
              <div className="pixel-border p-6 bg-maximally-blue/5">
                <p className="font-jetbrains text-lg mb-4">
                  Welcome to Maximally Hack — a 48-hour innovation sprint where India's boldest teen minds come together to imagine, build, and launch the future.
                </p>
                <p className="font-press-start text-lg text-center my-6">
                  This isn't your typical hackathon.
                  <br />
                  It's a Quest. A Game. A Portal to Your Founder Era.
                </p>
              </div>

              {/* Theme */}
              <div>
                <h2 className="font-press-start text-2xl mb-6 gradient-text-rainbow">The Theme: Build for the Next Gen</h2>
                <p className="mb-4">We're challenging you to think like Gen Z founders.</p>
                <p className="mb-4">What can you build in 48 hours that helps teens:</p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-center">
                    <span className="text-maximally-blue mr-2">▶</span> Learn smarter?
                  </li>
                  <li className="flex items-center">
                    <span className="text-maximally-blue mr-2">▶</span> Connect deeper?
                  </li>
                  <li className="flex items-center">
                    <span className="text-maximally-blue mr-2">▶</span> Thrive creatively or financially?
                  </li>
                </ul>
              </div>

              {/* Tracks */}
              <div>
                <h2 className="font-press-start text-2xl mb-6 gradient-text-rainbow">Tracks</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "AI & No-Code Magic",
                    "Digital Creators & Storytelling",
                    "Social Impact & Youth Mental Health",
                    "Fintech for Teens",
                    "Open Quest (build whatever lights you up)"
                  ].map((track) => (
                    <div key={track} className="bg-white/80 p-4 rounded-lg border-2 border-maximally-black">
                      <p className="font-jetbrains">{track}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Participate */}
              <div>
                <h2 className="font-press-start text-2xl mb-6 gradient-text-rainbow">Why Participate?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="pixel-border p-4">
                    <h3 className="font-press-start text-lg mb-2">Guild Points</h3>
                    <p>Compete in squads, earn points, unlock secret quests.</p>
                  </div>
                  <div className="pixel-border p-4">
                    <h3 className="font-press-start text-lg mb-2">Mentorship Drops</h3>
                    <p>Random 1:1s with creators, founders, AI tinkerers.</p>
                  </div>
                  <div className="pixel-border p-4">
                    <h3 className="font-press-start text-lg mb-2">Judges Who Care</h3>
                    <p>VCs, teen CEOs & educators who are rooting for you.</p>
                  </div>
                  <div className="pixel-border p-4">
                    <h3 className="font-press-start text-lg mb-2">Golden Ticket</h3>
                    <p>Fast-track to Maximally Bootcamp 2025.</p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center space-y-6">
                <Link to="/bootcamps">
                  <Button className="bg-maximally-blue hover:bg-maximally-blue/90 text-white px-8 py-6 text-lg font-jetbrains">
                    Explore Summer 2025 Bootcamps
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <p className="font-jetbrains text-sm text-maximally-black/60">
                  Got questions? Email team@maximally.in
                </p>
              </div>

              {/* Related Programs */}
              <div className="mt-16 pt-8 border-t-2 border-dashed border-maximally-blue/20">
                <h2 className="font-press-start text-2xl mb-6 text-center gradient-text-rainbow">More Ways to Level Up</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link to="/bootcamps" className="pixel-border p-4 hover:bg-maximally-blue/5 transition-colors">
                    <h3 className="font-press-start text-lg mb-2">🚀 Summer Bootcamps</h3>
                    <p className="font-jetbrains text-sm">Join our intensive summer programs for hands-on learning.</p>
                  </Link>
                  <Link to="/community" className="pixel-border p-4 hover:bg-maximally-blue/5 transition-colors">
                    <h3 className="font-press-start text-lg mb-2">👥 Community</h3>
                    <p className="font-jetbrains text-sm">Connect with other ambitious teens in our Discord.</p>
                  </Link>
                  <Link to="/join-us" className="pixel-border p-4 hover:bg-maximally-blue/5 transition-colors">
                    <h3 className="font-press-start text-lg mb-2">💼 Intern with Us</h3>
                    <p className="font-jetbrains text-sm">Work on real projects with our founding team.</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hackathon;
