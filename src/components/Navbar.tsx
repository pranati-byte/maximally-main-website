import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "py-2 bg-white shadow-md" : "py-4 bg-transparent"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Terminal className="h-8 w-8 text-maximally-black mr-2" />
          <span className="font-press-start text-maximally-black text-lg">Maximally</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#skills" className="font-jetbrains text-maximally-black hover:text-maximally-blue retro-underline">Skills</a>
          <a href="#why" className="font-jetbrains text-maximally-black hover:text-maximally-blue retro-underline">Why Us</a>
          <a href="#community" className="font-jetbrains text-maximally-black hover:text-maximally-blue retro-underline">Community</a>
          <a href="#events" className="font-jetbrains text-maximally-black hover:text-maximally-blue retro-underline">Events</a>
          <a href="/about" className="font-jetbrains text-maximally-black hover:text-maximally-blue retro-underline">About</a>
          <a href="/team" className="font-jetbrains text-maximally-black hover:text-maximally-blue retro-underline">Team</a>
          <a href="/blog" className="font-jetbrains text-maximally-black hover:text-maximally-blue retro-underline">Blog</a>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-maximally-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#skills" 
              className="font-jetbrains text-maximally-black py-2 px-4 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#why" 
              className="font-jetbrains text-maximally-black py-2 px-4 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Us
            </a>
            <a 
              href="#community" 
              className="font-jetbrains text-maximally-black py-2 px-4 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </a>
            <a 
              href="#events" 
              className="font-jetbrains text-maximally-black py-2 px-4 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </a>
            <a 
              href="/about" 
              className="font-jetbrains text-maximally-black py-2 px-4 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="/team" 
              className="font-jetbrains text-maximally-black py-2 px-4 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </a>
            <a 
              href="/blog" 
              className="font-jetbrains text-maximally-black py-2 px-4 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;