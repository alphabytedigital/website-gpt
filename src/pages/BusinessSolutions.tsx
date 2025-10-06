import { useState } from 'react';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import BookingModal from '@/components/BookingModal';
import Footer from '@/components/Footer';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BusinessSolutions = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const features = [
    'Workflow Analysis & Optimization: We identify bottlenecks and design more efficient processes.',
    'Custom Solution Implementation: We can implement and configure software solutions to meet your specific business needs.',
    'User Training & Onboarding: Customized training sessions for new software and processes.',
    'Knowledge Base & Documentation Creation: Building a library of resources to support self-service.',
    'Dedicated Adoption Support: Acting as floor walkers and expert resources during new system rollouts.',
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
              Change Management & Business Solutions
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-foreground/90 font-light break-words">
              Maximizing Your Technology ROI by Empowering Your People.
            </p>
          </div>

          {/* Challenge Section */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 drift-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-primary break-words">The Challenge</h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground break-words">
              The best technology is useless if no one uses it correctly.
            </h3>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed break-words">
              You've invested significantly in a new CRM, a powerful analytics platform, or a custom software solution. 
              But are you seeing the promised returns? Often, the biggest hurdle isn't the technology itself, but user 
              adoption. Without a structured change management process, employees may resist the new tool, stick to old 
              workflows, and fail to unlock its full potential. Your investment stagnates, and the business problems you 
              sought to solve persist.
            </p>
          </div>

          {/* Solution Section */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 drift-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-primary break-words">Our Solution</h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground break-words">
              We Bridge the Gap Between Technology and People.
            </h3>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-6 sm:mb-8 break-words">
              AlphaByte's Business Solutions service focuses on the human side of technology. We partner with you to 
              solve real business challenges by designing and implementing effective workflows, training your teams, 
              and ensuring smooth adoption of new systems. We ensure your technology investments deliver measurable 
              business value.
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
              Ready to Maximize Your Tech ROI?
            </h2>
            <p className="text-base sm:text-lg text-foreground/80 mb-6 sm:mb-8 max-w-2xl mx-auto break-words">
              Let's discuss how AlphaByte can drive user adoption and business transformation. 
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

export default BusinessSolutions;
