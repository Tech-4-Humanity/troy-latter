import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { MicrositeLayout } from "./components/microsites/MicrositeLayout";
import { MicrositeGuard } from "./components/MicrositeGuard";

import Index from "./pages/Index";
import ExecutiveProfile from "./pages/ExecutiveProfile";
import CoreCompetencies from "./pages/CoreCompetencies";
import IndustryExpertise from "./pages/IndustryExpertise";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import NotFound from "./pages/NotFound";
import NinetyDayPlan from "./pages/NinetyDayPlan";
import Whitepapers from "./pages/Whitepapers";
import Projects from "./pages/Projects";
import LeanCanvas from "./pages/LeanCanvas";
import ExperienceAndImpact from "./pages/ExperienceAndImpact";
import AIEthics from "./pages/AIEthics";

// Microsite pages
import MicrositeIndex from "./pages/microsites/MicrositeIndex";
import InterviewPrepIndex from "./pages/microsites/interview-prep/Index";
import AgentforceIndex from "./pages/microsites/agentforce/Index";
import Lab3Index from "./pages/microsites/lab3/Index";
import PegaIndex from "./pages/microsites/pega/Index";
import EnvatoIndex from "./pages/microsites/envato/Index";
import OrchestratePage from "./pages/microsites/envato/Orchestrator";
import EnvatoSummary from "./pages/microsites/envato/Summary";
import EnvatoAssets from "./pages/microsites/envato/Assets";
import LenovoIndex from "./pages/microsites/lenovo/Index";
import LenovoFocusImages from "./pages/microsites/lenovo/FocusImages";
import LenovoTechnicalStack from "./pages/microsites/lenovo/TechnicalStack";
import LenovoDemoChoices from "./pages/microsites/lenovo/DemoChoices";
import LenovoTruScaleScenarios from "./pages/microsites/lenovo/TruScaleScenarios";

// Legacy pages that are still accessible but redirected
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
import { SmokeTest } from "./pages/dev/SmokeTest";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main site routes with main layout */}
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/executive-profile" element={<Layout><ExecutiveProfile /></Layout>} />
          <Route path="/experience-and-impact" element={<Layout><ExperienceAndImpact /></Layout>} />
          <Route path="/core-competencies" element={<Layout><CoreCompetencies /></Layout>} />
          <Route path="/industry-expertise" element={<Layout><IndustryExpertise /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/faqs" element={<Layout><FAQs /></Layout>} />
          
          {/* Resources */}
          <Route path="/resources/90-day-plan" element={<Layout><NinetyDayPlan /></Layout>} />
          <Route path="/resources/whitepapers" element={<Layout><Whitepapers /></Layout>} />
          <Route path="/resources/projects" element={<Layout><Projects /></Layout>} />
          {/* <Route path="/resources/lean-canvas" element={<Layout><LeanCanvas /></Layout>} /> */}
          <Route path="/ai-ethics" element={<Layout><AIEthics /></Layout>} />
          
          {/* Microsite routes with separate layout */}
          <Route path="/microsites" element={<MicrositeGuard><MicrositeLayout><MicrositeIndex /></MicrositeLayout></MicrositeGuard>} />
          <Route path="/microsites/interview-prep" element={<MicrositeGuard><MicrositeLayout><InterviewPrepIndex /></MicrositeLayout></MicrositeGuard>} />
          <Route path="/microsites/agentforce" element={<MicrositeGuard><MicrositeLayout><AgentforceIndex /></MicrositeLayout></MicrositeGuard>} />
          <Route path="/microsites/lab3" element={<MicrositeGuard><MicrositeLayout><Lab3Index /></MicrositeLayout></MicrositeGuard>} />
          <Route path="/microsites/pega" element={<MicrositeGuard><MicrositeLayout><PegaIndex /></MicrositeLayout></MicrositeGuard>} />
          <Route path="/microsites/envato" element={<MicrositeGuard><EnvatoIndex /></MicrositeGuard>} />
          <Route path="/microsites/envato/orchestrator" element={<MicrositeGuard><OrchestratePage /></MicrositeGuard>} />
          <Route path="/microsites/envato/summary" element={<MicrositeGuard><EnvatoSummary /></MicrositeGuard>} />
          <Route path="/microsites/envato/assets" element={<MicrositeGuard><EnvatoAssets /></MicrositeGuard>} />
          <Route path="/microsites/lenovo" element={<MicrositeGuard><MicrositeLayout><LenovoIndex /></MicrositeLayout></MicrositeGuard>} />
          <Route path="/microsites/lenovo/focus-images" element={<MicrositeGuard><LenovoFocusImages /></MicrositeGuard>} />
          <Route path="/microsites/lenovo/technical-stack" element={<MicrositeGuard><MicrositeLayout><LenovoTechnicalStack /></MicrositeLayout></MicrositeGuard>} />
          <Route path="/microsites/lenovo/demo-choices" element={<MicrositeGuard><LenovoDemoChoices /></MicrositeGuard>} />
          <Route path="/microsites/lenovo/truscale-scenarios" element={<MicrositeGuard><LenovoTruScaleScenarios /></MicrositeGuard>} />
          
          {/* Navigation redirects - consolidate similar content */}
          <Route path="/current-roles" element={<Navigate to="/executive-profile" replace />} />
          
          {/* Legacy content that still exists */}
          <Route path="/innovation-definition" element={<Layout><InnovationDefinition /></Layout>} />
          <Route path="/innovation-journey" element={<Layout><InnovationJourney /></Layout>} />
          <Route path="/innovation-frameworks" element={<Layout><InnovationFrameworks /></Layout>} />
          <Route path="/leadership-style" element={<Layout><LeadershipStyle /></Layout>} />
          <Route path="/people-involved" element={<Layout><PeopleInvolved /></Layout>} />
          <Route path="/upcoming-projects" element={<Layout><UpcomingProjects /></Layout>} />
          <Route path="/strategic-projects" element={<Layout><StrategicProjects /></Layout>} />
          <Route path="/customer-asks-stars" element={<Layout><CustomerAsksStars /></Layout>} />
          <Route path="/opportunity-stars" element={<Layout><OpportunityStars /></Layout>} />
          <Route path="/responsibilities" element={<Layout><Responsibilities /></Layout>} />
          <Route path="/you" element={<Layout><You /></Layout>} />
          <Route path="/your-profile-stars" element={<Layout><YourProfileStars /></Layout>} />
          <Route path="/the-opportunity" element={<Layout><TheOpportunity /></Layout>} />
          <Route path="/your-pitch" element={<Layout><YourPitch /></Layout>} />
          <Route path="/what-is-innovation" element={<Layout><WhatIsInnovation /></Layout>} />
          
          {/* Legacy redirects - maintain old URLs for bookmarks */}
          <Route path="/about-troy" element={<Navigate to="/executive-profile" replace />} />
          <Route path="/whitepapers" element={<Navigate to="/resources/whitepapers" replace />} />
          <Route path="/projects" element={<Navigate to="/resources/projects" replace />} />
          <Route path="/inspiration" element={<Layout><CustomerAsksStars /></Layout>} />
          <Route path="/customer-asks" element={<Navigate to="/customer-asks-stars" replace />} />
          <Route path="/vision" element={<Navigate to="/customer-asks-stars" replace />} />
           <Route path="/head-of-innovation" element={<Navigate to="/" replace />} />
           
           {/* Dev-only smoke test */}
           {import.meta.env.DEV && (
             <Route path="/__smoke" element={<SmokeTest />} />
           )}
           
           <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
