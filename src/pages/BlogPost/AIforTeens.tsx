
import BlogPost from '@/components/BlogPost';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AIforTeens = () => {
  const content = (
    <>
      <p className="lead mb-8">
        What if you could build your own personal assistant, create AI-generated art, or launch a mini startup… without ever writing a single line of code? That's not the future—it's right now.
      </p>

      <p className="mb-6">
        If you're a teenager curious about tech, creativity, or entrepreneurship, AI is the most exciting skill you can learn today. And the best part? You don't need to be a coder to get started.
      </p>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">Why AI is the Skill of the Decade</h2>
        <p className="mb-4">
          Artificial Intelligence (AI) is transforming everything—from how we shop and learn to how we create music and tell stories. Companies like Google, Netflix, and Tesla are already powered by AI.
        </p>
        <p className="mb-4">But here's what most schools won't tell you:</p>
        <p className="font-press-start mb-4">You don't need to wait until college—or even know how to code—to start using and building with AI.</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Build AI chatbots</li>
          <li>Generate music and designs</li>
          <li>Analyze data</li>
          <li>Create businesses</li>
          <li>Solve real-world problems</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">What is No-Code AI?</h2>
        <p className="mb-4">No-code AI means building and using artificial intelligence tools without needing to know programming languages like Python or Java.</p>
        <div className="pixel-border p-6 bg-maximally-blue/5">
          <p className="mb-4">Instead of writing lines of code, you can:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Drag and drop elements</li>
            <li>Use AI platforms with friendly interfaces</li>
            <li>Train your own models by uploading data or giving examples</li>
          </ul>
        </div>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">Tools That Make AI Easy for Teens</h2>
        <div className="grid gap-6 mb-8">
          <div className="pixel-border p-6">
            <h3 className="font-press-start text-xl mb-3">🧠 ChatGPT</h3>
            <p className="mb-2">Use it to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Write stories or poems</li>
              <li>Get study help</li>
              <li>Simulate interviews or debates</li>
              <li>Create a chatbot for your website</li>
            </ul>
            <p className="mt-4 text-sm italic">💡 Teen Example: Aryan (15, Delhi) built a school debate simulator using ChatGPT and Tally Forms.</p>
          </div>
        </div>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">Real Teens Using AI to Make a Difference</h2>
        <div className="grid gap-4">
          <div className="pixel-border p-4">
            <h3 className="font-press-start text-lg">🌟 Ishaan, 14 (Noida)</h3>
            <p>Created an AI bot that generates motivational messages for students dealing with exam stress.</p>
          </div>
          <div className="pixel-border p-4">
            <h3 className="font-press-start text-lg">🌟 Zoya, 16 (Pune)</h3>
            <p>Built an AI-powered news summarizer for teenagers—so they don't have to read long articles.</p>
          </div>
          <div className="pixel-border p-4">
            <h3 className="font-press-start text-lg">🌟 Krishna, 17 (Indore)</h3>
            <p>Runs a small business selling AI-generated logos to local shops.</p>
          </div>
        </div>
      </section>

      <section className="pixel-border p-6 bg-maximally-green/5 my-8">
        <h2 className="font-press-start text-2xl mb-4">Ready to Build with AI? Start Here 👇</h2>
        <h3 className="font-press-start text-xl mb-4">💻 Join the Maximally AI & No-Code Bootcamp</h3>
        <p className="mb-4">Maximally is India's most hands-on AI bootcamp designed for teenagers—no coding needed.</p>
        <div className="mb-6">
          <h4 className="font-press-start text-lg mb-2">🧩 What you'll do:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Build projects in 1 week</li>
            <li>Use tools like ChatGPT, DALL·E, Lobe, Bubble, and Glide</li>
            <li>Learn from expert mentors and young startup founders</li>
            <li>Join India's smartest teen builder community</li>
            <li>Pitch your project at our Demo Day</li>
          </ul>
        </div>
        <div className="text-center">
          <Button asChild size="lg" className="bg-black hover:bg-black/80">
            <Link to="/bootcamps">Apply Now for AI Bootcamp</Link>
          </Button>
        </div>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">Final Thoughts</h2>
        <p className="mb-4">You don't need to be 18, a genius, or a coder to shape the future.</p>
        <p className="font-press-start text-lg mb-4">You just need to start.</p>
        <p className="mb-4">And with AI, the future is already yours to build.</p>
        <p>So pick up that laptop. Launch your first idea.</p>
        <p className="font-press-start">Let the world see what a teenager with AI can really do.</p>
      </section>
    </>
  );

  return (
    <BlogPost
      title="AI for Teenagers: Learn the Future Without Coding"
      date="April 17, 2025"
      readTime="8 min read"
      content={content}
    />
  );
};

export default AIforTeens;
