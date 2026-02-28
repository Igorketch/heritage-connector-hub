import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import ContextPage from "./pages/ContextPage";
import PeoplesPage from "./pages/PeoplesPage";
import ValuesPage from "./pages/ValuesPage";
import MissionPage from "./pages/MissionPage";
import TeamPage from "./pages/TeamPage";
import ParrainsPage from "./pages/team/ParrainsPage";
import MembresHonneurPage from "./pages/team/MembresHonneurPage";
import ConseilAdministrationPage from "./pages/team/ConseilAdministrationPage";
import BureauExecutifPage from "./pages/team/BureauExecutifPage";
import RepresentantsNationauxPage from "./pages/team/RepresentantsNationauxPage";
import ComiteSagesPage from "./pages/team/ComiteSagesPage";
import ContactPage from "./pages/ContactPage";
import DonationPage from "./pages/DonationPage";
import PublicationsPage from "./pages/PublicationsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/context" element={<ContextPage />} />
              <Route path="/peoples" element={<PeoplesPage />} />
              <Route path="/values" element={<ValuesPage />} />
              <Route path="/mission" element={<MissionPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/team/parrains" element={<ParrainsPage />} />
              <Route path="/team/membres-honneur" element={<MembresHonneurPage />} />
              <Route path="/team/conseil-administration" element={<ConseilAdministrationPage />} />
              <Route path="/team/bureau-executif" element={<BureauExecutifPage />} />
              <Route path="/team/representants-nationaux" element={<RepresentantsNationauxPage />} />
              <Route path="/team/comite-sages" element={<ComiteSagesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/donation" element={<DonationPage />} />
              <Route path="/publications" element={<PublicationsPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
