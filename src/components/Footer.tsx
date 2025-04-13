
import { Terminal, Twitter, Github, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center mb-6 hover:text-maximally-blue transition-colors">
              <Terminal className="h-6 w-6 mr-2" />
              <span className="font-press-start text-lg">Maximally</span>
            </Link>
            <p className="font-jetbrains text-gray-300 mb-6">
              Empowering teens with real-world skills for tomorrow's challenges.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/maximally" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-maximally-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com/maximally" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-maximally-blue transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/maximally" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-maximally-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:hello@maximally.com" className="text-gray-300 hover:text-maximally-blue transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-press-start text-sm mb-4 text-gray-100">Programs</h3>
            <ul className="space-y-3 font-jetbrains">
              <li><Link to="/entrepreneurship" className="text-gray-300 hover:text-maximally-blue transition-colors block">Entrepreneurship</Link></li>
              <li><Link to="/public-speaking" className="text-gray-300 hover:text-maximally-blue transition-colors block">Public Speaking</Link></li>
              <li><Link to="/digital-marketing" className="text-gray-300 hover:text-maximally-blue transition-colors block">Digital Marketing</Link></li>
              <li><Link to="/no-code-ai" className="text-gray-300 hover:text-maximally-blue transition-colors block">No-Code & AI</Link></li>
              <li><Link to="/video-editing" className="text-gray-300 hover:text-maximally-blue transition-colors block">Video Editing</Link></li>
              <li><Link to="/career-launch" className="text-gray-300 hover:text-maximally-blue transition-colors block">Career Launch</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-press-start text-sm mb-4 text-gray-100">Company</h3>
            <ul className="space-y-3 font-jetbrains">
              <li><Link to="/about" className="text-gray-300 hover:text-maximally-blue transition-colors block">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-maximally-blue transition-colors block">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-maximally-blue transition-colors block">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-maximally-blue transition-colors block">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-maximally-blue transition-colors block">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-press-start text-sm mb-4 text-gray-100">Resources</h3>
            <ul className="space-y-3 font-jetbrains">
              <li><Link to="/community" className="text-gray-300 hover:text-maximally-blue transition-colors block">Community</Link></li>
              <li><Link to="/support" className="text-gray-300 hover:text-maximally-blue transition-colors block">Support</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-maximally-blue transition-colors block">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-maximally-blue transition-colors block">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="font-jetbrains text-gray-400 text-center">
            © {new Date().getFullYear()} Maximally. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
