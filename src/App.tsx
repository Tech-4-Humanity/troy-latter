
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

import Index from "./pages/Index";
import CustomerAsks from "./pages/About";
import TheOpportunity from "./pages/TheOpportunity";
import Responsibilities from "./pages/Responsibilities";
import You from "./pages/You";
import FAQs from "./pages/FAQs";
import YourPitch from "./pages/YourPitch";
import NotFound from "./pages/NotFound";

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
            <Route path="/your-pitch" element={<YourPitch />} />
            <Route path="/customer-asks" element={<CustomerAsks />} />
            <Route path="/the-opportunity" element={<TheOpportunity />} />
            <Route path="/responsibilities" element={<Responsibilities />} />
            <Route path="/you" element={<You />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
