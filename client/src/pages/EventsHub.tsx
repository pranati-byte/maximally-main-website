import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Clock, Users, Filter } from "lucide-react";
import { useState } from "react";

const EventsHub = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filters = [
    { id: "all", label: "All Events" },
    { id: "upcoming", label: "Upcoming" },
    { id: "past", label: "Past" },
    { id: "ai", label: "AI Track" },
    { id: "startup", label: "Startup Track" },
    { id: "creative", label: "Creative Track" }
  ];

  const events = [
    {
      slug: "ai-shipathon",
      title: "Maximally AI Shipathon",
      date: "Feb 15-17, 2025",
      duration: "48 hours",
      format: "Online",
      track: "AI",
      status: "featured",
      description: "Build AI products that ship. No lectures, just coding and launching.",
      participants: "500+"
    },
    {
      slug: "code-hypothesis",
      title: "Code Hypothesis",
      date: "Jan 18-19, 2025",
      duration: "24 hours",
      format: "Hybrid",
      track: "Creative",
      status: "upcoming",
      description: "Chaos sprints for wild ideas and experimental builds.",
      participants: "300+"
    },
    {
      slug: "protocol-404", 
      title: "Protocol 404",
      date: "Dec 14-15, 2024",
      duration: "36 hours",
      format: "Online",
      track: "Startup",
      status: "past",
      description: "When the system is broken, build anyway.",
      participants: "450+"
    },
    {
      slug: "codegen",
      title: "Project CodeGen",
      date: "Nov 22-24, 2024",
      duration: "48 hours", 
      format: "Offline",
      track: "AI",
      status: "past",
      description: "Beyond hackathons - ship real products.",
      participants: "200+"
    },
    {
      slug: "promptstorm",
      title: "PromptStorm",
      date: "Oct 10-12, 2024",
      duration: "48 hours",
      format: "Online",
      track: "AI",
      status: "past",
      description: "Master the art of AI prompting and LLM orchestration.",
      participants: "380+"
    },
    {
      slug: "steal-a-thon",
      title: "Steal-a-Thon",
      date: "Sep 20-22, 2024",
      duration: "48 hours",
      format: "Online",
      track: "Creative",
      status: "past",
      description: "Take existing ideas and make them 10x better.",
      participants: "250+"
    },
    {
      slug: "codepocalypse",
      title: "Codepocalypse",
      date: "Aug 15-17, 2024",
      duration: "48 hours",
      format: "Hybrid",
      track: "Startup",
      status: "past",
      description: "End-times coding challenge for ultimate survival builds.",
      participants: "320+"
    },
    {
      slug: "tech-assembly-2025",
      title: "Grand Tech Assembly 2025",
      date: "Jul 25-28, 2024",
      duration: "72 hours",
      format: "Offline",
      track: "Startup",
      status: "past",
      description: "Our flagship annual gathering of global builders.",
      participants: "600+"
    },
    {
      slug: "hacktober-2025",
      title: "Hacktober 2025",
      date: "Oct 31 - Nov 2, 2024",
      duration: "48 hours",
      format: "Online",
      track: "Creative",
      status: "past",
      description: "Halloween-themed chaos coding for spooky season.",
      participants: "400+"
    },
    {
      slug: "summer-2025-makeathon",
      title: "Summer 2025 Makeathon",
      date: "Jun 10-12, 2024",
      duration: "48 hours",
      format: "Hybrid",
      track: "Startup",
      status: "past",
      description: "Premier startup simulation for ambitious builders.",
      participants: "550+"
    }
  ];

  const filteredEvents = events.filter(event => {
    if (activeFilter === "all") return true;
    if (activeFilter === "upcoming") return event.status === "featured" || event.status === "upcoming";
    if (activeFilter === "past") return event.status === "past";
    return event.track.toLowerCase() === activeFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Helmet>
        <title>Events Hub - Maximally</title>
        <meta name="description" content="Explore all Maximally hackathon events - upcoming AI shipathons, startup makeathons, and creative chaos sprints for builders worldwide." />
      </Helmet>

      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-press-start text-2xl md:text-3xl text-maximally-black mb-4">
              Events Hub
            </h1>
            <p className="font-body text-lg text-maximally-gray max-w-2xl mx-auto">
              High-stakes sprints for builders worldwide. No lectures, just real proof-of-work events.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-hero-cta font-press-start text-xs transition-all duration-200 backdrop-blur-sm border ${
                  activeFilter === filter.id
                    ? "bg-maximally-red text-white border-maximally-red shadow-lg"
                    : "bg-white/20 text-maximally-black border-white/30 hover:bg-white/40"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredEvents.map((event) => (
              <Link key={event.slug} to={`/events/${event.slug}`}>
                <div className={`glass-card rounded-card p-8 group cursor-pointer hover:scale-105 transition-all duration-300 relative ${
                  event.status === "featured" ? "ring-2 ring-maximally-yellow" : ""
                }`}>
                  {event.status === "featured" && (
                    <div className="absolute -top-3 left-4 bg-maximally-yellow text-maximally-black px-3 py-1 rounded-full font-body font-medium text-xs">
                      Featured
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-body font-medium ${
                      event.track === "AI" ? "bg-maximally-red/20 text-maximally-red" :
                      event.track === "Startup" ? "bg-maximally-blue/20 text-maximally-blue" :
                      "bg-maximally-yellow/20 text-maximally-yellow"
                    }`}>
                      {event.track}
                    </div>
                    <div className={`text-xs font-body ${
                      event.status === "past" ? "text-maximally-gray" :
                      event.status === "featured" ? "text-maximally-red" :
                      "text-maximally-green"
                    }`}>
                      {event.status === "past" ? "Completed" : "Registration Open"}
                    </div>
                  </div>

                  <h3 className="font-press-start text-sm text-maximally-black mb-3 group-hover:text-maximally-red transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="font-body text-maximally-gray mb-4 text-sm">
                    {event.description}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-maximally-gray">
                      <Calendar className="h-4 w-4" />
                      <span className="font-body">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-maximally-gray">
                      <Clock className="h-4 w-4" />
                      <span className="font-body">{event.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-maximally-gray">
                      <MapPin className="h-4 w-4" />
                      <span className="font-body">{event.format}</span>
                    </div>
                    <div className="flex items-center gap-2 text-maximally-gray">
                      <Users className="h-4 w-4" />
                      <span className="font-body">{event.participants} builders</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <Filter className="h-16 w-16 text-maximally-gray mx-auto mb-4 opacity-50" />
              <h3 className="font-press-start text-sm text-maximally-black mb-2">No events found</h3>
              <p className="font-body text-maximally-gray">Try adjusting your filters to see more events.</p>
            </div>
          )}

          {/* Past Events Link */}
          <div className="text-center mt-12">
            <Link to="/events/past">
              <button className="pixel-glass-button border-maximally-gray bg-white/20 text-maximally-black hover:bg-white/40 px-8 py-4 rounded-hero-cta font-press-start text-xs transition-all duration-200">
                View All Past Events
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsHub;