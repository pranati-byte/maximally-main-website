import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { School, Users, Rocket, Star, ArrowRight, Mail, Building2, UserPlus, Award, Target, Zap, Brain } from "lucide-react";
import SEO from "@/components/SEO";
import TallyFormDialog from '@/components/TallyFormDialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from "react-router-dom";
import { BadgeCheck, Trophy, Medal, Heart } from "lucide-react";

const SponsorTier = ({ title, price, forText, slots, color, icon: Icon, benefits, ctaText }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className={`p-6 rounded-lg border-2 ${color} backdrop-blur-sm hover:shadow-xl transition-all`}
  >
    <div className="flex items-center gap-2 mb-4">
      <Icon className="h-6 w-6" />
      <h3 className="font-press-start text-lg">{title}</h3>
    </div>
    <div className="mb-4">
      <p className="text-2xl font-bold">₹{price.toLocaleString()}</p>
      <p className="text-sm opacity-80">For: {forText}</p>
      {slots && <p className="text-sm mt-1 text-maximally-blue">{slots}</p>}
    </div>
    <ul className="space-y-2 mb-6">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2 text-white">
            <span className="text-lg">{benefit.icon}</span>
            <span className="text-sm font-medium">{benefit.text}</span>
          </li>
        ))}
      </ul>
    <Button className="w-full bg-black hover:bg-black/80 text-white">
      {ctaText}
    </Button>
  </motion.div>
);

