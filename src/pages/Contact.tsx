import { useState } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navigation from '@/components/Navigation';
import BookingModal from '@/components/BookingModal';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';
import contactHero from '@/assets/contact-hero.jpg';

const Contact = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />
      
      <main className="relative z-10 pt-24 sm:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Hero Section */}
          <div className="glass-card p-6 sm:p-8 md:p-12 mb-8 sm:mb-16 hover-lift text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-foreground break-words">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto break-words">
              Let's discuss how AlphaByte can transform your IT operations and drive your business forward.
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-16">
            <div className="glass-card p-6 sm:p-8 hover-lift text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground break-words">General Inquiries</h3>
              <a 
                href="mailto:hello@bpo.alphabyte.biz?subject=Inquiry for AlphaByte BPO"
                className="text-sm sm:text-base text-primary hover:text-primary/80 transition-colors break-all"
              >
                hello@bpo.alphabyte.biz
              </a>
            </div>

            <div className="glass-card p-6 sm:p-8 hover-lift text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground break-words">Sales</h3>
              <a 
                href="mailto:sales@bpo.alphabyte.biz?subject=Inquiry for AlphaByte BPO"
                className="text-sm sm:text-base text-primary hover:text-primary/80 transition-colors break-all"
              >
                sales@bpo.alphabyte.biz
              </a>
            </div>

            <div className="glass-card p-6 sm:p-8 hover-lift text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground break-words">Support</h3>
              <a 
                href="mailto:support@bpo.alphabyte.biz?subject=Inquiry for AlphaByte BPO"
                className="text-sm sm:text-base text-primary hover:text-primary/80 transition-colors break-all"
              >
                support@bpo.alphabyte.biz
              </a>
            </div>
          </div>

          {/* Main Contact Section with Image and Form */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-16">
            {/* Left Side - Image */}
            <div className="glass-card p-4 sm:p-6 md:p-8 hover-lift overflow-hidden rounded-xl">
              <img 
                src={contactHero}
                alt="Contact AlphaByte BPO"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Right Side - Contact Form */}
            <div className="glass-card p-4 sm:p-6 md:p-8 hover-lift rounded-xl flex flex-col">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-foreground break-words">
                Send Us a <span className="text-primary">Message</span>
              </h2>
              <div className="flex-1 rounded-xl overflow-hidden" style={{ minHeight: '400px' }}>
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://forms.office.com/r/RDC3z2Z3ts?embed=true" 
                  frameBorder="0" 
                  marginWidth={0} 
                  marginHeight={0} 
                  style={{ border: 'none', minHeight: '400px' }} 
                  allowFullScreen 
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="glass-card p-6 sm:p-8 md:p-12 text-center hover-lift">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground break-words">
              Prefer to <span className="text-primary">Schedule</span> a Call?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-6 sm:mb-8 max-w-3xl mx-auto break-words">
              Book a free 30-minute discovery call to discuss your specific needs and explore how we can help.
            </p>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-red-glow w-full sm:w-auto"
            >
              Book Your Discovery Call
            </button>
          </div>
          <Footer />
        </div>
      </main>

      <BookingModal 
        open={isBookingModalOpen}
        onOpenChange={setIsBookingModalOpen}
      />
    </div>
  );
};

export default Contact;
