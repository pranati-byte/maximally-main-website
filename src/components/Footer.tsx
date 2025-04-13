
import { Terminal, Twitter, Instagram, Youtube, Mail, Github } from "lucide-react";

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
                <li><a href="#" className="hover:text-maximally-blue transition-colors">About</a></li>
                <li><a href="#" className="hover:text-maximally-blue transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-maximally-blue transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-maximally-blue transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-press-start text-sm mb-4">Resources</h3>
              <ul className="space-y-2 font-jetbrains text-white/70">
                <li><a href="#" className="hover:text-maximally-blue transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-maximally-blue transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-maximally-blue transition-colors">Free Tools</a></li>
                <li><a href="#" className="hover:text-maximally-blue transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-press-start text-sm mb-4">Contact</h3>
              <ul className="space-y-2 font-jetbrains text-white/70">
                <li><a href="#" className="hover:text-maximally-blue transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-maximally-blue transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-maximally-blue transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-maximally-blue transition-colors">Terms</a></li>
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
