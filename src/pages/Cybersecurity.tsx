import { useState } from 'react';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import BookingModal from '@/components/BookingModal';
import Footer from '@/components/Footer';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Cybersecurity = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const features = [
    '24/7 Security Monitoring & Alerting: Continuous oversight of your network and endpoints.',
    'SIEM & Log Management: Centralized collection and analysis of security events.',
    'Vulnerability Management: Regular scanning and reporting on potential security weaknesses.',
    'Incident Response Coordination: Expert guidance to contain and remediate threats when they occur.',
    'Managed Endpoint Detection & Response (EDR): We manage and respond to alerts from your EDR solution.',
    'Compliance & Security Reporting: Regular reports to demonstrate due diligence and your security posture.',
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatedBackground />
      <Navigation onBookingClick={() => setIsBookingOpen(true)} />
      
      <main className="relative z-10 pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Hero Section */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12 drift-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gradient-red break-words">
              Cybersecurity & SOC Services
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-foreground/90 font-light break-words">
              Enterprise-Grade Security, Sized and Priced for Your Business.
            </p>
          </div>

          {/* Challenge Section */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 drift-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-primary break-words">The Challenge</h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground break-words">
              In today's threat landscape, no business is too small to be a target.
            </h3>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed break-words">
              Ransomware, data breaches, and phishing attacks are a constant threat. For most SMEs, hiring a 
              dedicated internal security team or building a 24/7 Security Operations Center (SOC) is financially 
              impossible. This leaves a critical gap in your defenses, exposing your sensitive data, client trust, 
              and business continuity to significant risk.
            </p>
          </div>

          {/* Solution Section */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 drift-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-primary break-words">Our Solution</h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground break-words">
              Your Remote Security Partner.
            </h3>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-6 sm:mb-8 break-words">
              Through our partnership with leading cybersecurity providers, we extend your IT capabilities into a 
              proactive security function. We integrate with your existing endpoint protection, firewalls, and cloud 
              services, feeding critical data into a centralized Security Information and Event Management (SIEM) 
              platform. Our partner's 24/7 SOC team monitors, detects, and responds to threats in real-time.
            </p>

            <div className="space-y-3 sm:space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground/90 text-sm sm:text-base md:text-lg break-words">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 text-center drift-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-foreground break-words">
              Protect Your Business Today
            </h2>
            <p className="text-base sm:text-lg text-foreground/80 mb-6 sm:mb-8 max-w-2xl mx-auto break-words">
              Let's discuss how AlphaByte can fortify your cybersecurity posture. 
              Book your free 30-minute discovery call today.
            </p>
            <Button 
              onClick={() => setIsBookingOpen(true)}
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 shadow-red-glow w-full sm:w-auto"
            >
              Book a Discovery Call
            </Button>
          </div>

          <Footer />
        </div>
      </main>

      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
};

export default Cybersecurity;
