
import BlogPost from '@/components/BlogPost';

const SummerBreak2025 = () => {
  const content = (
    <>
      <p className="lead font-jetbrains text-lg mb-6">
        Summer break. Two words that either mean "scroll-until-your-thumb-falls-off"… or <em>massive personal glow-up</em>.
      </p>

      <p className="mb-6">
        If you're between 13–20 years old and wondering how to <strong>not waste your summer</strong>, this post is your wake-up call. Because the truth is:
      </p>

      <blockquote className="pixel-border p-6 bg-maximally-blue/5 my-8">
        <p className="font-press-start text-lg">
          🎯 What you do this summer can completely change your trajectory—academically, socially, and even professionally.
        </p>
      </blockquote>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">💡 Why Summer Is Your Secret Weapon</h2>
        <p className="mb-4">Most students treat summer like a pit stop. But for ambitious teens? It's a <em>runway.</em></p>
        <p className="mb-4">Here's what you can do with just 4–8 weeks of focused time:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Launch a side project</strong> (startup, blog, personal brand—take your pick)</li>
          <li><strong>Learn real-world skills</strong> that school forgot to mention</li>
          <li><strong>Gain clarity</strong> on what you <em>actually</em> enjoy doing</li>
          <li><strong>Boost your college applications</strong> with impressive experiences</li>
          <li><strong>Meet other ambitious students</strong> who want more than just grades</li>
        </ul>
        <p>Summer isn't about grinding 24/7—it's about using your time <em>intentionally</em>.</p>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">🚀 Step 1: Pick Skills That Actually Matter in 2025</h2>
        <p className="mb-4">Let's be real: memorizing 17 definitions of "demand" doesn't exactly prep you for the real world. These skills do:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Entrepreneurship & leadership</strong></li>
          <li><strong>Public speaking & communication</strong></li>
          <li><strong>Digital marketing & personal branding</strong></li>
          <li><strong>Design thinking & creativity</strong></li>
          <li><strong>AI, no-code tools, and modern tech</strong></li>
          <li><strong>Content creation & storytelling</strong></li>
        </ul>
      </section>

      <section id="bootcamps" className="pixel-border p-6 bg-maximally-blue/5 my-8">
        <h2 className="font-press-start text-2xl mb-4">🔥 Maximally Summer Bootcamp 2025</h2>
        <div className="mb-6">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div><strong>Selection:</strong> Only 200 students</div>
            <div><strong>Cost:</strong> ₹2,500 (only if selected)</div>
            <div><strong>Duration:</strong> 7 days of intensive training</div>
            <div><strong>Ages:</strong> 13–20</div>
          </div>
        </div>

        <p className="mb-6">This isn't just another summer program—it's a <strong>career-altering inflection point</strong> where India's most driven young minds come together to operate at the highest level.</p>

        <h3 className="font-press-start text-xl mb-3">7-Day Intensive Journey:</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Day 1: Orientation & Mindset Reset</li>
          <li>Day 2: Entrepreneurship Fundamentals</li>
          <li>Day 3: Digital Marketing & Distribution</li>
          <li>Day 4: AI & No-Code Execution</li>
          <li>Day 5: Public Speaking & Influence</li>
          <li>Day 6: Personal Branding</li>
          <li>Day 7: Demo Day with Industry Leaders</li>
        </ul>

        <div className="bg-white/10 p-4 rounded-lg mt-6">
          <h4 className="font-press-start text-lg mb-2">🎯 Who Should Apply:</h4>
          <ul className="list-none space-y-2">
            <li>• Teen founders ready to build their first ₹1CR startup</li>
            <li>• Ambitious teens who want to lead the future</li>
            <li>• Students who love challenges, ideas, and energy</li>
            <li>• Communicators, creatives, hackers, and builders</li>
          </ul>
        </div>
      </section>

      <section className="pixel-border p-6 bg-maximally-red/5 my-8">
        <h2 className="font-press-start text-2xl mb-4">🏆 What You Get</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="font-press-start text-lg mb-2">🎓 Certificate of Excellence</h3>
            <p>Recognized proof of your skill and execution</p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="font-press-start text-lg mb-2">🤝 Alumni-Only Privileges</h3>
            <p>Access to exclusive future opportunities</p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="font-press-start text-lg mb-2">🌐 Lifetime Network</h3>
            <p>Connect with India's future leaders</p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="font-press-start text-lg mb-2">🎯 Future Access</h3>
            <p>Your badge of honor in the digital age</p>
          </div>
        </div>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">🎯 Final Thoughts</h2>
        <p className="mb-4">
          This summer, you could scroll aimlessly...<br />
          Or you could build something that makes your future self say:<br />
          "Damn, I'm glad I started early."
        </p>
        <p className="mb-4">
          Maximally is where <strong>India's next-gen creators, founders, speakers, and changemakers</strong> begin their journey.
        </p>
        <div className="text-center font-press-start text-lg space-y-2">
          <p>👉 Applications for Summer Bootcamps 2025 are now open.</p>
          <p>🎓 Spots are limited. Hype is unlimited.</p>
        </div>
      </section>
    </>
  );

  return (
    <BlogPost
      title="How to Make the Most of Your Summer Break (For Students Ages 13–20)"
      date="April 10, 2025"
      readTime="6 min read"
      content={content}
    />
  );
};

export default SummerBreak2025;
