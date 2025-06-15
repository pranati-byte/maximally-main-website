
import { Star, Award, Users } from "lucide-react";
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

  const judges = [
    {
      name: "Industry Expert 1",
      role: "Startup Founder & Angel Investor",
      company: "Leading Investment Firm"
    },
    {
      name: "Industry Expert 2",
      role: "Tech Lead",
      company: "Global Tech Company"
    },
    {
      name: "Industry Expert 3",
      role: "Venture Capitalist",
      company: "Premier VC Fund"
    },
    {
      name: "Industry Expert 4",
      role: "Innovation Consultant",
      company: "Strategy Consulting Firm"
    }
  ];

  const mentors = [
    {
      name: "Mentor 1",
      expertise: "Product Strategy",
      company: "Product Consulting"
    },
    {
      name: "Mentor 2",
      expertise: "Growth Marketing",
      company: "Marketing Agency"
    },
    {
      name: "Mentor 3",
      expertise: "Financial Planning",
      company: "Finance Solutions"
    },
    {
      name: "Mentor 4",
      expertise: "Legal & Compliance",
      company: "Legal Services"
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

          {/* Judges Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Award className="h-8 w-8 text-[#FF5F5F]" />
              <h2 className="font-press-start text-2xl">Expert Judges</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {judges.map((judge) => (
                <div key={judge.name} className="pixel-border p-6 bg-white/50 hover:transform hover:scale-105 transition-all">
                  <h3 className="font-press-start text-lg mb-2">{judge.name}</h3>
                  <p className="font-jetbrains text-maximally-black/70">{judge.role}</p>
                  <p className="font-jetbrains text-maximally-black/90 font-bold">{judge.company}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Mentors Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Users className="h-8 w-8 text-[#4D89FF]" />
              <h2 className="font-press-start text-2xl">Mentor Network</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {mentors.map((mentor) => (
                <div key={mentor.name} className="pixel-border p-6 bg-white/50 hover:transform hover:scale-105 transition-all">
                  <h3 className="font-press-start text-lg mb-2">{mentor.name}</h3>
                  <p className="font-jetbrains text-maximally-black/70">{mentor.expertise}</p>
                  <p className="font-jetbrains text-maximally-black/90 font-bold">{mentor.company}</p>
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
