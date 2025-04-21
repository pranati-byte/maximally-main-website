import { useEffect, useState } from 'react';
import { ArrowRight, Star, Users, Target, Rocket, Sparkles, Crown, Code, Zap, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SkillTracks from '@/components/SkillTracks';
import WhyMaximally from '@/components/WhyMaximally';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import { Helmet } from 'react-helmet';
import SEO from '@/components/SEO';
import TallyFormDialog from "../components/TallyFormDialog";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import BootcampCard from "@/components/BootcampCard";

const PowerUpCard = ({ title, icon, link }: { title: string; icon: string; link: string }) => (
  <Link to={link} className="group">
    <div className="pixel-border bg-white p-6 hover:transform hover:scale-[1.02] transition-all">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-press-start text-lg mb-2">{title}</h3>
      <span className="font-jetbrains text-maximally-blue group-hover:translate-x-1 transition-transform inline-flex items-center">
        Level Up <span className="ml-1">→</span>
      </span>
    </div>
  </Link>
);

const BenefitCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="pixel-border bg-white p-6">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="font-press-start text-lg mb-2">{title}</h3>
    <p className="font-jetbrains text-maximally-black/70">{description}</p>
  </div>
);

const Index = () => {
  return (
    <>
      <Hero />

      <section className="py-24 bg-gradient-to-b from-white to-maximally-purple/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-press-start text-3xl mb-6">What is Maximally?</h2>
              <p className="font-jetbrains text-lg mb-6">
                We're building the school we wish existed. A place where teenagers learn
                real-world skills, build amazing projects, and join a community of
                ambitious peers.
              </p>
              <p className="font-jetbrains text-lg">
                No boring lectures. No meaningless homework.
                Just practical skills that school doesn't teach.
              </p>
            </div>
            <div className="pixel-border bg-maximally-blue/5 p-8 animate-float">
              {/* Placeholder for animation */}
              <img src="/pixel-learning.svg" alt="Learning illustration" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-press-start text-3xl text-center mb-12">Power-Ups</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PowerUpCard title="Entrepreneurship" icon="🚀" link="/entrepreneurship" />
            <PowerUpCard title="Public Speaking" icon="🎯" link="/public-speaking" />
            <PowerUpCard title="AI + No-Code" icon="🤖" link="/no-code-ai" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-maximally-purple/5 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-press-start text-3xl mb-4">The Summer of a Lifetime Starts Here</h2>
          <p className="font-jetbrains text-lg mb-12 max-w-2xl mx-auto">
            Join India's most ambitious teens for a 7-day immersive bootcamp
            where you'll build projects, make friends, and level up your skills.
          </p>
          <BootcampCard />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-press-start text-3xl text-center mb-12">Why Maximally Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard 
              icon="✅"
              title="Learn by Doing"
              description="Build real projects, not just theory"
            />
            <BenefitCard 
              icon="⚡"
              title="Interactive Learning"
              description="No boring lectures, guaranteed"
            />
            <BenefitCard 
              icon="🎯"
              title="Real Feedback"
              description="Get mentored by industry experts"
            />
            <BenefitCard 
              icon="🧪"
              title="Built for Gen Z"
              description="By teenagers, for teenagers"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-maximally-blue/5 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-press-start text-3xl mb-6">Partner With Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link to="/collaborate" className="pixel-border bg-white p-6 hover:bg-maximally-blue/5 transition-all">
              <h3 className="font-press-start text-lg mb-2">Schools</h3>
              <p className="font-jetbrains">Bring Maximally to your students</p>
            </Link>
            <Link to="/join-us" className="pixel-border bg-white p-6 hover:bg-maximally-blue/5 transition-all">
              <h3 className="font-press-start text-lg mb-2">Creators</h3>
              <p className="font-jetbrains">Teach & inspire</p>
            </Link>
            <Link to="/collaborate" className="pixel-border bg-white p-6 hover:bg-maximally-blue/5 transition-all">
              <h3 className="font-press-start text-lg mb-2">Organizations</h3>
              <p className="font-jetbrains">Co-create high-impact programs</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-maximally-purple/10 via-maximally-blue/10 to-maximally-green/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-press-start text-3xl mb-4">Ready to Start?</h2>
          <p className="font-jetbrains text-lg mb-8">Join the movement. Build your future.</p>
          <Link to="/bootcamps">
            <Button 
              size="lg"
              className="pixel-border bg-maximally-green hover:bg-maximally-green/90 text-white font-press-start px-8 py-6 text-lg animate-pulse"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
const SummerBootcamps = () => {
  return;
};