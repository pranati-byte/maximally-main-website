import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

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
      isScrolled ? "py-3 sm:py-2 bg-white shadow-md" : "py-4 sm:py-4 bg-transparent"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Terminal className="h-8 w-8 text-maximally-black mr-2" />
          <span className="font-press-start text-maximally-black text-lg">Maximally</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="font-jetbrains text-maximally-black hover:text-maximally-blue">Home</Link>
          <Link to="/bootcamps" className="font-jetbrains text-maximally-black hover:text-maximally-blue">Bootcamps</Link>
          <Link to="/community" className="font-jetbrains text-maximally-black hover:text-maximally-blue">Community</Link>
          <Link to="/about" className="font-jetbrains text-maximally-black hover:text-maximally-blue">About</Link>
          <Link to="/blog" className="font-jetbrains text-maximally-black hover:text-maximally-blue">Blog</Link>
          <Link to="/collaborate" className="font-jetbrains text-maximally-black hover:text-maximally-blue">Collaborate</Link>
          <Link to="/join-us" className="font-jetbrains text-maximally-black hover:text-maximally-blue">Join Us</Link>
          <Link to="/contact" className="font-jetbrains text-maximally-black hover:text-maximally-blue">Contact</Link>
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
      <div className={`md:hidden fixed top-[60px] left-0 right-0 bottom-0 bg-white/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-2 h-full overflow-y-auto">
          <div className="grid grid-cols-2 gap-2">
            <Link to="/" className="font-jetbrains text-white py-3 px-4 bg-[#FF5F5F] hover:bg-[#FF5F5F]/90 rounded-lg active:bg-[#FF5F5F]/80 text-sm pixel-border" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/bootcamps" className="font-jetbrains text-white py-3 px-4 bg-[#39FF14] hover:bg-[#39FF14]/90 rounded-lg active:bg-[#39FF14]/80 text-sm pixel-border" onClick={() => setIsMenuOpen(false)}>Bootcamps</Link>
            <Link to="/community" className="font-jetbrains text-white py-3 px-4 bg-[#B400FF] hover:bg-[#B400FF]/90 rounded-lg active:bg-[#B400FF]/80 text-sm pixel-border" onClick={() => setIsMenuOpen(false)}>Community</Link>
            <Link to="/about" className="font-jetbrains text-white py-3 px-4 bg-[#00D1FF] hover:bg-[#00D1FF]/90 rounded-lg active:bg-[#00D1FF]/80 text-sm pixel-border" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/blog" className="font-jetbrains text-white py-3 px-4 bg-[#FFD700] hover:bg-[#FFD700]/90 rounded-lg active:bg-[#FFD700]/80 text-sm pixel-border" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link to="/join-us" className="font-jetbrains text-white py-3 px-4 bg-[#FF1493] hover:bg-[#FF1493]/90 rounded-lg active:bg-[#FF1493]/80 text-sm pixel-border" onClick={() => setIsMenuOpen(false)}>Join Us</Link>
            <Link to="/collaborate" className="font-jetbrains text-white py-3 px-4 bg-[#FF8C00] hover:bg-[#FF8C00]/90 rounded-lg active:bg-[#FF8C00]/80 text-sm pixel-border" onClick={() => setIsMenuOpen(false)}>Collaborate</Link>
            <Link to="/career-launch" className="font-jetbrains text-maximally-black py-3 px-4 hover:bg-maximally-blue/10 rounded-lg active:bg-maximally-blue/20 text-sm pixel-border" onClick={() => setIsMenuOpen(false)}>Career Launch</Link>
            <Link to="/digital-marketing" className="font-jetbrains text-maximally-black py-3 px-4 hover:bg-maximally-blue/10 rounded-lg active:bg-maximally-blue/20 text-sm pixel-border" onClick={() => setIsMenuOpen(false)}>Digital Marketing</Link>
            <Link to="/entrepreneurship" className="font-jetbrains text-maximally-black py-3 px-4 hover:bg-maximally-blue/10 rounded-lg active:bg-maximally-blue/20 text-sm pixel-border" onClick={() => setIsMenuOpen(false)}>Entrepreneurship</Link>
            <Link to="/no-code-ai" className="font-jetbrains text-maximally-black py-3 px-4 hover:bg-maximally-blue/10 rounded-lg active:bg-maximally-blue/20 text-sm pixel-border" onClick={() => setIsMenuOpen(false)}>No-Code AI</Link>
            <Link to="/public-speaking" className="font-jetbrains text-maximally-black py-3 px-4 hover:bg-maximally-blue/10 rounded-lg active:bg-maximally-blue/20 text-sm pixel-border" onClick={() => setIsMenuOpen(false)}>Public Speaking</Link>
            <Link to="/collaborate" className="font-jetbrains text-maximally-black py-3 px-4 hover:bg-maximally-blue/10 rounded-lg active:bg-maximally-blue/20 text-sm pixel-border" onClick={() => setIsMenuOpen(false)}>Collaborate</Link>
            <Link to="/contact" className="font-jetbrains text-maximally-black py-3 px-4 hover:bg-maximally-blue/10 rounded-lg active:bg-maximally-blue/20 text-sm pixel-border" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;