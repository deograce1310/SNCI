import { useTranslation } from 'react-i18next';
import { HardHat, Globe2, ShieldCheck, Mail } from 'lucide-react';
import Reveal from '../components/Reveal';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import { jobFamilies } from '../data/services';
import { company } from '../data/company';

export default function RecrutementPage() {
  const { i18n } = useTranslation();
  const en = i18n.language === 'en';

  // Tous les métiers recherchés, à plat, en puces
  const postes = jobFamilies.flatMap((f) => (en ? f.jobs_en : f.jobs));

  const atouts = [
    {
      icon: HardHat,
      title: en ? 'Large-scale projects' : 'Chantiers d\'envergure',
      desc: en
        ? 'Work on industrial sites for major companies across West Africa.'
        : 'Intervenez sur des sites industriels pour de grandes entreprises de l\'Afrique de l\'Ouest.',
    },
    {
      icon: Globe2,
      title: en ? 'Onshore & offshore' : 'Onshore & offshore',
      desc: en
        ? 'Missions on land and at sea, in the most demanding environments.'
        : 'Des missions à terre et en mer, dans les environnements les plus exigeants.',
    },
    {
      icon: ShieldCheck,
      title: en ? 'A certified team' : 'Une équipe certifiée',
      desc: en
        ? 'Join qualified professionals committed to safety and quality work.'
        : 'Rejoignez des professionnels qualifiés, attachés à la sécurité et au travail bien fait.',
    },
  ];

  const mailtoHref = `mailto:${company.email}?subject=${encodeURIComponent(
    en ? 'Job application — SNCI' : 'Candidature — SNCI'
  )}&body=${encodeURIComponent(
    en
      ? 'Hello SNCI,\n\nI would like to apply. Here is my information:\n\n- Full name:\n- Trade / position:\n- Experience (years):\n- Certifications:\n- Phone:\n\n(Please attach your CV.)'
      : 'Bonjour SNCI,\n\nJe souhaite poser ma candidature. Voici mes informations :\n\n- Nom et prénom :\n- Métier / poste :\n- Expérience (années) :\n- Certifications :\n- Téléphone :\n\n(Merci de joindre votre CV.)'
  )}`;

  const whatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    en
      ? 'Hello SNCI, I would like to apply for a position. My trade is: '
      : 'Bonjour SNCI, je souhaite postuler. Mon métier est : '
  )}`;

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
            <span className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-[#CF0D0D]">
              {en ? 'CAREERS' : 'RECRUTEMENT'}
            </span>
          </div>
          <h1 className="font-archivo font-bold text-[clamp(32px,4vw,48px)] text-[#0A090E]">
            {en ? 'Join our teams' : 'Rejoignez nos équipes'}
          </h1>
          <p className="text-lg text-[#475479] mt-4 max-w-2xl">
            {en
              ? 'SNCI is always looking for qualified and certified professionals to strengthen its teams and serve its clients across West Africa.'
              : 'SNCI recherche en permanence des professionnels qualifiés et certifiés pour renforcer ses équipes et servir ses clients partout en Afrique de l\'Ouest.'}
          </p>
        </div>
      </section>

      {/* Pourquoi nous rejoindre — blanc */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {atouts.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-[#E7EBF2] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="w-14 h-14 rounded-xl bg-[#F6F2F2] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#CF0D0D]" />
                  </div>
                  <h3 className="font-archivo font-bold text-[17px] text-[#0A090E]">{title}</h3>
                  <p className="text-sm text-[#475479] leading-relaxed mt-2">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Profils recherchés — gris */}
      <section className="py-16 lg:py-20 bg-[#F6F2F2]">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <Reveal>
            <h2 className="font-archivo font-bold text-2xl text-[#0A090E] mb-2">
              {en ? 'Profiles we are looking for' : 'Profils recherchés'}
            </h2>
            <p className="text-[#475479] mb-8">
              {en ? 'All certified industrial trades, including:' : 'Tous les corps de métier industriels certifiés, notamment :'}
            </p>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-2.5">
              {postes.map((poste) => (
                <span key={poste} className="inline-flex items-center gap-2 rounded-full border border-[#E7EBF2] bg-white px-4 py-2 text-sm text-[#0A090E]">
                  <span className="w-1.5 h-1.5 bg-[#CF0D0D] rounded-sm shrink-0" />
                  {poste}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Comment postuler — blanc */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-5 lg:px-10 text-center">
          <Reveal>
            <div className="flex justify-center mb-4">
              <div className="flex flex-col gap-[3px]">
                <div className="w-8 h-[2px] bg-[#CF0D0D] rounded-full" />
                <div className="w-8 h-[2px] bg-[#CF0D0D] rounded-full" />
              </div>
            </div>
            <h2 className="font-archivo font-bold text-[clamp(24px,3vw,36px)] text-[#0A090E]">
              {en ? 'How to apply' : 'Comment postuler'}
            </h2>
            <p className="text-[#475479] mt-4 max-w-xl mx-auto">
              {en
                ? 'Send us your CV and certifications by email, or reach us directly on WhatsApp. We will get back to you as soon as a mission matches your profile.'
                : 'Envoyez-nous votre CV et vos certifications par e-mail, ou contactez-nous directement sur WhatsApp. Nous reviendrons vers vous dès qu\'une mission correspond à votre profil.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <a href={mailtoHref}
                className="inline-flex items-center justify-center gap-2 bg-[#2830B3] hover:bg-[#1E2699] text-white font-archivo font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-[10px] transition-all hover:shadow-lg hover:-translate-y-0.5">
                <Mail className="w-5 h-5" />
                {en ? 'Apply by email' : 'Postuler par e-mail'}
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:brightness-95 text-white font-archivo font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-[10px] transition-all hover:shadow-lg">
                <WhatsAppIcon className="w-5 h-5" />
                {en ? 'Apply via WhatsApp' : 'Postuler via WhatsApp'}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
