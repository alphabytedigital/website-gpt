import { useState } from 'react';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import BookingModal from '@/components/BookingModal';
import Footer from '@/components/Footer';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ITProcessOutsourcing = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const features = [
    '24/7/365 End-User Support: Via email, live chat (Teams/Slack), and phone.',
    'Desktop & OS Management: Expert support for Windows 10/11 and macOS environments.',
    'Productivity Suite Administration: Full management of Microsoft 365 and Google Workspace, from user accounts to security policies.',
    'Application Support: Troubleshooting for all standard and custom business applications.',
    'User Lifecycle Management: Seamless, secure, and documented IT onboarding and offboarding processes.',
    'Proactive Knowledge Management: We build and maintain a user-facing knowledge base to deflect common tickets.',
    'ITIL-Aligned Reporting: Monthly performance reports and quarterly business reviews (QBRs) with strategic recommendations.',
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
              IT Process Outsourcing
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-foreground/90 font-light break-words">
              Your Complete, 24/7 Internal IT Department, Remotely Managed.
            </p>
          </div>

          {/* Challenge Section */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 drift-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-primary break-words">The Challenge</h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground break-words">
              Is Your Team Drowning in Day-to-Day IT Tasks?
            </h3>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed break-words">
              For growing businesses, the constant stream of password resets, software glitches, and user 
              onboarding requests can overwhelm a small internal IT team. This "ticket tsunami" prevents them 
              from focusing on strategic, high-value projects like infrastructure upgrades, security enhancements, 
              and digital transformation. Your most valuable technical resources become stuck in a reactive loop, 
              and your business's technological evolution stalls.
            </p>
          </div>

          {/* Solution Section */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 drift-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-primary break-words">Our Solution</h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground break-words">
              We Absorb the Complexity, You Drive the Strategy.
            </h3>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-6 sm:mb-8 break-words">
              AlphaByte's Managed IT service acts as a full-fledged, 24/7/365 extension of your team. We handle 
              the entire spectrum of L1 and L2 support for your employees, globally. We become the first point of 
              contact for all their technical needs, providing fast, friendly, and effective solutions. This liberates 
              your in-house experts to become the strategic architects of your IT future.
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
              Ready to Free Your Team?
            </h2>
            <p className="text-base sm:text-lg text-foreground/80 mb-6 sm:mb-8 max-w-2xl mx-auto break-words">
              Let's discuss how AlphaByte's Managed IT service can become your strategic advantage. 
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

export default ITProcessOutsourcing;
