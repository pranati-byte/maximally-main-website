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
        <div className="container mx-auto px-4 pt-24 md:pt-32 pb-16 md:pb-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12 animate-fade-in">
              <h1 className="font-press-start text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 gradient-text-rainbow animate-pulse">
                We're Hiring Interns & Volunteers
              </h1>
              <p className="font-jetbrains text-lg sm:text-xl gradient-text-blue mb-6 md:mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
                Want to work on real-world projects with India's boldest teen startup?
              </p>
            </div>

            <div className="pixel-border bg-white p-4 sm:p-6 md:p-8 mb-8 md:mb-12 hover:transform hover:-translate-y-2 transition-all duration-300">
              <p className="font-jetbrains text-base sm:text-lg mb-4 md:mb-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
                Join Maximally's Hustler Crew this summer — we're recruiting ambitious teenagers (ages 13–18) to help us build <span className="gradient-text-marketing font-bold">wild stuff</span>.
              </p>
              <p className="font-jetbrains text-base sm:text-lg mb-6 md:mb-8 animate-fade-in" style={{animationDelay: '0.9s'}}>
                Work directly with the founding team on <span className="gradient-text-blue">growth</span>, <span className="gradient-text-purple">design</span>, <span className="gradient-text-career">community</span>, outreach, content, tech & more.
              </p>

              <h2 className="font-press-start text-xl sm:text-2xl mb-4 md:mb-6 gradient-text-rainbow">Perks</h2>
              <ul className="space-y-3 md:space-y-4 font-jetbrains mb-6 md:mb-8 text-sm sm:text-base">
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

              <p className="font-press-start text-base sm:text-lg gradient-text-rainbow mb-6 md:mb-8 animate-pulse">
                This is an open program — first 500 students get in free, and once you're in, you're in for life.
              </p>

              <div className="mb-8">
                <h2 className="font-press-start text-xl mb-6 gradient-text-rainbow">Open Roles</h2>
                <div className="space-y-4">
                  <details className="pixel-border bg-white p-4">
                    <summary className="font-press-start text-lg cursor-pointer">🛠️ Tech & Operations</summary>
                    <div className="mt-4 font-jetbrains space-y-2">
                      <p className="font-bold">Tech & Ops Head (1)</p>
                      <ul className="list-disc pl-6">
                        <li>Builds and maintains Notion systems & automations</li>
                        <li>Sets up Zoom/Discord infrastructure</li>
                        <li>Handles technical troubleshooting</li>
                      </ul>
                    </div>
                  </details>

                  <details className="pixel-border bg-white p-4">
                    <summary className="font-press-start text-lg cursor-pointer">📣 Content & Communication</summary>
                    <div className="mt-4 font-jetbrains space-y-2">
                      <p className="font-bold">Content & Comms Lead (1)</p>
                      <ul className="list-disc pl-6">
                        <li>Manages daily communications and schedules</li>
                        <li>Coordinates student submissions</li>
                        <li>Maintains brand voice and engagement</li>
                      </ul>
                    </div>
                  </details>

                  <details className="pixel-border bg-white p-4">
                    <summary className="font-press-start text-lg cursor-pointer">🎙️ Speaker Management</summary>
                    <div className="mt-4 font-jetbrains space-y-2">
                      <p className="font-bold">Speaker & Guest Manager (1)</p>
                      <ul className="list-disc pl-6">
                        <li>Coordinates guest speakers and sessions</li>
                        <li>Manages event calendar and logistics</li>
                        <li>Hosts speaker sessions</li>
                      </ul>
                    </div>
                  </details>

                  <details className="pixel-border bg-white p-4">
                    <summary className="font-press-start text-lg cursor-pointer">🎨 Creative & Design</summary>
                    <div className="mt-4 font-jetbrains space-y-2">
                      <p className="font-bold">Creative Support / Designer (1)</p>
                      <ul className="list-disc pl-6">
                        <li>Creates templates and presentation assets</li>
                        <li>Supports students with design tools</li>
                        <li>Helps polish final submissions</li>
                      </ul>
                    </div>
                  </details>

                  <details className="pixel-border bg-white p-4">
                    <summary className="font-press-start text-lg cursor-pointer">🧑‍🏫 Mentorship</summary>
                    <div className="mt-4 font-jetbrains space-y-2">
                      <p className="font-bold">Guild Mentors (15-20)</p>
                      <ul className="list-disc pl-6">
                        <li>Guide student guilds through challenges</li>
                        <li>Provide feedback and support</li>
                        <li>Help maintain student engagement</li>
                      </ul>
                    </div>
                  </details>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="https://forms.gle/AsU4XQkfwWvxsAqT7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto minecraft-button px-6 py-3 sm:px-8 sm:py-4 text-white inline-flex items-center gap-2 animate-bounce"
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