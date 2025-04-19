import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, Rocket, Brain, Book, Trophy, Star } from "lucide-react";
import Hero from "@/components/Hero";
import WhyMaximally from "@/components/WhyMaximally";
import Events from "@/components/Events";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Helmet } from 'react-helmet'; //Import from original

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Maximally | India's Premier Community for Young Innovators"
        description="Join Maximally to unlock your future in tech, entrepreneurship, and innovation. Learn from industry experts and build real-world skills."
      />

      {/* Hero Section with Minecraft-style background */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-grid-white/10 animate-grid-flow">
          {/* Pixelated clouds animation */}
          <div className="absolute w-32 h-32 bg-maximally-blue/20 blur-xl animate-float top-10 left-10"></div>
          <div className="absolute w-32 h-32 bg-maximally-purple/20 blur-xl animate-float-delayed top-40 right-20"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h1 className="font-press-start text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            Unlock Your Future: Join India's Premier Community for
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-maximally-blue to-maximally-purple block mt-2">
              Young Innovators
            </span>
          </h1>

          <p className="font-jetbrains text-xl text-maximally-black/80 max-w-3xl mx-auto mb-8">
            Level up your skills, connect with industry mentors, and build your future in tech and entrepreneurship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              className="pixel-button bg-maximally-blue hover:bg-maximally-blue/90 text-white px-8 py-6 text-lg font-jetbrains group transform hover:scale-105 transition-all"
            >
              <Link to="/bootcamps">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button 
              asChild
              variant="outline"
              className="pixel-button bg-white hover:bg-gray-50 px-8 py-6 text-lg font-jetbrains group transform hover:scale-105 transition-all"
            >
              <Link to="/community">
                Join Community
                <Users className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Power-Ups (Courses) Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-press-start text-3xl text-center mb-12">Power Up Your Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Entrepreneurship",
                description: "Launch your first startup",
                color: "bg-[#39FF14]"
              },
              {
                icon: Brain,
                title: "AI & No-Code",
                description: "Build with cutting-edge tech",
                color: "bg-[#FF5F5F]"
              },
              {
                icon: Trophy,
                title: "Public Speaking",
                description: "Become a confident leader",
                color: "bg-[#B400FF]"
              }
            ].map((course, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="pixel-border bg-white p-6 rounded-lg shadow-lg group"
              >
                <course.icon className={`h-12 w-12 ${course.color} text-white mb-4 transform group-hover:rotate-12 transition-transform`} />
                <h3 className="font-press-start text-xl mb-3">{course.title}</h3>
                <p className="font-jetbrains">{course.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Growth Journey */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-press-start text-3xl text-center mb-12">Your Growth Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { level: "Noob", icon: Book, color: "bg-gray-500" },
              { level: "Builder", icon: Brain, color: "bg-blue-500" },
              { level: "Creator", icon: Star, color: "bg-purple-500" },
              { level: "Founder", icon: Trophy, color: "bg-green-500" }
            ].map((stage, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="pixel-border bg-white p-6 rounded-lg shadow-lg group"
              >
                <stage.icon className={`h-10 w-10 ${stage.color} text-white mb-4`} />
                <h3 className="font-press-start text-lg mb-2">{stage.level}</h3>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className={`h-2 ${stage.color} rounded-full`} style={{ width: `${(index + 1) * 25}%` }}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhyMaximally />
      <Events />

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-maximally-blue/5 to-maximally-purple/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-press-start text-3xl mb-6">Ready to Shape the Future?</h2>
          <p className="font-jetbrains text-lg mb-8 max-w-2xl mx-auto">
            Join India's most ambitious community of teen innovators and start building your future today.
          </p>
          <Button 
            asChild
            className="pixel-button bg-maximally-blue hover:bg-maximally-blue/90 text-white px-8 py-6 text-lg font-jetbrains group transform hover:scale-105 transition-all"
          >
            <Link to="/bootcamps">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;