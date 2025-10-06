import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import ITProcessOutsourcing from "./pages/ITProcessOutsourcing";
import SaaSSupport from "./pages/SaaSSupport";
import Cybersecurity from "./pages/Cybersecurity";
import ProjectManagement from "./pages/ProjectManagement";
import BusinessSolutions from "./pages/BusinessSolutions";
import WhyUs from "./pages/WhyUs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // A slight delay ensures that the page has rendered before scrolling.
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);
  }, [pathname]);

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/it-process-outsourcing" element={<ITProcessOutsourcing />} />
            <Route path="/saas-support" element={<SaaSSupport />} />
            <Route path="/cybersecurity" element={<Cybersecurity />} />
            <Route path="/project-management" element={<ProjectManagement />} />
            <Route path="/business-solutions" element={<BusinessSolutions />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;