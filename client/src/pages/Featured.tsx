
import { Star, Award, ExternalLink } from "lucide-react";
import SEO from "@/components/SEO";

const Featured = () => {
  const sponsors = [
    {
      tier: "Infinite Mode",
      companies: [
        { name: "TechCorp India", role: "Title Sponsor" },
        { name: "FutureStack", role: "Innovation Partner" }
      ]
    },
    {
      tier: "Resolution Partner",
      companies: [
        { name: "LearnHub", role: "Education Partner" },
        { name: "StartupX", role: "Ecosystem Partner" }
      ]
    }
  ];

  const coreAdvisors = [
    {
      name: "Thilakavathi Sankaran",
      role: "Data & Analytics Professional",
      company: "15+ Years Experience",
      linkedin: "https://www.linkedin.com/in/thila-sankaran",
      quote: "Great ideas need more than vision — they need data, direction, and people who believe in both."
    },
    {
      name: "Priyanshu Sharma",
      role: "Founder & CEO",
      company: "ByteBrain",
      linkedin: "https://www.linkedin.com/in/ipriyaaanshu",
      quote: "Maximally is doing what the world needs more of — empowering young minds to build boldly, think independently, and lead with purpose."
    },
    {
      name: "Anusha Ravi",
      role: "Product Leader",
      company: "Intuit",
      linkedin: "https://www.linkedin.com/in/anusharavi1",
      quote: "Big fan of starting small and growing fast!"
    },
    {
      name: "Hatim Kagalwala",
      role: "Applied Scientist",
      company: "Amazon",
      linkedin: "https://www.linkedin.com/in/hatim-kagalwala",
      quote: "Maximally empowers individuals and organizations to think boldly, solve creatively, and build solutions that truly make an impact."
    }
  ];

  const industryJudges = [
    {
      name: "Milankumar Rana",
      role: "Software Engineer Advisor",
      company: "FedEx",
      linkedin: "https://linkedin.com/in/milanrana"
    },
    {
      name: "Krishna Ganeriwal",
      role: "Senior Software Engineer",
      company: "Meta Platforms Inc",
      linkedin: "https://www.linkedin.com/in/krishna-ganeriwal/"
    },
    {
      name: "Harpreet Kaur Chawla",
      role: "Tech Lead; Senior Software Engineer",
      company: "Amazon",
      linkedin: "https://www.linkedin.com/in/hkchawla/"
    },
    {
      name: "Nancy Al Kalach",
      role: "Senior Salesforce Developer",
      company: "Freelance",
      linkedin: "https://www.linkedin.com/in/nancy-al-kalach"
    },
    {
      name: "Prashanthi Matam",
      role: "Senior MLOPS Engineer",
      company: "Enterprise",
      linkedin: "https://www.linkedin.com/in/prashanthimatam/"
    },
    {
      name: "Nidhi Mahajan",
      role: "Director",
      company: "Technology Leader",
      linkedin: "https://linkedin.com/in/nmahajan012"
    },
    {
      name: "Rama Mallika Kadali",
      role: "Lead QA Engineer",
      company: "Quality Engineering",
      linkedin: "https://www.linkedin.com/in/ramamallika-kadali-07a83357/"
    }
  ];

  return (
    <>
      <SEO
        title="Featured Partners & Mentors | Maximally"
        description="Meet the amazing sponsors, judges, and mentors powering India's most ambitious teen program."
      />

      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Hero Section */}
          <section className="text-center">
            <h1 className="font-press-start text-4xl md:text-5xl mb-6 gradient-text-rainbow animate-glow">
              Featured Heroes
            </h1>
            <p className="font-jetbrains text-xl text-maximally-black/80 max-w-2xl mx-auto">
              Meet the incredible partners and mentors powering India's most ambitious teen program.
            </p>
          </section>

          {/* Sponsors Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Star className="h-8 w-8 text-[#FFD700]" />
              <h2 className="font-press-start text-2xl">Our Sponsors</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {sponsors.map((tier) => (
                <div key={tier.tier} className="pixel-border p-6 bg-white/50 hover:transform hover:scale-105 transition-all">
                  <h3 className="font-press-start text-xl mb-4">{tier.tier}</h3>
                  <div className="space-y-4">
                    {tier.companies.map((company) => (
                      <div key={company.name} className="font-jetbrains">
                        <p className="text-lg font-bold">{company.name}</p>
                        <p className="text-maximally-black/70">{company.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Core Advisors Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Star className="h-8 w-8 text-[#FFD700]" />
              <h2 className="font-press-start text-2xl">Core Advisors</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {coreAdvisors.map((advisor) => (
                <div key={advisor.name} className="pixel-border p-6 bg-gradient-to-br from-yellow-50 to-orange-50 hover:transform hover:scale-105 transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-press-start text-lg mb-2">{advisor.name}</h3>
                    {advisor.linkedin && (
                      <a
                        href={advisor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0077B5] hover:text-[#005885] transition-colors"
                        aria-label={`${advisor.name}'s LinkedIn profile`}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  <p className="font-jetbrains text-maximally-black/70">{advisor.role}</p>
                  <p className="font-jetbrains text-maximally-black/90 font-bold mb-3">{advisor.company}</p>
                  {advisor.quote && (
                    <blockquote className="font-jetbrains text-sm italic text-maximally-black/80 border-l-4 border-yellow-400 pl-3">
                      "{advisor.quote}"
                    </blockquote>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Industry Judges Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Award className="h-8 w-8 text-[#FF5F5F]" />
              <h2 className="font-press-start text-2xl">Industry Judges</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryJudges.map((judge) => (
                <div key={judge.name} className="pixel-border p-6 bg-gradient-to-br from-blue-50 to-purple-50 hover:transform hover:scale-105 transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-press-start text-base mb-2">{judge.name}</h3>
                    {judge.linkedin && (
                      <a
                        href={judge.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0077B5] hover:text-[#005885] transition-colors"
                        aria-label={`${judge.name}'s LinkedIn profile`}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  <p className="font-jetbrains text-maximally-black/70 text-sm mb-1">{judge.role}</p>
                  <p className="font-jetbrains text-maximally-black/90 font-bold text-sm">{judge.company}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Featured;
