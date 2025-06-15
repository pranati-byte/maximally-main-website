import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Award, DollarSign, Camera, Ticket, Brain, Megaphone, CheckCircle, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

const Allies = () => {
  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-maximally-red" />,
      title: "\"Powered by Maximally\" Badge",
      description: "Use our brand on your events, posters, and socials. Real street cred."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-maximally-green" />,
      title: "Micro-Funding & Support", 
      description: "Get ₹1K–₹15K support for your fests, hackathons, or creative drops."
    },
    {
      icon: <Camera className="w-8 h-8 text-maximally-blue" />,
      title: "Collabs with Maximally Studios",
      description: "Reels, content drops, design kits, or founder features — let's build together."
    },
    {
      icon: <Ticket className="w-8 h-8 text-purple-500" />,
      title: "Free Passes & Perks",
      description: "Scholarships and fast-track access for your top members."
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-500" />,
      title: "Mentorship + Speaker Network",
      description: "Plug into our builder circle — mentors, judges, and insider drops."
    },
    {
      icon: <Megaphone className="w-8 h-8 text-pink-500" />,
      title: "Promo Swaps & Spotlight",
      description: "We shout you out. You shout us out. Mutual clout. Mutual growth."
    }
  ];

  const pactItems = [
    {
      from: "Partner badge + certificate",
      to: "Share our events once/month"
    },
    {
      from: "Funding + content support", 
      to: "Nominate top students for community"
    },
    {
      from: "Judge/speaker access",
      to: "Let us host 1 mini-challenge"
    },
    {
      from: "Studios collabs",
      to: "Refer 2 other quality orgs"
    }
  ];

  const allyLogos = [
    "E-Cell IIT Delhi", "MUN Society SRCC", "Entrepreneurship Cell BITS",
    "Content Creators Club DU", "Youth NGO Mumbai", "Startup Society NIT",
    "Innovation Hub IIIT", "Tech Club VIT", "Business Society NMIMS",
    "Creative Collective NIFT", "Debate Society LSR", "Coding Club DTU"
  ];

  return (
    <>
      <SEO 
        title="Maximally Allies - Partner with India's Premier Teen Startup Platform"
        description="Join the official Maximally Allies network. Partner with India's boldest student organizations and unlock micro-funding, content collabs, and exclusive perks."
        keywords="student partnerships, college clubs, startup ecosystem, teen entrepreneurs, student funding"
      />
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-maximally-red to-maximally-blue bg-clip-text text-transparent">
              Partner with Maximally. Power What You Build.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the official Maximally Allies network — a curated alliance of India's boldest student-led organizations. 
              From E-Cells and MUN clubs to content crews and youth NGOs, we back the ones who build.
            </p>
            <Button 
              size="lg" 
              className="bg-maximally-red hover:bg-red-600 text-white px-8 py-4 text-lg"
              onClick={() => window.open("https://forms.gle/9buYWogTkRudX97WA", "_blank")}
            >
              Apply Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What You Get</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800 hover:border-maximally-red transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mutual Pact Section */}
        <section className="px-4 py-16 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What You Get. What You Give.</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-maximally-blue">From Maximally</h3>
                <div className="space-y-4">
                  {pactItems.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-maximally-green" />
                      <span className="text-gray-300">{item.from}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-maximally-red">From Your Org</h3>
                <div className="space-y-4">
                  {pactItems.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-maximally-green" />
                      <span className="text-gray-300">{item.to}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wall of Allies */}
        <section className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Wall of Allies</h2>
            <p className="text-center text-gray-300 mb-12">150+ clubs and communities are already in. You?</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allyLogos.map((org, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700 hover:border-maximally-blue transition-colors">
                  <CardContent className="p-4 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-maximally-red to-maximally-blue rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{org.charAt(0)}</span>
                    </div>
                    <p className="text-sm text-gray-300 font-medium">{org}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="px-4 py-16 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl italic text-gray-300 mb-6">
              "We got ₹5K funding, Insta collabs, and our president featured on Maximally Studios. 
              This isn't a partnership — it's a revolution."
            </blockquote>
            <p className="text-maximally-blue font-semibold">— Team Radiant, E-Cell Partner</p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-maximally-green to-maximally-blue bg-clip-text text-transparent">
              Let's Build. Together.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're building the default startup and storytelling engine for India's teens. 
              Join us early and help shape the movement.
            </p>
            <Button 
              size="lg" 
              className="bg-maximally-blue hover:bg-blue-600 text-white px-8 py-4 text-lg"
              onClick={() => window.open("https://forms.gle/9buYWogTkRudX97WA", "_blank")}
            >
              Apply to Join <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Allies;