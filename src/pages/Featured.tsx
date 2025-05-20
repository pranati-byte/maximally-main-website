import { useEffect, useState } from "react";
import { Star, Award, Users, Lock } from "lucide-react";
import SEO from "@/components/SEO";

const Featured = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const releaseDate = new Date('2024-06-15T00:00:00');
      const now = new Date();
      const difference = releaseDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      return `${days} days and ${hours} hours`;
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(timer);
  }, []);

  const isRevealed = new Date() >= new Date('2024-06-15T00:00:00');

  const sponsors = [
    {
      tier: "Infinite Mode",
      companies: [
        { name: "TechCorp India", role: "Title Sponsor", description: "Leading technology solutions provider" },
        { name: "FutureStack", role: "Innovation Partner", description: "Next-gen cloud infrastructure" }
      ]
    },
    {
      tier: "Resolution Partner",
      companies: [
        { name: "LearnHub", role: "Education Partner", description: "EdTech pioneer in India" },
        { name: "StartupX", role: "Ecosystem Partner", description: "Startup accelerator & community" }
      ]
    }
  ];

  const judges = [
    {
      name: "Priya Sharma",
      role: "Startup Founder & Angel Investor",
      company: "GrowthLabs India",
      linkedin: "https://linkedin.com/in/priyasharma",
      bio: "Serial entrepreneur with 3 successful exits. Angel investor in 20+ edtech startups."
    },
    {
      name: "Raj Mehta",
      role: "Tech Lead",
      company: "Google India",
      linkedin: "https://linkedin.com/in/rajmehta",
      bio: "15+ years in tech leadership. Passionate about youth mentorship."
    }
  ];

  const mentors = [
    {
      name: "Arun Kumar",
      expertise: "Product Strategy",
      company: "ProductFirst",
      linkedin: "https://linkedin.com/in/arunkumar",
      bio: "Product leader helping teens build better solutions."
    },
    {
      name: "Sarah Singh",
      expertise: "Growth Marketing",
      company: "ScaleUp Ventures",
      linkedin: "https://linkedin.com/in/sarahsingh",
      bio: "Growth expert specializing in Gen Z marketing strategies."
    }
  ];


  if (!isRevealed) {
    return (
      <>
        <SEO
          title="Coming Soon | Maximally Featured"
          description="Something amazing is coming to Maximally. Our featured heroes will be revealed soon!"
        />

        <main className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="relative">
              <Lock className="h-24 w-24 mx-auto text-maximally-green animate-pulse" />
              <div className="absolute -inset-2 bg-maximally-green/20 blur-xl animate-pulse rounded-full" />
            </div>

            <h1 className="font-press-start text-4xl md:text-5xl text-white mb-6 gradient-text-rainbow animate-glow">
              🤫 It's a Surprise!
            </h1>

            <p className="font-jetbrains text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Our incredible lineup of sponsors, judges, and mentors will be revealed on June 15th.
              Get ready to meet the heroes powering India's most ambitious teen program!
            </p>

            <div className="pixel-border p-8 bg-black/50 backdrop-blur-sm max-w-lg mx-auto">
              <p className="font-press-start text-2xl text-maximally-green mb-2">Time Left</p>
              <p className="font-jetbrains text-3xl text-white">{timeLeft}</p>
            </div>

            <div className="mt-12 space-y-4">
              <p className="font-jetbrains text-white/60">
                Want to be featured here?
              </p>
              <a
                href="/collaborate"
                className="pixel-button bg-maximally-blue inline-block px-8 py-4 text-white hover:scale-105 transform transition-all"
              >
                Join as Mentor/Sponsor
              </a>
            </div>
          </div>
        </main>
      </>
    );
  }

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
                <div key={tier.tier} className="pixel-border p-6 bg-gradient-to-br from-gray-50 to-gray-100 hover:transform hover:scale-105 transition-all">
                  <h3 className="font-press-start text-xl mb-4">{tier.tier}</h3>
                  <div className="space-y-4">
                    {tier.companies.map((company) => (
                      <div key={company.name} className="font-jetbrains p-4 bg-white rounded-lg shadow-sm">
                        <p className="text-lg font-bold text-maximally-blue">{company.name}</p>
                        <p className="text-maximally-black/70">{company.role}</p>
                        <p className="text-sm mt-2 text-gray-600">{company.description}</p>
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
            <div className="grid md:grid-cols-3 gap-6">
              {judges.map((judge) => (
                <div key={judge.name} className="pixel-border p-6 bg-gradient-to-br from-gray-50 to-gray-100 hover:transform hover:scale-105 transition-all">
                  <h3 className="font-press-start text-lg mb-2">{judge.name}</h3>
                  <p className="font-jetbrains text-maximally-black/70">{judge.role}</p>
                  <p className="font-jetbrains text-maximally-black/90 font-bold mb-3">{judge.company}</p>
                  <p className="text-sm mb-3 text-gray-600">{judge.bio}</p>
                  <a
                    href={judge.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:underline"
                  >
                    LinkedIn Profile
                  </a>
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
            <div className="grid md:grid-cols-3 gap-6">
              {mentors.map((mentor) => (
                <div key={mentor.name} className="pixel-border p-6 bg-gradient-to-br from-gray-50 to-gray-100 hover:transform hover:scale-105 transition-all">
                  <h3 className="font-press-start text-lg mb-2">{mentor.name}</h3>
                  <p className="font-jetbrains text-maximally-black/70">{mentor.expertise}</p>
                  <p className="font-jetbrains text-maximally-black/90 font-bold mb-3">{mentor.company}</p>
                  <p className="text-sm mb-3 text-gray-600">{mentor.bio}</p>
                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:underline"
                  >
                    LinkedIn Profile
                  </a>
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