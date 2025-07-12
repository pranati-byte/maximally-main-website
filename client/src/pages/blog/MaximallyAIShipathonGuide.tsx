import BlogPost from "@/components/BlogPost";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

export default function MaximallyAIShipathonGuide() {
  const content = (
    <div className="space-y-6">
      <SEO 
        title="What is the Maximally AI Shipathon and Why You Should Join | Maximally"
        description="If you've ever watched a cool AI demo and thought, 'I wish I could build something like that,' the Maximally AI Shipathon is exactly where you should start. It's not just another hackathon — it's a launchpad for teen innovators."
        keywords="AI Shipathon, teen hackathon, AI projects, no code AI, beginner hackathon, student competition"
        article={true}
      />

      <p className="text-lg leading-relaxed">
        If you've ever watched a cool AI demo and thought, <strong>"I wish I could build something like that,"</strong> the Maximally AI Shipathon is exactly where you should start. It's not just another hackathon — it's a launchpad for teen innovators, dreamers, and builders who want to dive into AI and actually do something with it, even if they've never written a line of code.
      </p>

      <p>
        Whether you're 13 or 19, whether you're from a big metro or a small town, this AI hackathon is made for you. It's beginner-friendly, global, creative, and completely powered by the idea that the future belongs to the builders — and those builders include you.
      </p>

      <h2 className="text-2xl font-bold text-maximally-red mt-8 mb-4">So, What Exactly Is the Maximally AI Shipathon?</h2>

      <p>
        In simple words: It's a fast-paced, high-energy global AI competition where teens build real AI projects using modern no code AI tools. It's about exploring ideas, collaborating with other smart students, building your very first AI project, and launching it to the world — all in just a few days.
      </p>

      <p>
        But it's not about who codes better or who has a fancy laptop. It's about who's willing to learn, experiment, and ship ideas.
      </p>

      <div className="bg-maximally-blue/10 p-6 rounded-lg my-8">
        <p className="font-bold">🖥️ Official event page: <a href="https://maximally.in/shipathon" className="text-maximally-blue underline">https://maximally.in/shipathon</a></p>
      </div>

      <h2 className="text-2xl font-bold text-maximally-red mt-8 mb-4">What Makes the Shipathon Special?</h2>

      <div className="space-y-4">
        <div>
          <h3 className="font-bold text-lg mb-2">🔧 No Coding? No Problem.</h3>
          <p>You'll use tools like Glide, Make, Notion AI, and ChatGPT to build your ideas. These tools let you design apps, automate workflows, create content — all without knowing Python or JavaScript.</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">👥 Guided by Mentors.</h3>
          <p>You'll get access to startup mentors, AI creators, and educators who'll guide you through ideation, building, and pitching.</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">🚀 Real Teams. Real Deadlines. Real Projects.</h3>
          <p>You'll work in small teams and actually ship something you're proud of. It could be an AI chatbot, a tool for your school, or even a game. The only limit is your creativity.</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">🌍 Global Community.</h3>
          <p>Meet and collaborate with smart, curious students from all over the world. It's more than a hackathon — it's a tribe of teen creators.</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">📚 Learn by Doing.</h3>
          <p>Forget boring lectures. This is 100% hands-on. You'll build, fail, fix, and learn.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-maximally-red mt-8 mb-4">Who Should Join?</h2>

      <ul className="list-disc list-inside space-y-2">
        <li>High schoolers (13–19 yrs) curious about AI</li>
        <li>Students looking for their first big tech project</li>
        <li>Artists, writers, tinkerers, hustlers — everyone who wants to create</li>
        <li>Anyone who wants to explore AI hackathons for beginners</li>
      </ul>

      <p className="mt-4">
        Whether you're the class topper, the doodler in the back, or the one who's always trying new apps, this event is for you.
      </p>

      <h2 className="text-2xl font-bold text-maximally-red mt-8 mb-4">Why It Matters in 2025</h2>

      <p>
        In 2025, the world is moving faster than ever. AI is becoming part of everything — education, art, startups, even daily life. If you don't learn to build with AI now, you risk falling behind.
      </p>

      <p>
        But the good news? You don't need to be a genius. You just need to start. And the Maximally AI Shipathon is the perfect place to begin.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-4">You'll:</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Add a real project to your resume or college apps</li>
        <li>Make friends and collaborators for life</li>
        <li>Learn tools you can use in future internships or startups</li>
        <li>Maybe even win prizes or pitch to real investors</li>
      </ul>

      <div className="bg-maximally-green/10 p-6 rounded-lg my-8">
        <p className="font-bold">🎯 Sign up now: <a href="https://maximally.in/shipathon" className="text-maximally-green underline">https://maximally.in/shipathon</a></p>
      </div>

      <h2 className="text-2xl font-bold text-maximally-red mt-8 mb-4">TL;DR</h2>

      <p>
        This isn't just another online workshop. It's not a school assignment. This is your chance to make something real, surrounded by passionate people who believe in building the future.
      </p>

      <p>
        The Maximally AI Shipathon is the teen-friendly AI playground you didn't know you needed. So, get ready to build, learn, and ship your first AI project — no code required.
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogPost
        title="What is the Maximally AI Shipathon and Why You Should Join"
        date="July 12, 2025"
        readTime="8 min read"
        content={content}
      />
      <Footer />
    </div>
  );
}