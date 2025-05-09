
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
    { path: "/", label: "Home", color: "#FF5F5F" },
    { path: "/bootcamps", label: "Bootcamps", color: "#39FF14" },
    { path: "/community", label: "Community", color: "#B400FF" },
    { path: "/about", label: "About", color: "#00D1FF" },
    { path: "/blog", label: "Blog", color: "#FFD700" },
    { path: "/collaborate", label: "Collaborate", color: "#FF8C00" },
    { path: "/join-us", label: "Join Us", color: "#FF1493" },
    { path: "/contact", label: "Contact", color: "#FF6347" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "py-3 sm:py-2 bg-white shadow-md" : "py-4 sm:py-4 bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Terminal className="h-8 w-8 text-maximally-black mr-2" />
            <span className="font-press-start text-maximally-black text-lg">Maximally</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            {menuItems.slice(0, 7).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-jetbrains ${
                  window.location.pathname === '/hackathon' 
                  ? 'text-white' 
                  : 'text-maximally-black'
                } hover:text-[${item.color}] transition-colors duration-200`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden space-x-4">
            {menuItems.slice(0, 5).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="font-jetbrains text-sm text-maximally-black hover:text-[${item.color}] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button and Join Button */}
          <div className="flex items-center gap-3 md:hidden">
            <Link
              to="/join-us"
              className="bg-maximally-green hover:bg-maximally-green/90 text-white px-4 py-2 rounded-lg font-jetbrains text-sm"
            >
              Join Us
            </Link>
            <button 
              className="text-maximally-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-[60px] left-0 right-0 bottom-0 bg-white/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-2 gap-3">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-jetbrains ${
                    window.location.pathname === '/hackathon' 
                    ? 'text-white' 
                    : 'text-maximally-black'
                  } py-3 px-4 text-center rounded-lg text-sm transition-transform active:scale-95`}
                  style={{ backgroundColor: item.color }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
