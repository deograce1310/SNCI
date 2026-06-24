import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFoundPage() {
  const { t, i18n } = useTranslation();
  const en = i18n.language === 'en';

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-white pt-32 lg:pt-40 pb-20">
      <div className="max-w-[600px] mx-auto px-5 lg:px-10 text-center">
        <div className="flex justify-center mb-6">
          <div className="flex flex-col gap-[3px]">
            <div className="w-10 h-[2px] bg-[#CF0D0D] rounded-full" />
            <div className="w-10 h-[2px] bg-[#CF0D0D] rounded-full" />
          </div>
        </div>
        <p className="font-archivo font-black text-[clamp(72px,14vw,140px)] leading-none text-[#0A090E]">404</p>
        <h1 className="font-archivo font-bold text-[clamp(20px,3vw,28px)] text-[#0A090E] mt-2">
          {en ? 'Page not found' : 'Page introuvable'}
        </h1>
        <p className="text-[#475479] mt-4">
          {en
            ? 'The page you are looking for does not exist or has been moved.'
            : "La page que vous recherchez n'existe pas ou a été déplacée."}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="inline-flex items-center gap-2 bg-[#CF0D0D] hover:bg-[#A80B0B] text-white font-archivo font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-[10px] transition-all hover:shadow-lg hover:-translate-y-0.5">
            <Home className="w-4 h-4" /> {t('nav.home')}
          </Link>
          <Link to="/prestations" className="inline-flex items-center gap-2 border-2 border-[#0A090E] hover:bg-[#0A090E] hover:text-white text-[#0A090E] font-archivo font-semibold text-sm uppercase tracking-wider px-8 py-3.5 rounded-[10px] transition-all">
            {t('nav.metiers')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
