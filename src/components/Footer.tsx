
import { Terminal, Twitter, Github, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-maximally-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <Terminal className="h-6 w-6 mr-2" />
              <span className="font-press-start text-lg">Maximally</span>
            </div>
            <p className="font-jetbrains text-white/70 mb-6">
              Empowering teens with real-world skills for tomorrow's challenges.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/maximally" target="_blank" rel="noopener noreferrer" 
                className="text-white/70 hover:text-maximally-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com/maximally" target="_blank" rel="noopener noreferrer" 
                className="text-white/70 hover:text-maximally-blue transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/maximally" target="_blank" rel="noopener noreferrer" 
                className="text-white/70 hover:text-maximally-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:hello@maximally.com" className="text-white/70 hover:text-maximally-blue transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-press-start text-sm mb-4">Programs</h3>
            <ul className="space-y-3 font-jetbrains text-white/70">
              <li><Link to="/entrepreneurship" className="hover:text-maximally-blue transition-colors">Entrepreneurship</Link></li>
              <li><Link to="/public-speaking" className="hover:text-maximally-blue transition-colors">Public Speaking</Link></li>
              <li><Link to="/digital-marketing" className="hover:text-maximally-blue transition-colors">Digital Marketing</Link></li>
              <li><Link to="/no-code-ai" className="hover:text-maximally-blue transition-colors">No-Code & AI</Link></li>
              <li><Link to="/video-editing" className="hover:text-maximally-blue transition-colors">Video Editing</Link></li>
              <li><Link to="/career-launch" className="hover:text-maximally-blue transition-colors">Career Launch</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-press-start text-sm mb-4">Company</h3>
            <ul className="space-y-3 font-jetbrains text-white/70">
              <li><Link to="/about" className="hover:text-maximally-blue transition-colors">About Us</Link></li>
              <li><Link to="/team" className="hover:text-maximally-blue transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="hover:text-maximally-blue transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-maximally-blue transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-maximally-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-press-start text-sm mb-4">Resources</h3>
            <ul className="space-y-3 font-jetbrains text-white/70">
              <li><Link to="/community" className="hover:text-maximally-blue transition-colors">Community</Link></li>
              <li><Link to="/support" className="hover:text-maximally-blue transition-colors">Support</Link></li>
              <li><Link to="/privacy" className="hover:text-maximally-blue transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-maximally-blue transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="font-jetbrains text-white/50 text-center">
            © {new Date().getFullYear()} Maximally. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
