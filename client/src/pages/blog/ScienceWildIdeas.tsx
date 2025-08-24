import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

const ScienceWildIdeas = () => {
  return (
    <>
      <SEO
        title="The Science of Wild Ideas: Why We're Calling It Code Hypothesis"
        description="Pitches are about selling. A hypothesis is about testing. Code Hypothesis is built on science + chaos - testing theories with code in 24 hours."
        keywords="code hypothesis, hackathon naming, hypothesis driven development, test theories, hacker scientist mindset, wild ideas"
        canonicalUrl="https://maximally.in/blog/science-wild-ideas-code-hypothesis"
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
              The Science of Wild Ideas: Why We're Calling It <em>Code Hypothesis</em>
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-white/70 text-sm font-mono">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                January 24, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                6 min read
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                Code Hypothesis Team
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg prose-invert max-w-none font-mono">
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              Hackathons usually come with flashy names: "Hack the Future," "InnovateX," "Disruptathon." Cool vibes, but they don't tell you <em>how</em> to think.
            </p>

            <p className="text-lg text-white/90 leading-relaxed mb-8">
              We called ours <strong className="text-green-400">Code Hypothesis</strong> on purpose.
            </p>

            <div className="bg-gray-900/50 border-l-4 border-green-400 p-6 mb-12">
              <p className="text-white/90 leading-relaxed">
                Because this isn't about pitching the next billion-dollar app. It's about something way simpler (and way more powerful): <strong className="text-green-400">testing theories with code.</strong>
              </p>
            </div>

            <h2 className="text-3xl font-bold text-green-400 mb-6 font-mono">
              Why a Hypothesis, Not a Pitch?
            </h2>

            <div className="bg-black/70 border border-yellow-400 p-8 mb-8 text-center">
              <p className="text-xl text-yellow-400 font-bold mb-4">
                Pitches are about selling. A hypothesis is about testing.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="bg-red-500/10 border border-red-500/30 p-4">
                  <p className="text-red-500 font-bold mb-2">A pitch asks:</p>
                  <p className="text-white/90 italic">Will this impress investors?</p>
                </div>
                <div className="bg-green-400/10 border border-green-400/30 p-4">
                  <p className="text-green-400 font-bold mb-2">A hypothesis asks:</p>
                  <p className="text-white/90 italic">What must be true—and can I prove it in 24 hours?</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 mb-12">
              <p className="text-lg text-white/90 leading-relaxed">
                <strong>This shift matters. Hackathons today feel like startup bootcamps. You spend more time polishing your slides than debugging your code. If you've been to a few, you've probably noticed the pattern: judges care more about how confidently you say "market opportunity" than whether your idea actually runs.</strong>
              </p>

              <p className="text-lg text-white/90 leading-relaxed">
                <strong>But that's not hacking. That's theater.</strong>
              </p>

              <p className="text-lg text-green-400 leading-relaxed font-bold">
                <strong>Code Hypothesis is built on a different backbone: science + chaos.</strong>
              </p>
            </div>

            <h2 className="text-3xl font-bold text-green-400 mb-6 font-mono">
              The Hacker-Scientist Mindset
            </h2>

            <p className="text-lg text-white/90 leading-relaxed mb-4">
              Think about science class. Every experiment started with the same question:<br />
              <em className="text-yellow-400 ml-4">What's your hypothesis?</em>
            </p>

            <p className="text-lg text-white/90 leading-relaxed mb-6">
              You didn't know the answer. You made a guess, you designed a test, you ran the thing, and you saw what happened.
            </p>

            <p className="text-lg text-white/90 leading-relaxed mb-6">
              Hackers work the same way.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "What if I strip every button except one?",
                "What if I remove profile pictures from dating apps?",
                "What if outrage wasn't the engine of news feeds?"
              ].map((hypothesis, index) => (
                <div key={index} className="bg-black/50 border border-green-400/30 p-4">
                  <p className="text-green-400 italic">• "{hypothesis}"</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-900/50 border-l-4 border-red-500 p-6 mb-12">
              <p className="text-white/90 leading-relaxed">
                That's not a pitch—it's a hypothesis. And the hackathon gives you 24 hours to test it.
              </p>
              <p className="text-white/90 leading-relaxed mt-4">
                It's messy. It's fast. It's real.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-green-400 mb-6 font-mono">
              Why Hypotheses Are More Powerful Than Ideas
            </h2>

            <p className="text-lg text-white/90 leading-relaxed mb-6">
              Here's the thing about ideas: they're infinite, and most of them never leave Notion docs. Hypotheses are different. They demand action.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800/50 border border-gray-600 p-6">
                <h3 className="text-yellow-400 font-bold text-lg mb-3">An idea is</h3>
                <p className="text-white/90">"maybe this would be cool."</p>
              </div>
              <div className="bg-green-400/10 border border-green-400 p-6">
                <h3 className="text-green-400 font-bold text-lg mb-3">A hypothesis is</h3>
                <p className="text-white/90">"this will happen if I do X."</p>
              </div>
            </div>

            <p className="text-lg text-white/90 leading-relaxed mb-6">
              That subtle difference forces you to:
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Define what you're actually testing",
                "Build the smallest possible prototype", 
                "Measure something—even if the sample size is tiny",
                "Accept failure as data, not defeat"
              ].map((point, index) => (
                <div key={index} className="bg-black/50 border-l-2 border-green-400 pl-4 py-2">
                  <p className="text-white/90">• {point}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-900/50 border-l-4 border-blue-400 p-6 mb-8">
              <p className="text-white/90 leading-relaxed">
                This is basically <strong className="text-blue-400">hypothesis-driven development</strong>, a playbook borrowed from product design and Lean Startup thinking. The "build → measure → learn" loop—compressed into 24 chaotic hours.
              </p>
              <p className="text-white/90 leading-relaxed mt-4">
                Except we cut the buzzwords. No investors. No pivots. Just the experiment.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-green-400 mb-6 font-mono">
              The Chaos Is the Point
            </h2>

            <p className="text-lg text-white/90 leading-relaxed mb-6">
              I keep coming back to graffiti. Graffiti isn't neat. It's not for galleries. It's messy, risky, raw. But it makes a statement the second it hits the wall.
            </p>

            <p className="text-lg text-white/90 leading-relaxed mb-6">
              That's how <strong className="text-green-400">Code Hypothesis</strong> works. You tag the wall with your test. It doesn't matter if the paint drips. It matters that it's visible.
            </p>

            <div className="bg-gradient-to-r from-green-400/20 to-yellow-400/20 border border-green-400 p-8 text-center mb-12">
              <p className="text-xl text-green-400 font-bold">
                Because proving (or disproving) your hypothesis <em>is the art</em>.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-green-400 mb-6 font-mono">
              What You'll Actually Do
            </h2>

            <div className="space-y-6 mb-12">
              {[
                { num: "1", title: "Write your hypothesis.", desc: "Keep it one sentence. If I do X, Y will happen." },
                { num: "2", title: "Design a 24-hour test.", desc: "What's the smallest build that proves or disproves it?" },
                { num: "3", title: "Ship it.", desc: "Repo, prototype, or no-code build—whatever gets the job done." },
                { num: "4", title: "Tell us what happened.", desc: "Whether you succeeded, failed, or half-broke something—you still get credit." }
              ].map((step, index) => (
                <div key={index} className="bg-black/70 border-l-4 border-green-400 p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-400 text-black font-bold text-xl w-8 h-8 flex items-center justify-center font-mono">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="text-green-400 font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-white/90">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-900/50 border-l-4 border-yellow-400 p-6 mb-12">
              <p className="text-white/90 text-center text-lg">
                No theatrics. No market-sizing. Just <strong className="text-yellow-400">raw experiments.</strong>
              </p>
            </div>

            <h2 className="text-3xl font-bold text-green-400 mb-6 font-mono">
              Final Thought
            </h2>

            <p className="text-lg text-white/90 leading-relaxed mb-6">
              Hackathons should feel dangerous. Not in the "breaking laws" way—dangerous in the "this might just work and I have no idea what happens next" way.
            </p>

            <p className="text-lg text-white/90 leading-relaxed mb-6">
              That's what a hypothesis gives you. A statement worth proving.
            </p>

            <div className="bg-gradient-to-r from-red-500/20 to-yellow-400/20 border border-red-500 p-8 text-center mb-12">
              <p className="text-xl text-green-400 font-bold mb-6">
                So when we say <strong>Code Hypothesis</strong>, we're not trying to be fancy. We're reminding you of the only thing that matters:
              </p>
              <p className="text-2xl text-yellow-400 font-bold mb-6">
                <strong>Don't pitch. Test.</strong>
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
              <Link to="/blog/why-hackathons-got-boring-code-hypothesis" className="block bg-gray-900/50 border border-gray-700 hover:border-green-400 p-4 transition-colors">
                <h4 className="text-green-400 font-bold mb-2">Why Hackathons Got Boring</h4>
                <p className="text-white/70 text-sm">How Code Hypothesis breaks the script</p>
              </Link>
              <Link to="/blog/survive-code-hypothesis-24-hours" className="block bg-gray-900/50 border border-gray-700 hover:border-green-400 p-4 transition-colors">
                <h4 className="text-green-400 font-bold mb-2">Survive 24 Hours</h4>
                <p className="text-white/70 text-sm">How to make it through Code Hypothesis</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ScienceWildIdeas;