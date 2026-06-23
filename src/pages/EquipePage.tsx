import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal';
import { jobFamilies } from '../data/services';

export default function EquipePage() {
  const { t, i18n } = useTranslation();

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

      {/* Quote — blanc */}
      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-5 lg:px-10">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <img src="/images/team/snci-team.jpg" alt="SNCI Team" className="w-full aspect-[16/10] object-cover rounded-[12px] shadow-lg" loading="lazy" />
              <div>
                <div className="flex flex-col gap-[3px] mb-4">
                  <div className="w-6 h-[2px] bg-[#CF0D0D] rounded-full" />
                  <div className="w-6 h-[2px] bg-[#CF0D0D] rounded-full" />
                </div>
                <blockquote className="font-archivo font-semibold text-xl text-[#0A090E] italic leading-relaxed">&ldquo;{t('dev.motto')}&rdquo;</blockquote>
              </div>
            </div>
          </Reveal>
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
                    <img src={family.image} alt={i18n.language === 'en' ? family.title_en : family.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-archivo font-bold text-[15px] text-[#0A090E]">{i18n.language === 'en' ? family.title_en : family.title}</h3>
                    <ul className="mt-3 space-y-1.5">
                      {(i18n.language === 'en' ? family.jobs_en : family.jobs).map((job) => (
                        <li key={job} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-[#CF0D0D] rounded-sm mt-1.5 shrink-0" />
                          <span className="text-sm text-[#475479]">{job}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
