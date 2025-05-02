
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

import Index from "./pages/Index";
import CustomerAsks from "./pages/CustomerAsksStars"; // Changed from About to CustomerAsksStars
import TheOpportunity from "./pages/TheOpportunity";
import OpportunityStars from "./pages/OpportunityStars";
import Responsibilities from "./pages/Responsibilities";
import You from "./pages/You";
import FAQs from "./pages/FAQs";
import YourPitch from "./pages/YourPitch";
import YourProfileStars from "./pages/YourProfileStars";
import CustomerAsksStars from "./pages/CustomerAsksStars";
import HeadOfInnovation from "./pages/HeadOfInnovation";
import NotFound from "./pages/NotFound";
import NinetyDayPlan from "./pages/NinetyDayPlan";
import Whitepapers from "./pages/Whitepapers";
import LeanCanvas from "./pages/LeanCanvas";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/head-of-innovation" element={<HeadOfInnovation />} />
            <Route path="/your-pitch" element={<YourPitch />} />
            <Route path="/customer-asks" element={<CustomerAsks />} />
            <Route path="/customer-asks-stars" element={<CustomerAsksStars />} />
            <Route path="/the-opportunity" element={<TheOpportunity />} />
            <Route path="/opportunity-stars" element={<OpportunityStars />} />
            <Route path="/responsibilities" element={<Responsibilities />} />
            <Route path="/you" element={<You />} />
            <Route path="/your-profile-stars" element={<YourProfileStars />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/resources/90-day-plan" element={<NinetyDayPlan />} />
            <Route path="/resources/whitepapers" element={<Whitepapers />} />
            <Route path="/resources/lean-canvas" element={<LeanCanvas />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
