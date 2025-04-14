
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
        <h2 className="font-press-start text-2xl mb-4">🔥 Summer Bootcamps 2025</h2>
        <p className="mb-4">Maximally is offering <strong>6 high-impact bootcamps this summer</strong> (May–July 2025):</p>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-press-start text-xl mb-2">🧠 Founder Lab (Entrepreneurship Bootcamp)</h3>
            <p>Build your first business or startup idea from scratch. No MBA required.</p>
          </div>
          
          <div>
            <h3 className="font-press-start text-xl mb-2">🎤 Speak Mode (Public Speaking + Debate)</h3>
            <p>Command any stage, ace interviews, and win debates like a pro.</p>
          </div>
          
          <div>
            <h3 className="font-press-start text-xl mb-2">📱 Digital Arsenal (Marketing & Branding)</h3>
            <p>Learn how to build your own brand and sell ideas like a Gen Z Don Draper.</p>
          </div>
          
          <div>
            <h3 className="font-press-start text-xl mb-2">🧠 AI + No-Code Tools</h3>
            <p>Master tools that let you automate like a wizard, no coding needed.</p>
          </div>
          
          <div>
            <h3 className="font-press-start text-xl mb-2">🎬 Story Studio (Video Editing & Storytelling)</h3>
            <p>Craft videos, reels, and stories that actually engage people.</p>
          </div>
          
          <div>
            <h3 className="font-press-start text-xl mb-2">🌍 MUN + Global Citizenship</h3>
            <p>Diplomacy, global issues, policy. Think MUN, but actually useful.</p>
          </div>
        </div>
      </section>

      <section className="pixel-border p-6 bg-maximally-red/5 my-8">
        <h2 className="font-press-start text-2xl mb-4">💸 Pricing That Works for Students</h2>
        <div className="space-y-2 mb-4">
          <p>• Individual bootcamps from <strong>₹799 to ₹1300</strong></p>
          <p>• <strong>All-access pass</strong>: ₹4000 (Join all 6 bootcamps!)</p>
          <p>• Bundle offers available too (like 2-for-₹1799)</p>
        </div>
        <p className="font-press-start text-sm mt-4">
          🧠 Bonus: Every participant gets a certificate, live sessions, community access, and lifelong bragging rights.
        </p>
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
      date="March 10, 2025"
      readTime="6 min read"
      content={content}
    />
  );
};

export default SummerBreak2025;
