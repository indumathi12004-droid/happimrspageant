import { Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = ['Home', 'About', 'Journey',  'Gallery','Partner',  'Contact'];
  const legalLinks = ['Terms of Service', 'Privacy Policy'];

  return (
    <footer className="gradient-bg-footer pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-[#00B8E6]/30 mb-12" />

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src="/image.png"
              alt="HAPPI MRS GLOBAL"
              className="h-16 w-auto mb-6"
            />
            <p className="text-[#D1D5E0] leading-relaxed mb-6">
              Happi Mrs Global redefines pageantry as a celebration of strength, intellect, and heart. Empowering modern women to balance elegance with purpose.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#00B8E6] hover:to-[#8B4DFF] flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="text-white" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#00B8E6] hover:to-[#8B4DFF] flex items-center justify-center transition-all duration-300"
              >
                <Youtube className="text-white" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#00B8E6] hover:to-[#8B4DFF] flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="text-white" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[#D1D5E0] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00B8E6] hover:to-[#8B4DFF] transition-all duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              {legalLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-sm text-[#D1D5E0] hover:text-[#00B8E6] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-[#00B8E6] flex-shrink-0 mt-1" size={20} />
                <p className="text-[#D1D5E0]">The Beginning ,
Bengaluru, Karnataka</p>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="text-[#00B8E6] flex-shrink-0 mt-1" size={20} />
                <a
                  href="mailto:ea@happimisspagenat.com"
                  className="text-[#D1D5E0] hover:text-[#00B8E6] transition-colors"
                >
                  gautam@happimrsglobal.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="text-[#00B8E6] flex-shrink-0 mt-1" size={20} />
                <a
                  href="tel:+919880012482"
                  className="text-[#D1D5E0] hover:text-[#00B8E6] transition-colors"
                >
                  +91 98800 12482
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-[#D1D5E0] text-sm">
            © 2025 Happi Mrs Global. All rights reserved. Empowering grace and strength worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
