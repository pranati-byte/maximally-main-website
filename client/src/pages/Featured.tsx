
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
      name: "Milankumar Rana",
      role: "Software Engineer Advisor",
      company: "FedEx"
    },
    {
      name: "Krishna Ganeriwal",
      role: "Senior Software Engineer",
      company: "Meta Platforms Inc"
    },
    {
      name: "Harpreet Kaur Chawla",
      role: "Tech Lead; Senior Software Engineer",
      company: "Amazon"
    },
    {
      name: "Nancy Al Kalach",
      role: "Senior Salesforce Developer",
      company: "Freelance"
    },
    {
      name: "Prashanthi Matam",
      role: "Senior MLOPS Engineer",
      company: "Enterprise"
    },
    {
      name: "Nidhi Mahajan",
      role: "Director",
      company: "Technology Leader"
    },
    {
      name: "Rama Mallika Kadali",
      role: "Lead QA Engineer",
      company: "Quality Engineering"
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
    }
  ];

  const mentors = [
    {
      name: "Expert Mentors",
      expertise: "Startup & Product Strategy",
      company: "Industry Leaders"
    },
    {
      name: "Tech Leaders",
      expertise: "Software Engineering & AI",
      company: "FAANG Companies"
    },
    {
      name: "Innovation Guides",
      expertise: "Business Development",
      company: "Enterprise & Startups"
    },
    {
      name: "Industry Veterans",
      expertise: "Quality & Operations",
      company: "Global Organizations"
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
                  <h3 className="font-press-start text-lg mb-2">{advisor.name}</h3>
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

          {/* Judges Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Award className="h-8 w-8 text-[#FF5F5F]" />
              <h2 className="font-press-start text-2xl">Expert Judges</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {judges.map((judge) => (
                <div key={judge.name} className="pixel-border p-6 bg-white/50 hover:transform hover:scale-105 transition-all">
                  <h3 className="font-press-start text-base mb-2">{judge.name}</h3>
                  <p className="font-jetbrains text-maximally-black/70 text-sm">{judge.role}</p>
                  <p className="font-jetbrains text-maximally-black/90 font-bold text-sm">{judge.company}</p>
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
