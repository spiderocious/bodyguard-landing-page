import { Facebook, Twitter, Instagram, Smartphone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">LuxElite</h3>
            <p className="text-gray-400">
              Professional security services at your fingertips. Book verified bodyguards 
              instantly through our mobile app.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#2A9D8F] transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#2A9D8F] transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#2A9D8F] transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#2A9D8F] transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2A9D8F] transition-colors duration-200">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2A9D8F] transition-colors duration-200">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2A9D8F] transition-colors duration-200">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2A9D8F] transition-colors duration-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* For Bodyguards */}
          <div>
            <h4 className="text-white font-semibold mb-4">For Bodyguards</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#2A9D8F] transition-colors duration-200">
                  Become a Guard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2A9D8F] transition-colors duration-200">
                  Requirements
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2A9D8F] transition-colors duration-200">
                  Earnings
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2A9D8F] transition-colors duration-200">
                  Safety Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2A9D8F] transition-colors duration-200">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#2A9D8F]" />
                <span>support@luxElite.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Smartphone className="w-5 h-5 text-[#2A9D8F]" />
                <span>1-800-luxElite</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#2A9D8F]" />
                <span>Lagos</span>
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="text-white font-semibold mb-3">Download App</h5>
              <div className="flex flex-col space-y-2">
                <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  Download iOS App
                </button>
                
                <a href="https://o0aii0w3h2.ufs.sh/f/RxfmJRSaLInjwCj3VJxlK4o8cPUgANsXjdnT21LvfkF7HbxR" download className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  Download Android App
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              © {currentYear} LuxeLite. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-[#2A9D8F] transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#2A9D8F] transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#2A9D8F] transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;