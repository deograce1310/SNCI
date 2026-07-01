import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';

export default function Layout() {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.lang = i18n.language === 'en' ? 'en' : 'fr';
  }, [i18n.language]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {location.pathname !== '/contact' && <WhatsAppFloat />}
    </div>
  );
}
