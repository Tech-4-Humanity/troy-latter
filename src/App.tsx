
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";

import Index from "./pages/Index";
import ExecutiveProfile from "./pages/ExecutiveProfile";
import CoreCompetencies from "./pages/CoreCompetencies";
import CustomerSuccessStories from "./pages/CustomerSuccessStories";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import NotFound from "./pages/NotFound";
import NinetyDayPlan from "./pages/NinetyDayPlan";
import Whitepapers from "./pages/Whitepapers";
import LeanCanvas from "./pages/LeanCanvas";

// Legacy redirects for old URLs
import AboutTroy from "./pages/AboutTroy";
import InnovationDefinition from "./pages/InnovationDefinition";
import InnovationJourney from "./pages/InnovationJourney";
import InnovationFrameworks from "./pages/InnovationFrameworks";
import LeadershipStyle from "./pages/LeadershipStyle";
import PeopleInvolved from "./pages/PeopleInvolved";
import UpcomingProjects from "./pages/UpcomingProjects";
import StrategicProjects from "./pages/StrategicProjects";
import CustomerAsksStars from "./pages/CustomerAsksStars";
import OpportunityStars from "./pages/OpportunityStars";
import Responsibilities from "./pages/Responsibilities";
import You from "./pages/You";
import YourProfileStars from "./pages/YourProfileStars";
import TheOpportunity from "./pages/TheOpportunity";
import YourPitch from "./pages/YourPitch";
import WhatIsInnovation from "./pages/WhatIsInnovation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* Main navigation routes */}
            <Route path="/" element={<Index />} />
            <Route path="/executive-profile" element={<ExecutiveProfile />} />
            <Route path="/core-competencies" element={<CoreCompetencies />} />
            <Route path="/industry-expertise" element={<Navigate to="/core-competencies" />} />
            <Route path="/customer-success-stories" element={<CustomerSuccessStories />} />
            <Route path="/thought-leadership" element={<Navigate to="/customer-success-stories" />} />
            <Route path="/current-roles" element={<Navigate to="/executive-profile" />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQs />} />
            
            {/* Resources */}
            <Route path="/resources/90-day-plan" element={<NinetyDayPlan />} />
            <Route path="/resources/whitepapers" element={<Whitepapers />} />
            <Route path="/resources/lean-canvas" element={<LeanCanvas />} />
            
            {/* Legacy redirects - maintain old URLs for bookmarks */}
            <Route path="/about-troy" element={<Navigate to="/executive-profile" />} />
            <Route path="/innovation-definition" element={<InnovationDefinition />} />
            <Route path="/innovation-journey" element={<InnovationJourney />} />
            <Route path="/innovation-frameworks" element={<InnovationFrameworks />} />
            <Route path="/leadership-style" element={<LeadershipStyle />} />
            <Route path="/people-involved" element={<PeopleInvolved />} />
            <Route path="/upcoming-projects" element={<UpcomingProjects />} />
            <Route path="/strategic-projects" element={<StrategicProjects />} />
            <Route path="/inspiration" element={<CustomerAsksStars />} />
            <Route path="/customer-asks-stars" element={<CustomerAsksStars />} />
            <Route path="/opportunity-stars" element={<OpportunityStars />} />
            <Route path="/responsibilities" element={<Responsibilities />} />
            <Route path="/you" element={<You />} />
            <Route path="/your-profile-stars" element={<YourProfileStars />} />
            <Route path="/the-opportunity" element={<TheOpportunity />} />
            <Route path="/your-pitch" element={<YourPitch />} />
            <Route path="/what-is-innovation" element={<WhatIsInnovation />} />
            <Route path="/customer-asks" element={<Navigate to="/inspiration" />} />
            <Route path="/vision" element={<Navigate to="/inspiration" />} />
            <Route path="/head-of-innovation" element={<Navigate to="/" />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
