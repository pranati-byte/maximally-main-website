
import { ArrowLeft, CheckCircle2, Brain, MessagesSquare, Lightbulb, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-maximally-blue/30 via-white to-maximally-red/20 pixel-grid minecraft-gradient">
      <main className="container mx-auto px-4 pt-24 pb-16 text-center">
        <div className="max-w-2xl mx-auto space-y-12">
          {/* Thank You Message */}
          <div className="space-y-6">
            <div className="pixel-border bg-white/80 p-8 rounded-xl shadow-xl animate-float">
              <CheckCircle2 className="h-16 w-16 mx-auto mb-6 text-green-500 animate-pulse" />
              <h1 className="font-press-start text-3xl md:text-4xl gradient-text-blue-red mb-4">
                Thank you for applying!
              </h1>
              <p className="font-jetbrains text-lg text-maximally-black/80">
                We've received your application and our team will review it thoroughly.
              </p>
            </div>
            
            <p className="font-jetbrains text-xl text-maximally-black/80 animate-float">
              Please keep an eye on your email — all important updates and interview invites will be sent there.
            </p>
          </div>

          {/* Interview Tips */}
          <div className="grid gap-4 md:grid-cols-2 text-left">
            <div className="pixel-border bg-white/80 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Brain className="h-5 w-5 text-maximally-blue" />
                <h3 className="font-press-start text-sm">Be Authentic</h3>
              </div>
              <p className="font-jetbrains text-sm text-maximally-black/80">
                We're looking for passion, not perfection
              </p>
            </div>

            <div className="pixel-border bg-white/80 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="h-5 w-5 text-maximally-red" />
                <h3 className="font-press-start text-sm">Brush Up Basics</h3>
              </div>
              <p className="font-jetbrains text-sm text-maximally-black/80">
                Know what you wrote in your form
              </p>
            </div>

            <div className="pixel-border bg-white/80 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <MessagesSquare className="h-5 w-5 text-green-500" />
                <h3 className="font-press-start text-sm">Keep it Chill</h3>
              </div>
              <p className="font-jetbrains text-sm text-maximally-black/80">
                It's a conversation, not a test
              </p>
            </div>

            <div className="pixel-border bg-white/80 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <HelpCircle className="h-5 w-5 text-purple-500" />
                <h3 className="font-press-start text-sm">Bring Questions</h3>
              </div>
              <p className="font-jetbrains text-sm text-maximally-black/80">
                We love curious minds
              </p>
            </div>
          </div>

          {/* Navigation Button */}
          <div className="pt-8">
            <Link to="/">
              <Button className="minecraft-button px-8 py-6 text-lg">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThankYou;
