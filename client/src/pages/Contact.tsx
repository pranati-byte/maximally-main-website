
import { Mail, Phone, Instagram } from "lucide-react";
import { useEffect } from "react";
import Footer from "@/components/Footer";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      <div className="animated-bg" />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl mb-12 text-center text-maximally-black font-press-start">
          Contact Us
        </h1>

        <div className="max-w-2xl mx-auto space-y-6">
          <div className="pixel-card p-8">
            <div className="flex items-center space-x-6">
              <Phone className="h-8 w-8 text-maximally-blue" />
              <div>
                <h3 className="font-press-start text-sm mb-2">Phone</h3>
                <a href="tel:+919041260790" className="font-jetbrains text-maximally-black hover:text-maximally-blue transition-colors">
                  +91 9041260790
                </a>
              </div>
            </div>
          </div>

          <div className="pixel-card p-8">
            <div className="flex items-start space-x-6">
              <Mail className="h-8 w-8 text-maximally-blue" />
              <div>
                <h3 className="font-press-start text-sm mb-2">Email</h3>
                <div className="space-y-2 font-jetbrains">
                  <a href="mailto:hello@maximally.in" className="block text-maximally-black hover:text-maximally-blue transition-colors">
                    hello@maximally.in
                  </a>
                  <a href="mailto:contact.maximally@gmail.com" className="block text-maximally-black hover:text-maximally-blue transition-colors">
                    contact.maximally@gmail.com
                  </a>
                  <a href="mailto:sponsorships.maximally@gmail.com" className="block text-maximally-black hover:text-maximally-blue transition-colors">
                    sponsorships.maximally@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pixel-card p-8">
            <div className="flex items-center space-x-6">
              <Instagram className="h-8 w-8 text-maximally-blue" />
              <div>
                <h3 className="font-press-start text-sm mb-2">Instagram</h3>
                <a href="https://instagram.com/maximally.in" target="_blank" rel="noopener noreferrer" className="font-jetbrains text-maximally-black hover:text-maximally-blue transition-colors">
                  @maximally.in
                </a>
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
