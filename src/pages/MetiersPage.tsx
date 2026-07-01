import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Factory, Building2, Ship, Zap, MapPin } from 'lucide-react';
import Reveal from '../components/Reveal';
import WhatsAppCTA from '../components/WhatsAppCTA';
import { services } from '../data/services';
import { company } from '../data/company';
import { usePageMeta } from '../hooks/usePageMeta';

export default function MetiersPage() {
  const { t, i18n } = useTranslation();
  const en = i18n.language === 'en';

  usePageMeta({
    title: en
      ? 'Our Industrial Services — SNCI'
      : 'Nos Prestations industrielles — SNCI',
    description: en
      ? 'Discover all SNCI services: welding, boilermaking, piping, metal frames, scaffolding, sandblasting, factory maintenance, industrial personnel and more. Onshore & offshore.'
      : "Découvrez toutes les prestations SNCI : soudure, chaudronnerie, tuyauterie, charpentes, échafaudages, sablage, maintenance d'usine, personnel industriel et bien plus. Onshore & offshore.",
    canonical: '/prestations',
    lang: en ? 'en' : 'fr',
  });

  // Lien WhatsApp générique (CTA global sous la grille)
  const generalWhatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    en ? 'Hello SNCI, I would like information about your services.' : 'Bonjour SNCI, je souhaite des informations sur vos prestations.'
  )}`;

  // Secteurs dans lesquels SNCI intervient
  const sectors = [
    { icon: Factory, title: en ? 'Industry' : 'Industrie', desc: en ? 'Plants & production units' : 'Usines & unités de production' },
    { icon: Building2, title: en ? 'Construction' : 'BTP & Construction', desc: en ? 'Building & civil works' : 'Bâtiment & génie civil' },
    { icon: Ship, title: en ? 'Oil & Gas / Offshore' : 'Pétrole & Gaz / Offshore', desc: en ? 'Onshore & offshore facilities' : 'Installations onshore & offshore' },
    { icon: Zap, title: en ? 'Energy' : 'Énergie', desc: en ? 'Power & utilities' : 'Production & distribution d\'énergie' },
  ];

  return (
    <>
      {/* Hero — blanc */}
      <section className="bg-[#F6F2F2] pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex flex-col gap-[3px]">
              <div className="w-5 h-[2px] bg-[#CF0D0D] rounded-full" />
              <div className="w-5 h-[2px] bg-[#CF0D0D] rounded-full" />
            </div>
            <span className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-[#CF0D0D]">{t('metiers.eyebrow')}</span>
          </div>
          <h1 className="font-archivo font-bold text-[clamp(32px,4vw,48px)] text-[#0A090E]">{t('metiers.title')}</h1>
          <p className="text-lg text-[#475479] mt-4 max-w-2xl">{t('metiers.subtitle')}</p>
        </div>
      </section>

      {/* Grid — blanc */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.06}>
                <Link to={`/prestations/${service.slug}`}
                  className="group flex h-full flex-col bg-white rounded-[12px] overflow-hidden border border-[#E7EBF2] hover:border-[#0A090E]/10 hover:shadow-card transition-all duration-400">
                  <div className="aspect-[4/3] overflow-hidden relative bg-[#F6F2F2]">
                    <img src={service.image} alt={en ? service.title_en : service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-archivo font-bold text-lg text-[#0A090E]">{en ? service.title_en : service.title}</h3>
                    <p className="text-sm text-[#475479] leading-relaxed mt-3">{en ? service.shortDesc_en : service.shortDesc}</p>
                    <span className="mt-4 inline-flex items-center gap-2 font-archivo font-semibold text-sm text-[#CF0D0D] group/cta">
                      {en ? 'Learn more' : 'En savoir plus'}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* CTA global WhatsApp sous la grille */}
          <WhatsAppCTA
            title={en ? 'Interested in one of our services?' : 'Une prestation vous intéresse ?'}
            subtitle={en ? 'Tell us about your project — we usually reply within the hour.' : 'Parlez-nous de votre projet — nous répondons généralement dans l\'heure.'}
            href={generalWhatsappHref}
            buttonLabel={en ? 'Chat on WhatsApp' : 'Discuter sur WhatsApp'}
          />
        </div>
      </section>

      {/* ═══ SECTEURS & ZONE D'INTERVENTION — GRIS ═══ */}
      <section className="py-16 lg:py-24 bg-[#F6F2F2]">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <Reveal>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="flex flex-col gap-[3px]">
                  <div className="w-5 h-[2px] bg-[#CF0D0D] rounded-full" />
                  <div className="w-5 h-[2px] bg-[#CF0D0D] rounded-full" />
                </div>
                <span className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-[#CF0D0D]">{en ? 'WHERE WE OPERATE' : 'NOS INTERVENTIONS'}</span>
                <div className="flex flex-col gap-[3px]">
                  <div className="w-5 h-[2px] bg-[#CF0D0D] rounded-full" />
                  <div className="w-5 h-[2px] bg-[#CF0D0D] rounded-full" />
                </div>
              </div>
              <h2 className="font-archivo font-bold text-[clamp(24px,3vw,36px)] text-[#0A090E]">{en ? 'Sectors & coverage area' : "Secteurs & zone d'intervention"}</h2>
              <p className="text-[#475479] mt-3 max-w-xl mx-auto">{en ? 'Across industries and locations, onshore and offshore.' : 'Quels que soient le secteur et le lieu, onshore et offshore.'}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-6 items-stretch">
            {/* Secteurs */}
            <Reveal>
              <div className="h-full flex flex-col justify-center bg-white rounded-[12px] border border-[#E7EBF2] p-8">
                <h3 className="font-archivo font-bold text-lg text-[#0A090E] mb-6">{en ? 'Sectors' : "Secteurs d'intervention"}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {sectors.map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#F6F2F2] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#CF0D0D]" />
                      </div>
                      <div>
                        <p className="font-archivo font-semibold text-[15px] text-[#0A090E] leading-tight">{title}</p>
                        <p className="text-sm text-[#475479] mt-1">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Zone d'intervention */}
            <Reveal delay={0.1}>
              <div className="h-full flex flex-col rounded-[12px] overflow-hidden bg-[#1b2540] min-h-[440px]">
                <div className="relative flex-1">
                  <img src="/images/sectors/africa-map.webp" alt={en ? 'Coverage area — West Africa' : "Zone d'intervention — Afrique de l'Ouest"}
                    className="absolute inset-0 w-full h-full object-cover object-[center_38%]" loading="lazy" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1b2540] to-transparent" />
                </div>
                <div className="px-6 pb-6 -mt-4 relative z-10 text-white">
                  <div className="flex items-center gap-2 text-white/70">
                    <MapPin className="w-4 h-4 text-[#CF0D0D]" />
                    <span className="font-mono text-xs font-medium uppercase tracking-[0.08em]">{en ? 'Coverage area' : "Zone d'intervention"}</span>
                  </div>
                  <p className="font-archivo font-bold text-2xl mt-2">{en ? 'Across West Africa' : "Partout en Afrique de l'Ouest"}</p>
                  <p className="text-sm text-white/80 mt-2 max-w-sm">{en ? 'On land and at sea — onshore & offshore — wherever your site is located.' : 'À terre comme en mer — onshore & offshore — où que soit implanté votre site.'}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
