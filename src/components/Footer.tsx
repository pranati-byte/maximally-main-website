
import { useState, useEffect } from "react";
import { 
  Terminal, 
  Info, 
  BookOpen, 
  Mail, 
  Instagram, 
  Twitter, 
  Youtube,
  ArrowUp 
} from "lucide-react";

const Footer = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [keys, setKeys] = useState<string[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys(prevKeys => {
        const updatedKeys = [...prevKeys, e.key];
        if (updatedKeys.length > konamiCode.length) {
          updatedKeys.shift();
        }
        
        // Check if the keys match the Konami code
        if (updatedKeys.join(',') === konamiCode.join(',')) {
          setShowEasterEgg(true);
        }
        
        return updatedKeys;
      });
    };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-maximally-black text-white py-12 px-4 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Terminal className="h-6 w-6 mr-2" />
              <span className="font-press-start text-lg">Maximally</span>
            </div>
            
            <p className="font-jetbrains text-white/70 mb-4">
              Helping ambitious teens learn real-world skills and build their future.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-maximally-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-maximally-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-maximally-blue transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-press-start text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#skills" className="font-jetbrains text-white/70 hover:text-maximally-blue transition-colors flex items-center">
                  <span className="text-maximally-blue mr-2">{">"}</span> Skills
                </a>
              </li>
              <li>
                <a href="#community" className="font-jetbrains text-white/70 hover:text-maximally-blue transition-colors flex items-center">
                  <span className="text-maximally-blue mr-2">{">"}</span> Community
                </a>
              </li>
              <li>
                <a href="#events" className="font-jetbrains text-white/70 hover:text-maximally-blue transition-colors flex items-center">
                  <span className="text-maximally-blue mr-2">{">"}</span> Events
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-press-start text-sm mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-jetbrains text-white/70 hover:text-maximally-blue transition-colors flex items-center">
                  <Info className="h-4 w-4 mr-2" /> About
                </a>
              </li>
              <li>
                <a href="#" className="font-jetbrains text-white/70 hover:text-maximally-blue transition-colors flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" /> Blog
                </a>
              </li>
              <li>
                <a href="#" className="font-jetbrains text-white/70 hover:text-maximally-blue transition-colors flex items-center">
                  <Mail className="h-4 w-4 mr-2" /> Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-press-start text-sm mb-4">Newsletter</h3>
            <p className="font-jetbrains text-white/70 mb-4">
              Get weekly updates on new courses, events, and resources.
            </p>
            
            <div className="flex">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="bg-white/10 border border-white/20 px-4 py-2 font-jetbrains text-white focus:outline-none focus:ring-1 focus:ring-maximally-blue w-full"
              />
              <button className="bg-maximally-blue px-4 py-2 font-press-start text-xs">
                JOIN
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="font-jetbrains text-white/50 text-sm">
            © 2025 Maximally. All rights reserved.
          </p>
          
          <p className="font-jetbrains text-white/50 text-sm mt-2 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a> | 
            <a href="#" className="hover:text-white ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
      
      {/* Easter Egg - Konami Code */}
      {showEasterEgg && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="pixel-border bg-maximally-black p-6 max-w-md text-center">
            <h3 className="font-press-start text-maximally-blue mb-4">SECRET UNLOCKED!</h3>
            <p className="font-jetbrains text-white mb-4">
              You've discovered the hidden console! Use code PIXELPOWER for 25% off your first bootcamp.
            </p>
            <button 
              className="pixel-button bg-maximally-red hover:bg-maximally-red/90"
              onClick={() => setShowEasterEgg(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button 
          className="fixed bottom-8 right-8 h-12 w-12 bg-maximally-blue pixel-border flex items-center justify-center z-10 hover:bg-maximally-blue/90"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-6 w-6 text-white" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
