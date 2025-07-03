import { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, MessageSquare } from 'lucide-react';
import SEO from '@/components/SEO';
import Footer from '@/components/Footer';

const Collaborate = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const collaborationCategories = [
    {
      id: 'sponsorship',
      title: '🏆 Sponsorship Collaborations',
      bgColor: 'bg-[#E50914]/10',
      borderColor: 'border-[#E50914]',
      items: [
        'Cash Sponsorship',
        'Tool Credits / Product Sponsorship',
        'Prize Sponsorship',
        'Mentor/Expert Sponsorship',
        'Amplification Sponsorship'
      ]
    },
    {
      id: 'strategic',
      title: '🚀 Strategic Collaborations',
      bgColor: 'bg-[#FFD700]/10',
      borderColor: 'border-[#FFD700]',
      items: [
        'Co-branded Hackathon Tracks',
        'Design/Content Collabs',
        'Partnered Events',
        'Product Pilots',
        'Storytelling Exchange'
      ]
    },
    {
      id: 'community',
      title: '🌐 Community & Platform Partnerships',
      bgColor: 'bg-[#39FF14]/10',
      borderColor: 'border-[#39FF14]',
      items: [
        'Cross-Promo Collabs',
        'Community Access Swaps',
        'Discord Server Integrations',
        'Shared Hackathon Infrastructure',
        'Event Hosting on Our Platform'
      ]
    },
    {
      id: 'creator',
      title: '📱 Creator & Influencer Collabs',
      bgColor: 'bg-[#FF5F5F]/10',
      borderColor: 'border-[#FF5F5F]',
      items: [
        'Event Amplification Reels',
        'Judge/Host Guest Spot',
        'LinkedIn + Instagram Collabs',
        'Student Ambassador Partnerships'
      ]
    },
    {
      id: 'educational',
      title: '📚 Educational & Institutional Partnerships',
      bgColor: 'bg-[#9B59B6]/10',
      borderColor: 'border-[#9B59B6]',
      items: [
        'Hackathon-in-a-Box for Institutions',
        'Bootcamp Collabs',
        'Curriculum Plug-ins',
        'Ed-tech x Hackathon Experiments'
      ]
    },
    {
      id: 'international',
      title: '🌍 International Ecosystem Builders',
      bgColor: 'bg-[#3498DB]/10',
      borderColor: 'border-[#3498DB]',
      items: [
        'Global Hack Exchanges',
        'Shared Talent Pools',
        'Podcast/Docu Co-productions'
      ]
    },
    {
      id: 'b2b',
      title: '💼 B2B + Startup Brand Collaborations',
      bgColor: 'bg-[#F39C12]/10',
      borderColor: 'border-[#F39C12]',
      items: [
        'Gen Z Product Testing Tracks',
        'Lead Gen + Beta User Campaigns',
        'Startup-as-a-Track Sponsor',
        'Brand Feature Content'
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Collaborate with Maximally | Global Hackathon League Partnerships"
        description="Partner with Maximally to reach Gen Z builders and young founders. Explore sponsorship, strategic partnerships, and collaboration opportunities with the global hackathon league."
        keywords="hackathon partnerships, Gen Z marketing, startup collaboration, developer community, innovation sponsorship"
      />
      
      <div className="min-h-screen pt-24 bg-white">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-maximally-black to-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 animate-grid-flow" />
          <div className="container mx-auto text-center relative">
            <h1 className="font-press-start text-4xl md:text-6xl mb-8 text-white">
              Let's Collaborate.
            </h1>
            <p className="font-jetbrains text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-white/90">
              Maximally is a global, hackathon-first innovation league. If you're a brand, startup, platform, or community looking to reach Gen Z builders and young founders — this is your invitation to collaborate.
            </p>
          </div>
        </section>

        {/* Collaboration Categories */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-6">
              {collaborationCategories.map((category) => (
                <div 
                  key={category.id}
                  className={`pixel-border ${category.bgColor} ${category.borderColor} transition-all duration-300`}
                >
                  <button
                    onClick={() => toggleSection(category.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-black/5 transition-colors"
                  >
                    <h2 className="font-press-start text-xl md:text-2xl text-black">
                      {category.title}
                    </h2>
                    {openSections.includes(category.id) ? (
                      <ChevronUp className="h-6 w-6 text-black" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-black" />
                    )}
                  </button>
                  
                  {openSections.includes(category.id) && (
                    <div className="px-6 pb-6 border-t border-gray-200">
                      <ul className="space-y-3 mt-4">
                        {category.items.map((item, index) => (
                          <li 
                            key={index}
                            className="font-jetbrains text-lg text-black/80 flex items-center gap-3"
                          >
                            <span className="w-2 h-2 bg-black/40 pixel-border-sm"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-maximally-black text-white">
          <div className="container mx-auto text-center">
            <div className="pixel-border bg-gradient-to-r from-[#E50914]/20 to-[#FFD700]/20 border-white/20 p-8 max-w-2xl mx-auto">
              <h2 className="font-press-start text-2xl md:text-3xl mb-6 text-white">
                💬 Want to collaborate with us?
              </h2>
              <div className="space-y-4 font-jetbrains text-lg">
                <div className="flex items-center justify-center gap-3">
                  <Mail className="h-5 w-5 text-[#FFD700]" />
                  <span>📧 Email us at <a href="mailto:hello@maximally.in" className="text-[#FFD700] hover:text-[#E50914] transition-colors underline">hello@maximally.in</a></span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MessageSquare className="h-5 w-5 text-[#FFD700]" />
                  <span>📲 Or DM us on Instagram: <a href="https://instagram.com/maximally.in" target="_blank" rel="noopener noreferrer" className="text-[#FFD700] hover:text-[#E50914] transition-colors underline">@maximally.in</a></span>
                </div>
              </div>
              <p className="font-jetbrains text-white/80 mt-6 text-base">
                We're always up for bold experiments, startup collabs, and building the future together.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Collaborate;