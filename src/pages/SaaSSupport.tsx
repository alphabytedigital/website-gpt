import { useState } from 'react';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import BookingModal from '@/components/BookingModal';
import Footer from '@/components/Footer';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SaaSSupport = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const features = [
    'Dedicated FTE or Shared-Hour Models: Flexible solutions that scale with your growth.',
    '24/7 Omni-Channel Support: Expert assistance for your customers via email, live chat, and phone.',
    'Product Expertise: Our agents undergo rigorous training to become specialists on your platform.',
    'Ticket Triage & Escalation: Intelligent routing of simple queries and clear, concise escalation of complex bugs to your development team.',
    'Customer Feedback Loop: We gather, categorize, and report on user feedback, providing invaluable insights for your product roadmap.',
    'Dedicated Knowledge Base Creation: We build and manage a comprehensive help center for your product.',
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
              SaaS Customer & Technical Support
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-foreground/90 font-light break-words">
              Let Your Engineers Build. We'll Delight Your Customers.
            </p>
          </div>

          {/* Challenge Section */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 drift-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-primary break-words">The Challenge</h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground break-words">
              Is Customer Support Slowing Down Your Product Roadmap?
            </h3>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed break-words">
              For high-growth SaaS companies, a critical challenge emerges: your most expensive and valuable 
              assets—your software developers—are being pulled away from coding to handle basic customer support 
              queries. Every "how-to" question they answer is time not spent on building the next great feature. 
              Furthermore, as your user base expands globally, providing 24/7 support becomes a necessity to remain 
              competitive, but building an in-house, round-the-clock team is prohibitively expensive.
            </p>
          </div>

          {/* Solution Section */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 drift-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-primary break-words">Our Solution</h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground break-words">
              A World-Class Support Team for a Fraction of the Cost.
            </h3>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-6 sm:mb-8 break-words">
              AlphaByte provides a dedicated, product-expert support team that acts as your company's front line. 
              We learn your platform inside and out, becoming a seamless extension of your brand. We handle all L1 
              and L2 technical and customer support inquiries, allowing your engineering team to stay 100% focused 
              on innovation.
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
              Ready to Scale Your Support?
            </h2>
            <p className="text-base sm:text-lg text-foreground/80 mb-6 sm:mb-8 max-w-2xl mx-auto break-words">
              Let's discuss how AlphaByte can become your dedicated SaaS support team. 
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

export default SaaSSupport;
