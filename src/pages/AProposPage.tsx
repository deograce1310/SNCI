import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal';

export default function AProposPage() {
  const { t } = useTranslation();

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
            <span className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-[#CF0D0D]">{t('apropos.eyebrow')}</span>
          </div>
          <h1 className="font-archivo font-bold text-[clamp(28px,3vw,42px)] text-[#0A090E] max-w-2xl">{t('apropos.title')}</h1>
        </div>
      </section>

      {/* Contenu — blanc */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 items-start">
            <Reveal>
              <img src="/images/team/snci-team.jpg" alt="SNCI" className="w-full aspect-[16/10] object-cover rounded-[12px] shadow-lg" loading="lazy" />
            </Reveal>
            <div>
              <Reveal><p className="text-base text-[#475479] leading-relaxed">{t('apropos.p1')}</p></Reveal>
              <Reveal delay={0.1}><p className="text-base text-[#475479] leading-relaxed mt-4">{t('apropos.p2')}</p></Reveal>
            </div>
          </div>

          <Reveal delay={0.15}>
            <div className="mt-16 bg-[#F6F2F2] p-8 lg:p-12 rounded-[12px] text-center relative overflow-hidden">
              <div className="flex justify-center mb-4">
                <div className="flex flex-col gap-[3px]">
                  <div className="w-6 h-[2px] bg-[#CF0D0D] rounded-full" />
                  <div className="w-6 h-[2px] bg-[#CF0D0D] rounded-full" />
                </div>
              </div>
              <blockquote className="relative z-10">
                <p className="font-archivo font-semibold text-xl text-[#0A090E] italic leading-relaxed">&ldquo;{t('dev.motto')}&rdquo;</p>
              </blockquote>
            </div>
          </Reveal>

          <Reveal delay={0.2}><p className="text-base text-[#475479] leading-relaxed mt-12">{t('apropos.p3')}</p></Reveal>
        </div>
      </section>
    </>
  );
}
