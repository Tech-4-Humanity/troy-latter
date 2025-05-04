
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";

import Index from "./pages/Index";
import CustomerAsks from "./pages/CustomerAsksStars";
import TheOpportunity from "./pages/TheOpportunity";
import OpportunityStars from "./pages/OpportunityStars";
import Responsibilities from "./pages/Responsibilities";
import You from "./pages/You";
import FAQs from "./pages/FAQs";
import YourPitch from "./pages/YourPitch";
import YourProfileStars from "./pages/YourProfileStars";
import CustomerAsksStars from "./pages/CustomerAsksStars";
import NotFound from "./pages/NotFound";
import NinetyDayPlan from "./pages/NinetyDayPlan";
import Whitepapers from "./pages/Whitepapers";
import LeanCanvas from "./pages/LeanCanvas";
import AboutTroy from "./pages/AboutTroy";
import WhatIsInnovation from "./pages/WhatIsInnovation";
import InnovationDefinition from "./pages/InnovationDefinition";
import InnovationJourney from "./pages/InnovationJourney";
import CustomerSuccessStories from "./pages/CustomerSuccessStories";
import InnovationFrameworks from "./pages/InnovationFrameworks";
import LeadershipStyle from "./pages/LeadershipStyle";
import PeopleInvolved from "./pages/PeopleInvolved";
import UpcomingProjects from "./pages/UpcomingProjects";
import StrategicProjects from "./pages/StrategicProjects";

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
            <Route path="/about-troy" element={<AboutTroy />} />
            <Route path="/what-is-innovation" element={<WhatIsInnovation />} />
            <Route path="/innovation-definition" element={<InnovationDefinition />} />
            <Route path="/innovation-journey" element={<InnovationJourney />} />
            <Route path="/customer-success-stories" element={<CustomerSuccessStories />} />
            <Route path="/innovation-frameworks" element={<InnovationFrameworks />} />
            <Route path="/leadership-style" element={<LeadershipStyle />} />
            <Route path="/people-involved" element={<PeopleInvolved />} />
            <Route path="/upcoming-projects" element={<UpcomingProjects />} />
            <Route path="/strategic-projects" element={<StrategicProjects />} /> 
            <Route path="/your-pitch" element={<Navigate to="/about-troy" />} />
            <Route path="/customer-asks" element={<Navigate to="/vision" />} />
            <Route path="/vision" element={<CustomerAsksStars />} />
            <Route path="/customer-asks-stars" element={<Navigate to="/vision" />} />
            <Route path="/the-opportunity" element={<TheOpportunity />} />
            <Route path="/opportunity-stars" element={<OpportunityStars />} />
            <Route path="/responsibilities" element={<Responsibilities />} />
            <Route path="/you" element={<You />} />
            <Route path="/your-profile-stars" element={<YourProfileStars />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/resources/90-day-plan" element={<NinetyDayPlan />} />
            <Route path="/resources/whitepapers" element={<Whitepapers />} />
            <Route path="/resources/lean-canvas" element={<LeanCanvas />} />
            <Route path="/head-of-innovation" element={<Navigate to="/" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
