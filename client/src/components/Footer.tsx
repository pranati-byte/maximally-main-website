
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-red-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pixel-grid-bg opacity-10"></div>
      <div className="absolute top-10 left-10 pixel-cube opacity-20"></div>
      <div className="absolute bottom-20 right-20 pixel-cube opacity-15" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 right-40 pixel-cube opacity-10" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top section with logo and description */}
        <div className="text-center mb-12">
          <h2 className="font-press-start text-2xl md:text-3xl mb-4 gradient-text-rainbow">
            MAXIMALLY
          </h2>
          <p className="font-jetbrains text-gray-300 max-w-2xl mx-auto text-lg">
            Empowering teens with real-world skills for tomorrow's challenges through innovative programs and partnerships.
          </p>
        </div>

        {/* Pixel divider */}
        <div className="w-full h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 mb-12 pixel-border"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Programs Section */}
          <div className="pixel-card bg-gradient-to-br from-red-600/20 to-red-800/20 border-red-400">
            <h3 className="font-press-start text-sm mb-6 text-red-400 flex items-center gap-2">
              <span>🚀</span> PROGRAMS
            </h3>
            <ul className="space-y-4 font-jetbrains text-gray-300">
              <li><Link to="/makeathon" className="hover:text-red-400 transition-colors block retro-underline">Startup Makeathon</Link></li>
              <li><Link to="/events" className="hover:text-red-400 transition-colors block retro-underline">Live Events</Link></li>
              <li><Link to="/studios" className="hover:text-red-400 transition-colors block retro-underline">Studios Content</Link></li>
              <li><Link to="/hackathon" className="hover:text-red-400 transition-colors block retro-underline">Hackathons</Link></li>
              <li><Link to="/bootcamps" className="hover:text-red-400 transition-colors block retro-underline">Skill Bootcamps</Link></li>
            </ul>
          </div>

          {/* Partnership & Community */}
          <div className="pixel-card bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 border-yellow-400">
            <h3 className="font-press-start text-sm mb-6 text-yellow-400 flex items-center gap-2">
              <span>🤝</span> COMMUNITY
            </h3>
            <ul className="space-y-4 font-jetbrains text-gray-300">
              <li><Link to="/partnership" className="hover:text-yellow-400 transition-colors block retro-underline">Join Partnership</Link></li>
              <li><Link to="/community" className="hover:text-yellow-400 transition-colors block retro-underline">Student Community</Link></li>
              <li><Link to="/allies" className="hover:text-yellow-400 transition-colors block retro-underline">Our Allies</Link></li>
              <li><Link to="/collaborate" className="hover:text-yellow-400 transition-colors block retro-underline">Collaborate</Link></li>
              <li><Link to="/wall-of-progressive-schools" className="hover:text-yellow-400 transition-colors block retro-underline">Progressive Schools</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="pixel-card bg-gradient-to-br from-blue-600/20 to-blue-800/20 border-blue-400">
            <h3 className="font-press-start text-sm mb-6 text-blue-400 flex items-center gap-2">
              <span>🏢</span> COMPANY
            </h3>
            <ul className="space-y-4 font-jetbrains text-gray-300">
              <li><Link to="/blog" className="hover:text-blue-400 transition-colors block retro-underline">Blog & Stories</Link></li>
              <li><Link to="/careers" className="hover:text-blue-400 transition-colors block retro-underline">Join Our Team</Link></li>
              <li><Link to="/featured" className="hover:text-blue-400 transition-colors block retro-underline">Featured</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors block retro-underline">Contact Us</Link></li>
              <li><Link to="/join-us" className="hover:text-blue-400 transition-colors block retro-underline">Get Involved</Link></li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="pixel-card bg-gradient-to-br from-purple-600/20 to-purple-800/20 border-purple-400">
            <h3 className="font-press-start text-sm mb-6 text-purple-400 flex items-center gap-2">
              <span>⚖️</span> SUPPORT
            </h3>
            <ul className="space-y-4 font-jetbrains text-gray-300">
              <li><Link to="/support" className="hover:text-purple-400 transition-colors block retro-underline">Help Center</Link></li>
              <li><Link to="/sponsor" className="hover:text-purple-400 transition-colors block retro-underline">Sponsor Program</Link></li>
              <li><Link to="/privacy" className="hover:text-purple-400 transition-colors block retro-underline">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-purple-400 transition-colors block retro-underline">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter Section */}
        <div className="mt-16 text-center">
          <h3 className="font-press-start text-lg mb-6 text-white">
            STAY CONNECTED
          </h3>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://www.instagram.com/maximally.in/" className="group" target="_blank" rel="noopener noreferrer">
              <div className="pixel-card bg-gradient-to-br from-pink-500 to-purple-600 hover:scale-110 transition-transform p-3">
                <svg className="h-8 w-8 text-white group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </a>
            <a href="https://www.linkedin.com/company/maximallyedu" className="group" target="_blank" rel="noopener noreferrer">
              <div className="pixel-card bg-gradient-to-br from-blue-500 to-blue-700 hover:scale-110 transition-transform p-3">
                <svg className="h-8 w-8 text-white group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
            </a>
            <a href="https://twitter.com/maximally_in" className="group" target="_blank" rel="noopener noreferrer">
              <div className="pixel-card bg-gradient-to-br from-black to-gray-800 hover:scale-110 transition-transform p-3">
                <svg className="h-8 w-8 text-white group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
            </a>
          </div>
          
          {/* Newsletter signup */}
          <div className="max-w-md mx-auto">
            <p className="font-jetbrains text-gray-300 mb-4">
              Get updates on new programs and events
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email..."
                className="flex-1 px-4 py-2 bg-gray-800 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
              />
              <button className="pixel-button bg-yellow-500 text-black hover:bg-yellow-400 px-6 py-2">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="font-jetbrains text-gray-400 text-sm">
            © 2025 Maximally. Building the future, one teen at a time.
          </p>
          <p className="font-jetbrains text-gray-500 text-xs mt-2">
            Made with ❤️ for the next generation of innovators
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
