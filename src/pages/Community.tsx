import { Link } from 'react-router-dom';
import { Users, MessageSquare, Share2, Rocket, Zap, Video, Briefcase, Target } from 'lucide-react';

export default function Community() {
  return (
    <div className="min-h-screen pt-24 bg-white w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-press-start text-maximally-black mb-6">
            Join Our Community
          </h1>
          <p className="text-lg text-maximally-black/80 font-jetbrains max-w-2xl mx-auto">
            Connect with fellow learners, share experiences, and grow together in our vibrant community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-maximally-black">
            <Users className="h-12 w-12 text-maximally-blue mb-4" />
            <h3 className="text-xl font-press-start mb-4">Connect</h3>
            <p className="text-maximally-black/80 font-jetbrains">
              Network with ambitious peers who share your passion for learning and growth.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-maximally-black">
            <MessageSquare className="h-12 w-12 text-maximally-red mb-4" />
            <h3 className="text-xl font-press-start mb-4">Discuss</h3>
            <p className="text-maximally-black/80 font-jetbrains">
              Engage in meaningful discussions about skills, projects, and opportunities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-maximally-black">
            <Share2 className="h-12 w-12 text-maximally-green mb-4" />
            <h3 className="text-xl font-press-start mb-4">Share</h3>
            <p className="text-maximally-black/80 font-jetbrains">
              Share your journey, celebrate wins, and learn from others' experiences.
            </p>
          </div>
        </div>

        <div className="text-center space-y-8">
          <a 
            href="https://chat.whatsapp.com/maximally" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-maximally-blue text-white font-press-start rounded-lg hover:bg-maximally-blue/90 transition-colors"
          >
            Join WhatsApp Community
          </a>

          <div className="space-y-4">
            <p className="text-sm text-maximally-black/60 font-jetbrains">
              Join topic-specific Discord communities:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <a 
                href="#" 
                className="p-4 rounded-2xl border-2 border-maximally-black/10 hover:bg-maximally-black/5 transition-all hover:scale-105 flex items-center gap-2 font-jetbrains"
              >
                <Rocket className="h-5 w-5 text-maximally-blue" />
                Entrepreneurship
              </a>
              <a 
                href="#" 
                className="p-4 rounded-2xl border-2 border-maximally-black/10 hover:bg-maximally-black/5 transition-all hover:scale-105 flex items-center gap-2 font-jetbrains"
              >
                <MessageSquare className="h-5 w-5 text-maximally-red" />
                Public Speaking & MUN
              </a>
              <a 
                href="#" 
                className="p-4 rounded-2xl border-2 border-maximally-black/10 hover:bg-maximally-black/5 transition-all hover:scale-105 flex items-center gap-2 font-jetbrains"
              >
                <Target className="h-5 w-5 text-maximally-green" />
                Digital Marketing
              </a>
              <a 
                href="#" 
                className="p-4 rounded-2xl border-2 border-maximally-black/10 hover:bg-maximally-black/5 transition-all hover:scale-105 flex items-center gap-2 font-jetbrains"
              >
                <Zap className="h-5 w-5 text-maximally-purple" />
                No-code & AI
              </a>
              <a 
                href="#" 
                className="p-4 rounded-2xl border-2 border-maximally-black/10 hover:bg-maximally-black/5 transition-all hover:scale-105 flex items-center gap-2 font-jetbrains"
              >
                <Video className="h-5 w-5 text-maximally-orange" />
                Video Editing
              </a>
              <a 
                href="#" 
                className="p-4 rounded-2xl border-2 border-maximally-black/10 hover:bg-maximally-black/5 transition-all hover:scale-105 flex items-center gap-2 font-jetbrains"
              >
                <Briefcase className="h-5 w-5 text-maximally-blue" />
                Career Launchpad
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}