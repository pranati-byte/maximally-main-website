
import BlogPost from '@/components/BlogPost';

const TeenBusiness = () => {
  const content = (
    <>
      <p className="lead font-jetbrains text-lg mb-6">
        What if your teenager launched a business before finishing school—without even learning to code?
        Sounds wild, right? But thanks to no-code tools and teen-focused startup programs, it's happening all across India (and the world).
      </p>

      <p className="mb-4">
        Whether you're a teen with a big idea, a parent of a creative kid, or a school leader looking to empower young innovators, 
        this guide will walk you through how teenagers can start and grow a real business—even before they turn 18.
      </p>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">Why Start a Business Before 18?</h2>
        <p className="mb-4">Starting early gives teens a massive advantage. They develop real-world skills, build confidence, and often discover passions that shape their futures. But the biggest shift in 2025? You don't need money, an MBA, or tech skills to get started. All you need is:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>A problem worth solving</li>
          <li>Creativity</li>
          <li>The right tools (hello, no-code!)</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">What is No-Code, and Why Should Teen Entrepreneurs Use It?</h2>
        <p className="mb-4">No-code tools let you build apps, websites, and automations without writing traditional code. Think of it like Lego for the internet—drag, drop, and launch!</p>
        
        <p className="font-bold mb-2">Popular No-Code Tools for Teens:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Glide:</strong> Turn Google Sheets into apps in minutes</li>
          <li><strong>Canva:</strong> Design logos, pitch decks, and content</li>
          <li><strong>Tally:</strong> Build forms and collect data (great for early surveys)</li>
          <li><strong>Notion:</strong> Organize your startup roadmap</li>
          <li><strong>Bubble:</strong> Create full-scale web apps</li>
          <li><strong>ChatGPT:</strong> Automate customer support or idea brainstorming</li>
        </ul>
        
        <p className="mb-4">These tools make it possible for teens to build fast, test ideas, and learn by doing.</p>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">Step-by-Step: How to Launch a Business Before 18</h2>
        
        <div className="mb-6">
          <h3 className="font-press-start text-xl mb-3">Step 1: Spot a Problem You Care About</h3>
          <p className="mb-3">Every business begins with a problem. The best teen entrepreneurs solve something close to their world.</p>
          <p className="mb-2"><strong>Examples:</strong></p>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li>Tanvi (16, Jaipur): Noticed her school's lost-and-found was chaos. She built a digital locker app using Glide.</li>
            <li>Ravi (17, Hyderabad): Created a budgeting tool for teens using Notion + Google Sheets.</li>
          </ul>
          <p className="mb-2">👉 <em>Tip: Look around your school, neighborhood, or hobbies. What annoys you or your friends? That's a great starting point.</em></p>
        </div>
        
        <div className="mb-6">
          <h3 className="font-press-start text-xl mb-3">Step 2: Brainstorm a Simple Solution</h3>
          <p className="mb-3">Start small. You don't need a perfect app—just a solution that helps real people.</p>
          <p className="mb-2">Use the "One Sentence Startup Test":</p>
          <p className="italic mb-3">"I'm building a tool that helps [people] do [something] faster/easier/cheaper."</p>
          <p className="mb-2"><strong>Example:</strong> "I'm building a tool that helps parents monitor screen time using Notion and AI reminders."</p>
        </div>
        
        <div className="mb-6">
          <h3 className="font-press-start text-xl mb-3">Step 3: Build Your First MVP (Minimum Viable Product)</h3>
          <p className="mb-3">Don't wait to learn coding or hire developers. Build your MVP using no-code tools.</p>
          
          <p className="font-bold mb-2">Tool Combos for Common Projects:</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Goal</th>
                  <th className="border p-2 text-left">Tool Stack</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Mobile app</td>
                  <td className="border p-2">Glide + Google Sheets</td>
                </tr>
                <tr>
                  <td className="border p-2">Website</td>
                  <td className="border p-2">Notion + Super.so or Card</td>
                </tr>
                <tr>
                  <td className="border p-2">Newsletter</td>
                  <td className="border p-2">Beehive + Substack</td>
                </tr>
                <tr>
                  <td className="border p-2">AI-powered chatbot</td>
                  <td className="border p-2">ChatGPT + Tally form</td>
                </tr>
                <tr>
                  <td className="border p-2">Online store</td>
                  <td className="border p-2">Shopify + Canva</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mb-2">Launch in 7–10 days, not months.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="font-press-start text-xl mb-3">Step 4: Test With Real Users</h3>
          <p className="mb-2">Start with friends, teachers, and parents. Ask for honest feedback:</p>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li>Does it solve their problem?</li>
            <li>Is it easy to use?</li>
            <li>Would they pay for it?</li>
          </ul>
          <p className="mb-2">Track your responses using Google Forms or Tally.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="font-press-start text-xl mb-3">Step 5: Improve and Launch Publicly</h3>
          <p className="mb-2">Once you have feedback:</p>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li>Fix what's confusing</li>
            <li>Add simple features users ask for</li>
            <li>Create a landing page (Card is great for this)</li>
          </ul>
          <p className="mb-2">Then launch to a bigger group: your school, Instagram, Reddit, or LinkedIn.</p>
        </div>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">Real Teen Founders You Should Know</h2>
        <div className="space-y-4">
          <div className="pixel-border p-4 bg-white">
            <h3 className="font-press-start text-lg mb-2">1. Isha Jain (17, Mumbai)</h3>
            <p>Built "Mood Board," a Canva-powered mental health tracker for teens. Now has over 5,000 users from 11 schools.</p>
          </div>
          
          <div className="pixel-border p-4 bg-white">
            <h3 className="font-press-start text-lg mb-2">2. Aarav & Zara (15 & 14, Pune)</h3>
            <p>Launched "Clean City" – a hyperlocal waste complaint tracker using Glide + Google Maps API. They even pitched it to the municipal office!</p>
          </div>
          
          <div className="pixel-border p-4 bg-white">
            <h3 className="font-press-start text-lg mb-2">3. Nidhi R. (16, Bangalore)</h3>
            <p>Started a journaling app called "Dream Daily" using Notion, Tally, and a WhatsApp bot. She monetizes through eBook sales and premium trackers.</p>
          </div>
        </div>
        
        <p className="mt-4 mb-2 font-bold">None of them wrote code. All of them started in high school.</p>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">How Parents and Schools Can Help</h2>
        
        <div className="mb-6">
          <h3 className="font-press-start text-xl mb-3">For Parents:</h3>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li>Encourage exploration: Let them try 3–4 ideas.</li>
            <li>Offer tools, not lectures: Buy them access to no-code platforms.</li>
            <li>Celebrate failure: It's all learning.</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="font-press-start text-xl mb-3">For Schools:</h3>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li>Create space: Allow 1 hour/week for entrepreneurship.</li>
            <li>Run idea marathons: Problem-solving sprints using tools like Notion, Figma, Glide.</li>
            <li>Partner with bootcamps: Bring expert mentors into school.</li>
          </ul>
        </div>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">Top Benefits of Teen Entrepreneurship</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-2">
            <span className="text-lg">💼</span>
            <p>College admissions love it</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-lg">📊</span>
            <p>Teaches real-life math, writing, and critical thinking</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-lg">🎤</span>
            <p>Builds confidence, communication, and leadership</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-lg">💰</span>
            <p>Opens doors to freelancing or earning early</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-lg">🧠</span>
            <p>Unlocks creativity and independence</p>
          </div>
        </div>
        
        <p className="mt-4 mb-2">Whether it grows or fails, your teen will never come out of it the same.</p>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">Want to Start but Need Help?</h2>
        <div className="pixel-border bg-maximally-blue/10 p-6 mb-4">
          <h3 className="font-press-start text-xl mb-3">🧠 Join the Maximally AI + No Code + Entrepreneurship Bootcamp</h3>
          <p className="mb-3">Maximally is India's #1 startup lab for teenagers. You'll go from idea to product in just 4 weeks using:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>No-code tools like Bubble, Glide, and Tally</li>
            <li>AI platforms like ChatGPT and Lobe.ai</li>
            <li>Live mentorship from young founders and experts</li>
            <li>A startup pitch day with real feedback</li>
            <li>Entrepreneurship bootcamps</li>
            <li>Team projects</li>
          </ul>
          <p className="mb-3">If you're a teen with a business idea—Maximally gives you the platform to build it.</p>
          <p className="mb-4">📅 Spots are limited. Apply now and build your first business before you turn 18.</p>
          
          <div className="flex justify-center">
            <a href="/entrepreneurship" className="pixel-button bg-[#39FF14] text-black px-8 py-3 font-press-start hover:scale-105 transform transition-all">
              👉 Join the Maximally Bootcamp
            </a>
          </div>
        </div>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">Final Thoughts</h2>
        <p className="mb-2">The world doesn't wait until you're 18.</p>
        <p className="mb-2">Why should your dreams?</p>
        <p className="mb-4">With no-code tools, AI, and the right mentors, you can become an entrepreneur right now—no matter your age, tech skills, or background.</p>
        <p className="mb-2">So start small. Start messy. Just start.</p>
      </section>
    </>
  );

  return (
    <BlogPost
      title="How to Start a Business Before You Turn 18 (No Code, No Problem!)"
      date="May 8, 2025"
      readTime="8 min read"
      content={content}
    />
  );
};

export default TeenBusiness;
