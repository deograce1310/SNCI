import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ChevronRight, Check } from 'lucide-react';
import Reveal from '../components/Reveal';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import { getEngin, engins } from '../data/engins';
import { company } from '../data/company';

export default function EnginDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();
  const en = i18n.language === 'en';
  const engin = slug ? getEngin(slug) : undefined;
  const [active, setActive] = useState(0);

  if (!engin) return <Navigate to="/engins" replace />;

  const title = en ? engin.title_en : engin.title;
  const category = en ? engin.category_en : engin.category;
  const desc = en ? engin.desc_en : engin.desc;
  const uses = en ? engin.uses_en : engin.uses;

  const whatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    en
      ? `Hello SNCI, I'm interested in buying: ${engin.title_en}. Could you send me the price and technical sheet?`
      : `Bonjour SNCI, je suis intéressé(e) par l'achat de : ${engin.title}. Pouvez-vous m'envoyer le prix et la fiche technique ?`
  )}`;

  const others = engins.filter((e) => e.slug !== engin.slug).slice(0, 3);

  return (
    <>
      <section className="bg-[#F6F2F2] pt-28 lg:pt-36 pb-16 lg:pb-24">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          {/* Fil d'Ariane */}
          <nav className="flex items-center gap-2 text-sm text-[#475479] mb-8">
            <Link to="/engins" className="hover:text-[#CF0D0D] transition-colors">{en ? 'Equipment rental & sale' : 'Location et vente d\'équipements'}</Link>
            <ChevronRight className="w-4 h-4 opacity-50" />
            <span className="text-[#0A090E] font-medium">{title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Galerie */}
            <Reveal>
              <div>
                <div className="aspect-[4/3] rounded-[14px] overflow-hidden bg-white border border-[#E7EBF2]">
                  <img src={engin.images[active]} alt={`${title} — ${active + 1}`}
                    className="w-full h-full object-cover" />
                </div>
                {engin.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-3 mt-3">
                    {engin.images.map((img, i) => (
                      <button key={img} onClick={() => setActive(i)}
                        className={`aspect-[4/3] rounded-[10px] overflow-hidden border-2 transition-all ${
                          i === active ? 'border-[#CF0D0D]' : 'border-transparent opacity-70 hover:opacity-100'
                        }`}>
                        <img src={img} alt={`${title} — vignette ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>

            {/* Détail */}
            <Reveal delay={0.1}>
              <div>
                <span className="inline-block bg-white text-[#CF0D0D] font-mono text-[10px] font-medium uppercase tracking-[0.1em] px-3 py-1.5 rounded-full border border-[#E7EBF2]">
                  {category}
                </span>
                <h1 className="font-archivo font-bold text-[clamp(26px,3.5vw,40px)] text-[#0A090E] mt-4 leading-tight">{title}</h1>
                <p className="text-[#475479] leading-relaxed mt-4">{desc}</p>

                <ul className="mt-6 space-y-3">
                  {uses.map((use) => (
                    <li key={use} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#CF0D0D]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#CF0D0D]" />
                      </span>
                      <span className="text-[#0A090E] text-[15px]">{use}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA WhatsApp */}
                <div className="mt-8 p-6 rounded-[14px] bg-white border border-[#E7EBF2]">
                  <p className="font-archivo font-semibold text-[#0A090E]">
                    {en ? 'Price, technical sheet & availability' : 'Prix, fiche technique & disponibilité'}
                  </p>
                  <p className="text-sm text-[#475479] mt-1 mb-4">
                    {en ? 'Interested in this machine? Message us on WhatsApp.' : 'Cet engin vous intéresse ? Écrivez-nous sur WhatsApp.'}
                  </p>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:brightness-95 text-white font-archivo font-semibold text-sm uppercase tracking-wider px-7 py-3.5 rounded-[10px] transition-all hover:shadow-lg">
                    <WhatsAppIcon className="w-5 h-5" />
                    {en ? 'Ask the price' : 'Demander le prix'}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Autres équipements */}
          <div className="mt-20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-archivo font-bold text-xl text-[#0A090E]">{en ? 'Other equipment' : 'Autres équipements'}</h2>
              <Link to="/engins" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#CF0D0D] hover:gap-2.5 transition-all">
                <ArrowLeft className="w-4 h-4" />
                {en ? 'All equipment' : 'Tous les équipements'}
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {others.map((e) => (
                <Link key={e.slug} to={`/engins/${e.slug}`}
                  className="group block bg-white rounded-[12px] overflow-hidden border border-[#E7EBF2] hover:shadow-card transition-all duration-400">
                  <div className="aspect-[4/3] overflow-hidden bg-[#F6F2F2]">
                    <img src={e.cover} alt={en ? e.title_en : e.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-archivo font-semibold text-[15px] text-[#0A090E]">{en ? e.title_en : e.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
