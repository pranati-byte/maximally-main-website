import { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, MessageSquare } from 'lucide-react';
import SEO from '@/components/SEO';
import Footer from '@/components/Footer';

const Collaborate = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [openSponsorshipItems, setOpenSponsorshipItems] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const toggleSponsorshipItem = (itemId: string) => {
    setOpenSponsorshipItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const sponsorshipItems = [
    {
      id: 'cash',
      title: '💰 Cash Sponsorship',
      description: `Back Maximally hackathons with cash support to fuel operations, rewards, and outreach.
We offer tiered sponsorship packages (₹10K–₹2L+) with clear benefits — including:

• Logo placement across event materials and social content
• Named track or challenge (e.g. "The [YourBrand] Build Sprint")
• Co-branded reels and shoutouts
• Speaking/judging opportunities
• Access to resume books, MVPs, and our top teen builders

Ideal for: VC firms, ed-techs, dev tools, talent scouts, D2C brands, impact orgs.`,
      idealFor: 'VC firms, ed-techs, dev tools, talent scouts, D2C brands, impact orgs'
    },
    {
      id: 'tool',
      title: '🛠️ Tool Credits / Product Sponsorship',
      description: `If you're a dev tool, SaaS product, or platform, you can sponsor Maximally with:

• Free credits (e.g. Replit, Notion, Figma)
• Pro accounts for hackers
• API access for MVP builds

We'll integrate your product into our event stack, recommend it to teen founders, and give you:

• Organic usage feedback
• Screenshots + testimonials
• Mentions in our toolkit, Discord, and content

Ideal for: Startup tools, AI products, productivity platforms, infra APIs.`,
      idealFor: 'Startup tools, AI products, productivity platforms, infra APIs'
    },
    {
      id: 'prize',
      title: '🏅 Prize Sponsorship',
      description: `Offer a prize to winning teams — it could be:

• Cash awards
• Internships or fast-track interviews
• Free access to premium plans
• Swag, gadgets, or merch
• Gift cards or learning credits

We'll shout you out on social, tag you in winner posts, and integrate your brand into the ceremony.

Ideal for: Youth platforms, hiring partners, creators, startup brands.`,
      idealFor: 'Youth platforms, hiring partners, creators, startup brands'
    },
    {
      id: 'mentor',
      title: '👨‍🏫 Mentor / Expert Sponsorship',
      description: `Nominate your team members, founders, or community experts to:

• Judge our hackathons
• Run AMA sessions
• Join Discord mentor threads

We curate the most ambitious teen founders — mentoring them builds goodwill, brand trust, and can lead to hiring, investments, or viral content.

Ideal for: Founder-led startups, talent teams, tech leaders, product thinkers.`,
      idealFor: 'Founder-led startups, talent teams, tech leaders, product thinkers'
    },
    {
      id: 'amplification',
      title: '📢 Amplification Sponsorship',
      description: `Use your platform (social, newsletter, media) to amplify Maximally before or after our hackathons.
We'll return the love with:

• Shoutouts in our builder community
• Cross-promo content
• Partner recognition on reels and recap docs

This is a no-cash-needed way to support teen innovation and earn long-term ecosystem cred.

Ideal for: Communities, publishers, niche brands, personal brands.`,
      idealFor: 'Communities, publishers, niche brands, personal brands'
    }
  ];

  const collaborationCategories = [
    {
      id: 'sponsorship',
      title: '🏆 Sponsorship Collaborations',
      bgColor: 'bg-[#E50914]/10',
      borderColor: 'border-[#E50914]',
      items: sponsorshipItems.map(item => item.title)
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
                      {category.id === 'sponsorship' ? (
                        <div className="space-y-4 mt-4">
                          {sponsorshipItems.map((item) => (
                            <div key={item.id} className="pixel-border bg-white/50 border-gray-300">
                              <button
                                onClick={() => toggleSponsorshipItem(item.id)}
                                className="w-full p-4 text-left flex items-center justify-between hover:bg-black/5 transition-colors"
                              >
                                <span className="font-jetbrains text-lg text-black/90 font-medium">
                                  {item.title}
                                </span>
                                {openSponsorshipItems.includes(item.id) ? (
                                  <ChevronUp className="h-5 w-5 text-black/70" />
                                ) : (
                                  <ChevronDown className="h-5 w-5 text-black/70" />
                                )}
                              </button>
                              
                              {openSponsorshipItems.includes(item.id) && (
                                <div className="px-4 pb-4 border-t border-gray-200">
                                  <div className="mt-3 space-y-3">
                                    <div className="font-jetbrains text-base text-black/80 whitespace-pre-line leading-relaxed">
                                      {item.description}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                          
                          {/* Sponsorship CTA */}
                          <div className="mt-6 p-4 pixel-border bg-gradient-to-r from-[#E50914]/10 to-[#FFD700]/10 border-[#E50914]">
                            <div className="text-center">
                              <h3 className="font-press-start text-lg mb-3 text-black">
                                📣 Interested in becoming a sponsor?
                              </h3>
                              <div className="space-y-2 font-jetbrains text-base">
                                <div className="flex items-center justify-center gap-2">
                                  <Mail className="h-4 w-4 text-[#E50914]" />
                                  <span>💬 Email us at <a href="mailto:hello@maximally.in" className="text-[#E50914] hover:text-[#FFD700] transition-colors underline font-medium">hello@maximally.in</a></span>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                  <MessageSquare className="h-4 w-4 text-[#E50914]" />
                                  <span>📲 DM <a href="https://instagram.com/maximally.in" target="_blank" rel="noopener noreferrer" className="text-[#E50914] hover:text-[#FFD700] transition-colors underline font-medium">@maximally.in</a></span>
                                </div>
                              </div>
                              <p className="font-jetbrains text-black/70 mt-3 text-sm">
                                We'll send you a sponsor deck, available tracks, and custom collab ideas.
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
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
                      )}
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