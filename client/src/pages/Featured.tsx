
import { Star, Award, ExternalLink } from "lucide-react";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

const Featured = () => {
  const partners = [
    {
      tier: "Education Partners",
      companies: [
        { name: "Masters Union", role: "Education Partner" },
        { name: "NexFellow", role: "Fellowship Partner" },
        { name: "Young Researchers Institute", role: "Research Partner" }
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
      name: "Rishul Chanana",
      role: "Founder",
      company: "Maximally",
      quote: "Building is the only currency that matters in the new economy."
    },
    {
      name: "Nikita Klimov",
      role: "Sr. Software QA Engineer",
      company: "ADP, Inc",
      quote: "Quality isn't just about testing code - it's about shipping products that change lives."
    },
    {
      name: "Nishanth Prakash",
      role: "Senior Software Engineer",
      company: "Oracle",
      quote: "The best engineers don't just solve problems - they anticipate them before they exist."
    },
    {
      name: "Tanmay Kejriwal",
      role: "Founder",
      company: "MakeX",
      quote: "Every breakthrough starts with someone crazy enough to believe it's possible."
    },
    {
      name: "Raja Sekhar Rao Dheekonda",
      role: "Distinguished Engineer",
      company: "Dreadnode",
      quote: "Architecture isn't about perfection - it's about building systems that survive chaos."
    },
    {
      name: "Senthilkumaran Rajagopalan",
      role: "Tech Lead Manager, Video Recommendations",
      company: "Meta",
      quote: "Scale isn't just about handling more users - it's about amplifying human connection."
    },
    {
      name: "Sahil Deshpande",
      role: "Software Engineer",
      company: "Meta",
      quote: "The code that changes the world is written by those who refuse to accept the status quo."
    },
    {
      name: "Karthik Ramamurthy",
      role: "Engineering Lead",
      company: "Mercury Financial",
      quote: "Fintech isn't about moving money faster - it's about democratizing opportunity."
    },
    {
      name: "Venkataram Poosapati",
      role: "Senior Data Engineer",
      company: "Atlassian",
      quote: "Data without action is just expensive storage. Transform insights into impact."
    },
    {
      name: "Shreesh Agarwal",
      role: "Sr Business Analyst",
      company: "McKinsey and Company",
      quote: "Strategy without execution is hallucination. Execution without strategy is chaos."
    },
    {
      name: "Rakesh Pullayikodi",
      role: "Staff Software Engineer",
      company: "Graphite Health",
      quote: "Healthcare tech isn't just about efficiency - it's about saving lives through code."
    },
    {
      name: "Ashwini Joshi",
      role: "Senior Machine Learning Engineer",
      company: "Warner Bros. Discovery",
      quote: "AI that doesn't enhance human creativity is just computational waste."
    },
    {
      name: "Vikranth Kumar Shivaa",
      role: "Founding Engineer",
      company: "Fig",
      quote: "Developer tools should feel like magic, not bureaucracy."
    },
    {
      name: "Rahul Chandra",
      role: "Software Engineer",
      company: "Deepmind",
      quote: "Intelligence amplification beats artificial intelligence every time."
    },
    {
      name: "Krishna Ganeriwal",
      role: "Senior Software Engineer",
      company: "Meta Platforms Inc",
      quote: "The future belongs to builders who think in systems, not features."
    },
    {
      name: "Harpreet Kaur Chawla",
      role: "Senior Software Engineer",
      company: "Amazon",
      quote: "Customer obsession isn't a buzzword - it's the only way to build products that matter."
    },
    {
      name: "Nancy Al Kalach",
      role: "Senior Salesforce Developer",
      company: "Technology Professional",
      quote: "Enterprise software should empower users, not imprison them in complexity."
    },
    {
      name: "Prashanthi Matam",
      role: "Senior MLOPS Engineer",
      company: "Enterprise Technology",
      quote: "MLOps is where theoretical AI meets real-world impact."
    },
    {
      name: "Nidhi Mahajan",
      role: "Director of Business Strategy and Operations",
      company: "Visa",
      quote: "Strategy is about making the impossible inevitable through relentless execution."
    },
    {
      name: "Rama Mallika Kadali",
      role: "Lead QA Engineer",
      company: "Quality Engineering",
      quote: "Quality engineering is the bridge between ambitious vision and reliable execution."
    },
    {
      name: "Harshith Vaddiparthy",
      role: "AI Product Engineer & Head of Growth",
      company: "JustPaid.ai (YCW23)",
      quote: "Growth happens when product excellence meets relentless customer obsession."
    },
    {
      name: "Hassan Rehan",
      role: "Senior IT Systems Engineer",
      company: "General Motors",
      quote: "Infrastructure is invisible until it fails - excellence is building systems that never do."
    },
    {
      name: "Kostyantyn Bondar",
      role: "Founder & CEO",
      company: "DarinX",
      quote: "Entrepreneurship is turning vision into velocity, ideas into impact."
    },
    {
      name: "Louis Demeslay",
      role: "CTO",
      company: "Zealy.io",
      quote: "Technology leadership means building the future while everyone else debates it."
    },
    {
      name: "Saket Ozarkar",
      role: "Software Engineer",
      company: "Replit",
      quote: "Developer experience isn't just about tools - it's about unleashing human potential."
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...coreAdvisors, ...industryJudges].map((expert) => (
                <div key={expert.name} className="pixel-border p-6 bg-gradient-to-br from-yellow-50 to-orange-50 hover:transform hover:scale-105 transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-press-start text-base mb-2">{expert.name}</h3>
                  </div>
                  <p className="font-jetbrains text-maximally-black/70 text-sm mb-1">{expert.role}</p>
                  <p className="font-jetbrains text-maximally-black/90 font-bold text-sm mb-3">{expert.company}</p>
                  {expert.quote && (
                    <blockquote className="font-jetbrains text-xs italic text-maximally-black/80 border-l-4 border-yellow-400 pl-3">
                      "{expert.quote}"
                    </blockquote>
                  )}
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
