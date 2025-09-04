
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import TallyFormDialog from "@/components/TallyFormDialog";
import { useState } from "react";
import { Users, MapPin, Mail, HelpCircle, Building, Target } from "lucide-react";

const About = () => {
  const [isTallyFormOpen, setIsTallyFormOpen] = useState(false);
  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="About Maximally | Where Global Innovators Are Born"
        description="Join the global community for ambitious builders. Learn entrepreneurship, AI, and innovation through our transformative hackathons."
      />

      {/* Hero Section */}
      <section className="py-20 bg-maximally-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 animate-grid-flow" />
        <div className="container mx-auto px-4 text-center relative">
          <h1 className="font-press-start text-2xl md:text-3xl lg:text-4xl text-white mb-6">
            About Maximally
          </h1>
          <p className="font-body text-white/80 text-xl md:text-2xl mb-8">
            We're building the world's most powerful network for teen builders, creators, and founders.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* What is Maximally */}
            <div className="glass-card rounded-card p-8">
              <Target className="h-12 w-12 text-maximally-red mb-4" />
              <h3 className="font-press-start text-sm text-maximally-black mb-4">What is Maximally</h3>
              <p className="font-body text-maximally-gray mb-4">
                The boldest hackathon ecosystem for teen founders, coders, and creators worldwide. Born in India but built for the world.
              </p>
              <p className="font-body text-maximally-gray">
                We host high-stakes innovation events, chaos sprints, and public launch challenges designed for ambitious teenagers aged 13-19.
              </p>
            </div>

            {/* Our Story */}
            <Link to="/story">
              <div className="glass-card rounded-card p-8 group cursor-pointer hover:scale-105 transition-all duration-300">
                <Building className="h-12 w-12 text-maximally-yellow mb-4 group-hover:text-maximally-red transition-colors" />
                <h3 className="font-press-start text-sm text-maximally-black mb-4">Our Story</h3>
                <p className="font-body text-maximally-gray">
                  Read how Maximally started and our vision for empowering the next generation of builders.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Bootcamp Experience */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-press-start text-3xl mb-12 text-center">The Hackathon Experience</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Team & Judges */}
            <Link to="/featured">
              <div className="glass-card rounded-card p-8 group cursor-pointer hover:scale-105 transition-all duration-300">
                <Users className="h-12 w-12 text-maximally-blue mb-4 group-hover:text-maximally-yellow transition-colors" />
                <h3 className="font-press-start text-sm text-maximally-black mb-4">Team & Judges</h3>
                <p className="font-body text-maximally-gray">
                  Meet the industry leaders, mentors, and builders who make our events world-class.
                </p>
              </div>
            </Link>

            {/* Partners */}
            <Link to="/collaborate">
              <div className="glass-card rounded-card p-8 group cursor-pointer hover:scale-105 transition-all duration-300">
                <MapPin className="h-12 w-12 text-maximally-green mb-4 group-hover:text-maximally-yellow transition-colors" />
                <h3 className="font-press-start text-sm text-maximally-black mb-4">Partners</h3>
                <p className="font-body text-maximally-gray">
                  Discover the organizations and companies supporting our global hackathon league.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-press-start text-3xl mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">1️⃣</div>
              <h3 className="font-press-start text-xl mb-4">Apply</h3>
              <p className="font-jetbrains">Submit your application and show us your potential</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">2️⃣</div>
              <h3 className="font-press-start text-xl mb-4">Learn</h3>
              <p className="font-jetbrains">Master real-world skills through intensive training</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">3️⃣</div>
              <h3 className="font-press-start text-xl mb-4">Succeed</h3>
              <p className="font-jetbrains">Join our alumni network and access lifetime opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Inner Circle */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-press-start text-3xl mb-12 text-center">The Inner Circle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#39FF14]/10 p-6 rounded-lg">
              <h3 className="font-press-start text-xl mb-4">🏆 Certificate of Excellence</h3>
              <p className="font-jetbrains">Your badge of honor in the digital age</p>
            </div>
            <div className="bg-[#FF5F5F]/10 p-6 rounded-lg">
              <h3 className="font-press-start text-xl mb-4">🌐 Lifetime Network</h3>
              <p className="font-jetbrains">Connect with India's future leaders</p>
            </div>
            <div className="bg-[#B400FF]/10 p-6 rounded-lg">
              <h3 className="font-press-start text-xl mb-4">💼 Career Growth</h3>
              <p className="font-jetbrains">Access to internships and collaborations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-press-start text-3xl mb-8">Our Vision</h2>
          <p className="font-jetbrains text-xl max-w-3xl mx-auto mb-12">
            We're building the world's most powerful network of young{" "}
            <span className="bg-[#39FF14]/20 px-2">innovators</span>,{" "}
            <span className="bg-[#FF5F5F]/20 px-2">entrepreneurs</span>, and{" "}
            <span className="bg-[#B400FF]/20 px-2">changemakers</span>. Our mission
            is to foster ambition, drive change, and create the next generation of
            world-class founders.
          </p>
          <div className="flex justify-center">
            <Link
              to="/bootcamps"
              className="pixel-button bg-maximally-blue text-white inline-flex items-center gap-2 px-8 py-4 text-lg hover:scale-105 transform transition-all"
            >
              <span>Ready to Maximize Your Potential?</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact and Support */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link to="/contact">
              <div className="glass-card rounded-card p-8 group cursor-pointer hover:scale-105 transition-all duration-300 text-center">
                <Mail className="h-12 w-12 text-maximally-red mb-4 mx-auto group-hover:text-maximally-yellow transition-colors" />
                <h3 className="font-press-start text-sm text-maximally-black mb-2">Contact</h3>
                <p className="font-body text-maximally-gray">Get in touch with questions, partnerships, or collaboration ideas</p>
              </div>
            </Link>

            <Link to="/support">
              <div className="glass-card rounded-card p-8 group cursor-pointer hover:scale-105 transition-all duration-300 text-center">
                <HelpCircle className="h-12 w-12 text-maximally-blue mb-4 mx-auto group-hover:text-maximally-yellow transition-colors" />
                <h3 className="font-press-start text-sm text-maximally-black mb-2">Help Center</h3>
                <p className="font-body text-maximally-gray">Find answers to common questions and get support</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
