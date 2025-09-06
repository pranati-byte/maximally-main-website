import {
  ArrowLeft,
  Users,
  Zap,
  Cpu,
  Globe,
  Rocket,
  Star,
  Calendar,
  Clock,
  Code2,
  ExternalLink,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const ShipathonReport = () => {
  const eventStats = [
    { icon: Users, label: 'Global Participants', value: '610', color: 'blue' },
    {
      icon: Zap,
      label: 'AI Project Submissions',
      value: '100+',
      color: 'purple',
    },
    { icon: Clock, label: 'Duration', value: '48hrs', color: 'green' },
    { icon: Globe, label: 'Format', value: 'Online', color: 'orange' },
  ];

  const highlights = [
    {
      title: 'Organic Growth Success',
      description:
        "Event grew organically with minimal promotion, showing Maximally's brand strength",
      icon: Rocket,
      color: 'purple',
    },
    {
      title: 'AI Experimentation Focus',
      description:
        'Encouraged creativity, beginner-friendly participation, and team collaboration',
      icon: Zap,
      color: 'blue',
    },
    {
      title: 'Global Professional Judges',
      description:
        'Senior engineers and analysts from Meta, Atlassian, Warner Bros., McKinsey, Oracle',
      icon: Star,
      color: 'yellow',
    },
    {
      title: 'MakeX Partnership',
      description:
        'Supported by MakeX as the key partner for this AI-focused hackathon',
      icon: Globe,
      color: 'green',
    },
  ];

  const judges = [
    {
      name: 'Senthilkumaran Rajagopalan',
      role: 'Tech Lead Manager, Video Recommendations @ Meta',
      color: 'blue',
    },
    {
      name: 'Sahil Deshpande',
      role: 'Software Engineer @ Meta',
      color: 'blue',
    },
    {
      name: 'Venkataram Poosapati',
      role: 'Senior Data Engineer @ Atlassian',
      color: 'orange',
    },
    {
      name: 'Ashwini Joshi',
      role: 'Senior ML Engineer @ Warner Bros. Discovery',
      color: 'purple',
    },
    {
      name: 'Shreesh Agarwal',
      role: 'Sr. Business Analyst @ McKinsey & Company',
      color: 'green',
    },
    {
      name: 'Karthik Ramamurthy',
      role: 'Engineering Lead @ Mercury Financial',
      color: 'red',
    },
    {
      name: 'Rakesh Pullayikodi',
      role: 'Staff Software Engineer @ Graphite Health',
      color: 'blue',
    },
    {
      name: 'Vikranth Kumar Shivaa',
      role: 'Founding Engineer @ Fig',
      color: 'purple',
    },
    {
      name: 'Raja Sekhar Rao Dheekonda',
      role: 'Distinguished Engineer @ Dreadnode',
      color: 'orange',
    },
  ];

  const projectTypes = [
    {
      label: 'No-Code AI Tools',
      description: 'Beginner-friendly AI applications',
      icon: '🛠️',
      color: 'blue',
    },
    {
      label: 'ML Experiments',
      description: 'Serious machine learning projects',
      icon: '🧠',
      color: 'purple',
    },
    {
      label: 'Product Integrations',
      description: 'AI integrated into existing products',
      icon: '⚡',
      color: 'green',
    },
    {
      label: 'Creative Applications',
      description: 'Artistic and innovative AI uses',
      icon: '🎨',
      color: 'orange',
    },
  ];

  const socialLinks = [
    {
      title: 'Event Website',
      url: 'https://maximally.in/shipathon',
      platform: 'Website',
    },
    {
      title: 'Devpost Listing',
      url: 'https://maximally-ai-shipathon-2025.devpost.com/',
      platform: 'Devpost',
    },
    {
      title: 'Instagram Highlight',
      url: 'https://www.instagram.com/p/DL75H0jy3tX/?img_index=1',
      platform: 'Instagram',
    },
  ];

  const getColorClasses = (color: string, isHover = false) => {
    const colors = {
      blue: isHover ? 'border-blue-600 shadow-blue-500/30' : 'border-blue-400',
      purple: isHover
        ? 'border-purple-600 shadow-purple-500/30'
        : 'border-purple-400',
      green: isHover
        ? 'border-green-600 shadow-green-500/30'
        : 'border-green-400',
      orange: isHover
        ? 'border-orange-600 shadow-orange-500/30'
        : 'border-orange-400',
      yellow: isHover
        ? 'border-yellow-600 shadow-yellow-500/30'
        : 'border-yellow-400',
      red: isHover ? 'border-red-600 shadow-red-500/30' : 'border-red-400',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getAccentColor = (color: string) => {
    const colors = {
      blue: 'text-blue-600',
      purple: 'text-purple-600',
      green: 'text-green-600',
      orange: 'text-orange-600',
      yellow: 'text-yellow-600',
      red: 'text-red-600',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <>
      <SEO
        title="Maximally AI Shipathon Report | August 2025 | Maximally"
        description="Complete report of the Maximally AI Shipathon - 48 hours, 610 global participants, 100+ AI projects. Organic growth success story."
        keywords="AI hackathon report, shipathon, artificial intelligence, student developers, global hackathon, AI projects, MakeX partnership"
      />
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/20 to-white overflow-hidden relative">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="pixel-grid opacity-10"></div>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute pixel-border animate-float ${
                i % 4 === 0
                  ? 'w-3 h-3 bg-blue-500/20'
                  : i % 4 === 1
                  ? 'w-4 h-4 bg-purple-500/20'
                  : i % 4 === 2
                  ? 'w-2 h-2 bg-green-500/20'
                  : 'w-5 h-5 bg-orange-500/20'
              }`}
              style={{
                top: `${Math.random() * 90}%`,
                left: `${Math.random() * 90}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + i * 0.4}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Link
              to="/events"
              className="inline-flex items-center gap-2 font-jetbrains text-gray-600 hover:text-blue-600 transition-colors mb-6 group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:transform group-hover:-translate-x-1 transition-transform" />
              Back to Events
            </Link>

            <div className="text-center">
              <motion.h1
                className="font-press-start text-3xl md:text-5xl mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-700 bg-clip-text text-transparent leading-tight drop-shadow-lg"
                animate={{
                  textShadow: [
                    '0 0 0px rgba(59, 130, 246, 0)',
                    '0 0 10px rgba(59, 130, 246, 0.3)',
                    '0 0 0px rgba(59, 130, 246, 0)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Maximally AI Shipathon
              </motion.h1>
              <div className="flex items-center justify-center gap-6 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-600" />
                  <span className="font-jetbrains text-gray-700">
                    Aug 30 - Sept 1, 2025
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-600" />
                  <span className="font-jetbrains text-gray-700">48 Hours</span>
                </div>
              </div>
              <p className="font-jetbrains text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
                A 48-hour sprint designed to get builders experimenting with AI
                in creative ways
              </p>
            </div>
          </motion.div>

          {/* Event Stats */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {eventStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="group"
                >
                  <Card
                    className={`minecraft-block bg-gradient-to-br from-white to-blue-50/30 transition-all duration-500 border-4 ${getColorClasses(
                      stat.color
                    )} hover:${getColorClasses(
                      stat.color,
                      true
                    )} shadow-lg hover:shadow-2xl relative overflow-hidden`}
                  >
                    <div
                      className={`absolute top-0 right-0 w-6 h-6 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 pixel-corner opacity-20 group-hover:opacity-40 transition-opacity`}
                    ></div>
                    <CardContent className="p-6 text-center relative z-10">
                      <div
                        className={`p-3 rounded-lg bg-${stat.color}-100 pixel-border mx-auto w-fit mb-4`}
                      >
                        <stat.icon
                          className={`h-6 w-6 ${getAccentColor(stat.color)}`}
                        />
                      </div>
                      <div className="font-press-start text-2xl mb-2 text-gray-900">
                        {stat.value}
                      </div>
                      <div className="font-jetbrains text-sm text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Project Types */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-center mb-12">
              <h2 className="font-press-start text-3xl md:text-4xl mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent drop-shadow-sm">
                Project Categories
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto pixel-border shadow-lg"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {projectTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateZ: 2 }}
                  className="group"
                >
                  <Card
                    className={`minecraft-block bg-gradient-to-br from-white to-purple-50/30 transition-all duration-500 border-4 ${getColorClasses(
                      type.color
                    )} hover:${getColorClasses(
                      type.color,
                      true
                    )} shadow-lg hover:shadow-2xl relative overflow-hidden`}
                  >
                    <div
                      className={`absolute top-0 right-0 w-6 h-6 bg-gradient-to-br from-${type.color}-500 to-${type.color}-600 pixel-corner opacity-20 group-hover:opacity-40 transition-opacity`}
                    ></div>
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-3">{type.icon}</div>
                      <div
                        className={`font-press-start text-sm mb-2 ${getAccentColor(
                          type.color
                        )}`}
                      >
                        {type.label}
                      </div>
                      <div className="font-jetbrains text-xs text-gray-700 font-medium">
                        {type.description}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Event Highlights */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <h2 className="font-press-start text-3xl md:text-4xl mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent drop-shadow-sm">
                Shipathon Highlights
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-green-500 mx-auto pixel-border shadow-lg"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02, rotateX: 2 }}
                  className="group"
                >
                  <Card
                    className={`minecraft-block bg-gradient-to-br from-white to-gray-50/50 transition-all duration-500 border-4 ${getColorClasses(
                      highlight.color
                    )} hover:${getColorClasses(
                      highlight.color,
                      true
                    )} shadow-lg hover:shadow-2xl h-full relative overflow-hidden`}
                  >
                    <div
                      className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-${highlight.color}-500 to-${highlight.color}-600 pixel-corner opacity-20 group-hover:opacity-40 transition-opacity`}
                    ></div>
                    <CardContent className="p-8">
                      <div
                        className={`p-3 rounded-lg bg-${highlight.color}-100 pixel-border w-fit mb-4`}
                      >
                        <highlight.icon
                          className={`h-6 w-6 ${getAccentColor(
                            highlight.color
                          )}`}
                        />
                      </div>
                      <h3
                        className={`font-press-start text-lg mb-4 text-black group-hover:${getAccentColor(
                          highlight.color
                        )} transition-colors leading-tight`}
                      >
                        {highlight.title}
                      </h3>
                      <p className="font-jetbrains text-gray-700 text-sm leading-relaxed font-medium">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Judges & Mentors */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="font-press-start text-3xl md:text-4xl mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent drop-shadow-sm">
                Global Judges & Mentors
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-green-600 to-purple-500 mx-auto pixel-border shadow-lg"></div>
              <p className="font-jetbrains text-gray-600 mt-4 max-w-2xl mx-auto">
                Engineers, founders, and product leaders from Meta, Atlassian,
                Warner Bros., McKinsey, Oracle, and YC-backed startups
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {judges.map((judge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, rotateY: 3 }}
                  className="group"
                >
                  <Card
                    className={`minecraft-block bg-gradient-to-br from-white to-gray-50/50 transition-all duration-500 border-4 ${getColorClasses(
                      judge.color
                    )} hover:${getColorClasses(
                      judge.color,
                      true
                    )} shadow-lg hover:shadow-2xl h-full relative overflow-hidden`}
                  >
                    <div
                      className={`absolute bottom-0 left-0 w-6 h-6 bg-gradient-to-tr from-${judge.color}-400 to-${judge.color}-500 pixel-corner opacity-20 group-hover:opacity-40 transition-opacity`}
                    ></div>
                    <CardContent className="p-6">
                      <h3
                        className={`font-press-start text-sm mb-3 text-black group-hover:${getAccentColor(
                          judge.color
                        )} transition-colors leading-tight`}
                      >
                        {judge.name}
                      </h3>
                      <p className="font-jetbrains text-gray-600 text-xs leading-relaxed font-medium">
                        {judge.role}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Content & Media */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="font-press-start text-3xl md:text-4xl mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent drop-shadow-sm">
                Event Links
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-purple-600 to-green-500 mx-auto pixel-border shadow-lg"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, rotateX: -2 }}
                  className="group"
                >
                  <Card className="minecraft-block bg-gradient-to-br from-white to-gray-50/50 transition-all duration-500 border-4 border-purple-400 hover:border-purple-600 hover:shadow-purple-500/30 shadow-lg hover:shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 pixel-corner opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-press-start text-sm text-black group-hover:text-purple-600 transition-colors mb-2">
                            {link.title}
                          </h3>
                          <p className="font-jetbrains text-xs text-gray-600 font-medium">
                            {link.platform}
                          </p>
                        </div>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pixel-button bg-gradient-to-r from-purple-600 to-purple-700 text-white font-press-start text-xs px-4 py-2 hover:scale-105 hover:shadow-lg transition-all flex items-center gap-2 border-2 border-purple-800"
                        >
                          <ExternalLink className="h-3 w-3" />
                          <span>View</span>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Impact Statement */}
          <motion.section
            className="text-center pixel-border p-12 md:p-16 bg-gradient-to-r from-blue-600/10 via-purple-600/5 to-green-600/10 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            <div className="absolute inset-0 opacity-5">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-600 pixel-border"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            <h2 className="font-press-start text-2xl md:text-3xl mb-8 bg-gradient-to-r from-blue-600 via-purple-500 to-green-600 bg-clip-text text-transparent leading-tight drop-shadow-sm relative z-10">
              Legacy & Next Steps
            </h2>
            <p className="font-jetbrains text-lg md:text-xl text-gray-700 mb-6 max-w-4xl mx-auto font-medium relative z-10">
              The AI Shipathon cemented Maximally's position as a hub for
              AI-native competitions. Key takeaways: Maximally's brand now has
              pull - events can succeed with limited promotion. The judge base
              grew stronger, adding senior engineers and analysts from global
              companies.
            </p>
            <p className="font-jetbrains text-base text-gray-600 max-w-3xl mx-auto relative z-10">
              AI Shipathon acts as a bridge to the Grand Indian Hackathon
              Season, showing Maximally can scale beyond school-level hackathons
              into broader tech-driven themes.
            </p>
            <motion.div
              className="mt-8 relative z-10"
              whileHover={{ scale: 1.05 }}
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 pixel-border">
                <Code2 className="h-5 w-5 text-blue-600" />
                <span className="font-jetbrains text-sm font-medium text-gray-700">
                  Next: Grand Indian Hackathon Season
                </span>
              </div>
            </motion.div>
          </motion.section>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ShipathonReport;
