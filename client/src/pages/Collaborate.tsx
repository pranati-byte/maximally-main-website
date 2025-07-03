import { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, MessageSquare } from 'lucide-react';
import SEO from '@/components/SEO';
import Footer from '@/components/Footer';

const Collaborate = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [openSponsorshipItems, setOpenSponsorshipItems] = useState<string[]>([]);
  const [openStrategicItems, setOpenStrategicItems] = useState<string[]>([]);
  const [openCommunityItems, setOpenCommunityItems] = useState<string[]>([]);
  const [openCreatorItems, setOpenCreatorItems] = useState<string[]>([]);
  const [openEducationalItems, setOpenEducationalItems] = useState<string[]>([]);

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

  const toggleStrategicItem = (itemId: string) => {
    setOpenStrategicItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const toggleCommunityItem = (itemId: string) => {
    setOpenCommunityItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const toggleCreatorItem = (itemId: string) => {
    setOpenCreatorItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const toggleEducationalItem = (itemId: string) => {
    setOpenEducationalItems(prev => 
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

  const strategicItems = [
    {
      id: 'cobranded',
      title: '🎯 Co-branded Hackathon Tracks',
      description: `Design a challenge, theme, or industry track under your brand inside our upcoming hackathons — for example:

"Zerodha Fintech Sprint"
"OpenAI for India Track"
"Zomato x Maximally FoodTech Challenge"

We'll give your track its own:

• Branding inside the event
• Dedicated reel or explainer
• Finalist shortlisting support
• Judging panel slot

Ideal for: Product-first startups, industry leaders, innovation arms of big brands.`,
      idealFor: 'Product-first startups, industry leaders, innovation arms of big brands'
    },
    {
      id: 'design',
      title: '🎨 Design / Content Collabs',
      description: `We team up with creators, studios, or in-house content teams to build:

• Short-form reels or docu-style videos
• Design packs or storytelling kits for challenges
• Viral recap or founder story formats

If you're building something cool, we'll turn it into a creative sprint and tell your story while our builders remix it in wild, Gen Z-native ways.

Ideal for: Studios, creator tools, youth marketing teams, B2C brands.`,
      idealFor: 'Studios, creator tools, youth marketing teams, B2C brands'
    },
    {
      id: 'partnered',
      title: '🤝 Partnered Events',
      description: `Want to run your own hackathon or startup sprint, but with Maximally's energy, reach, and systems?

We'll co-host it under your banner or inside your community, bringing:

• Event planning + execution
• Builder pipeline + applications
• Judges, mentors, and challenge design
• Full content and brand rollout

You bring the vision — we make it real.

Ideal for: Schools, student orgs, youth platforms, startup accelerators.`,
      idealFor: 'Schools, student orgs, youth platforms, startup accelerators'
    },
    {
      id: 'pilots',
      title: '🧪 Product Pilots',
      description: `Let teen builders test your product in a real-world challenge.

We'll build a track that uses your:

• API or SDK
• SaaS tool or browser extension
• AI workflow or dev toolkit

You'll get:

• Real usage data + builds
• Screenshots, testimonials, and feedback
• Brand love and discoverability

Ideal for: Early-stage startups, devtools, AI tools, and new launches.`,
      idealFor: 'Early-stage startups, devtools, AI tools, and new launches'
    },
    {
      id: 'storytelling',
      title: '📖 Storytelling Exchange',
      description: `Got a powerful founder story, product journey, or campaign you want shared?

We'll:

• Feature you on our podcast or content reels
• Turn your story into a creative challenge
• Share it with our builders for remixing
• Cross-promote it in our newsletters + community drops

You get reach + cultural relevance; we get content + inspiration.

Ideal for: Founders, creators, journalists, indie brands.`,
      idealFor: 'Founders, creators, journalists, indie brands'
    }
  ];

  const communityItems = [
    {
      id: 'crosspromo',
      title: '📣 Cross-Promo Collabs',
      description: `You post about us, we post about you.
Simple, high-trust collaborations where we:

• Promote your org during our hackathons
• Share mutual event announcements
• Highlight cool projects, newsletters, or pages

You reach thousands of Gen Z founders and creators. We build community reach, together.

Ideal for: Instagram communities, youth media pages, Gen Z ecosystems, edtech pages, and tool platforms.`,
      idealFor: 'Instagram communities, youth media pages, Gen Z ecosystems, edtech pages, and tool platforms'
    },
    {
      id: 'accessswaps',
      title: '🔄 Community Access Swaps',
      description: `We give your team mod or guest-posting access to our Discord, and you return the same.

Together, we:

• Promote key announcements or product drops
• Organize live AMAs or Q&As
• Host chill community takeovers

This is about trust, alignment, and mutual audience love — no fluff.

Ideal for: Niche Discord servers, early-stage DAOs, startup clubs, youth-led groups.`,
      idealFor: 'Niche Discord servers, early-stage DAOs, startup clubs, youth-led groups'
    },
    {
      id: 'discord',
      title: '🎮 Discord Server Integrations',
      description: `We can run micro-events, cross-server challenges, or even pin your prompts into our hackathon ecosystem.

Ideas include:

• Shared leaderboard sprints
• "Mini-Hack" rooms across servers
• Public builder jam collabs

We treat Discord as infrastructure. Let's wire up something wild.

Ideal for: Hackathon clubs, open-source projects, student tech forums, AI hobbyist spaces.`,
      idealFor: 'Hackathon clubs, open-source projects, student tech forums, AI hobbyist spaces'
    },
    {
      id: 'infrastructure',
      title: '🏗️ Shared Hackathon Infrastructure',
      description: `We can lend you our:

• Judging templates
• Event structures
• Track ideas
• Submission frameworks

Or you lend us yours.
We also co-create joint makeathons or run formats together — your squad + our format.

Ideal for: Hackathon organizers, student clubs, or regional startup programs.`,
      idealFor: 'Hackathon organizers, student clubs, or regional startup programs'
    },
    {
      id: 'hosting',
      title: '🎪 Event Hosting on Our Platform',
      description: `Have an event but need Gen Z energy, structure, or reach?

We can host your event inside the Maximally ecosystem — as:

• A "Lab" track in a larger hackathon
• A standalone weekend jam
• A brand collab sprint

We handle execution, community, and visibility — you bring the theme.

Ideal for: Brands, SaaS tools, creator collectives, product teams, NGOs.`,
      idealFor: 'Brands, SaaS tools, creator collectives, product teams, NGOs'
    }
  ];

  const creatorItems = [
    {
      id: 'amplification',
      title: '📺 Event Amplification Reels',
      description: `Got reach? Help us spread the word about our hackathons by:

• Posting challenge launches
• Breaking down winning entries
• Reacting to wild ideas Gen Z is building

We'll feature you as a creator-collaborator, send reel packs and CTAs, and promote you in our Discord + recap drops.

Ideal for: Creators on IG/YouTube/LinkedIn with Gen Z or startup-focused audiences.`,
      idealFor: 'Creators on IG/YouTube/LinkedIn with Gen Z or startup-focused audiences'
    },
    {
      id: 'judge',
      title: '🎙️ Judge / Host Guest Spot',
      description: `Become part of the Maximally world by joining as:

• A guest judge during Demo Day
• A hype MC or live session host
• A mentor to a top builder team

No boring panels. We keep it crisp, funny, and punchy — and we love letting creators share the stage.

Ideal for: Podcasters, content-led founders, student influencers, indie creators.`,
      idealFor: 'Podcasters, content-led founders, student influencers, indie creators'
    },
    {
      id: 'social',
      title: '📱 LinkedIn + Instagram Collabs',
      description: `Let's co-post. We'll write or design content together, remix something wild, or collaborate on:

• Carousel content
• Startup memes
• Founder/creator story breakdowns
• "Build with us" promos

We help with copy, editing, strategy — you get growth, content, and community love.

Ideal for: LinkedIn content creators, Instagram carousel accounts, startup memes, founderfluencers.`,
      idealFor: 'LinkedIn content creators, Instagram carousel accounts, startup memes, founderfluencers'
    },
    {
      id: 'ambassador',
      title: '🎓 Student Ambassador Partnerships',
      description: `If you're an active student with a strong personal brand or campus rep power — join as a:

• Brand voice for Maximally
• Campus builder recruiter
• Creator-in-residence (content + growth)

You get exposure, behind-the-scenes access, early product drops, and a chance to lead real experiments.

Ideal for: Students running communities, IG/YouTube creators, Gen Z with vibes + hustle.`,
      idealFor: 'Students running communities, IG/YouTube creators, Gen Z with vibes + hustle'
    }
  ];

  const educationalItems = [
    {
      id: 'hackathon-box',
      title: '📦 Hackathon-in-a-Box for Institutions',
      description: `Bring Maximally to your campus. We'll set up and execute a high-energy hackathon for your students — virtually or physically — with:

• Full theme + track design
• Submission systems + judging
• Real mentors + industry speakers
• Content recap + PR assets

Your students get a startup-grade experience. You get national visibility, builder proof, and top-tier energy.

Ideal for: Schools, colleges, alt-ed programs, coding clubs, edtech accelerators.`,
      idealFor: 'Schools, colleges, alt-ed programs, coding clubs, edtech accelerators'
    },
    {
      id: 'bootcamp',
      title: '⚡ Bootcamp Collabs',
      description: `Plug your students directly into our hackathon or challenge sprints. We offer:

• Reserved seats in upcoming events
• Custom onboarding for your cohort
• Certification + builder support post-event

You bring the learners. We bring the real world.

Ideal for: Coding bootcamps, upskilling cohorts, scholarship foundations, training orgs.`,
      idealFor: 'Coding bootcamps, upskilling cohorts, scholarship foundations, training orgs'
    },
    {
      id: 'curriculum',
      title: '📖 Curriculum Plug-ins',
      description: `Want to make your syllabus more applied? We can plug Maximally's hackathon formats into your curriculum as:

• Project-based learning modules
• Mini-challenges or build tasks
• Evaluation-friendly structures

Think of it as JEE meets Shark Tank, but cooler and actually useful.

Ideal for: Schools, universities, blended learning orgs, edtech startups.`,
      idealFor: 'Schools, universities, blended learning orgs, edtech startups'
    },
    {
      id: 'experiments',
      title: '🧪 Ed-tech x Hackathon Experiments',
      description: `Want to experiment with formats that drive engagement, retention, or real proof-of-work?

We'll collaborate on wild innovation pilots:

• Tool-based sprints
• AI-assisted learning challenges
• Skill-to-startup builder formats

You test something new. We give it speed, talent, and stories.

Ideal for: Edtech products, learning tools, R&D teams, accelerators.`,
      idealFor: 'Edtech products, learning tools, R&D teams, accelerators'
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
      items: strategicItems.map(item => item.title)
    },
    {
      id: 'community',
      title: '🌐 Community & Platform Partnerships',
      bgColor: 'bg-[#39FF14]/10',
      borderColor: 'border-[#39FF14]',
      items: communityItems.map(item => item.title)
    },
    {
      id: 'creator',
      title: '📱 Creator & Influencer Collabs',
      bgColor: 'bg-[#FF5F5F]/10',
      borderColor: 'border-[#FF5F5F]',
      items: creatorItems.map(item => item.title)
    },
    {
      id: 'educational',
      title: '📚 Educational & Institutional Partnerships',
      bgColor: 'bg-[#9B59B6]/10',
      borderColor: 'border-[#9B59B6]',
      items: educationalItems.map(item => item.title)
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
                      ) : category.id === 'strategic' ? (
                        <div className="space-y-4 mt-4">
                          {strategicItems.map((item) => (
                            <div key={item.id} className="pixel-border bg-white/50 border-gray-300">
                              <button
                                onClick={() => toggleStrategicItem(item.id)}
                                className="w-full p-4 text-left flex items-center justify-between hover:bg-black/5 transition-colors"
                              >
                                <span className="font-jetbrains text-lg text-black/90 font-medium">
                                  {item.title}
                                </span>
                                {openStrategicItems.includes(item.id) ? (
                                  <ChevronUp className="h-5 w-5 text-black/70" />
                                ) : (
                                  <ChevronDown className="h-5 w-5 text-black/70" />
                                )}
                              </button>
                              
                              {openStrategicItems.includes(item.id) && (
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
                          
                          {/* Strategic CTA */}
                          <div className="mt-6 p-4 pixel-border bg-gradient-to-r from-[#FFD700]/10 to-[#E50914]/10 border-[#FFD700]">
                            <div className="text-center">
                              <h3 className="font-press-start text-lg mb-3 text-black">
                                📣 Have a wild idea or campaign in mind?
                              </h3>
                              <p className="font-jetbrains text-base text-black/80 mb-4">
                                Let's co-create something that gets people talking.
                              </p>
                              <div className="space-y-2 font-jetbrains text-base">
                                <div className="flex items-center justify-center gap-2">
                                  <Mail className="h-4 w-4 text-[#FFD700]" />
                                  <span>💬 Reach out at <a href="mailto:hello@maximally.in" className="text-[#FFD700] hover:text-[#E50914] transition-colors underline font-medium">hello@maximally.in</a></span>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                  <MessageSquare className="h-4 w-4 text-[#FFD700]" />
                                  <span>📲 DM <a href="https://instagram.com/maximally.in" target="_blank" rel="noopener noreferrer" className="text-[#FFD700] hover:text-[#E50914] transition-colors underline font-medium">@maximally.in</a></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : category.id === 'community' ? (
                        <div className="space-y-4 mt-4">
                          {communityItems.map((item) => (
                            <div key={item.id} className="pixel-border bg-white/50 border-gray-300">
                              <button
                                onClick={() => toggleCommunityItem(item.id)}
                                className="w-full p-4 text-left flex items-center justify-between hover:bg-black/5 transition-colors"
                              >
                                <span className="font-jetbrains text-lg text-black/90 font-medium">
                                  {item.title}
                                </span>
                                {openCommunityItems.includes(item.id) ? (
                                  <ChevronUp className="h-5 w-5 text-black/70" />
                                ) : (
                                  <ChevronDown className="h-5 w-5 text-black/70" />
                                )}
                              </button>
                              
                              {openCommunityItems.includes(item.id) && (
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
                          
                          {/* Community CTA */}
                          <div className="mt-6 p-4 pixel-border bg-gradient-to-r from-[#39FF14]/10 to-[#FFD700]/10 border-[#39FF14]">
                            <div className="text-center">
                              <h3 className="font-press-start text-lg mb-3 text-black">
                                📣 Run a Discord? Own a niche page? Lead a club?
                              </h3>
                              <p className="font-jetbrains text-base text-black/80 mb-4">
                                We'd love to swap value, visibility, or vibes.
                              </p>
                              <div className="space-y-2 font-jetbrains text-base">
                                <div className="flex items-center justify-center gap-2">
                                  <Mail className="h-4 w-4 text-[#39FF14]" />
                                  <span>💬 Hit us at <a href="mailto:hello@maximally.in" className="text-[#39FF14] hover:text-[#FFD700] transition-colors underline font-medium">hello@maximally.in</a></span>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                  <MessageSquare className="h-4 w-4 text-[#39FF14]" />
                                  <span>📲 DM <a href="https://instagram.com/maximally.in" target="_blank" rel="noopener noreferrer" className="text-[#39FF14] hover:text-[#FFD700] transition-colors underline font-medium">@maximally.in</a></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : category.id === 'creator' ? (
                        <div className="space-y-4 mt-4">
                          {creatorItems.map((item) => (
                            <div key={item.id} className="pixel-border bg-white/50 border-gray-300">
                              <button
                                onClick={() => toggleCreatorItem(item.id)}
                                className="w-full p-4 text-left flex items-center justify-between hover:bg-black/5 transition-colors"
                              >
                                <span className="font-jetbrains text-lg text-black/90 font-medium">
                                  {item.title}
                                </span>
                                {openCreatorItems.includes(item.id) ? (
                                  <ChevronUp className="h-5 w-5 text-black/70" />
                                ) : (
                                  <ChevronDown className="h-5 w-5 text-black/70" />
                                )}
                              </button>
                              
                              {openCreatorItems.includes(item.id) && (
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
                          
                          {/* Creator CTA */}
                          <div className="mt-6 p-4 pixel-border bg-gradient-to-r from-[#FF5F5F]/10 to-[#FFD700]/10 border-[#FF5F5F]">
                            <div className="text-center">
                              <h3 className="font-press-start text-lg mb-3 text-black">
                                📣 You create. We amplify. Let's co-build a movement.
                              </h3>
                              <div className="space-y-2 font-jetbrains text-base">
                                <div className="flex items-center justify-center gap-2">
                                  <Mail className="h-4 w-4 text-[#FF5F5F]" />
                                  <span>💬 Email <a href="mailto:hello@maximally.in" className="text-[#FF5F5F] hover:text-[#FFD700] transition-colors underline font-medium">hello@maximally.in</a></span>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                  <MessageSquare className="h-4 w-4 text-[#FF5F5F]" />
                                  <span>📲 DM <a href="https://instagram.com/maximally.in" target="_blank" rel="noopener noreferrer" className="text-[#FF5F5F] hover:text-[#FFD700] transition-colors underline font-medium">@maximally.in</a></span>
                                </div>
                              </div>
                              <p className="font-jetbrains text-black/70 mt-3 text-sm">
                                We're always looking for content-first rebels and storytellers.
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : category.id === 'educational' ? (
                        <div className="space-y-4 mt-4">
                          {educationalItems.map((item) => (
                            <div key={item.id} className="pixel-border bg-white/50 border-gray-300">
                              <button
                                onClick={() => toggleEducationalItem(item.id)}
                                className="w-full p-4 text-left flex items-center justify-between hover:bg-black/5 transition-colors"
                              >
                                <span className="font-jetbrains text-lg text-black/90 font-medium">
                                  {item.title}
                                </span>
                                {openEducationalItems.includes(item.id) ? (
                                  <ChevronUp className="h-5 w-5 text-black/70" />
                                ) : (
                                  <ChevronDown className="h-5 w-5 text-black/70" />
                                )}
                              </button>
                              
                              {openEducationalItems.includes(item.id) && (
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
                          
                          {/* Educational CTA */}
                          <div className="mt-6 p-4 pixel-border bg-gradient-to-r from-[#9B59B6]/10 to-[#FFD700]/10 border-[#9B59B6]">
                            <div className="text-center">
                              <h3 className="font-press-start text-lg mb-3 text-black">
                                📣 Work at a school, college, or ed-tech org?
                              </h3>
                              <p className="font-jetbrains text-base text-black/80 mb-4">
                                Let's plug Maximally into your ecosystem.
                              </p>
                              <div className="space-y-2 font-jetbrains text-base">
                                <div className="flex items-center justify-center gap-2">
                                  <Mail className="h-4 w-4 text-[#9B59B6]" />
                                  <span>💬 Email <a href="mailto:hello@maximally.in" className="text-[#9B59B6] hover:text-[#FFD700] transition-colors underline font-medium">hello@maximally.in</a></span>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                  <MessageSquare className="h-4 w-4 text-[#9B59B6]" />
                                  <span>📲 DM <a href="https://instagram.com/maximally.in" target="_blank" rel="noopener noreferrer" className="text-[#9B59B6] hover:text-[#FFD700] transition-colors underline font-medium">@maximally.in</a></span>
                                </div>
                              </div>
                              <p className="font-jetbrains text-black/70 mt-3 text-sm">
                                We're building the JEE alternative — and we'd love to build it with you.
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