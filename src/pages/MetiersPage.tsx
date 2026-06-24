import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal';
import ImageSlider from '../components/ImageSlider';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import { services } from '../data/services';
import { galleryPhotos } from '../data/gallery';
import { company } from '../data/company';

export default function MetiersPage() {
  const { t, i18n } = useTranslation();
  const en = i18n.language === 'en';
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Lien WhatsApp pré-rempli avec le nom de la prestation
  const devisHref = (label: string) =>
    `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
      en ? `Hello SNCI, I would like a quote for: ${label}.` : `Bonjour SNCI, je souhaite un devis pour : ${label}.`
    )}`;

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.06}>
                <div className="group bg-white rounded-[12px] overflow-hidden border border-[#E7EBF2] hover:border-[#0A090E]/10 hover:shadow-card transition-all duration-400"
                  onMouseEnter={() => setActiveIndex(i)} onMouseLeave={() => setActiveIndex(null)}>
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <img src={service.image} alt={i18n.language === 'en' ? service.title_en : service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className={`absolute inset-0 bg-[#0A090E]/50 flex items-center justify-center transition-opacity duration-300 ${activeIndex === i ? 'opacity-100' : 'opacity-0'}`}>
                      <span className="text-white font-archivo font-semibold text-sm uppercase tracking-wider">{en ? 'Request a quote' : 'Demander un devis'}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-archivo font-bold text-lg text-[#0A090E]">{en ? service.title_en : service.title}</h3>
                    <p className="text-sm text-[#475479] leading-relaxed mt-3">{en ? service.desc_en : service.desc}</p>
                    <a href={devisHref(en ? service.title_en : service.title)} target="_blank" rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 font-archivo font-semibold text-sm text-[#25D366] hover:gap-3 transition-all">
                      <WhatsAppIcon className="w-4 h-4" />
                      {en ? 'Request a quote' : 'Demander un devis'}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GALERIE PORTFOLIO — SLIDER AUTOMATIQUE — GRIS ═══ */}
      <section className="py-16 lg:py-24 bg-[#F6F2F2]">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <Reveal>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="flex flex-col gap-[3px]">
                  <div className="w-5 h-[2px] bg-[#CF0D0D] rounded-full" />
                  <div className="w-5 h-[2px] bg-[#CF0D0D] rounded-full" />
                </div>
                <span className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-[#CF0D0D]">PORTFOLIO</span>
                <div className="flex flex-col gap-[3px]">
                  <div className="w-5 h-[2px] bg-[#CF0D0D] rounded-full" />
                  <div className="w-5 h-[2px] bg-[#CF0D0D] rounded-full" />
                </div>
              </div>
              <h2 className="font-archivo font-bold text-[clamp(24px,3vw,36px)] text-[#0A090E]">{i18n.language === 'en' ? 'Our expertise in pictures' : 'Notre savoir-faire en images'}</h2>
              <p className="text-[#475479] mt-3 max-w-xl mx-auto">{i18n.language === 'en' ? 'Welding, boilermaking, piping and metal frames' : 'Soudure, chaudronnerie, tuyauterie et charpentes métalliques'}</p>
            </div>
          </Reveal>
          <Reveal>
            <ImageSlider images={galleryPhotos} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
