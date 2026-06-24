import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Layers, BadgeCheck, Globe2 } from 'lucide-react';
import Reveal from '../components/Reveal';
import { jobFamilies, jobCategories } from '../data/services';

export default function EquipePage() {
  const { t, i18n } = useTranslation();
  const en = i18n.language === 'en';

  const stats = [
    { icon: Layers, value: `${jobCategories.length}`, label: en ? 'Trades available' : 'Corps de métier' },
    { icon: BadgeCheck, value: en ? 'Certified' : 'Certifié', label: en ? 'Qualified & approved personnel' : 'Personnel qualifié & homologué' },
    { icon: Globe2, value: 'On / Offshore', label: en ? 'Across West Africa' : "Partout en Afrique de l'Ouest" },
  ];

  return (
    <>
      {/* Hero — gris */}
      <section className="bg-[#F6F2F2] pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex flex-col gap-[3px]">
              <div className="w-5 h-[2px] bg-[#CF0D0D] rounded-full" />
              <div className="w-5 h-[2px] bg-[#CF0D0D] rounded-full" />
            </div>
            <span className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-[#CF0D0D]">{t('equipe.eyebrow')}</span>
          </div>
          <h1 className="font-archivo font-bold text-[clamp(32px,4vw,48px)] text-[#0A090E]">{t('equipe.title')}</h1>
          <p className="text-lg text-[#475479] mt-4 max-w-2xl">{t('equipe.subtitle')}</p>
        </div>
      </section>

      {/* Chiffres clés — blanc */}
      <section className="py-12 lg:py-14 bg-white border-b border-[#E7EBF2]">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <Reveal key={label} delay={i * 0.1}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F6F2F2] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#CF0D0D]" />
                  </div>
                  <div>
                    <p className="font-archivo font-bold text-xl text-[#0A090E] leading-tight">{value}</p>
                    <p className="text-sm text-[#475479]">{label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Corps de métier — gris */}
      <section className="py-16 lg:py-20 bg-[#F6F2F2]">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <Reveal>
            <h2 className="font-archivo font-bold text-2xl text-[#0A090E] mb-8">{t('equipe.corpsMetier')}</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobFamilies.map((family, i) => (
              <Reveal key={family.title} delay={i * 0.08}>
                <div className="group bg-white rounded-[12px] overflow-hidden border border-[#E7EBF2] hover:shadow-card transition-all duration-300">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={family.image} alt={en ? family.title_en : family.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-archivo font-bold text-[15px] text-[#0A090E]">{en ? family.title_en : family.title}</h3>
                    <p className="text-sm text-[#475479] leading-relaxed mt-2">{en ? family.desc_en : family.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — blanc */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-5 lg:px-10 text-center">
          <Reveal>
            <div className="flex justify-center mb-4">
              <div className="flex flex-col gap-[3px]">
                <div className="w-8 h-[2px] bg-[#CF0D0D] rounded-full" />
                <div className="w-8 h-[2px] bg-[#CF0D0D] rounded-full" />
              </div>
            </div>
            <h2 className="font-archivo font-bold text-[clamp(22px,3vw,32px)] text-[#0A090E]">
              {en ? 'Need a qualified profile?' : 'Besoin d\'un profil qualifié ?'}
            </h2>
            <p className="text-[#475479] mt-3 max-w-xl mx-auto">
              {en
                ? 'Tell us about your project — we mobilise the right certified personnel, onshore and offshore.'
                : 'Parlez-nous de votre projet — nous mobilisons le personnel certifié adapté, onshore et offshore.'}
            </p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 bg-[#2830B3] hover:bg-[#1E2699] text-white font-archivo font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-[10px] transition-all hover:shadow-lg">
              {t('nav.contactBtn')}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
