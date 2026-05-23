import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/hooks/useAuth";
import AuthPage from "./pages/AuthPage";
import { AdminLayout } from "@/components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UsersPage from "./pages/admin/UsersPage";
import SettingsPage from "./pages/admin/SettingsPage";
import { PlaceholderPage } from "./pages/admin/PlaceholderPage";
import MembersPage from "./pages/admin/MembersPage";
import Index from "./pages/Index";
import ContextPage from "./pages/ContextPage";
import PeoplesPage from "./pages/PeoplesPage";
import ValuesPage from "./pages/ValuesPage";
import MissionPage from "./pages/MissionPage";
import TeamPage from "./pages/TeamPage";
import ParrainsPage from "./pages/team/ParrainsPage";
import MembresHonneurPage from "./pages/team/MembresHonneurPage";
import HonneurMemberProfilePage from "./pages/team/HonneurMemberProfilePage";
import ConseilAdministrationPage from "./pages/team/ConseilAdministrationPage";
import ConseilMemberProfilePage from "./pages/team/ConseilMemberProfilePage";
import BureauExecutifPage from "./pages/team/BureauExecutifPage";
import BureauMemberProfilePage from "./pages/team/BureauMemberProfilePage";
import RepresentantsNationauxPage from "./pages/team/RepresentantsNationauxPage";
import RepresentantsMemberProfilePage from "./pages/team/RepresentantsMemberProfilePage";
import ComiteSagesPage from "./pages/team/ComiteSagesPage";
import SagesMemberProfilePage from "./pages/team/SagesMemberProfilePage";
import ContactPage from "./pages/ContactPage";
import DonationPage from "./pages/DonationPage";
import PublicationsPage from "./pages/PublicationsPage";
import EvenementsPage from "./pages/EvenementsPage";
import NguounPage from "./pages/evenements/NguounPage";
import GaleriePage from "./pages/GaleriePage";
import PartenairesPage from "./pages/PartenairesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="pages" element={<PlaceholderPage title="Gestion des pages" description="Modifier les contenus des pages publiques." />} />
                <Route path="members" element={<MembersPage />} />
                <Route path="publications" element={<PlaceholderPage title="Gestion des publications" description="Articles, thèses et documents." />} />
                <Route path="events" element={<PlaceholderPage title="Gestion des événements" description="Événements à venir et passés." />} />
                <Route path="media" element={<PlaceholderPage title="Gestion des médias" description="Galerie photo et fichiers multimédias." />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="settings" element={<SettingsPage />} />
              </Route>
              <Route path="/context" element={<ContextPage />} />
              <Route path="/peoples" element={<PeoplesPage />} />
              <Route path="/values" element={<ValuesPage />} />
              <Route path="/mission" element={<MissionPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/team/parrains" element={<ParrainsPage />} />
              <Route path="/team/membres-honneur" element={<MembresHonneurPage />} />
              <Route path="/team/membres-honneur/:slug" element={<HonneurMemberProfilePage />} />
              <Route path="/team/conseil-administration" element={<ConseilAdministrationPage />} />
              <Route path="/team/conseil-administration/:slug" element={<ConseilMemberProfilePage />} />
              <Route path="/team/bureau-executif" element={<BureauExecutifPage />} />
              <Route path="/team/bureau-executif/:slug" element={<BureauMemberProfilePage />} />
              <Route path="/team/representants-nationaux" element={<RepresentantsNationauxPage />} />
              <Route path="/team/representants-nationaux/:slug" element={<RepresentantsMemberProfilePage />} />
              <Route path="/team/comite-sages" element={<ComiteSagesPage />} />
              <Route path="/team/comite-sages/:slug" element={<SagesMemberProfilePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/donation" element={<DonationPage />} />
              <Route path="/publications" element={<PublicationsPage />} />
              <Route path="/evenements" element={<EvenementsPage />} />
              <Route path="/evenements/nguoun-2024" element={<NguounPage />} />
              <Route path="/galerie" element={<GaleriePage />} />
              <Route path="/partenaires" element={<PartenairesPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
          </AuthProvider>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
