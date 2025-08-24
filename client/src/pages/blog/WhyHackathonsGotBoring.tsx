import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

const WhyHackathonsGotBoring = () => {
  return (
    <>
      <SEO
        title="Why Hackathons Got Boring (and How Code Hypothesis Breaks the Script)"
        description="Code Hypothesis is a 24-hour online hackathon where you don't pitch ideas—you test them. No theatrics. No gatekeeping. Just one question: Can you prove a weird theory in a day?"
        keywords="hackathons boring, code hypothesis, hackathon problems, test theories, no pitch hackathon, graffiti code, raw experiments"
        canonicalUrl="https://maximally.in/blog/why-hackathons-got-boring-code-hypothesis"
      />
      
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Back Button */}
          <Link 
            to="/blog" 
            className="inline-flex items-center text-maximally-red hover:text-maximally-yellow transition-colors mb-8 font-mono"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-green-400 mb-6 font-mono leading-tight">
              Why Hackathons Got Boring (and How Code Hypothesis Breaks the Script)
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-white/70 text-sm font-mono">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                January 24, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                8 min read
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                Code Hypothesis Team
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg prose-invert max-w-none font-mono">
            <div className="text-xl text-green-400 mb-8 text-center italic">
              <em>Spray it. Ship it.</em> That's the only rule I care about.
            </div>

            <div className="bg-gray-900/50 border-l-4 border-red-500 p-6 mb-8">
              <p className="text-white/90 leading-relaxed">
                Somewhere along the way, hackathons started feeling less like creative sprints and more like polite networking events. Decks over demos. Polished talk tracks over messy prototypes. Judges asking about "market size" for a thing you duct-taped together at 4 AM. Cute—but not why I show up.
              </p>
            </div>

            <p className="text-lg text-white/90 leading-relaxed mb-8">
              <strong className="text-green-400">Code Hypothesis</strong> is my rebellion: a 24-hour online hackathon where you don't <em>pitch</em> ideas—you <strong className="text-yellow-400">test</strong> them. No theatrics. No gatekeeping. Just one question: <em className="text-red-500">Can you prove a weird theory in a day?</em>
            </p>

            <p className="text-lg text-white/90 leading-relaxed mb-12">
              Think graffiti—but in code. Neon terminal green on concrete. CRT glitches. Spray-paint splatter. Fast. Raw. A little feral. And yes, global, beginner-friendly, and stack-agnostic.
            </p>

            <h2 className="text-3xl font-bold text-green-400 mb-6 font-mono">
              What Went Wrong with "Modern" Hackathons
            </h2>

            <p className="text-lg text-white/90 mb-4">Let me be blunt:</p>

            <div className="space-y-6 mb-12">
              <div className="bg-black/50 border border-red-500/30 p-6">
                <h3 className="text-xl font-bold text-red-500 mb-3">Polish &gt; Proof.</h3>
                <p className="text-white/90">We over-reward slide decks and sponsor buzzwords. The wild, half-broken thing that actually <em>works</em> gets overshadowed by a clean pitch.</p>
              </div>

              <div className="bg-black/50 border border-yellow-400/30 p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Pitch Theater.</h3>
                <p className="text-white/90">Somewhere, hackathons morphed into Shark Tank. Panels, timeboxes, hand-holding, "pivot" advice—even when your experiment just needs users, not opinions.</p>
              </div>

              <div className="bg-black/50 border border-green-400/30 p-6">
                <h3 className="text-xl font-bold text-green-400 mb-3">Gatekeeping by Tech Stack.</h3>
                <p className="text-white/90">If you didn't bring the "right" framework, you're dismissed. Yawn. Meanwhile, plenty of serious hackathons already accept <strong>asynchronous</strong> judging and video-first submissions because it's simply more practical for builders and judges alike.</p>
              </div>
            </div>

            <div className="bg-gray-900/50 border-l-4 border-green-400 p-6 mb-8">
              <p className="text-white/90">
                What gets lost? The original spirit: <strong className="text-green-400">ship something now</strong>, learn in public, iterate fast. That's the DNA I want back.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-green-400 mb-6 font-mono">
              The Flip: From Pitch Decks to Proof
            </h2>

            <p className="text-lg text-white/90 leading-relaxed mb-6">
              <strong className="text-green-400">Code Hypothesis</strong> starts with a simple shift: treat every idea like a <strong className="text-yellow-400">hypothesis</strong>. Not "Is this fundable?" but <em className="text-red-500">"What must be true—and how do I test it in 24 hours?"</em>
            </p>

            <p className="text-lg text-white/90 leading-relaxed mb-6">
              This isn't new in product land. It's basically <strong>hypothesis-driven development</strong> and Lean Startup energy—<strong className="text-green-400">build → measure → learn</strong>—except compressed into one intense day with zero ceremony.
            </p>

            <p className="text-lg text-white/90 mb-4">Some sample hypotheses I'm obsessed with:</p>

            <div className="space-y-4 mb-12">
              {[
                "Can dating apps work without pictures?",
                "Can an app go viral without a share button?",
                "Can news spread without outrage mechanics?"
              ].map((hypothesis, index) => (
                <div key={index} className="bg-black/50 border border-green-400/30 p-4">
                  <p className="text-green-400 font-bold">• {hypothesis}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-900/50 border-l-4 border-yellow-400 p-6 mb-12">
              <p className="text-white/90">
                Your job: define the falsifiable version of that thought, then build the smallest thing that can <em className="text-yellow-400">prove or disprove</em> it. That's it.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-green-400 mb-6 font-mono">
              Who Should Join (and Who Will Hate It)
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold text-green-400 mb-4">Join if you are:</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• A first-time hacker who learns faster by doing than watching</li>
                  <li>• A no-code/low-code tinkerer who prototypes at the speed of thought</li>
                  <li>• A builder with weird instincts and zero patience for slides</li>
                  <li>• A student or indie hacker who hates "cringe pitch culture"</li>
                  <li>• Someone who loves a deadline because it shuts up your inner perfectionist</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-red-500 mb-4">Maybe skip if you want:</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• A 10-slide VC deck review</li>
                  <li>• Mentors telling you which buzzwords to add</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-900/50 border-l-4 border-blue-400 p-6 mb-12">
              <p className="text-white/90">
                Also, yes—<strong className="text-blue-400">no-code/low-code is welcome</strong>. The ecosystem for that has exploded, and plenty of hackathons run with prototypes or video demos as valid submissions. We embrace that. Build with what you already know and move.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-green-400 mb-6 font-mono">
              Format (Designed for Builders, Not Performers)
            </h2>

            <div className="bg-black/70 border border-green-400 p-6 mb-8">
              <ul className="space-y-3 text-white/90">
                <li><strong className="text-green-400">24 hours.</strong> Sept 28, 2025. Online. Global.</li>
                <li><strong className="text-green-400">Solo or up to 4 people.</strong> Any stack, tool, or platform.</li>
                <li><strong className="text-green-400">Submission on Devpost.</strong> Link to your repo/prototype + a tight write-up of your hypothesis, how you tested it, and what you learned.</li>
                <li><strong className="text-green-400">Optional 2-min video.</strong> If it helps us grok your experiment fast.</li>
                <li><strong className="text-green-400">Asynchronous judging.</strong> No live pitch theater; judges review your build and notes during the window. This is standard on major platforms for a reason.</li>
              </ul>
            </div>

            <p className="text-sm text-white/70 mb-12 italic">
              (Yes, I'm intentionally keeping it lean. It keeps the focus where it belongs: on your experiment.)
            </p>

            <h2 className="text-3xl font-bold text-green-400 mb-6 font-mono">
              Ready? Bring Your Weird.
            </h2>

            <div className="bg-gradient-to-r from-red-500/20 to-yellow-400/20 border border-red-500 p-8 text-center mb-12">
              <p className="text-lg text-white/90 leading-relaxed mb-4">
                If you've ever had a shower-thought that wouldn't shut up—this is where you set it free. Draft your hypothesis, pick the tiniest test that matters, and <strong className="text-yellow-400">ship</strong>.
              </p>
              <p className="text-xl text-green-400 font-bold italic mb-6">
                <em>Spray it. Ship it. Prove it.</em>
              </p>
              <a 
                href="https://codehypothesis.devpost.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 font-bold font-mono hover:bg-red-600 transition-colors"
              >
                Register on Devpost
                <ArrowRight size={16} />
              </a>
            </div>
          </article>

          {/* Related Links */}
          <div className="border-t border-gray-800 pt-8">
            <h3 className="text-xl font-bold text-green-400 mb-4 font-mono">Related Posts</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/blog/science-wild-ideas-code-hypothesis" className="block bg-gray-900/50 border border-gray-700 hover:border-green-400 p-4 transition-colors">
                <h4 className="text-green-400 font-bold mb-2">The Science of Wild Ideas</h4>
                <p className="text-white/70 text-sm">Why we're calling it Code Hypothesis</p>
              </Link>
              <Link to="/blog/no-pitch-decks-gatekeeping-chaos" className="block bg-gray-900/50 border border-gray-700 hover:border-green-400 p-4 transition-colors">
                <h4 className="text-green-400 font-bold mb-2">No Pitch Decks. Just Chaos.</h4>
                <p className="text-white/70 text-sm">What we are and what we're not</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WhyHackathonsGotBoring;