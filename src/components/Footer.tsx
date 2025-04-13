
import { Terminal, Twitter, Instagram, Youtube, Mail, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-maximally-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Terminal className="h-6 w-6 mr-2" />
              <span className="font-press-start text-lg">Maximally</span>
            </div>
            <p className="font-jetbrains text-white/70 max-w-xs">
              Helping ambitious teens learn the real-world skills that schools forgot to teach.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-press-start text-sm mb-4">Company</h3>
              <ul className="space-y-2 font-jetbrains text-white/70">
                <li><Link to="/team" className="hover:text-maximally-blue transition-colors">Team</Link></li>
                <li><Link to="/community" className="hover:text-maximally-blue transition-colors">Community</Link></li>
                <li><Link to="/blog" className="hover:text-maximally-blue transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-press-start text-sm mb-4">Help</h3>
              <ul className="space-y-2 font-jetbrains text-white/70">
                <li><Link to="/contact" className="hover:text-maximally-blue transition-colors">Contact Us</Link></li>
                <li><Link to="/support" className="hover:text-maximally-blue transition-colors">Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-press-start text-sm mb-4">Legal</h3>
              <ul className="space-y-2 font-jetbrains text-white/70">
                <li><Link to="/privacy" className="hover:text-maximally-blue transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-maximally-blue transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20">
          <p className="font-jetbrains text-white/50 mb-4 md:mb-0">
            © 2025 Maximally. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-white/70 hover:text-maximally-blue transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-maximally-blue transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-maximally-blue transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-maximally-blue transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-maximally-blue transition-colors">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
