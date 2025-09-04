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

  const menuItems = [
    { path: "/", label: "Home", color: "#E50914" },
    { path: "/events", label: "Events", color: "#E50914" },
    { path: "/community", label: "Community", color: "#FF2B2B" },
    { path: "/blog", label: "Blog", color: "#FFCB47" },
    { path: "/collaborate", label: "Collaborate", color: "#E50914" },
    { path: "/contact", label: "Contact", color: "#FF2B2B" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "py-3 sm:py-2 bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20" : "py-4 sm:py-4 bg-white/60 backdrop-blur-lg border-b border-white/10"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <Terminal className="h-8 w-8 text-maximally-red mr-2 group-hover:text-maximally-yellow transition-colors" />
            <span className="font-press-start text-maximally-black text-lg group-hover:text-maximally-red transition-colors">Maximally</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            {menuItems.slice(0, 7).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="font-jetbrains text-maximally-black hover:text-maximally-red transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-maximally-yellow transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden space-x-4">
            {menuItems.slice(0, 5).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="font-jetbrains text-sm text-maximally-black hover:text-maximally-red transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-maximally-yellow transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              className="text-maximally-black hover:text-maximally-red transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 top-[72px] bg-black/40 backdrop-blur-sm transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
          <div className={`w-full bg-white/90 backdrop-blur-lg border-b border-white/20 shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}>
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-jetbrains text-white py-4 px-6 text-center rounded-lg text-sm transition-all duration-200 hover:scale-105 active:scale-95 backdrop-blur-sm border border-white/20 shadow-lg"
                    style={{ 
                      background: `linear-gradient(135deg, ${item.color}90, ${item.color}50)`,
                      boxShadow: `0 8px 32px ${item.color}30`
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;