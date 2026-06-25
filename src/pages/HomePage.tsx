import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import {
  MessageSquare, UserCheck, Truck, ClipboardCheck,
  ChevronRight, BadgeCheck, ShieldCheck, Clock
} from 'lucide-react';
import Reveal from '../components/Reveal';
import ClientLogosMarquee from '../components/ClientLogosMarquee';
import ImageSlider from '../components/ImageSlider';
import { galleryPhotos } from '../data/gallery';

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
      {/* ═══ HERO ═══ */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#0A090E]">
        {/* Image de fond + voile sombre */}
        <div className="absolute inset-0">
          <img src="/images/hero-main.jpg" alt="Chantier industriel SNCI" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A090E]/75 via-[#0A090E]/50 to-[#0A090E]/85" />
        </div>

        {/* Contenu */}
        <div className="relative z-10 mx-auto w-full max-w-[900px] px-5 py-28 text-center">
          {/* Sur-titre */}
          <div className="mb-6 flex items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex flex-col gap-[3px]">
              <span className="h-[2px] w-5 rounded-full bg-[#CF0D0D]" />
              <span className="h-[2px] w-5 rounded-full bg-[#CF0D0D]" />
            </span>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-white/90">{t('hero.eyebrow')}</p>
            <span className="flex flex-col gap-[3px]">
              <span className="h-[2px] w-5 rounded-full bg-[#CF0D0D]" />
              <span className="h-[2px] w-5 rounded-full bg-[#CF0D0D]" />
            </span>
          </div>

          <p className="mb-4 font-archivo text-xs font-semibold uppercase tracking-[0.18em] text-white/55 sm:text-sm animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            {t('hero.company')}
          </p>

          <h1 className="mb-6 font-archivo text-[clamp(34px,5.5vw,68px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            {t('hero.title')}
          </h1>

          <p className="mx-auto mb-10 max-w-[680px] text-lg leading-relaxed text-white/75 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            {t('hero.subtitle')}
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <Link to="/prestations" className="rounded-[10px] bg-[#CF0D0D] px-8 py-4 font-archivo text-sm font-semibold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-[#A80B0B] hover:shadow-lg">
              {t('nav.metiers')}
            </Link>
            <Link to="/equipe" className="rounded-[10px] border-2 border-white/40 px-8 py-3.5 font-archivo text-sm font-semibold uppercase tracking-wider text-white transition-all hover:border-white hover:bg-white/10">
              {t('nav.equipe')}
            </Link>
          </div>

          {/* Badges de confiance — colonne uniforme sur mobile, rangée sur desktop */}
          <ul className="mx-auto mt-10 flex max-w-[300px] flex-col gap-2.5 sm:mt-12 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
            {[
              { icon: BadgeCheck, label: t('hero.badge1') },
              { icon: ShieldCheck, label: t('hero.badge2') },
              { icon: Clock, label: t('hero.badge3') },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-sm sm:py-2">
                <Icon className="h-4 w-4 shrink-0 text-[#CF0D0D]" />
                <span className="font-archivo text-xs font-medium uppercase tracking-wider text-white/85 sm:text-[13px]">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Indicateur de scroll (desktop uniquement) */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 animate-bounce-slow sm:flex">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
          <span className="h-6 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ═══ NOTRE OFFRE (chapeau 2 volets) — BLANC ═══ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <SectionTitle
            eyebrow={i18n.language === 'en' ? 'WHAT WE OFFER' : 'NOTRE OFFRE'}
            title={i18n.language === 'en' ? 'A complete industrial partner' : 'Un partenaire industriel complet'}
            subtitle={i18n.language === 'en'
              ? 'From carrying out your work to supplying the equipment, SNCI covers all your industrial needs — services and machines, with a single point of contact.'
              : "De la réalisation de vos travaux à la fourniture du matériel, SNCI couvre l'ensemble de vos besoins industriels — prestations et engins, avec un seul interlocuteur."}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Volet 1 — Prestations */}
            <Reveal>
              <Link to="/prestations" className="group flex h-full flex-col bg-white rounded-[14px] overflow-hidden border border-[#E7EBF2] hover:border-[#0A090E]/10 hover:shadow-card transition-all duration-400">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src="/images/metiers/soudeurs.jpg" alt={i18n.language === 'en' ? 'Industrial services' : 'Prestations industrielles'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A090E]/40 to-transparent" />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#0A090E] font-mono text-[10px] font-medium uppercase tracking-[0.12em] px-2.5 py-1 rounded-full">{i18n.language === 'en' ? 'Services' : 'Services'}</span>
                </div>
                <div className="flex flex-1 flex-col p-6 lg:p-7">
                  <h3 className="font-archivo font-bold text-xl text-[#0A090E]">{i18n.language === 'en' ? 'Industrial services' : 'Prestations industrielles'}</h3>
                  <p className="text-sm text-[#475479] leading-relaxed mt-2">{i18n.language === 'en' ? 'Industrial work delivered by qualified teams, onshore and offshore.' : 'Travaux industriels réalisés par des équipes qualifiées, onshore et offshore.'}</p>
                  <ul className="flex flex-wrap gap-2 mt-4">
                    {(i18n.language === 'en'
                      ? ['Welding', 'Boilermaking', 'Piping', 'Metal frames', 'Machining', 'Qualified personnel']
                      : ['Soudure', 'Chaudronnerie', 'Tuyauterie', 'Charpentes métalliques', 'Usinage', 'Personnel qualifié']
                    ).map((item) => (
                      <li key={item} className="text-xs font-medium text-[#475479] bg-[#F6F2F2] px-3 py-1.5 rounded-full">{item}</li>
                    ))}
                  </ul>
                  <span className="mt-auto pt-5 inline-flex items-center gap-2 font-archivo font-semibold text-sm text-[#CF0D0D] group/cta">
                    {i18n.language === 'en' ? 'Explore our services' : 'Découvrir nos prestations'}
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
            {/* Volet 2 — Location et vente d'engins */}
            <Reveal delay={0.1}>
              <Link to="/engins" className="group flex h-full flex-col bg-white rounded-[14px] overflow-hidden border border-[#E7EBF2] hover:border-[#0A090E]/10 hover:shadow-card transition-all duration-400">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src="/images/engins/tractopelle/1.jpg" alt={i18n.language === 'en' ? 'Equipment rental & sale' : "Location et vente d'engins"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A090E]/40 to-transparent" />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#0A090E] font-mono text-[10px] font-medium uppercase tracking-[0.12em] px-2.5 py-1 rounded-full">{i18n.language === 'en' ? 'Equipment' : 'Matériel'}</span>
                </div>
                <div className="flex flex-1 flex-col p-6 lg:p-7">
                  <h3 className="font-archivo font-bold text-xl text-[#0A090E]">{i18n.language === 'en' ? 'Equipment rental & sale' : "Location et vente d'engins"}</h3>
                  <p className="text-sm text-[#475479] leading-relaxed mt-2">{i18n.language === 'en' ? 'Access-at-height and earthmoving machines, offered for rental and sale.' : "Engins d'accès en hauteur et de terrassement, proposés à la location et à la vente."}</p>
                  <ul className="flex flex-wrap gap-2 mt-4">
                    {(i18n.language === 'en'
                      ? ['Articulating boom lifts', 'Scissor lifts', 'Truck-mounted platform', 'Backhoe loaders', 'Wheel loaders']
                      : ['Nacelles articulées', 'Nacelles à ciseaux', 'Nacelle sur camion', 'Tractopelles', 'Chargeuses sur pneus']
                    ).map((item) => (
                      <li key={item} className="text-xs font-medium text-[#475479] bg-[#F6F2F2] px-3 py-1.5 rounded-full">{item}</li>
                    ))}
                  </ul>
                  <span className="mt-auto pt-5 inline-flex items-center gap-2 font-archivo font-semibold text-sm text-[#CF0D0D] group/cta">
                    {i18n.language === 'en' ? 'See equipment for rental & sale' : "Voir les engins à louer et à vendre"}
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

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

      {/* ═══ ÉQUIPE (humain) — BLANC ═══ */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute right-[-5%] bottom-[-10%] w-[45%] opacity-[0.03] pointer-events-none">
          <img src="/images/gear-watermark.png" alt="" className="w-full" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <Reveal>
              <div className="aspect-[4/3] rounded-[14px] overflow-hidden">
                <img src="/images/team/snci-team.jpg" alt={i18n.language === 'en' ? 'The SNCI team' : "L'équipe SNCI"}
                  className="w-full h-full object-cover" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex flex-col gap-[3px]">
                    <div className="w-5 h-[2px] bg-[#CF0D0D] rounded-full" />
                    <div className="w-5 h-[2px] bg-[#CF0D0D] rounded-full" />
                  </div>
                  <span className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-[#CF0D0D]">{i18n.language === 'en' ? 'OUR TEAM' : 'NOTRE ÉQUIPE'}</span>
                </div>
                <h2 className="font-archivo font-bold text-[clamp(24px,3vw,36px)] text-[#0A090E]">{i18n.language === 'en' ? 'The people behind every project' : 'Les femmes & hommes derrière chaque chantier'}</h2>
                <p className="text-[#475479] leading-relaxed mt-4">{i18n.language === 'en' ? 'A close-knit, experienced team that handles your projects end to end — plus qualified personnel we can provide on demand, on land and at sea, across West Africa.' : "Une équipe soudée et expérimentée qui prend en charge vos chantiers de bout en bout — et un personnel qualifié que nous mettons à votre disposition, à terre comme en mer, partout en Afrique de l'Ouest."}</p>
                <ul className="mt-6 space-y-3">
                  {(i18n.language === 'en'
                    ? ['Qualified & professional team', '16 trades under one roof', 'Onshore & offshore interventions']
                    : ['Équipe qualifiée & professionnelle', '16 corps de métier réunis', 'Interventions onshore & offshore']
                  ).map((p) => (
                    <li key={p} className="flex items-center gap-3 text-[15px] text-[#0A090E]">
                      <BadgeCheck className="w-5 h-5 text-[#CF0D0D] shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
                <Link to="/equipe" className="mt-8 inline-flex items-center gap-2 bg-[#2830B3] hover:bg-[#1E2699] text-white font-archivo font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-[10px] transition-all hover:shadow-lg">
                  {t('equipe.corpsMetier')} <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

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

      {/* ═══ PARCOURS CLIENT — BLANC ═══ */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
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
                  <div className="group relative h-full overflow-hidden rounded-2xl bg-[#F6F2F2] border border-[#E4DCDC] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#CF0D0D]/40 hover:shadow-[0_18px_40px_-18px_rgba(10,9,14,0.35)]">
                    {/* Numéro en filigrane */}
                    <span className="pointer-events-none select-none absolute -top-5 right-1 font-archivo font-bold text-[120px] leading-none text-[#0A090E]/[0.04] group-hover:text-[#CF0D0D]/[0.07] transition-colors duration-300">
                      {num}
                    </span>
                    {/* Contenu */}
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-white group-hover:bg-[#0A090E] flex items-center justify-center mb-5 transition-colors duration-300">
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

      {/* ═══ CLIENTS — GRIS (défilement logos) ═══ */}
      <ClientLogosMarquee />

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
            <div className="mt-10 flex justify-center">
              <Link to="/contact" className="bg-[#CF0D0D] hover:bg-[#A80B0B] text-white font-archivo font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-[10px] transition-all hover:shadow-lg hover:-translate-y-0.5">
                {t('nav.contactBtn')}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ À PROPOS DE NOUS — GRIS (dernière position) ═══ */}
      <section className="py-20 lg:py-28 bg-[#F6F2F2] relative overflow-hidden">
        <div className="absolute -left-[8%] bottom-[-10%] w-[40%] opacity-[0.03] pointer-events-none">
          <img src="/images/gear-watermark.png" alt="" className="w-full" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <Reveal>
              <div className="aspect-[4/3] rounded-[14px] overflow-hidden shadow-lg">
                <img src="/images/team/snci-team.jpg" alt={i18n.language === 'en' ? 'About SNCI' : 'À propos de SNCI'}
                  className="w-full h-full object-cover" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex flex-col gap-[3px]">
                    <div className="w-5 h-[2px] bg-[#CF0D0D] rounded-full" />
                    <div className="w-5 h-[2px] bg-[#CF0D0D] rounded-full" />
                  </div>
                  <span className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-[#CF0D0D]">{t('apropos.eyebrow')}</span>
                </div>
                <h2 className="font-archivo font-bold text-[clamp(24px,3vw,36px)] text-[#0A090E]">{t('apropos.title')}</h2>
                <p className="text-[#475479] leading-relaxed mt-4">{t('apropos.p1')}</p>
                <p className="text-[#475479] leading-relaxed mt-3">{t('apropos.p3')}</p>
                <Link to="/a-propos" className="mt-8 inline-flex items-center gap-2 bg-[#CF0D0D] hover:bg-[#A80B0B] text-white font-archivo font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-[10px] transition-all hover:shadow-lg">
                  {i18n.language === 'en' ? 'Learn more about us' : 'En savoir plus sur nous'} <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
