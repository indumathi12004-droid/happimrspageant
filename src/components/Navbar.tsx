import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'About', 'Journey',  'Gallery', 'Partners', 'Contact'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/image.png"
              alt="HAPPI MRS GLOBAL"
              className="h-16 w-auto glow-aqua-violet"
            />
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00B8E6] hover:to-[#8B4DFF] transition-all duration-300 font-medium hover-glow"
              >
                {item}
              </a>
            ))}
            <button className="px-6 py-2.5 rounded-full gradient-brand text-white font-semibold hover:shadow-lg hover:shadow-[#00B8E6]/50 transition-all duration-300 animate-shimmer">
              Apply Now
            </button>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-4 glass-panel rounded-lg p-6">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-white hover:text-[#00B8E6] transition-colors duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full px-6 py-2.5 rounded-full gradient-brand text-white font-semibold">
              Apply Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
