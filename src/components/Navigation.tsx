import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import companyLogo from '@/assets/company-logo.png';

interface NavigationProps {
  onBookingClick: () => void;
}

const Navigation = ({ onBookingClick }: NavigationProps) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={companyLogo} alt="Alphabyte BPO Logo" className="h-10 w-10 object-contain" />
            <div className="text-xl md:text-2xl font-bold">
              <span className="text-foreground">Alphabyte</span>
              <span className="text-primary"> BPO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            <Link to="/" className="text-sm xl:text-base text-foreground/90 hover:text-primary transition-colors">Home</Link>
            <Link to="/it-process-outsourcing" className="text-sm xl:text-base text-foreground/90 hover:text-primary transition-colors whitespace-nowrap">IT Process Outsourcing</Link>
            <Link to="/saas-support" className="text-sm xl:text-base text-foreground/90 hover:text-primary transition-colors whitespace-nowrap">SaaS Support</Link>
            <div 
              className="relative group" 
              onMouseEnter={() => setIsServicesOpen(true)} 
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm xl:text-base text-foreground/90 hover:text-primary transition-colors whitespace-nowrap">
                Strategic Services <ChevronDown className="w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 glass-card rounded-lg py-2 shadow-lg z-50 before:content-[''] before:absolute before:-top-2 before:left-0 before:right-0 before:h-2">
                  <Link to="/cybersecurity" className="block px-4 py-2 text-foreground/90 hover:text-primary hover:bg-primary/10 rounded">Cybersecurity</Link>
                  <Link to="/project-management" className="block px-4 py-2 text-foreground/90 hover:text-primary hover:bg-primary/10 rounded">Project Management</Link>
                  <Link to="/business-solutions" className="block px-4 py-2 text-foreground/90 hover:text-primary hover:bg-primary/10 rounded">Business Solutions</Link>
                </div>
              )}
            </div>
            <Link to="/why-us" className="text-sm xl:text-base text-foreground/90 hover:text-primary transition-colors whitespace-nowrap">Why Us</Link>
            <Link to="/contact" className="text-sm xl:text-base text-foreground/90 hover:text-primary transition-colors">Contact</Link>
            <Button onClick={onBookingClick} className="shadow-red-glow text-sm xl:text-base whitespace-nowrap">Book a Discovery Call</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground hover:text-primary"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden glass-card rounded-lg mt-2 py-4 px-4 space-y-4 mb-4">
            <Link to="/" className="block text-foreground/90 hover:text-primary py-2">Home</Link>
            <Link to="/it-process-outsourcing" className="block text-foreground/90 hover:text-primary py-2">IT Process Outsourcing</Link>
            <Link to="/saas-support" className="block text-foreground/90 hover:text-primary py-2">SaaS Support</Link>
            <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="flex items-center gap-1 text-foreground/90 hover:text-primary py-2 w-full">
              Strategic Services <ChevronDown className={`w-4 h-4 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {isServicesOpen && (
              <div className="pl-4 space-y-2">
                <Link to="/cybersecurity" className="block text-foreground/80 hover:text-primary py-2">Cybersecurity</Link>
                <Link to="/project-management" className="block text-foreground/80 hover:text-primary py-2">Project Management</Link>
                <Link to="/business-solutions" className="block text-foreground/80 hover:text-primary py-2">Business Solutions</Link>
              </div>
            )}
            <Link to="/why-us" className="block text-foreground/90 hover:text-primary py-2">Why Us</Link>
            <Link to="/contact" className="block text-foreground/90 hover:text-primary py-2">Contact</Link>
            <Button onClick={onBookingClick} className="w-full shadow-red-glow">Book a Discovery Call</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
