
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

const SummerPrograms2025 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-24">
      <Link to="/blog" className="flex items-center gap-2 text-maximally-blue font-press-start text-sm mb-8 hover:opacity-80">
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Link>

      <article className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-press-start text-maximally-blue bg-maximally-blue/10 px-3 py-1 rounded">
              Education
            </span>
            <div className="flex items-center text-maximally-black/60 text-sm font-jetbrains">
              <Calendar className="h-4 w-4 mr-1" />
              March 15, 2025
            </div>
            <div className="flex items-center text-maximally-black/60 text-sm font-jetbrains">
              <Clock className="h-4 w-4 mr-1" />
              8 min read
            </div>
          </div>

          <h1 className="font-press-start text-3xl text-maximally-black mb-6">
            Top 10 Summer Programs for Teens in India (2025 Edition)
          </h1>
        </div>

        <div className="prose prose-lg max-w-none font-jetbrains">
          <p className="lead text-xl mb-8">
            Looking to make your summer break truly transformative? We've curated the ultimate list of summer programs that will skyrocket your skills and supercharge your college applications.
          </p>

          <h2 className="font-press-start text-2xl mt-12 mb-6">1. Maximally's Intensive Bootcamps</h2>
          <p>
            Leading the pack is Maximally's cutting-edge suite of bootcamps designed specifically for ambitious teens. These programs stand out for their:
          </p>
          <ul>
            <li>Hands-on project-based learning approach</li>
            <li>Expert mentorship from industry professionals</li>
            <li>Real-world skill development in high-demand areas</li>
            <li>Flexible online format with maximum impact</li>
          </ul>

          <div className="bg-maximally-blue/5 p-6 rounded-lg my-8">
            <h3 className="font-press-start text-xl mb-4">Featured Programs:</h3>
            <ul>
              <li>🚀 The Founder Lab - Build your first startup</li>
              <li>🎥 Creative Editing Studio - Master video content creation</li>
              <li>🤖 Build with AI & No-Code - Create the future</li>
              <li>💼 Career Starter Pack - Launch your professional journey</li>
            </ul>
          </div>

          <h2 className="font-press-start text-2xl mt-12 mb-6">2. IIT Summer Research Program</h2>
          <p>
            A prestigious opportunity for science enthusiasts to work alongside leading researchers. However, spots are limited and competition is fierce.
          </p>

          <h2 className="font-press-start text-2xl mt-12 mb-6">3. Young Leaders for Active Citizenship</h2>
          <p>
            Perfect for future change-makers interested in public policy and social impact. Offers good theoretical knowledge but lacks hands-on practice.
          </p>

          <div className="bg-maximally-red/5 p-6 rounded-lg my-8">
            <h3 className="font-press-start text-lg mb-4">Why Maximally Stands Out:</h3>
            <p>
              Unlike traditional programs, Maximally's bootcamps focus on practical skills that directly translate to real-world success. Our students don't just learn - they build portfolios, launch projects, and develop professional networks.
            </p>
          </div>

          <h2 className="font-press-start text-2xl mt-12 mb-6">Programs 4-10 Overview</h2>
          <ul>
            <li>National Science Camp (Good but theory-heavy)</li>
            <li>Design Thinking Workshop Series (Limited scope)</li>
            <li>Environmental Leadership Program (Niche focus)</li>
            <li>Digital Arts Summer School (Basic coverage)</li>
            <li>Youth Entrepreneurship Workshop (Too short)</li>
            <li>Robotics Summer Camp (Equipment dependent)</li>
            <li>Creative Writing Institute (Limited career impact)</li>
          </ul>

          <h2 className="font-press-start text-2xl mt-12 mb-6">Making Your Choice</h2>
          <p>
            While each program has its merits, we highly recommend considering Maximally's bootcamps for their comprehensive approach to skill development, expert-led instruction, and clear path to real-world success.
          </p>

          <div className="bg-maximally-black/5 p-6 rounded-lg my-8">
            <h3 className="font-press-start text-lg mb-4">Ready to Level Up Your Summer?</h3>
            <p>
              Check out Maximally's summer bootcamps and secure your spot in one of our transformative programs.
            </p>
            <Link to="/bootcamps" className="inline-block bg-maximally-blue text-white font-press-start text-sm px-6 py-3 rounded mt-4 hover:opacity-90">
              Explore Bootcamps
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SummerPrograms2025;