const Collaborate = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sponsorTiers = [
    {
      title: "PLATINUM SPONSOR",
      price: 100000,
      forText: "Big Edtech / VC-backed Startups",
      slots: "Only 2 spots available",
      color: "border-violet-600 bg-violet-100/10",
      icon: Trophy,
      benefits: [
        { icon: "🎤", text: "Title Sponsor on all bootcamp communications" },
        { icon: "🎙️", text: "Keynote slot at our Grand Demo Day" },
        { icon: "🏢", text: "Premium booth at offline finale" },
        { icon: "🤝", text: "Full co-branding on website, merch, posters, socials" },
        { icon: "📨", text: "Newsletter feature (10K+ readers)" },
        { icon: "📸", text: "Instagram/YouTube collab (Reels, mentions)" },
        { icon: "🧠", text: "High-res photo & video bundle" },
        { icon: "📊", text: "Dedicated Impact Report section" },
        { icon: "📰", text: "Inclusion in press outreach" },
        { icon: "📣", text: "Priority social shoutouts" }
      ],
      ctaText: "Become a Platinum Sponsor"
    },
    {
      title: "GOLD SPONSOR",
      price: 50000,
      forText: "Youth Brands (Red Bull, boAt, Paytm, etc.)",
      slots: "Max 4 brands",
      color: "border-yellow-500 bg-yellow-100/10",
      icon: BadgeCheck,
      benefits: [
        { icon: "🌟", text: "Gold Partner tag on branding" },
        { icon: "📸", text: "IG Reels + student content collab" },
        { icon: "📢", text: "Session shoutouts + story tags" },
        { icon: "🏷️", text: "Logo on website & posters" },
        { icon: "📝", text: "Blog + Impact Report mention" },
        { icon: "📬", text: "Newsletter feature" },
        { icon: "🤝", text: "Sampling opportunity during bootcamp" }
      ],
      ctaText: "Become a Gold Sponsor"
    },
    {
      title: "SILVER SPONSOR",
      price: 25000,
      forText: "Local Businesses / MSMEs / Alumni",
      slots: "Unlimited",
      color: "border-gray-400 bg-gray-100/10",
      icon: Medal,
      benefits: [
        { icon: "🖼️", text: "Logo on website, event posters" },
        { icon: "📣", text: "Instagram gratitude post" },
        { icon: "🎤", text: "Acknowledged during opening & closing" },
        { icon: "📝", text: "Mention in our final blog + Impact Report" },
        { icon: "💌", text: "End-of-camp email update with results" }
      ],
      ctaText: "Become a Silver Sponsor"
    },
    {
      title: "MICRO SPONSOR",
      price: 5000,
      forText: "Parents, School Owners, Alumni & Community Supporters",
      slots: "Open to all",
      color: "border-red-300 bg-red-100/10",
      icon: Heart,
      benefits: [
        { icon: "💖", text: "\"Community Patron\" listing on website" },
        { icon: "📊", text: "Named in our final Impact Report" },
        { icon: "📢", text: "Shoutout on Instagram" },
        { icon: "🙌", text: "Back the next gen with pride" }
      ],
      ctaText: "Support as a Micro Sponsor"
    }
  ];

  return (
    <>
      <SEO
        title="Sponsor Maximally Bootcamp 2025 | Partner with India's Most Ambitious Teen Program"
        description="Back India's boldest teenage founders, creators, and leaders. Join as a Platinum, Gold, Silver, or Micro sponsor. 1,000+ students, 100+ schools, massive brand visibility."
      />

      <div className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-black to-maximally-black">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h1 className="font-press-start text-3xl md:text-4xl text-white mb-6 glow-text">
                🌟 Sponsor the Maximally Bootcamp 2025
              </h1>
              <p className="font-jetbrains text-xl text-[#00FFFF] font-bold">
                Back India's boldest teenage founders, creators, and leaders.
              </p>
              <p className="font-jetbrains text-lg text-[#90EE90] mt-4 tracking-wide">
                1,000+ students | 100+ schools | Real-world projects | Massive brand visibility
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sponsorTiers.map((tier) => (
                <SponsorTier key={tier.title} {...tier} />
              ))}
            </div>
          </div>
        </section>

        {/* Who Can Collaborate */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="font-press-start text-3xl text-center mb-12">Who Can Collaborate?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <School className="h-12 w-12 text-[#39FF14] mb-4" />
                <h3 className="font-press-start text-lg mb-3">Schools</h3>
                <p className="font-jetbrains">Partner with us to bring cutting-edge skills to your students</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <Users className="h-12 w-12 text-[#FF5F5F] mb-4" />
                <h3 className="font-press-start text-lg mb-3">Guest Speakers</h3>
                <p className="font-jetbrains">Share your expertise with ambitious young minds</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <Building2 className="h-12 w-12 text-[#B400FF] mb-4" />
                <h3 className="font-press-start text-lg mb-3">Startups & NGOs</h3>
                <p className="font-jetbrains">Create impact through meaningful partnerships</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <UserPlus className="h-12 w-12 text-[#4D89FF] mb-4" />
                <h3 className="font-press-start text-lg mb-3">Mentors</h3>
                <p className="font-jetbrains">Guide the next generation of innovators</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-press-start text-3xl text-center mb-12">Why Partner With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 border-[#39FF14]/30 hover:border-[#39FF14] transition-all">
                <CardContent className="pt-6">
                  <Target className="h-10 w-10 text-[#39FF14] mb-4" />
                  <h3 className="font-press-start text-lg mb-3">Impact the Future</h3>
                  <p className="font-jetbrains">Shape the next generation of entrepreneurs and innovators</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-[#FF5F5F]/30 hover:border-[#FF5F5F] transition-all">
                <CardContent className="pt-6">
                  <Award className="h-10 w-10 text-[#FF5F5F] mb-4" />
                  <h3 className="font-press-start text-lg mb-3">Gain Recognition</h3>
                  <p className="font-jetbrains">Be recognized as a leader in teen education innovation</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-[#B400FF]/30 hover:border-[#B400FF] transition-all">
                <CardContent className="pt-6">
                  <Zap className="h-10 w-10 text-[#B400FF] mb-4" />
                  <h3 className="font-press-start text-lg mb-3">Flexible Collaboration</h3>
                  <p className="font-jetbrains">Choose from multiple ways to make an impact</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-press-start text-3xl mb-8">Ready to Make an Impact?</h2>
            <Button 
              onClick={() => window.location.href = 'mailto:hello@maximally.in'}
              className="bg-[#FF5F5F] hover:bg-[#FF5F5F]/90 text-white px-8 py-6 text-lg font-jetbrains group shadow-xl transform hover:scale-105 transition-all"
            >
              Join the Movement
              <Mail className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
        <TallyFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
      </div>
    </>
  );
};

export default Collaborate;