import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Server,
  Headphones,
  Shield,
  ClipboardCheck,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";

const Index = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedElements((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.7), rgba(17, 17, 17, 0.8)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Your Strategic IT Extension.{" "}
              <span className="text-gradient-red">We Grow When You Grow.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              We empower your business by transforming your IT operations into a cost-efficient,
              high-performance engine for growth. Focus on your core mission; we'll handle the
              technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                onClick={() => setIsBookingModalOpen(true)}
                size="hero"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(255,0,0,0.4)] hover:shadow-[0_0_40px_rgba(255,0,0,0.6)] transition-all duration-300"
              >
                Book a Discovery Call <ArrowRight className="ml-2" />
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                size="hero"
                variant="outline"
                className="w-full sm:w-auto border-foreground/20 hover:border-primary hover:bg-primary/10"
              >
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse-glow" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <div
            id="services-header"
            data-animate
            className={`text-center mb-16 ${
              animatedElements.has("services-header") ? "slide-up" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Core <span className="text-gradient-red">Partnership Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Strategic outsourcing that empowers your business to scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div
              id="service-1"
              data-animate
              className={`glass-card p-8 hover-lift ${
                animatedElements.has("service-1") ? "slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <Server className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">IT Process Outsourcing (Managed IT)</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A complete, 24/7/365 internal IT department for your organization. From daily
                end-user support to proactive infrastructure management, we ensure your team's
                productivity and business continuity, allowing you to scale fearlessly.
              </p>
              <Link 
                to="/it-process-outsourcing"
                className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary/80 transition-colors"
              >
                Explore Managed IT <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div
              id="service-2"
              data-animate
              className={`glass-card p-8 hover-lift ${
                animatedElements.has("service-2") ? "slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <Headphones className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    SaaS Customer & Technical Support
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Let your developers build, not troubleshoot. We provide a world-class, dedicated
                support department for your SaaS product, reducing your in-house costs by up to 70%
                while delivering exceptional L1/L2 technical support to your customers.
              </p>
              <Link 
                to="/saas-support"
                className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary/80 transition-colors"
              >
                Explore SaaS Support <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div
            id="addon-services"
            data-animate
            className={`${animatedElements.has("addon-services") ? "slide-up" : "opacity-0"}`}
          >
            <h3 className="text-3xl font-bold text-center mb-12">
              Add-On <span className="text-gradient-red">Strategic Services</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-6 hover-lift">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3">Cybersecurity & SOC Services</h4>
                <p className="text-muted-foreground">
                  Through our expert partners, we integrate with your security solutions to provide
                  24/7 threat monitoring, SIEM management, and incident response.
                </p>
              </div>

              <div className="glass-card p-6 hover-lift">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <ClipboardCheck className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3">Remote Project Management</h4>
                <p className="text-muted-foreground">
                  Our certified project managers oversee your global technology initiatives,
                  ensuring projects are delivered on time and on budget.
                </p>
              </div>

              <div className="glass-card p-6 hover-lift">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <RefreshCw className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3">
                  Change Management & Business Solutions
                </h4>
                <p className="text-muted-foreground">
                  We solve your business challenges with technology. From managing user adoption to
                  designing custom workflows, we ensure maximum ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section
        id="why-us"
        className="relative z-10 py-24"
        style={{
          backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.9), rgba(17, 17, 17, 0.9)), url(${teamCollaboration})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-4">
          <div
            id="why-us-header"
            data-animate
            className={`text-center mb-16 ${
              animatedElements.has("why-us-header") ? "slide-up" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="text-gradient-red">AlphaByte Advantage</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Why leading businesses choose us as their strategic IT partner
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div
              id="advantage-1"
              data-animate
              className={`glass-card p-8 hover-lift ${
                animatedElements.has("advantage-1") ? "slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              <div className="text-6xl font-bold text-primary mb-4">70%</div>
              <h3 className="text-2xl font-bold mb-4">Strategic Cost Optimization</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our model isn't just about saving money; it's about reallocating your resources for
                growth. By leveraging elite Sri Lankan talent, we reduce your operational costs by
                 up to 70%, turning your IT budget into an investment in innovation.
              </p>
            </div>

            <div
              id="advantage-2"
              data-animate
              className={`glass-card p-8 hover-lift ${
                animatedElements.has("advantage-2") ? "slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <CheckCircle2 className="w-12 h-12 text-primary" />
                <CheckCircle2 className="w-12 h-12 text-primary" />
                <CheckCircle2 className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Seamless Integration</h3>
              <p className="text-muted-foreground leading-relaxed">
                We don't operate in a silo. We become a deeply integrated part of your team,
                adopting your culture and aligning with your goals. Through radical transparency
                 and constant communication, we function as your strategic internal department, not
                 an external vendor.
              </p>
            </div>

            <div
              id="advantage-3"
              data-animate
              className={`glass-card p-8 hover-lift ${
                animatedElements.has("advantage-3") ? "slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Focus on Your Growth</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our success is a direct result of yours. By removing technological roadblocks and
                ensuring business continuity, we empower you to focus on scaling your business,
                 entering new markets, and serving your customers. We handle the complexities of IT
                 so you can focus on the future.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/why-us"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-lg font-semibold"
            >
              Discover Our Philosophy <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Model Section */}
      <section id="partnership" className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <div
            id="partnership-header"
            data-animate
            className={`text-center mb-16 ${
              animatedElements.has("partnership-header") ? "slide-up" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient-red">Partnership Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven process for seamless integration and continuous value
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div
              id="step-1"
              data-animate
              className={`flex flex-col md:flex-row gap-8 items-start ${
                animatedElements.has("step-1") ? "slide-up" : "opacity-0"
              }`}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-2xl font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Deep Discovery & Alignment</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We start by understanding your business, your challenges, and your goals. We
                  conduct a thorough discovery process to ensure our solution is perfectly tailored
                  to your needs.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-px h-12 bg-primary/30" />
            </div>

            <div
              id="step-2"
              data-animate
              className={`flex flex-col md:flex-row gap-8 items-start ${
                animatedElements.has("step-2") ? "slide-up" : "opacity-0"
              }`}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-2xl font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Seamless Onboarding & Integration</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our dedicated team manages a smooth, structured onboarding process. We integrate
                  with your systems, document your processes, and train our agents to become
                  experts on your environment.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-px h-12 bg-primary/30" />
            </div>

            <div
              id="step-3"
              data-animate
              className={`flex flex-col md:flex-row gap-8 items-start ${
                animatedElements.has("step-3") ? "slide-up" : "opacity-0"
              }`}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-2xl font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Continuous Improvement & Growth</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our partnership doesn't end at launch. Through regular reporting, Quarterly
                  Business Reviews (QBRs), and proactive recommendations, we constantly seek
                  opportunities to optimize your processes and drive more value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 text-center hover-lift">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your <span className="text-gradient-red">IT Operations?</span>
            </h2>
            <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
              Let's discuss how a strategic partnership with AlphaByte can empower your business to
              achieve its next stage of growth. Your initial 30-minute discovery call is completely
              free.
            </p>
            <Button
              onClick={() => setIsBookingModalOpen(true)}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg shadow-[0_0_30px_rgba(255,0,0,0.4)] hover:shadow-[0_0_40px_rgba(255,0,0,0.6)] transition-all duration-300"
            >
              Book Your Free Discovery Call <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      <BookingModal
        open={isBookingModalOpen}
        onOpenChange={setIsBookingModalOpen}
      />
    </div>
  );
};

export default Index;