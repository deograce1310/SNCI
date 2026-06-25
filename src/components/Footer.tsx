import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const toggleLang = () => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');

  return (
    <footer className="bg-[#2830B3]">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 py-8">
        {/* Double barre rouge */}
        <div className="flex justify-center mb-6">
          <div className="flex flex-col gap-[3px]">
            <div className="w-10 h-[2px] bg-[#CF0D0D] rounded-full" />
            <div className="w-10 h-[2px] bg-[#CF0D0D] rounded-full" />
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <img src="/images/snci-logo.png" alt="SNCI" className="h-12 w-12 rounded-full object-cover mb-3" />
          <p className="text-sm font-semibold text-white/90 leading-relaxed">{t('footer.company')}</p>
          <blockquote className="mt-3 max-w-xl text-sm text-white/70 italic">&ldquo;{t('dev.motto')}&rdquo;</blockquote>
        </div>

        <div className="mt-8 pt-5 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-mono text-white/50">&copy; {new Date().getFullYear()} SNCI SARL</p>
          <div className="flex items-center gap-5">
            <button onClick={toggleLang} className="text-xs text-white/60 hover:text-white transition-colors">
              <span className={i18n.language === 'fr' ? 'font-semibold' : ''}>FR</span>
              <span className="mx-1.5 text-white/30">|</span>
              <span className={i18n.language === 'en' ? 'font-semibold' : ''}>EN</span>
            </button>
            <Link to="/mentions-legales" className="text-xs text-white/50 hover:text-white transition-colors">
              {i18n.language === 'en' ? 'Legal notices' : 'Mentions légales'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
