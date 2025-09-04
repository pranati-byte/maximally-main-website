import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { TrendingUp, FileBarChart, Target, Database, Quote } from "lucide-react";

const Impact = () => {
  const metrics = [
    { value: "5,000+", label: "Total Participants", color: "text-maximally-red" },
    { value: "2,500+", label: "Projects Shipped", color: "text-maximally-yellow" },
    { value: "150+", label: "Judges & Partners", color: "text-maximally-blue" },
    { value: "25+", label: "Countries Reached", color: "text-maximally-green" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Helmet>
        <title>Impact Hub - Maximally</title>
        <meta name="description" content="See the real impact of Maximally hackathons - metrics, reports, and data on global builder community growth." />
      </Helmet>

      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-press-start text-2xl md:text-3xl text-maximally-black mb-4">
              Proof of work at Maximally
            </h1>
            <p className="font-body text-lg text-maximally-gray max-w-2xl mx-auto">
              Real metrics from our global hackathon league.
            </p>
            <p className="font-body text-sm text-maximally-gray mt-2">Updated monthly</p>
          </div>

          {/* Top Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric, index) => (
              <div key={index} className="glass-card rounded-card p-6 text-center">
                <div className={`font-display font-bold text-2xl md:text-3xl ${metric.color} mb-2`}>
                  {metric.value}
                </div>
                <div className="font-body text-sm text-maximally-gray">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Impact Sections Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Latest Report */}
            <Link to="/impact/reports/2025-01">
              <div className="glass-card rounded-card p-8 group cursor-pointer hover:scale-105 transition-all duration-300">
                <FileBarChart className="h-12 w-12 text-maximally-red mb-4 group-hover:text-maximally-yellow transition-colors" />
                <h3 className="font-press-start text-sm text-maximally-black mb-2">Latest Event Report</h3>
                <p className="font-body text-maximally-gray">Deep dive into our most recent hackathon outcomes</p>
              </div>
            </Link>

            {/* Quarterly Targets */}
            <div className="glass-card rounded-card p-8">
              <Target className="h-12 w-12 text-maximally-blue mb-4" />
              <h3 className="font-press-start text-sm text-maximally-black mb-2">Quarterly Targets</h3>
              <p className="font-body text-maximally-gray mb-4">Q1 2025 goals and progress tracking</p>
              <div className="space-y-2">
                <div className="flex justify-between font-body text-sm">
                  <span>Events Hosted</span>
                  <span className="text-maximally-green">8/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-maximally-green h-2 rounded-full w-4/5"></div>
                </div>
              </div>
            </div>

            {/* Open Data */}
            <Link to="/data">
              <div className="glass-card rounded-card p-8 group cursor-pointer hover:scale-105 transition-all duration-300">
                <Database className="h-12 w-12 text-maximally-yellow mb-4 group-hover:text-maximally-red transition-colors" />
                <h3 className="font-press-start text-sm text-maximally-black mb-2">Open Data</h3>
                <p className="font-body text-maximally-gray">Access our full dataset and analytics</p>
              </div>
            </Link>

            {/* Partner Quotes */}
            <div className="glass-card rounded-card p-8">
              <Quote className="h-12 w-12 text-maximally-purple mb-4" />
              <h3 className="font-press-start text-sm text-maximally-black mb-2">Partner Feedback</h3>
              <blockquote className="font-body italic text-maximally-gray">
                "Maximally delivers the highest quality hackathon experience we've seen globally."
              </blockquote>
              <cite className="font-body text-sm text-maximally-black mt-2 block">- Tech Industry Partner</cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;