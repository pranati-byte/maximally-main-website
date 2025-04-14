
import BlogPost from '@/components/BlogPost';

const SummerPrograms2025 = () => {
  const content = (
    <>
      <p className="lead font-jetbrains text-lg mb-6">
        Every summer, thousands of ambitious teens across India hit pause on the regular grind to do something bigger—something bolder. Whether it's launching a startup idea, debating global policy, or learning AI, summer programs have become <strong>launchpads for future-ready teens</strong>.
      </p>

      <section id="maximally" className="pixel-border p-6 bg-maximally-blue/5 my-8">
        <h2 className="font-press-start text-2xl mb-4">🌟 1. Maximally Summer Bootcamp (All-India, Virtual)</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div><strong>Age Group:</strong> 13–20</div>
          <div><strong>Cost:</strong> ₹799–₹4000</div>
          <div><strong>Duration:</strong> 2 weeks per bootcamp</div>
          <div><strong>Period:</strong> May–July 2025</div>
        </div>
        <p className="mb-4">Maximally is India's answer to Leangap—a high-intensity, high-impact summer experience where teens don't just learn, they build.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Entrepreneurship (Founder Lab)</li>
          <li>Public Speaking & Debate</li>
          <li>Digital Marketing</li>
          <li>AI + No-Code Tools</li>
          <li>MUN & Global Citizenship</li>
          <li>Video Editing & Storytelling</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">2. Ashoka Young Scholars Programme (YSP)</h2>
        <p className="mb-4">Experience college-style learning at one of India's top private universities with workshops in writing, psychology, philosophy, and more.</p>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">3. INSPIRIT AI</h2>
        <p className="mb-4">Created by Stanford & MIT grads, learn how AI works and build your own AI projects with Ivy League mentorship.</p>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">4. Young Leaders for Active Citizenship (YLAC)</h2>
        <p className="mb-4">Join the Counter Speech Fellowship to run real Instagram campaigns on issues you care about.</p>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">5. ISBF Summer School</h2>
        <p className="mb-4">Get University of London affiliated pre-college experience in economics, business, and finance.</p>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">6. NIAS Summer School</h2>
        <p className="mb-4">Dive into research, science, policy, and philosophy at the National Institute of Advanced Studies, Bengaluru.</p>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">7. Kritsnam Summer Research Program</h2>
        <p className="mb-4">Engage in project-based learning focused on environmental science and engineering.</p>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">8. Camp K12 Virtual Bootcamps</h2>
        <p className="mb-4">Learn coding, design, and entrepreneurship in beginner-friendly virtual sessions.</p>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">9. MUN World India</h2>
        <p className="mb-4">Experience diplomacy and develop leadership skills through their Summer Diplomacy Program.</p>
      </section>

      <section className="pixel-border p-6 bg-maximally-red/5 my-8">
        <h2 className="font-press-start text-2xl mb-4">Final Thoughts</h2>
        <p className="mb-4">
          Whether you're trying to <strong>boost your college applications</strong>, 
          <strong>explore your passions</strong>, or <strong>just build something epic this summer</strong>, 
          these programs offer more than just knowledge—they offer transformation.
        </p>
        <div className="mt-4 text-center">
          <p className="font-press-start text-lg">
            🎯 Ready to level up this summer? Start with Maximally's Summer Bootcamp!
          </p>
        </div>
      </section>
    </>
  );

  return (
    <BlogPost
      title="Top 10 Summer Programs for Teens in India (2025 Edition)"
      date="March 15, 2025"
      readTime="8 min read"
      content={content}
    />
  );
};

export default SummerPrograms2025;
