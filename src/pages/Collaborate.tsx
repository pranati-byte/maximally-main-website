import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { School, Users, Rocket, Star, ArrowRight, Mail, Building2, UserPlus, Award, Target, Zap, Brain } from "lucide-react";
import SEO from "@/components/SEO";
import TallyFormDialog from '@/components/TallyFormDialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';


const Collaborate = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Collaborate with Maximally | Empower Future Innovators"
        description="Partner with Maximally to shape the future of teen education in India. Join us in empowering the next generation of innovators and entrepreneurs."
      />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 animate-grid-flow" />
        <div className="absolute inset-0">
          <div className="absolute w-64 h-64 rounded-full bg-maximally-blue/20 -top-32 -left-32 blur-3xl animate-pulse"></div>
          <div className="absolute w-64 h-64 rounded-full bg-maximally-purple/20 -bottom-32 -right-32 blur-3xl animate-pulse delay-700"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto text-center relative z-10"
        >
          <h1 className="font-press-start text-4xl md:text-5xl mb-6">
            Join the <span className="text-[#FF5F5F]">Revolution</span>: Empower Future <span className="text-[#39FF14]">Innovators</span>!
          </h1>
          <p className="font-jetbrains text-xl text-maximally-black/80 max-w-3xl mx-auto mb-8">
            Together, we can equip India's brightest young minds with the tools they need to shape the future.
          </p>
          <Button 
            onClick={() => window.location.href = 'mailto:hello@maximally.in'} 
            className="bg-maximally-blue hover:bg-maximally-blue/90 text-white px-8 py-6 text-lg font-jetbrains group transform hover:scale-105 transition-all"
          >
            Let's Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
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

      {/* Sponsorship Tiers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-press-start text-3xl text-center mb-12">Sponsorship Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#4D89FF]"
            >
              <Star className="h-12 w-12 text-[#4D89FF] mb-4" />
              <h3 className="font-press-start text-xl mb-4">Pixel Patron</h3>
              <p className="font-press-start text-lg mb-4 text-[#4D89FF]">₹25,000</p>
              <ul className="space-y-3 font-jetbrains mb-6">
                <li>• Logo on website</li>
                <li>• Social media mentions</li>
                <li>• Impact report access</li>
              </ul>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-[#4D89FF] rounded-full w-1/4"></div>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#B400FF]"
            >
              <Rocket className="h-12 w-12 text-[#B400FF] mb-4" />
              <h3 className="font-press-start text-xl mb-4">Resolution Partner</h3>
              <p className="font-press-start text-lg mb-4 text-[#B400FF]">₹1,00,000</p>
              <ul className="space-y-3 font-jetbrains mb-6">
                <li>• All Pixel Patron benefits</li>
                <li>• Speaking opportunities</li>
                <li>• Brand integration in content</li>
              </ul>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-[#B400FF] rounded-full w-1/2"></div>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#39FF14]"
            >
              <Brain className="h-12 w-12 text-[#39FF14] mb-4" />
              <h3 className="font-press-start text-xl mb-4">Infinite Mode</h3>
              <p className="font-press-start text-lg mb-4 text-[#39FF14]">₹5,00,000+</p>
              <ul className="space-y-3 font-jetbrains mb-6">
                <li>• All Resolution Partner benefits</li>
                <li>• Custom collaboration options</li>
                <li>• Priority access to events</li>
              </ul>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-[#39FF14] rounded-full w-3/4"></div>
              </div>
            </motion.div>
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
  );
};

export default Collaborate;