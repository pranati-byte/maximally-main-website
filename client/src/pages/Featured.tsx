
import { Star, Award, ExternalLink } from "lucide-react";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

const Featured = () => {
  const partners = [
    {
      tier: "Education Partners",
      companies: [
        { name: "Masters Union", role: "Education Partner" },
        { name: "NexFellow", role: "Fellowship Partner" }
      ]
    },
    {
      tier: "Technology Partners",
      companies: [
        { name: "XYZ Domains", role: "Domain Partner" },
        { name: "CertifyMe", role: "Certification Partner" }
      ]
    }
  ];

  const coreAdvisors = [
    {
      name: "Thilakavathi Sankaran",
      role: "Data & Analytics Professional",
      company: "15+ Years Experience",
      quote: "Great ideas need more than vision — they need data, direction, and people who believe in both."
    },
    {
      name: "Priyanshu Sharma",
      role: "Founder & CEO",
      company: "ByteBrain",
      quote: "Maximally is doing what the world needs more of — empowering young minds to build boldly, think independently, and lead with purpose."
    },
    {
      name: "Anusha Ravi",
      role: "Product Leader",
      company: "Intuit",
      quote: "Big fan of starting small and growing fast!"
    },
    {
      name: "Hatim Kagalwala",
      role: "Applied Scientist",
      company: "Amazon",
      quote: "Maximally empowers individuals and organizations to think boldly, solve creatively, and build solutions that truly make an impact."
    },
    {
      name: "Milankumar Rana",
      role: "Software Engineer Advisor",
      company: "FedEx",
      quote: "Innovation happens when young minds are given the right platform and mentorship to transform ideas into reality."
    },
    {
      name: "Rishul Chanana",
      role: "Founder",
      company: "Maximally",
      quote: "Building the future by empowering builders to create meaningful impact through innovation."
    }
  ];

  const industryJudges = [
    {
      name: "Rahul Chandra",
      role: "Software Engineer",
      company: "Deepmind"
    },
    {
      name: "Krishna Ganeriwal",
      role: "Senior Software Engineer",
      company: "Meta Platforms Inc"
    },
    {
      name: "Harpreet Kaur Chawla",
      role: "Senior Software Engineer",
      company: "Amazon"
    },
    {
      name: "Nancy Al Kalach",
      role: "Senior Salesforce Developer",
      company: "Technology Professional"
    },
    {
      name: "Prashanthi Matam",
      role: "Senior MLOPS Engineer",
      company: "Enterprise Technology"
    },
    {
      name: "Nidhi Mahajan",
      role: "Director of Business Strategy and Operations",
      company: "Visa"
    },
    {
      name: "Rama Mallika Kadali",
      role: "Lead QA Engineer",
      company: "Quality Engineering"
    },
    {
      name: "Harshith Vaddiparthy",
      role: "AI Product Engineer & Head of Growth",
      company: "JustPaid.ai (YC W23)"
    },
    {
      name: "Hassan Rehan",
      role: "Senior IT Systems Engineer",
      company: "General Motors"
    },
    {
      name: "Kostyantyn Bondar",
      role: "Founder & CEO",
      company: "DarinX"
    },
    {
      name: "Louis Demeslay",
      role: "CTO",
      company: "Zealy.io"
    },
    {
      name: "Saket Ozarkar",
      role: "Software Engineer",
      company: "Replit"
    },
    {
      name: "Nishanth Prakash",
      role: "Senior Member of Technical Staff",
      company: "Oracle Inc"
    },
    {
      name: "Nikita Klimov",
      role: "Sr. Software QA Engineer Contractor",
      company: "ADP, Inc"
    },
    {
      name: "Tanmay Kejriwal",
      role: "Founder",
      company: "MakeX"
    },
    {
      name: "Raja Sekhar Rao Dheekonda",
      role: "Distinguished Engineer",
      company: "Dreadnode"
    },
    {
      name: "Senthilkumaran Rajagopalan",
      role: "Tech Lead Manager, Video Recommendations",
      company: "Meta"
    },
    {
      name: "Sahil Deshpande",
      role: "Software Engineer",
      company: "Meta"
    },
    {
      name: "Karthik Ramamurthy",
      role: "Engineering Lead",
      company: "Mercury Financial"
    },
    {
      name: "Venkataram Poosapati",
      role: "Senior Data Engineer",
      company: "Atlassian"
    },
    {
      name: "Shreesh Agarwal",
      role: "Sr. Business Analyst",
      company: "McKinsey & Company"
    },
    {
      name: "Rakesh Pullayikodi",
      role: "Staff Software Engineer",
      company: "Graphite Health"
    },
    {
      name: "Ashwini Joshi",
      role: "Senior Machine Learning Engineer",
      company: "Warner Bros. Discovery"
    },
    {
      name: "Vikranth Kumar Shivaa",
      role: "Founding Engineer",
      company: "Fig"
    }
  ];

  return (
    <>
      <SEO
        title="Featured Partners & Mentors | Maximally"
        description="Meet the amazing sponsors, judges, and mentors powering India's most ambitious teen program."
      />

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Pixel Grid Background */}
        <div className="fixed inset-0 bg-black" />
        <div className="fixed inset-0 bg-[linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating Pixels */}
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="fixed w-2 h-2 bg-maximally-red pixel-border animate-float pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + i}s`,
            }}
          />
        ))}

        <main className="min-h-screen pt-24 pb-16 px-4 relative z-10">
          <div className="max-w-7xl mx-auto space-y-20">
            {/* Hero Section */}
            <section className="text-center">
              <div className="minecraft-block bg-maximally-red text-black px-6 py-3 inline-block mb-8">
                <span className="font-press-start text-sm">⭐ MEET OUR LEGENDS</span>
              </div>
              <h1 className="font-press-start text-4xl md:text-6xl lg:text-8xl mb-8 minecraft-text">
                <span className="text-maximally-red drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  FEATURED HEROES
                </span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl font-jetbrains max-w-4xl mx-auto leading-relaxed mb-12">
                Meet the industry titans, innovators, and visionaries powering India's most ambitious hackathon ecosystem. These are the legends mentoring the next generation.
              </p>
            </section>

            {/* Partners Section */}
            <section>
              <div className="text-center mb-12">
                <div className="minecraft-block bg-maximally-yellow text-black px-6 py-3 inline-block mb-6">
                  <span className="font-press-start text-sm">🤝 STRATEGIC ALLIES</span>
                </div>
                <h2 className="font-press-start text-3xl md:text-5xl mb-4 minecraft-text">
                  <span className="text-maximally-yellow drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    OUR PARTNERS
                  </span>
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {partners.map((tier) => (
                  <div key={tier.tier} className="pixel-card bg-black border-2 border-maximally-yellow p-8 hover:scale-105 transition-all duration-300 hover:border-maximally-red">
                    <h3 className="font-press-start text-xl mb-6 text-maximally-yellow">{tier.tier}</h3>
                    <div className="space-y-6">
                      {tier.companies.map((company) => (
                        <div key={company.name} className="font-jetbrains">
                          <p className="text-xl font-bold text-white">{company.name}</p>
                          <p className="text-gray-300">{company.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Core Advisors Section */}
            <section>
              <div className="text-center mb-12">
                <div className="minecraft-block bg-gradient-to-r from-orange-500 to-red-500 text-black px-6 py-3 inline-block mb-6">
                  <span className="font-press-start text-sm">🎯 CORE ADVISORS</span>
                </div>
                <h2 className="font-press-start text-3xl md:text-5xl mb-4 minecraft-text">
                  <span className="text-maximally-red drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    INDUSTRY TITANS
                  </span>
                </h2>
                <p className="text-gray-300 text-lg font-jetbrains max-w-3xl mx-auto">
                  The masterminds behind our vision. These industry leaders shape our direction and mentor our community.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {coreAdvisors.map((advisor) => (
                  <div key={advisor.name} className="pixel-card bg-gradient-to-br from-gray-900 to-black border-2 border-maximally-red p-8 hover:scale-105 transition-all duration-300 hover:border-maximally-yellow">
                    <div className="minecraft-block bg-maximally-red w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      <Star className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="font-press-start text-lg mb-3 text-maximally-red text-center">{advisor.name}</h3>
                    <p className="font-jetbrains text-gray-300 text-center mb-1">{advisor.role}</p>
                    <p className="font-jetbrains text-white font-bold text-center mb-4">{advisor.company}</p>
                    {advisor.quote && (
                      <blockquote className="font-jetbrains text-sm italic text-gray-300 border-l-4 border-maximally-red pl-4 mt-4">
                        "{advisor.quote}"
                      </blockquote>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Elite Judges Section */}
            <section>
              <div className="text-center mb-12">
                <div className="minecraft-block bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-6 py-3 inline-block mb-6">
                  <span className="font-press-start text-sm">⚡ ELITE PANEL</span>
                </div>
                <h2 className="font-press-start text-3xl md:text-5xl mb-4 minecraft-text">
                  <span className="text-cyan-400 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    COMPETITION JUDGES
                  </span>
                </h2>
                <p className="text-gray-300 text-lg font-jetbrains max-w-3xl mx-auto">
                  The tech elite who evaluate innovation. These legends decide who wins our high-stakes competitions.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {industryJudges.map((judge) => (
                  <div key={judge.name} className="pixel-card bg-black border-2 border-cyan-400 p-6 hover:scale-105 transition-all duration-300 hover:border-maximally-yellow group">
                    <div className="minecraft-block bg-cyan-400 w-10 h-10 mx-auto mb-4 flex items-center justify-center group-hover:bg-maximally-yellow transition-colors">
                      <Award className="h-5 w-5 text-black" />
                    </div>
                    <h3 className="font-press-start text-sm mb-3 text-cyan-400 group-hover:text-maximally-yellow transition-colors text-center">{judge.name}</h3>
                    <p className="font-jetbrains text-gray-300 text-xs mb-2 text-center">{judge.role}</p>
                    <p className="font-jetbrains text-white font-bold text-xs text-center">{judge.company}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Featured;
