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
      isScrolled ? "py-2 bg-white shadow-md" : "py-4 bg-transparent"
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
          <Link to="/team" className="font-jetbrains text-maximally-black hover:text-maximally-blue">Team</Link>
          <Link to="/blog" className="font-jetbrains text-maximally-black hover:text-maximally-blue">Blog</Link>
          <Link to="/sponsor" className="font-jetbrains text-maximally-black hover:text-maximally-blue">Sponsor</Link>
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
      <div className={`md:hidden fixed top-[60px] left-0 right-0 bottom-0 bg-white transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4 h-full overflow-y-auto">
          <Link to="/" className="font-jetbrains text-maximally-black py-3 px-4 hover:bg-gray-100 rounded-lg active:bg-gray-200" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/bootcamps" className="font-jetbrains text-maximally-black py-3 px-4 hover:bg-gray-100 rounded-lg active:bg-gray-200" onClick={() => setIsMenuOpen(false)}>Bootcamps</Link>
          <Link to="/community" className="font-jetbrains text-maximally-black py-3 px-4 hover:bg-gray-100 rounded-lg active:bg-gray-200" onClick={() => setIsMenuOpen(false)}>Community</Link>
          <Link to="/about" className="font-jetbrains text-maximally-black py-3 px-4 hover:bg-gray-100 rounded-lg active:bg-gray-200" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/team" className="font-jetbrains text-maximally-black py-3 px-4 hover:bg-gray-100 rounded-lg active:bg-gray-200" onClick={() => setIsMenuOpen(false)}>Team</Link>
          <Link to="/blog" className="font-jetbrains text-maximally-black py-3 px-4 hover:bg-gray-100 rounded-lg active:bg-gray-200" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link to="/contact" className="font-jetbrains text-maximally-black py-3 px-4 hover:bg-gray-100 rounded-lg active:bg-gray-200" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;