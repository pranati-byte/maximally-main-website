import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MessageCircle, Users, Gavel, Handshake } from "lucide-react";

const Join = () => {
  const joinOptions = [
    {
      icon: MessageCircle,
      title: "Join Community",
      description: "Connect with builders worldwide",
      href: "https://discord.gg/maximally",
      color: "text-maximally-red",
      bg: "from-maximally-red/10 to-maximally-red/5"
    },
    {
      icon: Users,
      title: "Volunteer Roles",
      description: "Help organize epic hackathons",
      href: "/join#volunteer",
      color: "text-maximally-yellow",
      bg: "from-maximally-yellow/10 to-maximally-yellow/5"
    },
    {
      icon: Gavel,
      title: "Judge Interest",
      description: "Mentor and evaluate projects",
      href: "/join#judges",
      color: "text-maximally-blue",
      bg: "from-maximally-blue/10 to-maximally-blue/5"
    },
    {
      icon: Handshake,
      title: "Sponsor Interest",
      description: "Partner with the league",
      href: "/join#sponsors",
      color: "text-maximally-green",
      bg: "from-maximally-green/10 to-maximally-green/5"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Helmet>
        <title>Join the League - Maximally</title>
        <meta name="description" content="Join the Maximally league - community, volunteer opportunities, judge roles, and sponsorship options for the global hackathon community." />
      </Helmet>

      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-press-start text-2xl md:text-3xl text-maximally-black mb-4">
              Join the League
            </h1>
            <p className="font-body text-lg text-maximally-gray max-w-2xl mx-auto">
              Be part of the global movement reshaping how builders connect and create.
            </p>
          </div>

          {/* Join Options Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {joinOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <Link to={option.href} key={index}>
                  <div className={`glass-card rounded-card p-8 group cursor-pointer hover:scale-105 transition-all duration-300 bg-gradient-to-br ${option.bg}`}>
                    <IconComponent className={`h-12 w-12 ${option.color} mb-4 group-hover:text-maximally-yellow transition-colors`} />
                    <h3 className="font-display font-semibold text-xl text-maximally-black mb-2">
                      {option.title}
                    </h3>
                    <p className="font-body text-maximally-gray">
                      {option.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 max-w-md mx-auto">
            <div className="glass-card rounded-card p-8 text-center">
              <h3 className="font-press-start text-sm text-maximally-black mb-4">
                Stay Updated
              </h3>
              <p className="font-body text-maximally-gray mb-6">
                Get notified about new events and opportunities.
              </p>
              <Link to="/newsletter">
                <button className="w-full pixel-glass-button border-maximally-red bg-maximally-red/90 text-white hover:bg-maximally-yellow hover:text-maximally-black hover:border-maximally-yellow px-6 py-3 rounded-hero-cta font-press-start text-xs transition-all duration-200">
                  Join Newsletter
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;