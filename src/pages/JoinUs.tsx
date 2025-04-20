
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const JoinUs = () => {
  return (
    <>
      <SEO
        title="Join Maximally - Intern & Volunteer Opportunities"
        description="Join Maximally's Hustler Crew this summer. Work on real projects with India's boldest teen startup. Open for ambitious teenagers (13-18)."
        keywords="teen internships India, student volunteer opportunities, tech internships for students, startup experience"
      />
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-press-start text-4xl md:text-5xl text-maximally-black mb-6">
                We're Hiring Interns & Volunteers
              </h1>
              <p className="font-jetbrains text-xl text-maximally-black/80 mb-8">
                Want to work on real-world projects with India's boldest teen startup?
              </p>
            </div>

            <div className="pixel-border bg-white p-8 mb-12">
              <p className="font-jetbrains text-lg mb-6">
                Join Maximally's Hustler Crew this summer — we're recruiting ambitious teenagers (ages 13–18) to help us build wild stuff.
              </p>
              <p className="font-jetbrains text-lg mb-8">
                Work directly with the founding team on growth, design, community, outreach, content, tech & more.
              </p>

              <h2 className="font-press-start text-2xl mb-6">Perks</h2>
              <ul className="space-y-4 font-jetbrains mb-8">
                <li className="flex items-center">
                  <span className="text-maximally-blue mr-2">•</span>
                  Internship certificate
                </li>
                <li className="flex items-center">
                  <span className="text-maximally-blue mr-2">•</span>
                  Revenue share (for key contributors)
                </li>
                <li className="flex items-center">
                  <span className="text-maximally-blue mr-2">•</span>
                  Resume review + 1:1 mentorship
                </li>
                <li className="flex items-center">
                  <span className="text-maximally-blue mr-2">•</span>
                  Private Discord community access
                </li>
                <li className="flex items-center">
                  <span className="text-maximally-blue mr-2">•</span>
                  Digital swag + alumni badge
                </li>
                <li className="flex items-center">
                  <span className="text-maximally-blue mr-2">•</span>
                  Priority access to all future Maximally programs
                </li>
              </ul>

              <p className="font-press-start text-lg text-maximally-red mb-8">
                This is not a chill internship — it's chaos, creativity, and real impact.
              </p>

              <div className="text-center">
                <a
                  href="https://forms.gle/AsU4XQkfwWvxsAqT7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-button bg-maximally-blue text-white inline-flex items-center gap-2 hover:animate-pulse"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default JoinUs;
