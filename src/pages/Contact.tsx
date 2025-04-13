import { useEffect } from "react";
import { Mail, Phone, Instagram } from "lucide-react";
import Footer from "@/components/Footer";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-24">
        <h1 className="font-press-start text-4xl mb-12 text-center">Contact Us</h1>

        <div className="max-w-2xl mx-auto space-y-8">
          <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm">
            <Phone className="h-6 w-6 text-maximally-blue" />
            <div>
              <h3 className="font-press-start text-sm mb-1">Phone</h3>
              <a href="tel:+919041260790" className="font-jetbrains text-maximally-black hover:text-maximally-blue">
                +91 9041260790
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm">
            <Mail className="h-6 w-6 text-maximally-blue" />
            <div>
              <h3 className="font-press-start text-sm mb-1">Email</h3>
              <a href="mailto:hello@maximally.in" className="font-jetbrains text-maximally-black hover:text-maximally-blue">
                hello@maximally.in
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm">
            <Instagram className="h-6 w-6 text-maximally-blue" />
            <div>
              <h3 className="font-press-start text-sm mb-1">Instagram</h3>
              <a href="https://instagram.com/maximally.in" target="_blank" rel="noopener noreferrer" className="font-jetbrains text-maximally-black hover:text-maximally-blue">
                @maximally.in
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;