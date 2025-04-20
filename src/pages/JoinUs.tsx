
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
      <div className="min-h-screen bg-white relative overflow-hidden">
        <div className="pixel-grid-bg absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="font-press-start text-4xl md:text-5xl mb-6 gradient-text-rainbow animate-pulse">
                We're Hiring Interns & Volunteers
              </h1>
              <p className="font-jetbrains text-xl gradient-text-blue mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
                Want to work on real-world projects with India's boldest teen startup?
              </p>
            </div>

            <div className="pixel-border bg-white p-8 mb-12 hover:transform hover:-translate-y-2 transition-all duration-300">
              <p className="font-jetbrains text-lg mb-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
                Join Maximally's Hustler Crew this summer — we're recruiting ambitious teenagers (ages 13–18) to help us build <span className="gradient-text-marketing font-bold">wild stuff</span>.
              </p>
              <p className="font-jetbrains text-lg mb-8 animate-fade-in" style={{animationDelay: '0.9s'}}>
                Work directly with the founding team on <span className="gradient-text-blue">growth</span>, <span className="gradient-text-purple">design</span>, <span className="gradient-text-career">community</span>, outreach, content, tech & more.
              </p>

              <h2 className="font-press-start text-2xl mb-6 gradient-text-rainbow">Perks</h2>
              <ul className="space-y-4 font-jetbrains mb-8">
                <li className="flex items-center hover:transform hover:-translate-x-2 transition-all duration-300">
                  <span className="text-maximally-blue mr-2 animate-pulse">•</span>
                  <span className="gradient-text-blue">Internship certificate</span>
                </li>
                <li className="flex items-center hover:transform hover:-translate-x-2 transition-all duration-300">
                  <span className="text-maximally-blue mr-2 animate-pulse">•</span>
                  <span className="gradient-text-purple">Revenue share (for key contributors)</span>
                </li>
                <li className="flex items-center hover:transform hover:-translate-x-2 transition-all duration-300">
                  <span className="text-maximally-blue mr-2 animate-pulse">•</span>
                  <span className="gradient-text-career">Resume review + 1:1 mentorship</span>
                </li>
                <li className="flex items-center hover:transform hover:-translate-x-2 transition-all duration-300">
                  <span className="text-maximally-blue mr-2 animate-pulse">•</span>
                  <span className="gradient-text-marketing">Private Discord community access</span>
                </li>
                <li className="flex items-center hover:transform hover:-translate-x-2 transition-all duration-300">
                  <span className="text-maximally-blue mr-2 animate-pulse">•</span>
                  <span className="gradient-text-blue">Digital swag + alumni badge</span>
                </li>
                <li className="flex items-center hover:transform hover:-translate-x-2 transition-all duration-300">
                  <span className="text-maximally-blue mr-2 animate-pulse">•</span>
                  <span className="gradient-text-purple">Priority access to all future Maximally programs</span>
                </li>
              </ul>

              <p className="font-press-start text-lg gradient-text-rainbow mb-8 animate-pulse">
                This is not a chill internship — it's chaos, creativity, and real impact.
              </p>

              <div className="text-center">
                <a
                  href="https://forms.gle/AsU4XQkfwWvxsAqT7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="minecraft-button px-8 py-4 text-white inline-flex items-center gap-2 animate-bounce"
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
