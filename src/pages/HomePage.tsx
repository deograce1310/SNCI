import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import {
  MessageSquare, UserCheck, Truck, ClipboardCheck,
  ChevronRight, Flame, Cylinder, Waypoints, Construction,
  BadgeCheck, ShieldCheck, Clock
} from 'lucide-react';
import Reveal from '../components/Reveal';
import ClientLogosMarquee from '../components/ClientLogosMarquee';
import ImageSlider from '../components/ImageSlider';
import { services } from '../data/services';
import { galleryPhotos } from '../data/gallery';

/* ─── Double barre rouge — séparateur ─── */
function RedBars() {
  return (
    <div className="flex justify-center py-1">
      <div className="flex flex-col gap-[3px]">
        <div className="w-12 h-[2px] bg-[#CF0D0D] rounded-full" />
        <div className="w-12 h-[2px] bg-[#CF0D0D] rounded-full" />
      </div>
    </div>
  );
}

/* ─── Titre de section ─── */
function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="flex flex-col gap-[3px]">
          <div className="w-6 h-[2px] bg-[#CF0D0D] rounded-full" />
          <div className="w-6 h-[2px] bg-[#CF0D0D] rounded-full" />
        </div>
        <span className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-[#CF0D0D]">
          {eyebrow}
        </span>
        <div className="flex flex-col gap-[3px]">
          <div className="w-6 h-[2px] bg-[#CF0D0D] rounded-full" />
          <div className="w-6 h-[2px] bg-[#CF0D0D] rounded-full" />
        </div>
      </div>
      <h2 className="font-archivo font-bold text-[clamp(28px,3vw,40px)] text-[#0A090E] mt-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#475479] mt-3 max-w-xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}

/* ─── Compteur animé ─── */
function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);
  return { count, ref };
}

function StatCounter({ end, label }: { end: number; label: string }) {
  const { count, ref } = useCountUp(end);
  return (
    <div ref={ref} className="text-center">
      <div className="font-archivo font-black text-[clamp(40px,5vw,64px)] text-[#0A090E] leading-none">
        {count}
      </div>
      <div className="flex justify-center mt-3 mb-2">
        <div className="w-8 h-[2px] bg-[#CF0D0D] rounded-full" />
      </div>
      <p className="text-sm text-[#475479] font-medium">{label}</p>
    </div>
  );
}

/* ─── données ─── */
const steps = [
  { icon: MessageSquare, title: 'Expression du besoin', title_en: 'Express your need', desc: 'Décrivez vos besoins en personnel ou en prestations', desc_en: 'Describe your personnel or service needs' },
  { icon: UserCheck, title: 'Sélection des profils', title_en: 'Profile selection', desc: 'Nous sélectionnons les professionnels correspondant à vos critères', desc_en: 'We select the professionals matching your criteria' },
  { icon: Truck, title: 'Mise à disposition', title_en: 'On-site deployment', desc: 'Les personnels arrivent sur votre chantier, équipés et briefés', desc_en: 'Personnel arrive on your site, equipped and briefed' },
  { icon: ClipboardCheck, title: 'Suivi régulier', title_en: 'Regular follow-up', desc: 'Suivi de la mission et remplacement si nécessaire', desc_en: 'Mission monitoring and replacement if needed' },
];

