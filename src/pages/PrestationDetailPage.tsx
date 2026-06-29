import { Link, useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ChevronRight, Check } from 'lucide-react';
import Reveal from '../components/Reveal';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import { getService, services } from '../data/services';
import { company } from '../data/company';
import { usePageMeta } from '../hooks/usePageMeta';

export default function PrestationDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();
  const en = i18n.language === 'en';
  const service = slug ? getService(slug) : undefined;

  const pageTitle = service
    ? `${en ? service.title_en : service.title} — SNCI`
    : 'SNCI';
  const pageDesc = service
    ? (en ? service.desc_en : service.desc).slice(0, 155)
    : '';

  usePageMeta({
    title: pageTitle,
    description: pageDesc,
    canonical: `/prestations/${slug ?? ''}`,
    lang: en ? 'en' : 'fr',
  });

  if (!service) return <Navigate to="/prestations" replace />;

  const Icon = service.icon;
  const title = en ? service.title_en : service.title;
  const desc = en ? service.desc_en : service.desc;
  const details = en ? service.details_en : service.details;
  const points = en ? service.points_en : service.points;

  const whatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    en ? `Hello SNCI, I would like to know more about: ${service.title_en}.` : `Bonjour SNCI, je souhaite en savoir plus sur : ${service.title}.`
  )}`;

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="bg-[#F6F2F2] pt-28 lg:pt-36 pb-16 lg:pb-24">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          {/* Fil d'Ariane */}
          <nav className="flex items-center gap-2 text-sm text-[#475479] mb-8">
            <Link to="/prestations" className="hover:text-[#CF0D0D] transition-colors">{en ? 'Our Services' : 'Nos prestations'}</Link>
            <ChevronRight className="w-4 h-4 opacity-50" />
            <span className="text-[#0A090E] font-medium">{title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Image */}
            <Reveal>
              <div className="aspect-[4/3] rounded-[14px] overflow-hidden bg-white border border-[#E7EBF2]">
                <img src={service.image} alt={title} className="w-full h-full object-cover" />
              </div>
            </Reveal>

            {/* Détail */}
            <Reveal delay={0.1}>
              <div>
                <span className="inline-flex items-center gap-2 bg-white text-[#CF0D0D] font-mono text-[10px] font-medium uppercase tracking-[0.1em] px-3 py-1.5 rounded-full border border-[#E7EBF2]">
                  <Icon className="w-3.5 h-3.5" />
                  {en ? 'Service' : 'Prestation'}
                </span>
                <h1 className="font-archivo font-bold text-[clamp(26px,3.5vw,40px)] text-[#0A090E] mt-4 leading-tight">{title}</h1>
                <p className="text-[#475479] leading-relaxed mt-4">{desc}</p>
                <p className="text-[#475479] leading-relaxed mt-3">{details}</p>

                <h2 className="font-archivo font-bold text-base text-[#0A090E] mt-6 mb-3">{en ? 'What we deliver' : 'Ce que nous réalisons'}</h2>
                <ul className="space-y-3">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#CF0D0D]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#CF0D0D]" />
                      </span>
                      <span className="text-[#0A090E] text-[15px]">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA WhatsApp */}
                <div className="mt-8 p-6 rounded-[14px] bg-white border border-[#E7EBF2]">
                  <p className="font-archivo font-semibold text-[#0A090E]">
                    {en ? 'A project or a question?' : 'Un projet ou une question ?'}
                  </p>
                  <p className="text-sm text-[#475479] mt-1 mb-4">
                    {en ? 'Tell us about your need — we reply on WhatsApp.' : 'Parlez-nous de votre besoin — nous répondons sur WhatsApp.'}
                  </p>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:brightness-95 text-white font-archivo font-semibold text-sm uppercase tracking-wider px-7 py-3.5 rounded-[10px] transition-all hover:shadow-lg">
                    <WhatsAppIcon className="w-5 h-5" />
                    {en ? 'Chat on WhatsApp' : 'Discuter sur WhatsApp'}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Autres prestations */}
          <div className="mt-20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-archivo font-bold text-xl text-[#0A090E]">{en ? 'Other services' : 'Autres prestations'}</h2>
              <Link to="/prestations" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#CF0D0D] hover:gap-2.5 transition-all">
                <ArrowLeft className="w-4 h-4" />
                {en ? 'All services' : 'Toutes les prestations'}
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {others.map((s) => (
                <Link key={s.slug} to={`/prestations/${s.slug}`}
                  className="group block bg-white rounded-[12px] overflow-hidden border border-[#E7EBF2] hover:shadow-card transition-all duration-400">
                  <div className="aspect-[4/3] overflow-hidden bg-[#F6F2F2]">
                    <img src={s.image} alt={en ? s.title_en : s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-archivo font-semibold text-[15px] text-[#0A090E]">{en ? s.title_en : s.title}</h3>
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
