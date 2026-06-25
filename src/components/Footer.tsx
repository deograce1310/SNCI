import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';
import { company, telHref } from '../data/company';

const navLinks = [
  { label: 'nav.home', path: '/' },
  { label: 'nav.metiers', path: '/prestations' },
  { label: 'nav.engins', path: '/engins' },
  { label: 'nav.equipe', path: '/equipe' },
  { label: 'nav.about', path: '/a-propos' },
  { label: 'nav.contact', path: '/contact' },
];

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div>
            <img src="/images/snci-logo.png" alt="SNCI" className="h-12 w-12 rounded-full object-cover mb-3" />
            <p className="text-sm font-semibold text-white/90 leading-relaxed">{t('footer.company')}</p>
            <blockquote className="mt-3 text-sm text-white/70 italic">&ldquo;{t('dev.motto')}&rdquo;</blockquote>
          </div>

          <div>
            <h4 className="font-archivo font-bold text-xs uppercase tracking-wider mb-4 text-white/50">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-white/80 hover:text-white transition-colors">{t(link.label)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-archivo font-bold text-xs uppercase tracking-wider mb-4 text-white/50">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a href={telHref(company.phones[0])} className="flex items-center gap-2.5 text-sm text-white/80 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 shrink-0" /> {company.phones[0]}
                </a>
              </li>
              <li>
                <a href={telHref(company.phones[1])} className="flex items-center gap-2.5 text-sm text-white/80 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 shrink-0" /> {company.phones[1]}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="flex items-center gap-2.5 text-sm text-white/80 hover:text-white transition-colors break-all">
                  <Mail className="w-4 h-4 shrink-0" /> {company.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/80">
                <MapPin className="w-4 h-4 shrink-0" /> {company.address}, {company.city}
              </li>
            </ul>
            <button onClick={toggleLang} className="mt-5 text-sm text-white/80 hover:text-white transition-colors">
              <span className={i18n.language === 'fr' ? 'font-semibold' : ''}>FR</span>
              <span className="mx-2 text-white/30">|</span>
              <span className={i18n.language === 'en' ? 'font-semibold' : ''}>EN</span>
            </button>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-mono text-white/50">&copy; {new Date().getFullYear()} SNCI SARL</p>
          <Link to="/mentions-legales" className="text-xs text-white/50 hover:text-white transition-colors">
            {i18n.language === 'en' ? 'Legal notices' : 'Mentions légales'}
          </Link>
        </div>
      </div>
    </footer>
  );
}
