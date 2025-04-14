
import SEO from "@/components/SEO";
import BlogPost from "@/components/BlogPost";

const SummerPrograms2025 = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Top 10 Summer Programs for Teens in India (2025 Edition)",
    "image": "https://maximally.in/og-image.png",
    "datePublished": "2024-03-15",
    "author": {
      "@type": "Organization",
      "name": "Maximally.in"
    }
  };

  const content = (
    <>
      <p className="lead">
        Every summer, thousands of ambitious teens across India hit pause on the regular grind to do something bigger—something bolder. Whether it's launching a startup idea, debating global policy, or learning AI, summer programs have become <strong>launchpads for future-ready teens</strong>.
      </p>

      <section id="maximally" className="pixel-border p-6 bg-maximally-blue/5 my-8">
        <h2 className="font-press-start text-2xl mb-4">🌟 1. Maximally Summer Bootcamp (All-India, Virtual)</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <strong>Age Group:</strong> 13–20
          </div>
          <div>
            <strong>Cost:</strong> ₹799–₹4000
          </div>
          <div>
            <strong>Duration:</strong> 2 weeks per bootcamp
          </div>
          <div>
            <strong>Period:</strong> May–July 2025
          </div>
        </div>

        <h3 className="font-press-start text-lg mb-2">Why it's #1:</h3>
        <p>
          Maximally is <em>India's answer to Leangap</em>—a high-intensity, high-impact summer experience where teens don't just learn, they <em>build</em>.
        </p>

        <h4 className="font-press-start text-md mt-4 mb-2">Immersive Bootcamps in:</h4>
        <ul className="list-none grid grid-cols-2 gap-2">
          <li>✦ Entrepreneurship (Founder Lab)</li>
          <li>✦ Public Speaking & Debate</li>
          <li>✦ Digital Marketing</li>
          <li>✦ AI + No-Code Tools</li>
          <li>✦ MUN & Global Citizenship</li>
          <li>✦ Video Editing & Storytelling</li>
        </ul>

        <div className="mt-4 p-4 bg-white rounded-lg">
          <p className="font-press-start text-sm text-center">
            💡 Maximally's tagline? <em>Don't just learn. Launch.</em>
          </p>
        </div>
      </section>

      {/* Rest of the programs */}
      <section className="space-y-8">
        {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <div key={num} className="pixel-border p-6">
            {/* Content for each program */}
            {/* This would be expanded with the actual content */}
          </div>
        ))}
      </section>

      <section className="pixel-border p-6 bg-maximally-red/5 my-8">
        <h2 className="font-press-start text-2xl mb-4">Final Thoughts</h2>
        <p>
          Whether you're trying to <strong>boost your college applications</strong>, 
          <strong>explore your passions</strong>, or <strong>just build something epic this summer</strong>, 
          these programs offer more than just knowledge—they offer transformation.
        </p>
        <div className="mt-4 text-center">
          <p className="font-press-start text-lg">
            🎯 But if you want to go from idea to execution, Maximally's Summer Bootcamp is where the magic really happens.
          </p>
        </div>
      </section>
    </>
  );

  return (
    <>
      <SEO 
        title="Top 10 Summer Programs for Teens in India (2025 Edition) | Maximally Blog"
        description="Discover the best summer programs for Indian teenagers in 2025. From entrepreneurship to AI, find the perfect program to boost your skills and college applications."
        keywords="summer programs india, teen summer programs, maximally bootcamp, entrepreneurship programs, AI courses for teens, public speaking workshops, digital marketing courses"
        structuredData={structuredData}
      />
      <BlogPost
        title="Top 10 Summer Programs for Teens in India (2025 Edition)"
        date="March 15, 2025"
        readTime="8 min read"
        content={content}
      />
    </>
  );
};

export default SummerPrograms2025;
