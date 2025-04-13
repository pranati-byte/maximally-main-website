
import { Link } from "react-router-dom";
import { Terminal, Twitter, Github, Instagram, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#121212] border-t-2 border-maximally-blue/20 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center mb-6 group">
              <Terminal className="h-6 w-6 mr-2 group-hover:text-maximally-blue transition-colors" />
              <span className="font-press-start text-lg group-hover:text-maximally-blue transition-colors">Maximally</span>
            </Link>
            <p className="font-jetbrains text-gray-300 mb-6">
              Empowering teens with real-world skills for tomorrow's challenges.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/maximally" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-maximally-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/maximally" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-maximally-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/maximally.in" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-maximally-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:hello@maximally.in" 
                className="text-gray-300 hover:text-maximally-blue transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-press-start text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 font-jetbrains">
              <li>
                <Link to="/bootcamps" className="text-gray-300 hover:text-maximally-blue transition-colors">Bootcamps</Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-300 hover:text-maximally-blue transition-colors">Community</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-maximally-blue transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-maximally-blue transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="font-press-start text-lg mb-4">Skills</h3>
            <ul className="space-y-2 font-jetbrains">
              <li>
                <Link to="/entrepreneurship" className="text-gray-300 hover:text-maximally-blue transition-colors">Entrepreneurship</Link>
              </li>
              <li>
                <Link to="/public-speaking" className="text-gray-300 hover:text-maximally-blue transition-colors">Public Speaking</Link>
              </li>
              <li>
                <Link to="/digital-marketing" className="text-gray-300 hover:text-maximally-blue transition-colors">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/video-editing" className="text-gray-300 hover:text-maximally-blue transition-colors">Video Editing</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-press-start text-lg mb-4">Legal</h3>
            <ul className="space-y-2 font-jetbrains">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-maximally-blue transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-maximally-blue transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-maximally-blue transition-colors">Support</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-maximally-blue transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center font-jetbrains text-gray-400">
            &copy; {new Date().getFullYear()} Maximally. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
