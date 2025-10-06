import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const getEmailLink = () => {
    const subject = encodeURIComponent("Inquiry for AlphaByte BPO");
    return `mailto:hello@bpo.alphabyte.biz?subject=${subject}`;
  };

  return (
    <footer className="relative z-10 glass-card mt-20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-foreground">Alphabyte</span>
              <span className="text-primary"> BPO</span>
            </div>
            <p className="text-foreground/70 text-sm">
              Your Strategic IT Extension. We grow when you grow.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/it-process-outsourcing" className="text-foreground/70 hover:text-primary transition-colors">
                  IT Process Outsourcing
                </Link>
              </li>
              <li>
                <Link to="/saas-support" className="text-foreground/70 hover:text-primary transition-colors">
                  SaaS Support
                </Link>
              </li>
              <li>
                <Link to="/cybersecurity" className="text-foreground/70 hover:text-primary transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/project-management" className="text-foreground/70 hover:text-primary transition-colors">
                  Project Management
                </Link>
              </li>
              <li>
                <Link to="/business-solutions" className="text-foreground/70 hover:text-primary transition-colors">
                  Business Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/why-us" className="text-foreground/70 hover:text-primary transition-colors">
                  Why Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href={getEmailLink()}
                  className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hello@bpo.alphabyte.biz
                </a>
              </li>
              <li>
                <a 
                  href="mailto:sales@bpo.alphabyte.biz"
                  className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  sales@bpo.alphabyte.biz
                </a>
              </li>
              <li className="flex items-center gap-2 text-foreground/70">
                <MapPin className="w-4 h-4" />
                Sri Lanka
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-foreground/10 pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} AlphaByte BPO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
