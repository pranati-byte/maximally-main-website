
import { Mail, Phone, Instagram, Terminal, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import Footer from "@/components/Footer";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Pixel Grid Background */}
      <div className="fixed inset-0 bg-black" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Floating Pixels */}
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={i}
          className="fixed w-2 h-2 bg-maximally-red pixel-border animate-float pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${4 + i}s`,
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="minecraft-block bg-maximally-red text-black px-6 py-3 inline-block mb-8">
            <span className="font-press-start text-sm">📬 GET IN TOUCH</span>
          </div>
          <h1 className="font-press-start text-4xl md:text-6xl lg:text-7xl mb-8 minecraft-text">
            <span className="text-maximally-red drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              CONTACT US
            </span>
          </h1>
          <p className="text-gray-300 text-lg font-jetbrains max-w-3xl mx-auto leading-relaxed mb-12">
            Ready to join the hackathon revolution? Have questions? Want to partner with us? We're here to help build the future together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="pixel-card bg-black border-2 border-maximally-red p-8 hover:scale-105 transition-all duration-300 hover:border-maximally-yellow">
            <div className="flex items-center space-x-6">
              <div className="minecraft-block bg-maximally-red w-12 h-12 flex items-center justify-center">
                <Phone className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="font-press-start text-sm mb-2 text-maximally-red">PHONE</h3>
                <a href="tel:+919041260790" className="font-jetbrains text-white hover:text-maximally-red transition-colors text-lg">
                  +91 9041260790
                </a>
              </div>
            </div>
          </div>

          <div className="pixel-card bg-black border-2 border-maximally-yellow p-8 hover:scale-105 transition-all duration-300 hover:border-maximally-red">
            <div className="flex items-start space-x-6">
              <div className="minecraft-block bg-maximally-yellow w-12 h-12 flex items-center justify-center">
                <Mail className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="font-press-start text-sm mb-4 text-maximally-yellow">EMAIL</h3>
                <div className="space-y-3 font-jetbrains">
                  <a href="mailto:hello@maximally.in" className="block text-white hover:text-maximally-yellow transition-colors text-lg">
                    hello@maximally.in
                  </a>
                  <a href="mailto:contact.maximally@gmail.com" className="block text-white hover:text-maximally-yellow transition-colors text-lg">
                    contact.maximally@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="pixel-card bg-black border-2 border-purple-500 p-8 hover:scale-105 transition-all duration-300 hover:border-maximally-red">
              <div className="flex items-center space-x-6">
                <div className="minecraft-block bg-purple-500 w-12 h-12 flex items-center justify-center">
                  <Instagram className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="font-press-start text-sm mb-2 text-purple-400">INSTAGRAM</h3>
                  <a href="https://instagram.com/maximally.in" target="_blank" rel="noopener noreferrer" className="font-jetbrains text-white hover:text-purple-400 transition-colors text-lg">
                    @maximally.in
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pixel-card bg-black border-2 border-blue-500 p-8 hover:scale-105 transition-all duration-300 hover:border-maximally-red">
              <div className="flex items-center space-x-6">
                <div className="minecraft-block bg-blue-500 w-12 h-12 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="font-press-start text-sm mb-2 text-blue-400">DISCORD</h3>
                  <a href="https://discord.gg/MpBnYk8qMX" target="_blank" rel="noopener noreferrer" className="font-jetbrains text-white hover:text-blue-400 transition-colors text-lg">
                    Join Our Community
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
