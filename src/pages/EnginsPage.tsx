import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import WhatsAppCTA from '../components/WhatsAppCTA';
import { engins } from '../data/engins';
import { company } from '../data/company';
import { usePageMeta } from '../hooks/usePageMeta';

export default function EnginsPage() {
  const { i18n } = useTranslation();
  const en = i18n.language === 'en';

  usePageMeta({
    title: en
      ? "Equipment Rental & Sale — SNCI"
      : "Location & Vente d'Équipements industriels — SNCI",
    description: en
      ? 'SNCI offers for rental and sale: articulating boom lifts, scissor lifts, truck-mounted platforms, backhoe loaders and wheel loaders. Available across West Africa.'
      : 'SNCI propose à la location et à la vente : nacelles articulées, nacelles à ciseaux, nacelles sur camion, tractopelle et chargeuse sur pneus. Disponibles en Afrique de l\'Ouest.',
    canonical: '/engins',
    lang: en ? 'en' : 'fr',
  });

  const generalWhatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    en ? 'Hello SNCI, I would like information about the equipment you offer for rental and sale.' : 'Bonjour SNCI, je souhaite des informations sur les équipements que vous proposez à la location et à la vente.'
  )}`;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#F6F2F2] pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex flex-col gap-[3px]">
              <div className="w-5 h-[2px] bg-[#CF0D0D] rounded-full" />
              <div className="w-5 h-[2px] bg-[#CF0D0D] rounded-full" />
            </div>
            <span className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-[#CF0D0D]">{en ? 'EQUIPMENT RENTAL & SALE' : 'LOCATION ET VENTE D\'ÉQUIPEMENTS'}</span>
          </div>
          <h1 className="font-archivo font-bold text-[clamp(32px,4vw,48px)] text-[#0A090E]">{en ? 'Equipment rental & sale' : 'Location et vente d\'équipements'}</h1>
          <p className="text-lg text-[#475479] mt-4 max-w-2xl">
            {en
              ? 'SNCI offers for rental and sale a range of machines for access at height and earthworks. Open a listing, then contact us on WhatsApp for the price, technical sheet and availability.'
              : 'SNCI propose à la location et à la vente une gamme d\'équipements pour l\'accès en hauteur et le terrassement. Ouvrez une fiche, puis contactez-nous sur WhatsApp pour le prix, la fiche technique et la disponibilité.'}
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engins.map((engin, i) => (
              <Reveal key={engin.slug} delay={i * 0.06}>
                <Link to={`/engins/${engin.slug}`}
                  className="group block h-full bg-white rounded-[12px] overflow-hidden border border-[#E7EBF2] hover:border-[#0A090E]/10 hover:shadow-card transition-all duration-400">
                  <div className="aspect-[4/3] overflow-hidden relative bg-[#F6F2F2]">
                    <img src={engin.cover} alt={en ? engin.title_en : engin.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#0A090E] font-mono text-[10px] font-medium uppercase tracking-[0.08em] px-2.5 py-1 rounded-full">
                      {en ? engin.category_en : engin.category}
                    </span>
                    {engin.images.length > 1 && (
                      <span className="absolute top-3 right-3 bg-[#0A090E]/70 backdrop-blur-sm text-white font-mono text-[10px] font-medium px-2 py-1 rounded-full">
                        {engin.images.length} {en ? 'photos' : 'photos'}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-archivo font-bold text-lg text-[#0A090E]">{en ? engin.title_en : engin.title}</h3>
                    <p className="text-sm text-[#475479] leading-relaxed mt-3">{en ? engin.shortDesc_en : engin.shortDesc}</p>
                    <span className="mt-4 inline-flex items-center gap-2 font-archivo font-semibold text-sm text-[#CF0D0D] group/cta">
                      {en ? 'Learn more' : 'En savoir plus'}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* CTA global WhatsApp */}
          <WhatsAppCTA
            title={en ? 'Looking for a specific machine?' : 'Vous cherchez un engin précis ?'}
            subtitle={en ? 'Tell us your need — we reply with availability and pricing.' : 'Dites-nous votre besoin — nous répondons avec la disponibilité et les prix.'}
            href={generalWhatsappHref}
            buttonLabel={en ? 'Chat on WhatsApp' : 'Discuter sur WhatsApp'}
          />
        </div>
      </section>
    </>
  );
}
