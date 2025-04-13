
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

const CtaBanner = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // In a real app, you would send this to your backend
      console.log("Subscribed with email:", email);
    }
  };

  return (
    <section className="bg-maximally-black py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="pixel-border bg-white p-6 md:p-8 relative overflow-hidden">
          {/* Decorative pixel elements */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-maximally-blue pixel-border opacity-50 -mr-8 -mt-8"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 bg-maximally-red pixel-border opacity-50 -ml-6 -mb-6"></div>
          
          <div className="text-center">
            <h2 className="font-press-start text-xl md:text-2xl mb-4 text-maximally-black">
              &gt;&gt; Stay in the loop_
            </h2>
            <p className="font-jetbrains text-maximally-black/80 mb-6 max-w-2xl mx-auto">
              Get updates on new courses, events, and exclusive tips to level up your skills.
            </p>
            
            {isSubscribed ? (
              <div className="bg-maximally-blue/10 p-4 mb-4 border-2 border-maximally-blue inline-block">
                <p className="font-press-start text-sm text-maximally-blue">Thanks for subscribing!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="pixel-border py-2 px-4 flex-grow font-jetbrains"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="pixel-button bg-maximally-blue hover:bg-maximally-blue/90 group">
                  <Bell className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Notify Me
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
