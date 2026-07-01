import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, Clock, BadgeCheck, Target, ChevronRight,
} from 'lucide-react';
import Reveal from '../components/Reveal';
import { usePageMeta } from '../hooks/usePageMeta';

export default function AProposPage() {
  const { t, i18n } = useTranslation();
  const en = i18n.language === 'en';

  usePageMeta({
    title: en
      ? 'About SNCI — Industrial Construction Company'
      : 'À propos de SNCI — Société des Nouvelles Constructions Industrielles',
    description: en
      ? 'SNCI SARL is an industrial company based in Cotonou, Benin, specialising in welding, boilermaking, piping and factory maintenance. A trusted partner across West Africa.'
      : "SNCI SARL est une société industrielle basée à Cotonou, Bénin, spécialisée en soudure, chaudronnerie, tuyauterie et maintenance d'usine. Partenaire de confiance en Afrique de l'Ouest.",
    canonical: '/a-propos',
    lang: en ? 'en' : 'fr',
  });

  const values = [
    {
      icon: BadgeCheck,
      title: en ? 'Quality' : 'Qualité',
      desc: en
        ? 'Work carried out according to the rules of the art and international quality standards.'
        : "Des travaux réalisés selon les règles de l'art et les normes de qualité internationales.",
    },
    {
      icon: Clock,
      title: en ? 'On-time delivery' : 'Respect des délais',
      desc: en
        ? 'Professional services delivered within a short time, as committed to our clients.'
        : 'Des prestations professionnelles livrées dans un bref délai, comme nous nous y engageons.',
    },
    {
      icon: BadgeCheck,
      title: en ? 'Professionalism' : 'Professionnalisme',
      desc: en
        ? 'A strong, experienced and highly qualified team across 16 industrial trades.'
        : 'Une équipe forte, expérimentée et hautement qualifiée, sur 16 corps de métier.',
    },
    {
      icon: ShieldCheck,
      title: en ? 'Safety' : 'Sécurité',
      desc: en
        ? 'Interventions onshore and offshore in compliance with industrial safety standards.'
        : 'Des interventions onshore et offshore dans le respect des normes de sécurité industrielle.',
    },
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
            <span className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-[#CF0D0D]">{t('apropos.eyebrow')}</span>
          </div>
          <h1 className="font-archivo font-bold text-[clamp(28px,3vw,42px)] text-[#0A090E] max-w-2xl">{t('apropos.title')}</h1>
        </div>
      </section>

      {/* Intro — blanc */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 items-start">
            <Reveal>
              <img src="/images/sectors/industrie-btp.webp" alt={en ? 'SNCI industrial expertise' : 'Savoir-faire industriel SNCI'} className="w-full aspect-[16/10] object-cover rounded-[12px] shadow-lg" loading="lazy" />
            </Reveal>
            <div>
              <Reveal><p className="text-base text-[#475479] leading-relaxed">{t('apropos.p1')}</p></Reveal>
              <Reveal delay={0.1}><p className="text-base text-[#475479] leading-relaxed mt-4">{t('apropos.p2')}</p></Reveal>
              <Reveal delay={0.15}><p className="text-base text-[#475479] leading-relaxed mt-4">{t('apropos.p3')}</p></Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & devise — gris */}
      <section className="py-16 lg:py-20 bg-[#F6F2F2]">
        <div className="max-w-[1000px] mx-auto px-5 lg:px-10">
          <Reveal>
            <div className="bg-white p-8 lg:p-12 rounded-[14px] shadow-card text-center">
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 rounded-xl bg-[#0A090E] flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#CF0D0D]" />
                </div>
              </div>
              <h2 className="font-archivo font-bold text-[clamp(20px,2.4vw,28px)] text-[#0A090E]">{en ? 'Our mission' : 'Notre mission'}</h2>
              <blockquote className="mt-4 font-archivo font-semibold text-xl lg:text-2xl text-[#0A090E] italic leading-relaxed max-w-2xl mx-auto">
                &ldquo;{t('dev.motto')}&rdquo;
              </blockquote>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Valeurs — blanc */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#CF0D0D] rounded-full" />
              <span className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-[#CF0D0D]">{en ? 'OUR VALUES' : 'NOS VALEURS'}</span>
              <div className="w-6 h-[2px] bg-[#CF0D0D] rounded-full" />
            </div>
            <h2 className="font-archivo font-bold text-[clamp(24px,3vw,36px)] text-[#0A090E]">{en ? 'What drives us every day' : 'Ce qui nous anime au quotidien'}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.1}>
                  <div className="h-full bg-[#F6F2F2] border border-[#E4DCDC] rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#CF0D0D]/40 hover:shadow-[0_18px_40px_-18px_rgba(10,9,14,0.35)]">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-[#CF0D0D]" />
                    </div>
                    <h3 className="font-archivo font-bold text-[16px] text-[#0A090E]">{v.title}</h3>
                    <p className="text-sm text-[#475479] mt-2 leading-relaxed">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA — gris */}
      <section className="py-16 lg:py-20 bg-[#F6F2F2]">
        <div className="max-w-[800px] mx-auto px-5 lg:px-10 text-center">
          <h2 className="font-archivo font-bold text-[clamp(22px,2.6vw,32px)] text-[#0A090E]">{en ? 'Entrust us with your project' : 'Confiez-nous votre projet'}</h2>
          <p className="text-[#475479] mt-3 max-w-xl mx-auto">{en ? 'Tell us your need — our qualified team handles your worksite end to end.' : "Dites-nous votre besoin — notre équipe qualifiée prend en charge votre chantier de bout en bout."}</p>
          <div className="mt-8 flex justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#CF0D0D] hover:bg-[#A80B0B] text-white font-archivo font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-[10px] transition-all hover:shadow-lg hover:-translate-y-0.5">
              {t('nav.contactBtn')} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="mt-6 text-sm text-[#475479]">
            <Link to="/mentions-legales" className="underline underline-offset-2 hover:text-[#CF0D0D] transition-colors">
              {en ? 'View legal notices (RCCM, IFU, registered office)' : 'Voir les mentions légales (RCCM, IFU, siège social)'}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
