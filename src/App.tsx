import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './i18n';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';

const HomePage = lazy(() => import('./pages/HomePage'));
const MetiersPage = lazy(() => import('./pages/MetiersPage'));
const EquipePage = lazy(() => import('./pages/EquipePage'));
const EnginsPage = lazy(() => import('./pages/EnginsPage'));
const EnginDetailPage = lazy(() => import('./pages/EnginDetailPage'));
const AProposPage = lazy(() => import('./pages/AProposPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const MentionsLegalesPage = lazy(() => import('./pages/MentionsLegalesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/prestations" element={<MetiersPage />} />
          <Route path="/equipe" element={<EquipePage />} />
          <Route path="/engins" element={<EnginsPage />} />
          <Route path="/engins/:slug" element={<EnginDetailPage />} />
          <Route path="/a-propos" element={<AProposPage />} />
          {/* Redirection de l'ancienne URL vers la nouvelle */}
          <Route path="/entreprise" element={<Navigate to="/a-propos" replace />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
