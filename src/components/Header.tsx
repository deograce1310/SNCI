import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'nav.home', path: '/' },
  { label: 'nav.about', path: '/a-propos' },
  { label: 'nav.metiers', path: '/prestations' },
  { label: 'nav.engins', path: '/engins' },
  { label: 'nav.equipe', path: '/equipe' },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ferme le menu mobile à chaque changement de route (navigation)
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  // Bloque le scroll de la page quand le menu burger est ouvert
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggleLang = () => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  const isActive = (path: string) => location.pathname === path;
  const isHome = location.pathname === '/';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.06)]' : 'bg-transparent'
      }`}>
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10 h-20 lg:h-24 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 shrink-0 z-10">
            <img src="/images/snci-logo.png" alt="SNCI" className={`h-16 lg:h-20 w-auto rounded-full transition-all duration-500 ${
              scrolled || !isHome ? '' : 'drop-shadow-lg'
            }`} />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}
                className={`relative px-4 py-2 text-sm font-inter font-medium transition-colors rounded-lg ${
                  isActive(item.path)
                    ? 'text-[#CF0D0D]'
                    : scrolled || !isHome
                    ? 'text-[#0A090E] hover:text-[#CF0D0D]'
                    : 'text-white/90 hover:text-white'
                }`}>
                {t(item.label)}
                {isActive(item.path) && <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#CF0D0D] rounded-full" />}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button onClick={toggleLang} className={`text-sm font-medium transition-colors ${
              scrolled || !isHome ? 'text-[#0A090E]/60 hover:text-[#CF0D0D]' : 'text-white/70 hover:text-white'
            }`}>
              <span className={i18n.language === 'fr' ? 'font-semibold' : ''}>FR</span>
              <span className="mx-1.5 opacity-30">|</span>
              <span className={i18n.language === 'en' ? 'font-semibold' : ''}>EN</span>
            </button>
            <Link to="/contact" className="bg-[#CF0D0D] hover:bg-[#E83030] text-white font-archivo font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg transition-all hover:shadow-md">
              {t('nav.contactBtn')}
            </Link>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className={`lg:hidden p-2 rounded-lg transition-all z-10 ${
            scrolled || !isHome ? 'text-[#0A090E] hover:bg-[#F8F8FA]' : 'text-white hover:bg-white/10'
          }`} aria-label="Menu">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-[#0A090E]/30 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-16 right-4 left-4 max-w-sm mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            <nav className="flex flex-col p-3">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}
                  className={`flex items-center px-5 py-3.5 text-base font-archivo font-semibold rounded-xl transition-colors ${
                    isActive(item.path) ? 'text-[#CF0D0D] bg-[#F8F8FA]' : 'text-[#0A090E] hover:bg-[#F8F8FA] hover:text-[#CF0D0D]'
                  }`}>
                  {t(item.label)}
                </Link>
              ))}
            </nav>
            <div className="border-t border-[#E7EBF2] px-5 py-4 flex items-center justify-between">
              <button onClick={toggleLang} className="text-sm font-medium text-[#0A090E]/60">
                <span className={i18n.language === 'fr' ? 'font-semibold' : ''}>FR</span>
                <span className="mx-2 opacity-30">|</span>
                <span className={i18n.language === 'en' ? 'font-semibold' : ''}>EN</span>
              </button>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="bg-[#CF0D0D] hover:bg-[#E83030] text-white text-xs font-archivo font-semibold uppercase tracking-wider px-4 py-2.5 rounded-lg transition-colors">
                {t('nav.contactBtn')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
