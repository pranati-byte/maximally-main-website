
import { ArrowRight, Lock, Star, Users, Zap } from 'lucide-react';
import SEO from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';

const Community = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="Maximally Inner Circle | Private Community for Ambitious Teens"
        description="Join India's most exclusive teen community. By application only. For builders, speakers, and future leaders."
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient 
        to-maximally-blue from-maximally-red/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 animate-grid-flow" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center">
            <div className="inline-block bg-maximally-red/20 px-4 py-2 rounded-full mb-6 
              animate-pulse shadow-lg border border-maximally-red/30">
              <span className="font-jetbrains text-maximally-red">
                <Lock className="h-4 w-4 inline-block mr-2" />
                By Application Only
              </span>
            </div>
            <h1 className="font-press-start text-3xl md:text-4xl mb-6 
              bg-gradient-to-r from-maximally-red to-maximally-blue bg-clip-text text-transparent">
              Maximally Inner Circle_
            </h1>
            <p className="font-jetbrains text-xl md:text-2xl mb-8 max-w-2xl mx-auto 
              text-black/80 leading-relaxed">
              The most ambitious teens in India. One private community. Zero fluff.
            </p>
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-16 bg-gradient-to-br from
        -white to-maximally-blue/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-jetbrains text-lg max-w-3xl mx-auto">
              This isn't your average Discord server. To join the Maximally Inner Circle, 
              you'll need to apply, interview, and prove your spark. We're looking for:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-maximally-blue/30 hover:border-maximally-blue 
              transition-all transform hover:scale-105 bg-gradient-to-br from-white to-maximally-blue/10">
              <CardContent className="p-6">
                <h3 className="font-press-start text-lg mb-2">🚀 Self-Starters</h3>
                <p className="font-jetbrains">Building cool stuff that matters</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-maximally-red/30 hover:border-maximally-red 
              transition-all transform hover:scale-105 bg-gradient-to-br from-white to-maximally-red/10">
              <CardContent className="p-6">
                <h3 className="font-press-start text-lg mb-2">💡 Bold Ideas</h3>
                <p className="font-jetbrains">Dreams bigger than most</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-maximally-purple/30 hover:border-maximally-purple 
              transition-all transform hover:scale-105 bg-gradient-to-br from-white to-maximally-purple/10">
              <CardContent className="p-6">
                <h3 className="font-press-start text-lg mb-2">🎯 Top Alumni</h3>
                <p className="font-jetbrains">Bootcamp graduates who crushed it</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#39FF14]/30 hover:border-[#39FF14] 
              transition-all transform hover:scale-105 bg-gradient-to-br from-white to-[#39FF14]/10">
              <CardContent className="p-6">
                <h3 className="font-press-start text-lg mb-2">🔍 Curious Minds</h3>
                <p className="font-jetbrains">Who actually take action</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 bg-gradient-to-br from-maximally-black to-maximally-blue/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-press-start text-2xl mb-8 text-center 
              bg-gradient-to-r from 
              -maximally-red to-maximally-blue bg-clip-text text-transparent">
              Access by Application Only
            </h2>
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-white/20">
              <div className="mb-8">
                <h3 className="font-press-start text-xl mb-4 text-maximally-blue 
                  animate-pulse">
                  Easiest Way In? Do the Bootcamp.
                </h3>
                <p className="font-jetbrains">
                  Complete one of our bootcamps and stand out as a Maximally alumnus. 
                  If you perform well, you'll have the best chance of securing a spot in the community.
                </p>
              </div>
              <div>
                <h3 className="font-press-start text-xl mb-4 text-maximally-red">
                  No Public Invites. No Exceptions.
                </h3>
                <p className="font-jetbrains mb-6">
                  We don't drop open links. Ever. If you're serious, apply below.
                </p>
                <button
                  onClick={() => window.location.href = 'https://tally.so/r/wQEGEA'}
                  className="pixel-button bg-maximally-red text-white inline-flex items-center gap-2 
                    hover:bg-maximally-red/90 transform hover:scale-105 transition-all"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-gradient-to-br from-white to-maximally-blue/5">
        <div className="container mx-auto px-4">
          <h2 className="font-press-start text-2xl mb-12 text-center 
            bg-gradient-to-r from-maximally-red to-maximally-blue bg-clip-text text-transparent">
            What You Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-maximally-blue/10 to-white p-6 rounded-lg 
              transform hover:scale-105 transition-all shadow-lg border border-maximally-blue/20">
              <Users className="h-8 w-8 mb-4 text-maximally-blue animate-pulse" />
              <h3 className="font-press-start text-lg mb-2">Private Access</h3>
              <ul className="font-jetbrains space-y-2">
                <li>• Access to our private Discord</li>
                <li>• Invite-only WhatsApp circles</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-maximally-red/10 to-white p-6 rounded-lg 
              transform hover:scale-105 transition-all shadow-lg border border-maximally-red/20">
              <Star className="h-8 w-8 mb-4 text-maximally-red animate-pulse" />
              <h3 className="font-press-start text-lg mb-2">Opportunities</h3>
              <ul className="font-jetbrains space-y-2">
                <li>• Curated job & internship drops</li>
                <li>• Alumni mentorship & collab spaces</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-maximally-purple/10 to-white p-6 rounded-lg 
              transform hover:scale-105 transition-all shadow-lg border border-maximally-purple/20">
              <Lock className="h-8 w-8 mb-4 text-maximally-purple animate-pulse" />
              <h3 className="font-press-start text-lg mb-2">Exclusive Events</h3>
              <ul className="font-jetbrains space-y-2">
                <li>• IRL meetups & gatherings</li>
                <li>• Partner events access</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#39FF14]/10 to-white p-6 rounded-lg 
              transform hover:scale-105 transition-all shadow-lg border border-[#39FF14]/20">
              <Zap className="h-8 w-8 mb-4 text-[#39FF14] animate-pulse" />
              <h3 className="font-press-start text-lg mb-2">Community Roles</h3>
              <ul className="font-jetbrains space-y-2">
                <li>• Builder, Speaker, Hacker badges</li>
                <li>• Alumni-only channels</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-maximally-blue/5 to-maximally-red/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-press-start text-2xl mb-6 
            bg-gradient-to-r from-maximally-red to-maximally-blue bg-clip-text text-transparent">
            Not Just a Chatroom
          </h2>
          <p className="font-jetbrains text-lg mb-8 max-w-2xl mx-auto">
            This is a launchpad disguised as a community — a place to test ideas, 
            build real stuff, get feedback, and find your tribe.
          </p>
          <button
            onClick={() => window.location.href = 'https://tally.so/r/wQEGEA'}
            className="pixel-button bg-maximally-blue text-white inline-flex items-center gap-2 
              hover:bg-maximally-blue/90 transform hover:scale-105 transition-all shadow-lg"
          >
            <span>Apply Now</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Community;
