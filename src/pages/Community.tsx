
import { ArrowRight, Lock, Star, Users, Zap } from 'lucide-react';
import SEO from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';

const Community = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="Join Maximally Community | India's Largest Teen Entrepreneurship Network"
        description="Join India's most vibrant teen entrepreneurship community. Choose between our exclusive Inner Circle or our open Outer Circle community."
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-maximally-blue/5 to-maximally-red/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 animate-grid-flow" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center">
            <h1 className="font-press-start text-3xl md:text-4xl mb-6">
              Choose Your Circle_
            </h1>
            <p className="font-jetbrains text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Two communities. One mission. Build the future of India.
            </p>
          </div>
        </div>
      </section>

      {/* Community Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Inner Circle */}
            <div className="pixel-border p-8 bg-gradient-to-br from-maximally-blue/10 to-maximally-purple/10">
              <div className="inline-block bg-maximally-red/20 px-4 py-2 rounded-full mb-6">
                <span className="font-jetbrains text-maximally-red">
                  <Lock className="h-4 w-4 inline-block mr-2" />
                  Application Only
                </span>
              </div>
              <h2 className="font-press-start text-2xl mb-4">Inner Circle_</h2>
              <p className="font-jetbrains mb-6">An exclusive community of India's most ambitious teen builders and entrepreneurs.</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-maximally-blue" />
                  <span>Curated network of proven builders</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-maximally-red" />
                  <span>Direct access to opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-maximally-purple" />
                  <span>Exclusive events & meetups</span>
                </div>
              </div>
              <button
                onClick={() => window.location.href = 'https://tally.so/r/wQEGEA'}
                className="pixel-button bg-maximally-blue text-white inline-flex items-center gap-2"
              >
                <span>Apply Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Outer Circle */}
            <div className="pixel-border p-8 bg-gradient-to-br from-maximally-red/10 to-maximally-blue/10">
              <div className="inline-block bg-maximally-blue/20 px-4 py-2 rounded-full mb-6">
                <span className="font-jetbrains text-maximally-blue">
                  <Users className="h-4 w-4 inline-block mr-2" />
                  Open Community
                </span>
              </div>
              <h2 className="font-press-start text-2xl mb-4">Outer Circle_</h2>
              <p className="font-jetbrains mb-6">Join India's largest teen entrepreneurship community. A place to learn, share, and grow together.</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-maximally-red" />
                  <span>1000+ active teen entrepreneurs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-maximally-blue" />
                  <span>Weekly workshops & sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-maximally-purple" />
                  <span>Networking & collaboration</span>
                </div>
              </div>
              <button
                onClick={() => window.location.href = 'https://discord.gg/maximally'}
                className="pixel-button bg-maximally-red text-white inline-flex items-center gap-2"
              >
                <span>Join Discord</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-maximally-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-press-start text-2xl mb-12 text-center">Why Join Maximally?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-maximally-blue/30 bg-black/50">
              <CardContent className="p-6">
                <h3 className="font-press-start text-lg mb-2 text-white">🚀 Real Projects</h3>
                <p className="font-jetbrains text-white">Build real products that solve real problems. No fake assignments.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-maximally-red/30 bg-black/50">
              <CardContent className="p-6">
                <h3 className="font-press-start text-lg mb-2 text-white">💡 Learn by Doing</h3>
                <p className="font-jetbrains text-white">Hands-on experience over theoretical knowledge. Pure execution.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-maximally-purple/30 bg-black/50">
              <CardContent className="p-6">
                <h3 className="font-press-start text-lg mb-2 text-white">🌐 Network Growth</h3>
                <p className="font-jetbrains text-white">Connect with India's most ambitious teens and industry experts.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
