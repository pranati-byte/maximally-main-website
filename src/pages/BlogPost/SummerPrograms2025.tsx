
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
          <div><strong>Cost:</strong> ₹2,500 (only if selected)</div>
          <div><strong>Duration:</strong> 7 days of intensive training</div>
          <div><strong>Selection:</strong> Only 200 students</div>
        </div>
        <p className="mb-4">Maximally isn't just another summer program—it's a career-altering inflection point where India's most driven young minds come together to operate at the highest level.</p>
        
        <h3 className="font-press-start text-xl mb-3">Curriculum Highlights:</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Day 1: Orientation & Mindset Reset</li>
          <li>Day 2: Entrepreneurship Fundamentals</li>
          <li>Day 3: Digital Marketing & Distribution</li>
          <li>Day 4: AI & No-Code Execution</li>
          <li>Day 5: Public Speaking & Influence</li>
          <li>Day 6: Personal Branding</li>
          <li>Day 7: Demo Day with Industry Leaders</li>
        </ul>

        <div className="bg-white/80 p-4 rounded-lg mt-6">
          <h4 className="font-press-start text-lg mb-2">🎯 Who Should Apply:</h4>
          <ul className="list-none space-y-2">
            <li>• Teen founders ready to build their first ₹1CR startup</li>
            <li>• Ambitious teens who want to lead the future</li>
            <li>• Students who love challenges, ideas, and energy</li>
            <li>• Communicators, creatives, hackers, and builders</li>
          </ul>
        </div>
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

      <section className="pixel-border p-6 bg-maximally-red/5 my-8">
        <h2 className="font-press-start text-2xl mb-4">Why Choose Maximally?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white/80 p-4 rounded-lg">
            <h3 className="font-press-start text-lg mb-2">🎓 Certificate of Excellence</h3>
            <p>Recognized proof of your skill and execution</p>
          </div>
          <div className="bg-white/80 p-4 rounded-lg">
            <h3 className="font-press-start text-lg mb-2">🤝 Alumni-Only Privileges</h3>
            <p>Access to exclusive future opportunities</p>
          </div>
          <div className="bg-white/80 p-4 rounded-lg">
            <h3 className="font-press-start text-lg mb-2">🌐 Lifetime Network</h3>
            <p>Connect with India's future leaders</p>
          </div>
          <div className="bg-white/80 p-4 rounded-lg">
            <h3 className="font-press-start text-lg mb-2">🎯 Future Access</h3>
            <p>Your badge of honor in the digital age</p>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="font-press-start text-lg mb-4">
            🎯 Don't just attend. Get selected.
          </p>
          <p className="font-jetbrains">
            Join our community of ambitious teens and start your journey today.
          </p>
        </div>
      </section>
    </>
  );

  return (
    <BlogPost
      title="Top Summer Programs for Teens in India (2025 Edition)"
      date="April 10, 2025"
      readTime="8 min read"
      content={content}
    />
  );
};

export default SummerPrograms2025;