/* ─── PAGE ─── */
export default function HomePage() {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* ═══ HERO — fond blanc avec photo ═══ */}
      <section className="relative min-h-[95dvh] flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0">
          <img src="/images/hero-main.jpg" alt="Chantier industriel SNCI" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A090E]/75 via-[#0A090E]/50 to-[#0A090E]/85" />
        </div>
        <div className="relative z-10 max-w-[900px] mx-auto px-5 text-center pt-20">
          <div className="flex items-center justify-center gap-3 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col gap-[3px]">
              <div className="w-5 h-[2px] bg-[#CF0D0D] rounded-full" />
              <div className="w-5 h-[2px] bg-[#CF0D0D] rounded-full" />
            </div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-white/90">
              {t('hero.eyebrow')}
            </p>
            <div className="flex flex-col gap-[3px]">
              <div className="w-5 h-[2px] bg-[#CF0D0D] rounded-full" />
              <div className="w-5 h-[2px] bg-[#CF0D0D] rounded-full" />
            </div>
          </div>
          <p className="font-archivo font-semibold text-xs sm:text-sm uppercase tracking-[0.18em] text-white/55 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            {t('hero.company')}
          </p>
          <h1 className="font-archivo font-extrabold text-[clamp(34px,5.5vw,68px)] leading-[1.08] tracking-[-0.02em] text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            {t('hero.title')}
          </h1>
          <p className="text-lg text-white/75 leading-relaxed max-w-[680px] mx-auto mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <Link to="/prestations" className="bg-[#CF0D0D] hover:bg-[#A80B0B] text-white font-archivo font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-[10px] transition-all hover:shadow-lg hover:-translate-y-0.5">
              {t('nav.metiers')}
            </Link>
            <Link to="/equipe" className="border-2 border-white/40 hover:border-white hover:bg-white/10 text-white font-archivo font-semibold text-sm uppercase tracking-wider px-8 py-3.5 rounded-[10px] transition-all">
              {t('nav.equipe')}
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
            {[
              { icon: BadgeCheck, label: t('hero.badge1') },
              { icon: ShieldCheck, label: t('hero.badge2') },
              { icon: Clock, label: t('hero.badge3') },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
                <Icon className="w-4 h-4 text-[#CF0D0D] shrink-0" />
                <span className="font-archivo font-medium text-xs sm:text-[13px] uppercase tracking-wider text-white/85">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
          <span className="text-white/40 text-[10px] font-mono uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-px h-6 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      <RedBars />

      {/* ═══ CHIFFRES CLÉS — GRIS ═══ */}
      <section className="py-16 lg:py-20 bg-[#F6F2F2]">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            <StatCounter end={12} label={i18n.language === 'en' ? 'Industrial Services' : 'Prestations industrielles'} />
            <StatCounter end={19} label={i18n.language === 'en' ? 'Trusted Clients' : 'Clients références'} />
            <StatCounter end={16} label={i18n.language === 'en' ? 'Job Categories' : 'Corps de métier'} />
            <StatCounter end={3} label={i18n.language === 'en' ? 'West African Countries' : "Pays d'intervention"} />
          </div>
        </div>
      </section>

      <RedBars />

      {/* ═══ PRESTATIONS (aperçu) — BLANC ═══ */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute -left-[15%] top-[20%] w-[50%] opacity-[0.03] pointer-events-none">
          <img src="/images/gear-watermark.png" alt="" className="w-full" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-5 lg:px-10">
          <SectionTitle eyebrow={t('metiers.eyebrow')} title={i18n.language === 'en' ? 'Our services' : 'Nos prestations'} subtitle={t('metiers.subtitle')} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[services[0], services[1], services[3], services[11]].map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={i * 0.08}>
                  <div className="group flex items-start gap-4 bg-[#F6F2F2] hover:bg-white p-5 rounded-[10px] border border-transparent hover:border-[#9A9B9C]/30 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-white group-hover:bg-[#2830B3] flex items-center justify-center shrink-0 transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6 text-[#9A9B9C] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-archivo font-bold text-[15px] text-[#0A090E]">{i18n.language === 'en' ? service.title_en : service.title}</h3>
                      <p className="text-sm text-[#475479] leading-relaxed mt-1">{i18n.language === 'en' ? service.desc_en : service.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.2}>
            <div className="text-center mt-10">
              <Link to="/prestations" className="inline-flex items-center gap-2 bg-[#2830B3] hover:bg-[#1E2699] text-white font-archivo font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-[10px] transition-all hover:shadow-lg">
                {i18n.language === 'en' ? 'See all our services' : 'Voir toutes nos prestations'} <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <RedBars />

      {/* ═══ ÉQUIPE — BLANC — identique section prestations ═══ */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute right-[-5%] bottom-[-10%] w-[45%] opacity-[0.03] pointer-events-none">
          <img src="/images/gear-watermark.png" alt="" className="w-full" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-5 lg:px-10">
          <SectionTitle eyebrow={t('equipe.eyebrow')} title={t('equipe.title')} subtitle={t('equipe.subtitle')} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: Flame,
                title: 'Soudeurs',
                title_en: 'Welders',
                desc: "Soudeurs homologués de tous types, soudeurs TIG et MIG-MAG, soudeurs à l'arc. Assemblage permanent de pièces métalliques par fusion localisée.",
                desc_en: 'Approved welders of all types, TIG and MIG-MAG welders, arc welders. Permanent assembly of metal parts by localized fusion.',
              },
              {
                icon: Cylinder,
                title: 'Chaudronniers',
                title_en: 'Boilermakers',
                desc: 'Fabrication, assemblage et réparation de réservoirs, citernes, appareils sous pression et ouvrages chaudronnés sur mesure.',
                desc_en: 'Manufacturing, assembly and repair of tanks, cisterns, pressure vessels and custom boilermade works.',
              },
              {
                icon: Waypoints,
                title: 'Tuyauteurs',
                title_en: 'Pipe Fitters',
                desc: "Pose, assemblage et maintenance de réseaux de tuyauterie pour fluides industriels, hydrocarbures et gaz. Étude et traçage des lignes de process.",
                desc_en: 'Installation, assembly and maintenance of piping networks for industrial fluids, hydrocarbons and gases.',
              },
              {
                icon: Construction,
                title: 'Échafaudeurs',
                title_en: 'Scaffolders',
                desc: "Montage et démontage d'échafaudages industriels conformes aux normes de sécurité pour les travaux en hauteur et en milieu confiné.",
                desc_en: 'Assembly and dismantling of industrial scaffolding compliant with safety standards for work at height and confined spaces.',
              },
            ].map((metier, i) => {
              const Icon = metier.icon;
              return (
                <Reveal key={metier.title} delay={i * 0.08}>
                  <div className="group flex items-start gap-4 bg-[#F6F2F2] hover:bg-white p-5 rounded-[10px] border border-transparent hover:border-[#9A9B9C]/30 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-white group-hover:bg-[#2830B3] flex items-center justify-center shrink-0 transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6 text-[#9A9B9C] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-archivo font-bold text-[15px] text-[#0A090E]">{i18n.language === 'en' ? metier.title_en : metier.title}</h3>
                      <p className="text-sm text-[#475479] leading-relaxed mt-1">{i18n.language === 'en' ? metier.desc_en : metier.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.2}>
            <div className="text-center mt-10">
              <Link to="/equipe" className="inline-flex items-center gap-2 bg-[#2830B3] hover:bg-[#1E2699] text-white font-archivo font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-[10px] transition-all hover:shadow-lg">
                {t('equipe.corpsMetier')} <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <RedBars />

      {/* ═══ GALERIE PHOTOS — SLIDER AUTOMATIQUE — GRIS ═══ */}
      <section className="py-20 lg:py-28 bg-[#F6F2F2] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <SectionTitle
            eyebrow={i18n.language === 'en' ? 'GALLERY' : 'GALERIE'}
            title={i18n.language === 'en' ? 'Our expertise in pictures' : 'Notre savoir-faire en images'}
            subtitle={i18n.language === 'en' ? 'Welding, boilermaking, piping and metal frames' : 'Soudure, chaudronnerie, tuyauterie et charpentes métalliques'}
          />
          <Reveal>
            <ImageSlider images={galleryPhotos} />
          </Reveal>
        </div>
      </section>

      <RedBars />

      {/* ═══ PARCOURS CLIENT — GRIS ═══ */}
      <section className="py-20 lg:py-28 bg-[#F6F2F2] relative overflow-hidden">
        <div className="absolute -left-[10%] top-[5%] w-[40%] opacity-[0.03] pointer-events-none">
          <img src="/images/gear-watermark.png" alt="" className="w-full" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-5 lg:px-10">
          <SectionTitle eyebrow={i18n.language === 'en' ? 'PROCESS' : 'PROCESSUS'} title={i18n.language === 'en' ? 'How we work' : 'Comment nous travaillons'} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mt-2">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const num = String(i + 1).padStart(2, '0');
              return (
                <Reveal key={step.title} delay={i * 0.1}>
                  <div className="group relative h-full overflow-hidden rounded-2xl bg-white border border-[#E4DCDC] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#CF0D0D]/40 hover:shadow-[0_18px_40px_-18px_rgba(10,9,14,0.35)]">
                    {/* Numéro en filigrane */}
                    <span className="pointer-events-none select-none absolute -top-5 right-1 font-archivo font-bold text-[120px] leading-none text-[#0A090E]/[0.04] group-hover:text-[#CF0D0D]/[0.07] transition-colors duration-300">
                      {num}
                    </span>
                    {/* Contenu */}
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-[#F6F2F2] group-hover:bg-[#0A090E] flex items-center justify-center mb-5 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-[#CF0D0D] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-xs font-bold text-[#CF0D0D]">{num}</span>
                        <span className="h-px flex-1 bg-[#E4DCDC] group-hover:bg-[#CF0D0D]/30 transition-colors duration-300" />
                      </div>
                      <h3 className="font-archivo font-bold text-[16px] text-[#0A090E]">{i18n.language === 'en' ? step.title_en : step.title}</h3>
                      <p className="text-sm text-[#475479] mt-2 leading-relaxed">{i18n.language === 'en' ? step.desc_en : step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <RedBars />

      {/* ═══ ENTREPRISE (aperçu) — BLANC ═══ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[800px] mx-auto px-5 lg:px-10 text-center">
          <Reveal>
            <div className="flex justify-center mb-6">
              <div className="flex flex-col gap-[3px]">
                <div className="w-8 h-[2px] bg-[#CF0D0D] rounded-full" />
                <div className="w-8 h-[2px] bg-[#CF0D0D] rounded-full" />
              </div>
            </div>
            <h2 className="font-archivo font-bold text-[clamp(24px,3vw,32px)] text-[#0A090E]">{t('entreprise.title')}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base text-[#475479] leading-relaxed mt-6">{t('entreprise.p1')}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <blockquote className="mt-8 font-archivo font-semibold text-lg text-[#0A090E] italic">&ldquo;{t('dev.motto')}&rdquo;</blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/entreprise" className="bg-[#2830B3] hover:bg-[#1E2699] text-white font-archivo font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-[10px] transition-all hover:shadow-lg">{t('nav.about')}</Link>
              <Link to="/prestations" className="border-2 border-[#9A9B9C]/40 hover:border-[#0A090E] text-[#0A090E] font-archivo font-semibold text-sm uppercase tracking-wider px-6 py-3.5 rounded-[10px] transition-all">{t('nav.metiers')}</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <RedBars />

      {/* ═══ CLIENTS — GRIS (défilement logos) ═══ */}
      <ClientLogosMarquee />

      <RedBars />

      {/* ═══ CTA FINAL — BLANC ═══ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-5 lg:px-10 text-center">
          <Reveal>
            <div className="flex justify-center mb-6">
              <div className="flex flex-col gap-[3px]">
                <div className="w-8 h-[2px] bg-[#CF0D0D] rounded-full" />
                <div className="w-8 h-[2px] bg-[#CF0D0D] rounded-full" />
              </div>
            </div>
            <blockquote className="font-archivo font-semibold text-2xl lg:text-3xl text-[#0A090E] italic leading-snug">
              &ldquo;{t('dev.motto')}&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="bg-[#CF0D0D] hover:bg-[#A80B0B] text-white font-archivo font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-[10px] transition-all hover:shadow-lg hover:-translate-y-0.5">
                {t('nav.contactBtn')}
              </Link>
              <Link to="/prestations" className="border-2 border-[#0A090E] hover:bg-[#0A090E] hover:text-white text-[#0A090E] font-archivo font-semibold text-sm uppercase tracking-wider px-8 py-3.5 rounded-[10px] transition-all">
                {t('nav.metiers')}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
