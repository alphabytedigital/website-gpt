import { useState } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navigation from '@/components/Navigation';
import BookingModal from '@/components/BookingModal';
import Footer from '@/components/Footer';
import { Shield, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyUs = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />
      
      <main className="relative z-10 pt-24 sm:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Hero Section */}
          <div className="glass-card p-6 sm:p-8 md:p-12 mb-8 sm:mb-16 hover-lift">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-foreground break-words">
              The AlphaByte <span className="text-primary">Advantage</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-4xl break-words">
              We are more than a vendor; we are your partner. Our success is built on optimizing your costs, 
              integrating seamlessly with your team, and empowering your growth. We handle the complexities 
              so you can focus on what you do best.
            </p>
          </div>

          {/* Core Differentiators */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-16">
            <div className="glass-card p-6 sm:p-8 hover-lift">
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground break-words">
                Cost Optimization, Not Just Cost Cutting
              </h3>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed break-words">
                We don't just offshore; we re-engineer your operations for maximum efficiency. Our model delivers 
                50-70% cost reductions while simultaneously elevating service quality and response times.
              </p>
            </div>

            <div className="glass-card p-6 sm:p-8 hover-lift">
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground break-words">
                Seamless Integration, Not Just Outsourcing
              </h3>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed break-words">
                Our team becomes your team. We use your systems, your workflows, your brand voice. Your customers 
                and employees won't know the difference—they'll just experience exceptional support.
              </p>
            </div>

            <div className="glass-card p-6 sm:p-8 hover-lift">
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground break-words">
                Partnership-Based Growth Model
              </h3>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed break-words">
                We align our incentives with your success. Our flexible engagement model scales precisely with 
                your business, ensuring you only pay for the capacity you need, when you need it.
              </p>
            </div>
          </div>

          {/* Our Philosophy */}
          <div className="glass-card p-6 sm:p-8 md:p-12 mb-8 sm:mb-16 hover-lift">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-foreground break-words">
              Our <span className="text-primary">Philosophy</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-foreground break-words">
                  Strategic Extension, Not Vendor
                </h3>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-4 sm:mb-6 break-words">
                  We believe in true partnership. Our team doesn't just execute tasks—we actively contribute to 
                  your strategy, offer insights, and drive continuous improvement. We succeed when you succeed.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-foreground break-words">
                  Technology-First Approach
                </h3>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-4 sm:mb-6 break-words">
                  We leverage cutting-edge tools, automation, and AI-driven workflows to deliver superior results. 
                  Our investment in technology ensures we stay ahead of industry standards.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-foreground break-words">
                  Quality Over Quantity
                </h3>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-4 sm:mb-6 break-words">
                  We hire and train the best talent, creating career paths and professional development opportunities. 
                  Our low attrition rate means your operations benefit from experienced, dedicated professionals.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-foreground break-words">
                  Transparent & Agile
                </h3>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-4 sm:mb-6 break-words">
                  Real-time dashboards, weekly reviews, and open communication channels ensure you always have 
                  visibility. We adapt quickly to your changing needs, pivoting our operations as your business evolves.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="glass-card p-6 sm:p-8 md:p-12 text-center hover-lift">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground break-words">
              Ready to <span className="text-primary">Transform</span> Your Operations?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-6 sm:mb-8 max-w-3xl mx-auto break-words">
              Let's discuss how a strategic partnership with AlphaByte can empower your business to achieve 
              its next stage of growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-red-glow w-full sm:w-auto"
              >
                Book Your Discovery Call
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 glass-card text-foreground rounded-lg font-semibold hover:border-primary transition-all w-full sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
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

export default WhyUs;
