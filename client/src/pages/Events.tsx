import {
  ArrowRight,
  Mail,
  Calendar,
  ExternalLink,
  FileText,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const Events = () => {
  const upcomingEvents = [
    {
      name: 'Code Hypothesis',
      dates: 'September 2025',
      description:
        'Test your coding theories in the ultimate development challenge',
      registerUrl: '/CodeHypothesis',
      detailsUrl: '/CodeHypothesis',
      color: 'red',
    },
    {
      name: 'Protocol 404',
      dates: 'October 2025',
      description: 'When the system is broken, build anyway',
      registerUrl: '/protocol-404',
      detailsUrl: '/protocol-404',
      color: 'orange',
    },
    {
      name: 'Project CodeGen',
      dates: 'October 2025',
      description: 'Beyond hackathons - real project generation',
      registerUrl: '/project-codegen',
      detailsUrl: '/project-codegen',
      color: 'yellow',
    },
    {
      name: 'Maximally PromptStorm',
      dates: 'Oct 25-26, 2025',
      description:
        '24-hour AI prompt-engineering hackathon. When in doubt, prompt harder.',
      registerUrl: '/promptstorm',
      detailsUrl: '/promptstorm',
      color: 'green',
    },
    {
      name: 'Maximally Hacktober',
      dates: 'October 2025',
      description: "October's biggest hackathon celebration",
      registerUrl: '/hacktober',
      detailsUrl: '/hacktober',
      color: 'blue',
    },
    {
      name: 'Maximally Steal-A-Thon',
      dates: 'Nov 9-10, 2025',
      description:
        "The only hackathon where original ideas are banned. If it ain't broke... steal it.",
      registerUrl: '/steal-a-thon',
      detailsUrl: '/steal-a-thon',
      color: 'purple',
    },
    {
      name: 'Maximally Codepocalypse',
      dates: 'Oct 18-19, 2025',
      description:
        'What would you build if the internet had 48 hours left? Chaotic 48-hour hackathon.',
      registerUrl: '/codepocalypse',
      detailsUrl: '/codepocalypse',
      color: 'pink',
    },
    {
      name: 'Grand Tech Assembly',
      dates: 'Nov 1-7, 2025',
      description:
        'Pick your mission, build your city, earn respect. 7-day GTA-themed hackathon.',
      registerUrl: '/grand-tech-assembly',
      detailsUrl: '/grand-tech-assembly',
      color: 'indigo',
    },
  ];

  const pastEvents = [
    {
      name: 'Maximally Startup Makeathon',
      dates: 'July 2025',
      description: '7-day sprint from idea to MVP to public pitch',
      reportUrl: '/makeathon-report',
      color: 'gray',
    },
    {
      name: 'Maximally AI Shipathon',
      dates: 'August 2025',
      description: '48-hour global AI hackathon for builders and creators',
      reportUrl: '/shipathon-report',
      color: 'slate',
    },
  ];

  const getColorClasses = (color: string, isHover = false) => {
    const colors = {
      red: isHover ? 'border-red-600 shadow-red-500/30' : 'border-red-400',
      orange: isHover ? 'border-orange-600 shadow-orange-500/30' : 'border-orange-400',
      yellow: isHover ? 'border-yellow-600 shadow-yellow-500/30' : 'border-yellow-500',
      green: isHover ? 'border-green-600 shadow-green-500/30' : 'border-green-400',
      blue: isHover ? 'border-blue-600 shadow-blue-500/30' : 'border-blue-400',
      purple: isHover ? 'border-purple-600 shadow-purple-500/30' : 'border-purple-400',
      pink: isHover ? 'border-pink-600 shadow-pink-500/30' : 'border-pink-400',
      indigo: isHover ? 'border-indigo-600 shadow-indigo-500/30' : 'border-indigo-400',
      gray: isHover ? 'border-gray-600 shadow-gray-500/30' : 'border-gray-400',
      slate: isHover ? 'border-slate-600 shadow-slate-500/30' : 'border-slate-400',
    };
    return colors[color as keyof typeof colors] || colors.red;
  };

  const getAccentColor = (color: string) => {
    const colors = {
      red: 'text-red-600',
      orange: 'text-orange-600',
      yellow: 'text-yellow-600',
      green: 'text-green-600',
      blue: 'text-blue-600',
      purple: 'text-purple-600',
      pink: 'text-pink-600',
      indigo: 'text-indigo-600',
      gray: 'text-gray-600',
      slate: 'text-slate-600',
    };
    return colors[color as keyof typeof colors] || colors.red;
  };

  const UpcomingEventCard = ({
    event,
  }: {
    event: (typeof upcomingEvents)[0];
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group h-full"
      whileHover={{ 
        scale: 1.02,
        rotateY: 2,
        rotateX: 2,
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className={`minecraft-block bg-gradient-to-br from-white to-gray-50/50 transition-all duration-500 border-4 ${getColorClasses(event.color)} hover:${getColorClasses(event.color, true)} shadow-lg hover:shadow-2xl h-full relative overflow-hidden group-hover:shadow-2xl`}>
        {/* Pixelated corner decoration */}
        <div className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-${event.color}-500 to-${event.color}-600 pixel-corner opacity-20 group-hover:opacity-40 transition-opacity`}></div>
        <div className={`absolute bottom-0 left-0 w-6 h-6 bg-gradient-to-tr from-${event.color}-400 to-${event.color}-500 pixel-corner opacity-10 group-hover:opacity-30 transition-opacity`}></div>
        
        <CardContent className="p-8 h-full flex flex-col relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <div className={`p-2 rounded-lg bg-${event.color}-100 pixel-border`}>
              <Calendar className={`h-4 w-4 ${getAccentColor(event.color)}`} />
            </div>
            <span className="font-jetbrains text-sm text-gray-700 font-medium">
              {event.dates}
            </span>
          </div>
          <h3 className={`font-press-start text-lg mb-4 text-black group-hover:${getAccentColor(event.color)} transition-colors leading-tight drop-shadow-sm`}>
            {event.name}
          </h3>
          <p className="font-jetbrains text-gray-700 mb-6 text-sm leading-relaxed flex-grow font-medium">
            {event.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-auto">
            <Link
              to={event.registerUrl}
              className="pixel-button bg-gradient-to-r from-red-600 to-red-700 text-white font-press-start text-xs px-6 py-3 hover:scale-105 hover:shadow-lg transition-all flex items-center gap-2 justify-center border-2 border-red-800 hover:border-red-900 hover:from-red-700 hover:to-red-800"
            >
              <span>Register Now</span>
              <ExternalLink className="h-3 w-3" />
            </Link>
            <Link
              to={event.detailsUrl}
              className="pixel-button bg-gradient-to-r from-gray-800 to-gray-900 text-white font-press-start text-xs px-6 py-3 hover:scale-105 hover:shadow-lg transition-all flex items-center gap-2 justify-center border-2 border-gray-700 hover:border-gray-600"
            >
              <span>View Details</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const PastEventCard = ({ event }: { event: (typeof pastEvents)[0] }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group h-full"
      whileHover={{ 
        scale: 1.02,
        rotateY: -2,
        rotateX: 2,
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className={`minecraft-block bg-gradient-to-br from-gray-50 to-gray-100/50 transition-all duration-500 border-4 ${getColorClasses(event.color)} hover:${getColorClasses(event.color, true)} shadow-lg hover:shadow-2xl h-full relative overflow-hidden`}>
        {/* Pixelated corner decoration */}
        <div className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-${event.color}-500 to-${event.color}-600 pixel-corner opacity-20 group-hover:opacity-40 transition-opacity`}></div>
        <div className={`absolute bottom-0 left-0 w-6 h-6 bg-gradient-to-tr from-${event.color}-400 to-${event.color}-500 pixel-corner opacity-10 group-hover:opacity-30 transition-opacity`}></div>
        
        {/* Vintage badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-amber-500 text-amber-900 font-press-start text-xs px-3 py-1 pixel-border transform rotate-12">
          PAST
        </div>
        
        <CardContent className="p-8 h-full flex flex-col relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <div className={`p-2 rounded-lg bg-${event.color}-100 pixel-border opacity-70`}>
              <Calendar className={`h-4 w-4 ${getAccentColor(event.color)}`} />
            </div>
            <span className="font-jetbrains text-sm text-gray-600 font-medium">
              {event.dates}
            </span>
          </div>
          <h3 className={`font-press-start text-lg mb-4 text-gray-800 group-hover:${getAccentColor(event.color)} transition-colors leading-tight drop-shadow-sm`}>
            {event.name}
          </h3>
          <p className="font-jetbrains text-gray-600 mb-6 text-sm leading-relaxed flex-grow font-medium">
            {event.description}
          </p>
          <div className="mt-auto">
            <Link
              to={event.reportUrl}
              className="pixel-button bg-gradient-to-r from-gray-600 to-gray-700 text-white font-press-start text-xs px-6 py-3 hover:scale-105 hover:shadow-lg transition-all flex items-center gap-2 justify-center w-fit border-2 border-gray-800 hover:from-gray-700 hover:to-gray-800"
            >
              <FileText className="h-3 w-3" />
              <span>View Report</span>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <>
      <SEO
        title="Events | The Grand Indian Hackathon Season | Maximally"
        description="Join the Grand Indian Hackathon Season - 10 hackathons from September to November. Experience the biggest innovation challenge series in India."
        keywords="hackathons India, Grand Indian Hackathon Season, coding competitions, innovation challenges, tech events India, student hackathons"
      />
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/30 to-white overflow-hidden relative">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="pixel-grid opacity-10"></div>
          {/* Floating geometric shapes */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute pixel-border animate-float ${
                i % 4 === 0 ? 'w-4 h-4 bg-red-500/20' :
                i % 4 === 1 ? 'w-3 h-3 bg-blue-500/20' :
                i % 4 === 2 ? 'w-5 h-5 bg-green-500/20' :
                'w-2 h-2 bg-purple-500/20'
              }`}
              style={{
                top: `${Math.random() * 90}%`,
                left: `${Math.random() * 90}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            />
          ))}
          {/* Additional decorative elements */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`deco-${i}`}
              className="absolute w-8 h-8 border-4 border-dashed border-gray-300/30 pixel-border animate-pulse"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + i * 0.3}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
          {/* Top Banner */}
          <motion.section
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="font-press-start text-3xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent leading-tight drop-shadow-lg"
              animate={{ 
                textShadow: [
                  "0 0 0px rgba(220, 38, 38, 0)",
                  "0 0 10px rgba(220, 38, 38, 0.3)",
                  "0 0 0px rgba(220, 38, 38, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              The Grand Indian Hackathon Season
            </motion.h1>
            <p className="font-jetbrains text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed font-medium">
              From September to November, we're hosting 10 hackathons back to
              back. Be a part of it.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
              onClick={() =>
                window.open(
                  'mailto:hello@maximally.in?subject=Join Mailing List',
                  '_blank'
                )
              }
              className="pixel-button bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white font-press-start py-6 px-10 text-lg hover:shadow-2xl transition-all duration-300 border-4 border-red-800 shadow-xl hover:shadow-red-500/25"
            >
              <Mail className="h-5 w-5 mr-2" />
              Join our mailing list
            </Button>
            </motion.div>
          </motion.section>

          {/* Upcoming Events Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-center mb-12">
              <h2 className="font-press-start text-3xl md:text-4xl mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent drop-shadow-sm">
                Upcoming Events
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-red-600 to-red-500 mx-auto pixel-border shadow-lg"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <UpcomingEventCard event={event} />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Past Events Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <h2 className="font-press-start text-3xl md:text-4xl mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent drop-shadow-sm">
                Past Events
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-blue-500 mx-auto pixel-border shadow-lg"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  <PastEventCard event={event} />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            className="text-center pixel-border p-12 md:p-16 bg-gradient-to-r from-red-600/10 via-purple-600/5 to-blue-600/10 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-5">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-red-600 pixel-border"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
            
            <h2 className="font-press-start text-2xl md:text-3xl mb-8 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent leading-tight drop-shadow-sm relative z-10">
              Want to partner with us?
            </h2>
            <p className="font-jetbrains text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto font-medium relative z-10">
              Join the Grand Indian Hackathon Season as a sponsor, mentor, or
              collaborator.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10"
            >
              <Link
              to="/collaborate"
              className="pixel-button bg-gradient-to-r from-red-600 to-red-700 text-white inline-flex items-center gap-3 hover:shadow-2xl transform transition-all text-lg px-10 py-5 border-4 border-red-800 hover:shadow-red-500/25"
            >
              <span className="font-press-start">Partner With Us</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            </motion.div>
          </motion.section>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Events;
