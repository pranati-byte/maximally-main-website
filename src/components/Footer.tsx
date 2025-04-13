import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="font-press-start text-sm mb-4">Maximally</h2>
          <p className="font-jetbrains text-gray-300 mb-4">
            Empowering teens with real-world skills for tomorrow's challenges.
          </p>
          <div className="flex space-x-4">
            <a href="https://twitter.com/maximally" className="text-gray-300 hover:text-maximally-blue transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="https://discord.gg/maximally" className="text-gray-300 hover:text-maximally-blue transition-colors">
              <span className="sr-only">Discord</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 00-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 00-5.487 0 12.36 12.36 0 00-.617-1.23A.077.077 0 008.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 00-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 00.031.055 20.03 20.03 0 005.993 2.98.078.078 0 00.084-.026 13.83 13.83 0 001.226-1.963.074.074 0 00-.041-.104 13.201 13.201 0 01-1.872-.878.075.075 0 01-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 01.078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 01.079.009c.12.098.245.195.372.288a.075.075 0 01-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 00-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 00.084.028 19.963 19.963 0 006.002-2.981.076.076 0 00.032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 00-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-press-start text-sm mb-4">Programs</h3>
          <ul className="space-y-3 font-jetbrains text-gray-300">
            <li><Link to="/entrepreneurship" className="hover:text-maximally-blue transition-colors block">Entrepreneurship</Link></li>
            <li><Link to="/public-speaking" className="hover:text-maximally-blue transition-colors block">Public Speaking</Link></li>
            <li><Link to="/digital-marketing" className="hover:text-maximally-blue transition-colors block">Digital Marketing</Link></li>
            <li><Link to="/no-code-ai" className="hover:text-maximally-blue transition-colors block">No-Code & AI</Link></li>
            <li><Link to="/video-editing" className="hover:text-maximally-blue transition-colors block">Video Editing</Link></li>
            <li><Link to="/career-launch" className="hover:text-maximally-blue transition-colors block">Career Launch</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-press-start text-sm mb-4">Company</h3>
          <ul className="space-y-3 font-jetbrains text-gray-300">
            <li><Link to="/about" className="hover:text-maximally-blue transition-colors block">About Us</Link></li>
            <li><Link to="/team" className="hover:text-maximally-blue transition-colors block">Our Team</Link></li>
            <li><Link to="/careers" className="hover:text-maximally-blue transition-colors block">Careers</Link></li>
            <li><Link to="/blog" className="hover:text-maximally-blue transition-colors block">Blog</Link></li>
            <li><Link to="/sponsor" className="hover:text-maximally-blue transition-colors block">Sponsor</Link></li>
            <li><Link to="/contact" className="hover:text-maximally-blue transition-colors block">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-press-start text-sm mb-4">Resources</h3>
          <ul className="space-y-3 font-jetbrains text-gray-300">
            <li><Link to="/community" className="hover:text-maximally-blue transition-colors block">Community</Link></li>
            <li><Link to="/support" className="hover:text-maximally-blue transition-colors block">Support</Link></li>
            <li><Link to="/privacy" className="hover:text-maximally-blue transition-colors block">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-maximally-blue transition-colors block">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;