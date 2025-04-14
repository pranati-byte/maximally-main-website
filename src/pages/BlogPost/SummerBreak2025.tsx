
import BlogPost from '@/components/BlogPost';

const SummerBreak2025 = () => {
  const content = (
    <>
      <p className="lead font-jetbrains text-lg mb-6">
        Summer break. Two words that either mean "scroll-until-your-thumb-falls-off"… or <strong>massive personal glow-up</strong>.
      </p>

      <div className="pixel-border bg-maximally-blue/5 p-6 my-8">
        <p className="font-press-start text-lg mb-4">
          🎯 What you do this summer can completely change your trajectory—academically, socially, and even professionally.
        </p>
      </div>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">💡 Why Summer Is Your Secret Weapon</h2>
        <p className="mb-4">Most students treat summer like a pit stop. But for ambitious teens? It's a <em>runway</em>.</p>
        <p className="mb-4">Here's what you can do with just 4–8 weeks of focused time:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Launch a side project (startup, blog, personal brand—take your pick)</li>
          <li>Learn real-world skills that school forgot to mention</li>
          <li>Gain clarity on what you actually enjoy doing</li>
          <li>Boost your college applications with impressive experiences</li>
          <li>Meet other ambitious students who want more than just grades</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">🚀 Step 1: Pick Skills That Actually Matter in 2025</h2>
        <p className="mb-4">Let's be real: memorizing definitions doesn't exactly prep you for the real world. These skills do:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Entrepreneurship & leadership</li>
          <li>Public speaking & communication</li>
          <li>Digital marketing & personal branding</li>
          <li>Design thinking & creativity</li>
          <li>AI, no-code tools, and modern tech</li>
          <li>Content creation & storytelling</li>
        </ul>
      </section>

      <section className="pixel-border bg-maximally-green/5 p-6 my-8">
        <h2 className="font-press-start text-2xl mb-4">🧠 Step 2: Learn by Doing</h2>
        <p className="mb-4">You could binge tutorials for hours and still not do anything.</p>
        <p className="mb-4">That's why Maximally's Summer Bootcamps are built differently. You don't just learn—you build. Pitch. Design. Speak. Fail. Restart. Grow.</p>
        <div className="bg-white p-4 rounded">
          <p className="font-press-start text-lg mb-2">Welcome to India's most ambitious summer bootcamp for teens:</p>
          <ul className="list-none space-y-2">
            <li>✅ Work on real projects</li>
            <li>✅ Collaborate with other ambitious teens across India</li>
            <li>✅ Get mentorship from startup founders, educators, and creators</li>
            <li>✅ Build confidence, creativity, and a solid portfolio</li>
          </ul>
        </div>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">🔥 Step 3: Choose the Right Program</h2>
        <p className="mb-4">Maximally is offering 6 high-impact bootcamps this summer (May–July 2025):</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="pixel-border p-4">
            <h3 className="font-press-start text-lg mb-2">🧠 Founder Lab</h3>
            <p>Build your first business or startup idea from scratch.</p>
          </div>
          <div className="pixel-border p-4">
            <h3 className="font-press-start text-lg mb-2">🎤 Speak Mode</h3>
            <p>Command any stage, ace interviews, and win debates like a pro.</p>
          </div>
          <div className="pixel-border p-4">
            <h3 className="font-press-start text-lg mb-2">📱 Digital Arsenal</h3>
            <p>Learn how to build your own brand and sell ideas.</p>
          </div>
          <div className="pixel-border p-4">
            <h3 className="font-press-start text-lg mb-2">🤖 AI + No-Code</h3>
            <p>Master tools that let you automate like a wizard.</p>
          </div>
        </div>
      </section>

      <section className="pixel-border bg-maximally-red/5 p-6 my-8">
        <h2 className="font-press-start text-2xl mb-4">💸 Pricing That Works for Students</h2>
        <ul className="list-none space-y-3">
          <li>• Individual bootcamps from ₹799 to ₹1300</li>
          <li>• All-access pass: ₹4000 (Join all 6 bootcamps!)</li>
          <li>• Bundle offers available (like 2-for-₹1799)</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">🎯 Final Thoughts</h2>
        <p className="mb-4">This summer, you could scroll aimlessly...</p>
        <p className="mb-4">Or you could build something that makes your future self say:</p>
        <p className="font-press-start text-lg mb-4">"Damn, I'm glad I started early."</p>
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
