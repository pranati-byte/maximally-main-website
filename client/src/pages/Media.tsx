import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { PlayCircle, FileText, Users, Download } from "lucide-react";

const Media = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Helmet>
        <title>Media Hub - Maximally</title>
        <meta name="description" content="Press features, blog, videos, stories, and brand resources from Maximally - the global hackathon league for builders." />
      </Helmet>

      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-press-start text-2xl md:text-3xl text-maximally-black mb-4">
              Media Hub
            </h1>
            <p className="font-body text-lg text-maximally-gray max-w-2xl mx-auto">
              Press features, content, and resources from the global hackathon league.
            </p>
          </div>

          {/* Media Sections Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Press Features */}
            <Link to="/press">
              <div className="glass-card rounded-card p-8 group cursor-pointer hover:scale-105 transition-all duration-300">
                <FileText className="h-12 w-12 text-maximally-red mb-4 group-hover:text-maximally-yellow transition-colors" />
                <h3 className="font-press-start text-sm text-maximally-black mb-2">Press Features</h3>
                <p className="font-body text-maximally-gray">Latest coverage and press mentions</p>
              </div>
            </Link>

            {/* Blog Index */}
            <Link to="/blog">
              <div className="glass-card rounded-card p-8 group cursor-pointer hover:scale-105 transition-all duration-300">
                <FileText className="h-12 w-12 text-maximally-blue mb-4 group-hover:text-maximally-yellow transition-colors" />
                <h3 className="font-press-start text-sm text-maximally-black mb-2">Blog</h3>
                <p className="font-body text-maximally-gray">Guides, stories, and insights for builders</p>
              </div>
            </Link>

            {/* Videos */}
            <Link to="/videos">
              <div className="glass-card rounded-card p-8 group cursor-pointer hover:scale-105 transition-all duration-300">
                <PlayCircle className="h-12 w-12 text-maximally-yellow mb-4 group-hover:text-maximally-red transition-colors" />
                <h3 className="font-press-start text-sm text-maximally-black mb-2">Videos</h3>
                <p className="font-body text-maximally-gray">Event highlights and builder spotlights</p>
              </div>
            </Link>

            {/* Success Stories */}
            <Link to="/stories">
              <div className="glass-card rounded-card p-8 group cursor-pointer hover:scale-105 transition-all duration-300">
                <Users className="h-12 w-12 text-maximally-green mb-4 group-hover:text-maximally-yellow transition-colors" />
                <h3 className="font-press-start text-sm text-maximally-black mb-2">Success Stories</h3>
                <p className="font-body text-maximally-gray">Builder journeys and achievements</p>
              </div>
            </Link>

            {/* Brand Kit */}
            <div className="md:col-span-2">
              <Link to="/brand-kit">
                <div className="glass-card rounded-card p-8 group cursor-pointer hover:scale-102 transition-all duration-300 text-center">
                  <Download className="h-12 w-12 text-maximally-purple mb-4 mx-auto group-hover:text-maximally-yellow transition-colors" />
                  <h3 className="font-press-start text-sm text-maximally-black mb-2">Brand Kit Download</h3>
                  <p className="font-body text-maximally-gray">Logos, assets, and brand guidelines</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;