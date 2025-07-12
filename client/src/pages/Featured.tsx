
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
      company: "JustPaid.ai (YCW23)"
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
          </section>

          {/* Partners Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Star className="h-8 w-8 text-[#FFD700]" />
              <h2 className="font-press-start text-2xl">Our Partners</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {partners.map((tier) => (
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

          {/* Industry Expert Judges and Core Advisors Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Star className="h-8 w-8 text-[#FFD700]" />
              <h2 className="font-press-start text-2xl">Industry Expert Judges and Core Advisors</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {coreAdvisors.map((advisor) => (
                <div key={advisor.name} className="pixel-border p-6 bg-gradient-to-br from-yellow-50 to-orange-50 hover:transform hover:scale-105 transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-press-start text-lg mb-2">{advisor.name}</h3>
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

          {/* Competition Mentors and Judges Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Award className="h-8 w-8 text-[#FF5F5F]" />
              <h2 className="font-press-start text-2xl">Competition Mentors and Judges</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryJudges.map((judge) => (
                <div key={judge.name} className="pixel-border p-6 bg-gradient-to-br from-blue-50 to-purple-50 hover:transform hover:scale-105 transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-press-start text-base mb-2">{judge.name}</h3>
                  </div>
                  <p className="font-jetbrains text-maximally-black/70 text-sm mb-1">{judge.role}</p>
                  <p className="font-jetbrains text-maximally-black/90 font-bold text-sm">{judge.company}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Featured;
