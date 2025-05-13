import { useState } from 'react';
import { Menu, X, Shield, LogIn } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'For Clients', href: '#clients' },
    { name: 'For Bodyguards', href: '#bodyguards' },
    { name: 'FAQ', href: '#faq' },
  ];

  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <Shield className="w-8 h-8 text-[#2A9D8F]" />
                <span className="text-2xl font-bold bg-gradient-to-r from-[#2A9D8F] to-[#264653] bg-clip-text text-transparent">
                  LuxElite
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-200
                    ${isScrolled ? 'text-gray-600 hover:text-[#2A9D8F]' : 'text-white hover:text-[#2A9D8F]'}
                    after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#2A9D8F]
                    after:transition-all after:duration-200 hover:after:w-full`}
                >
                  {item.name}
                </a>
              ))}
              <a className="bg-[#2A9D8F] text-white px-6 py-2 rounded-lg text-sm font-medium
                transition-all duration-200 hover:bg-[#248579] hover:shadow-lg hover:shadow-[#2A9D8F]/20
                active:transform active:scale-95" href="https://app.luxeliteafrica.com/auth/login" target="_blank">
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200
                ${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-[#2A9D8F] focus:outline-none`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-[#2A9D8F] block px-3 py-2 text-base font-medium
                    transition-all duration-200 hover:bg-gray-50 rounded-lg"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4">
              <a href="https://app.luxeliteafrica.com/auth/login" className="flex items-center justify-center gap-2 text-base font-medium px-4 py-2
                rounded-lg transition-all duration-200 border-2 border-[#2A9D8F] text-[#2A9D8F]">
                <LogIn className="w-5 h-5" />
                <span>Log In</span>
              </a>
              <a href="https://app.luxeliteafrica.com/auth/login">
              <button className="w-full bg-[#2A9D8F] text-white px-4 py-2 rounded-lg text-base font-medium
                hover:bg-[#248579] transition-all duration-200 hover:shadow-lg hover:shadow-[#2A9D8F]/20
                active:transform active:scale-95">
                Get Started
                </button>
                </a>
              </div>
            </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;