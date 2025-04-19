import { Users, MessageSquare, Share2, Rocket, Star, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Community = () => {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-white via-maximally-blue/5 to-maximally-purple/5 relative">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 pixel-grid opacity-30" />

      <div className="container mx-auto px-4 relative">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-press-start text-4xl md:text-5xl mb-6"
          >
            Join Our Community_
          </motion.h1>
          <p className="font-jetbrains text-xl text-maximally-black/80 max-w-2xl mx-auto">
            Connect with fellow learners, share experiences, and grow together in our vibrant community of ambitious teens.
          </p>
        </div>

        {/* Core Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="pixel-border p-6 bg-white hover:transform hover:scale-105 transition-all duration-300"
          >
            <Users className="h-10 w-10 text-maximally-blue mb-4" />
            <h3 className="font-press-start text-xl mb-4">Connect</h3>
            <p className="font-jetbrains text-maximally-black/70">
              Network with ambitious peers who share your passion for learning and growth.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="pixel-border p-6 bg-white hover:transform hover:scale-105 transition-all duration-300"
          >
            <MessageSquare className="h-10 w-10 text-maximally-red mb-4" />
            <h3 className="font-press-start text-xl mb-4">Discuss</h3>
            <p className="font-jetbrains text-maximally-black/70">
              Engage in meaningful discussions about skills, projects, and opportunities.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pixel-border p-6 bg-white hover:transform hover:scale-105 transition-all duration-300"
          >
            <Share2 className="h-10 w-10 text-maximally-purple mb-4" />
            <h3 className="font-press-start text-xl mb-4">Share</h3>
            <p className="font-jetbrains text-maximally-black/70">
              Share your journey, celebrate wins, and learn from others' experiences.
            </p>
          </motion.div>
        </div>

        {/* Discord Community Section */}
        <div className="text-center mb-16 bg-[#5865F2]/10 pixel-border p-8 rounded-lg">
          <h2 className="font-press-start text-2xl mb-6 text-[#5865F2]">
            Discord Community
          </h2>
          <p className="font-jetbrains text-lg mb-8 max-w-2xl mx-auto">
            Join our thriving Discord server where teens collaborate, learn, and grow together. Get instant access to exclusive resources, events, and a supportive community.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Link to="#" className="pixel-border p-6 bg-white hover:bg-[#5865F2]/5 transition-all">
              <Rocket className="h-8 w-8 mx-auto mb-3 text-[#5865F2]" />
              <span className="font-press-start text-sm">Entrepreneurship</span>
            </Link>
            <Link to="#" className="pixel-border p-6 bg-white hover:bg-[#5865F2]/5 transition-all">
              <MessageSquare className="h-8 w-8 mx-auto mb-3 text-[#5865F2]" />
              <span className="font-press-start text-sm">Public Speaking & MUN</span>
            </Link>
            <Link to="#" className="pixel-border p-6 bg-white hover:bg-[#5865F2]/5 transition-all">
              <Target className="h-8 w-8 mx-auto mb-3 text-[#5865F2]" />
              <span className="font-press-start text-sm">Digital Marketing</span>
            </Link>
            <Link to="#" className="pixel-border p-6 bg-white hover:bg-[#5865F2]/5 transition-all">
              <Star className="h-8 w-8 mx-auto mb-3 text-[#5865F2]" />
              <span className="font-press-start text-sm">No-code & AI</span>
            </Link>
            <Link to="#" className="pixel-border p-6 bg-white hover:bg-[#5865F2]/5 transition-all">
              <Zap className="h-8 w-8 mx-auto mb-3 text-[#5865F2]" />
              <span className="font-press-start text-sm">Career Launchpad</span>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="#"
              className="pixel-button bg-[#5865F2] text-white inline-flex items-center gap-2 hover:animate-pulse px-8 py-4"
            >
              Join Discord Server
              <Users className="h-5 w-5" />
            </Link>
            <Link 
              to="https://chat.whatsapp.com/Iu4ETGF5EwuDGSnszhrZaV"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-button bg-[#25D366] text-white inline-flex items-center gap-2 hover:animate-pulse px-8 py-4"
            >
              Join WhatsApp Community
              <MessageSquare className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;