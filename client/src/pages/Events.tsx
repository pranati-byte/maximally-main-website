import { ArrowRight, Mail, Calendar, ExternalLink, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const Events = () => {
  const upcomingEvents = [
    {
      name: "Code Hypothesis",
      dates: "September 2025",
      description: "Test your coding theories in the ultimate development challenge",
      registerUrl: "/codehypothesis",
      detailsUrl: "/codehypothesis"
    },
    {
      name: "Protocol 404",
      dates: "October 2025", 
      description: "When the system is broken, build anyway",
      registerUrl: "/protocol-404",
      detailsUrl: "/protocol-404"
    },
    {
      name: "Project CodeGen",
      dates: "October 2025",
      description: "Beyond hackathons - real project generation",
      registerUrl: "/project-codegen", 
      detailsUrl: "/project-codegen"
    },
    {
      name: "Maximally PromptStorm",
      dates: "Oct 25-26, 2025",
      description: "24-hour AI prompt-engineering hackathon. When in doubt, prompt harder.",
      registerUrl: "/promptstorm",
      detailsUrl: "/promptstorm"
    },
    {
      name: "Maximally Hacktober",
      dates: "October 2025",
      description: "October's biggest hackathon celebration",
      registerUrl: "/hacktober",
      detailsUrl: "/hacktober"
    },
    {
      name: "Maximally Steal-A-Thon",
      dates: "Nov 9-10, 2025",
      description: "The only hackathon where original ideas are banned. If it ain't broke... steal it.",
      registerUrl: "/steal-a-thon",
      detailsUrl: "/steal-a-thon"
    },
    {
      name: "Maximally Codepocalypse",
      dates: "Oct 18-19, 2025",
      description: "What would you build if the internet had 48 hours left? Chaotic 48-hour hackathon.",
      registerUrl: "/codepocalypse",
      detailsUrl: "/codepocalypse"
    },
    {
      name: "Grand Tech Assembly",
      dates: "Nov 1-7, 2025",
      description: "Pick your mission, build your city, earn respect. 7-day GTA-themed hackathon.",
      registerUrl: "/grand-tech-assembly",
      detailsUrl: "/grand-tech-assembly"
    }
  ];

  const pastEvents = [
    {
      name: "Maximally Startup Makeathon",
      dates: "July 2025",
      description: "7-day sprint from idea to MVP to public pitch",
      reportUrl: "/makeathon-report"
    },
    {
      name: "Maximally AI Shipathon", 
      dates: "August 2025",
      description: "48-hour global AI hackathon for builders and creators",
      reportUrl: "/shipathon-report"
    }
  ];

  const UpcomingEventCard = ({ event }: { event: typeof upcomingEvents[0] }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Card className="minecraft-block bg-white hover:scale-105 transition-all duration-300 border-2 border-gray-200 hover:border-red-500 shadow-lg hover:shadow-xl">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="h-5 w-5 text-red-600" />
            <span className="font-jetbrains text-sm text-gray-600">{event.dates}</span>
          </div>
          <h3 className="font-press-start text-lg mb-3 text-black group-hover:text-red-600 transition-colors leading-tight">
            {event.name}
          </h3>
          <p className="font-jetbrains text-gray-700 mb-6 text-sm leading-relaxed">
            {event.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to={event.registerUrl}
              className="pixel-button bg-red-600 text-white font-press-start text-xs px-4 py-2 hover:scale-105 transition-all flex items-center gap-2 justify-center"
            >
              <span>Register Now</span>
              <ExternalLink className="h-3 w-3" />
            </Link>
            <Link
              to={event.detailsUrl}
              className="pixel-button bg-gray-900 text-white font-press-start text-xs px-4 py-2 hover:scale-105 transition-all flex items-center gap-2 justify-center"
            >
              <span>View Details</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const PastEventCard = ({ event }: { event: typeof pastEvents[0] }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Card className="minecraft-block bg-gray-50 hover:scale-105 transition-all duration-300 border-2 border-gray-300 hover:border-blue-500 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="h-5 w-5 text-blue-600" />
            <span className="font-jetbrains text-sm text-gray-600">{event.dates}</span>
          </div>
          <h3 className="font-press-start text-lg mb-3 text-black group-hover:text-blue-600 transition-colors leading-tight">
            {event.name}
          </h3>
          <p className="font-jetbrains text-gray-700 mb-6 text-sm leading-relaxed">
            {event.description}
          </p>
          <Link
            to={event.reportUrl}
            className="pixel-button bg-blue-600 text-white font-press-start text-xs px-4 py-2 hover:scale-105 transition-all flex items-center gap-2 justify-center w-fit"
          >
            <FileText className="h-3 w-3" />
            <span>View Report</span>
          </Link>
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
      <div className="min-h-screen bg-white overflow-hidden relative">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="pixel-grid opacity-20"></div>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-red-600/30 pixel-border animate-float"
              style={{
                top: `${Math.random() * 90}%`,
                left: `${Math.random() * 90}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + i * 0.5}s`
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
            <h1 className="font-press-start text-3xl md:text-5xl lg:text-6xl mb-6 text-red-600 leading-tight">
              The Grand Indian Hackathon Season
            </h1>
            <p className="font-jetbrains text-lg md:text-xl text-black/80 max-w-4xl mx-auto mb-8 leading-relaxed">
              From September to November, we're hosting 10 hackathons back to back. Be a part of it.
            </p>
            <Button 
              onClick={() => window.open('mailto:hello@maximally.in?subject=Join Mailing List', '_blank')}
              className="pixel-button bg-gradient-to-r from-red-600 to-red-700 text-white font-press-start py-4 px-8 text-lg hover:scale-105 transition-all duration-300 border-2 border-red-400 shadow-xl"
            >
              <Mail className="h-5 w-5 mr-2" />
              Join our mailing list
            </Button>
          </motion.section>

          {/* Upcoming Events Section */}
          <motion.section 
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-center mb-12">
              <h2 className="font-press-start text-3xl md:text-4xl mb-4 text-black">
                Upcoming Events
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <UpcomingEventCard key={index} event={event} />
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
              <h2 className="font-press-start text-3xl md:text-4xl mb-4 text-black">
                Past Events
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {pastEvents.map((event, index) => (
                <PastEventCard key={index} event={event} />
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section 
            className="text-center pixel-border p-8 md:p-12 bg-gradient-to-r from-red-600/10 via-black/5 to-blue-600/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="font-press-start text-2xl md:text-3xl mb-6 text-red-600 leading-tight">
              Want to partner with us?
            </h2>
            <p className="font-jetbrains text-lg md:text-xl text-black/80 mb-8 max-w-3xl mx-auto">
              Join the Grand Indian Hackathon Season as a sponsor, mentor, or collaborator.
            </p>
            <Link 
              to="/collaborate" 
              className="pixel-button bg-red-600 text-white inline-flex items-center gap-3 hover:scale-105 transform transition-all text-lg px-8 py-4"
            >
              <span className="font-press-start">Partner With Us</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.section>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default Events;