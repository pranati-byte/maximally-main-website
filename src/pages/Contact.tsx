
import { useEffect } from "react";
import { Mail, Phone, Instagram } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <h1 className="font-press-start text-3xl mb-8 text-maximally-black">Contact Us</h1>
        <div className="max-w-2xl mx-auto font-jetbrains">
          <p className="mb-6 text-maximally-black/70">
            Have questions or want to learn more about Maximally? We'd love to hear from you!
          </p>
          
          <div className="pixel-card p-6 mb-8">
            <h2 className="font-press-start text-xl mb-6">Get In Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-maximally-blue" />
                <a href="tel:+919041260790" className="hover:text-maximally-blue transition-colors">
                  +91 9041260790
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-maximally-blue" />
                <a href="mailto:hello@maximally.in" className="hover:text-maximally-blue transition-colors">
                  hello@maximally.in
                </a>
              </div>
              <div className="flex items-center">
                <Instagram className="h-5 w-5 mr-3 text-maximally-blue" />
                <a 
                  href="https://instagram.com/maximally.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-maximally-blue transition-colors"
                >
                  @maximally.in
                </a>
              </div>
            </div>
          </div>

          <div className="pixel-card p-6">
            <h2 className="font-press-start text-xl mb-4">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-2">Name</label>
                <input type="text" className="w-full p-2 border pixel-border" />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input type="email" className="w-full p-2 border pixel-border" />
              </div>
              <div>
                <label className="block mb-2">Message</label>
                <textarea className="w-full p-2 border pixel-border h-32"></textarea>
              </div>
              <button className="bg-maximally-blue text-white px-6 py-2 hover:bg-maximally-red transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
