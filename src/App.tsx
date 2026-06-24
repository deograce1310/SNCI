import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './i18n';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';

const HomePage = lazy(() => import('./pages/HomePage'));
const MetiersPage = lazy(() => import('./pages/MetiersPage'));
const EquipePage = lazy(() => import('./pages/EquipePage'));
const EntreprisePage = lazy(() => import('./pages/EntreprisePage'));
const RecrutementPage = lazy(() => import('./pages/RecrutementPage'));
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
          <Route path="/entreprise" element={<EntreprisePage />} />
          <Route path="/recrutement" element={<RecrutementPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
