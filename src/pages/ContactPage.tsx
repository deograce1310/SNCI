import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Mail, Phone, MapPin, Globe } from 'lucide-react';
import Reveal from '../components/Reveal';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import { company, telHref } from '../data/company';

export default function ContactPage() {
  const { i18n } = useTranslation();
  const en = i18n.language === 'en';
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' });
  const formRef = useRef<HTMLFormElement>(null);

  // Message commun, pre-rempli avec ce que l'utilisateur a saisi
  const buildBody = () =>
    `${en ? 'Name' : 'Nom'}: ${form.nom}\n` +
    `Email: ${form.email}\n` +
    `${en ? 'Subject' : 'Sujet'}: ${form.sujet}\n\n` +
    `${form.message}`;

  // Encode un objet en corps de formulaire (pour Netlify Forms)
  const encodeForm = (data: Record<string, string>) =>
    Object.keys(data).map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`).join('&');

  // Verifie les champs requis (validation native HTML5) avant d'agir
  const isValid = () => formRef.current?.reportValidity() ?? false;

  // Repli sans backend : ouvre l'app mail de l'utilisateur, pre-remplie
  const openMailto = () => {
    const subject = encodeURIComponent(form.sujet || (en ? 'Contact request' : 'Demande de contact'));
    const body = encodeURIComponent(buildBody());
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  };

  const sendByEmail = async () => {
    if (!isValid()) return;
    // Si un endpoint Formspree est configure : envoi automatique (le message
    // arrive directement dans la boite mail, sans ouvrir l'app de l'utilisateur).
    if (company.formEndpoint) {
      try {
        setSending(true);
        const res = await fetch(company.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            nom: form.nom,
            email: form.email,
            sujet: form.sujet,
            message: form.message,
            _subject: `${en ? 'Contact request' : 'Demande de contact'} — ${form.sujet}`,
          }),
        });
        if (res.ok) { setSubmitted(true); return; }
        openMailto(); // repli si l'envoi echoue
      } catch {
        openMailto();
      } finally {
        setSending(false);
      }
      return;
    }
    // Sinon : envoi via Netlify Forms (le message arrive par e-mail à SNCI)
    try {
      setSending(true);
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm({ 'form-name': 'contact', ...form }),
      });
      if (res.ok) { setSubmitted(true); return; }
      openMailto(); // repli si Netlify indisponible (ex. hors production)
    } catch {
      openMailto();
    } finally {
      setSending(false);
    }
  };

  const sendByWhatsApp = () => {
    if (!isValid()) return;
    const text = encodeURIComponent(
      `${en ? 'Contact request' : 'Demande de contact'} — ${form.sujet}\n\n${buildBody()}`
    );
    window.open(`https://wa.me/${company.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const whatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    en ? 'Hello SNCI, I would like information about your services.' : 'Bonjour SNCI, je souhaite des informations sur vos prestations.'
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
            <span className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-[#CF0D0D]">CONTACT</span>
          </div>
          <h1 className="font-archivo font-bold text-[clamp(32px,5vw,56px)] text-[#0A090E]">
            {en ? 'Contact us' : 'Contactez-nous'}
          </h1>
          <p className="text-lg text-[#475479] mt-4 max-w-xl">
            {en
              ? 'Tell us about your project. We will get back to you as soon as possible.'
              : 'Parlez-nous de votre projet. Nous vous répondrons dans les plus brefs délais.'}
          </p>
        </div>
      </section>

      {/* Coordonnees + formulaire — blanc */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16">
            {/* Colonne coordonnees */}
            <div>
              <Reveal>
                <h2 className="font-archivo font-bold text-xl text-[#0A090E] mb-6">
                  {en ? 'Our contact details' : 'Nos coordonnées'}
                </h2>
              </Reveal>

              <div className="space-y-5">
                <Reveal>
                  <a href={telHref(company.phones[0])} className="group flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-[#F6F2F2] group-hover:bg-[#2830B3] flex items-center justify-center shrink-0 transition-colors">
                      <Phone className="w-5 h-5 text-[#2830B3] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-[#9A9B9C]">{en ? 'Phone' : 'Téléphone'}</p>
                      <p className="text-[15px] text-[#0A090E] font-medium group-hover:text-[#2830B3] transition-colors">{company.phones[0]}</p>
                      <p className="text-[15px] text-[#0A090E] font-medium">{company.phones[1]}</p>
                    </div>
                  </a>
                </Reveal>

                <Reveal delay={0.05}>
                  <a href={`mailto:${company.email}`} className="group flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-[#F6F2F2] group-hover:bg-[#2830B3] flex items-center justify-center shrink-0 transition-colors">
                      <Mail className="w-5 h-5 text-[#2830B3] group-hover:text-white transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wider text-[#9A9B9C]">Email</p>
                      <p className="text-[15px] text-[#0A090E] font-medium break-all group-hover:text-[#2830B3] transition-colors">{company.email}</p>
                    </div>
                  </a>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-[#F6F2F2] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#2830B3]" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-[#9A9B9C]">{en ? 'Address' : 'Adresse'}</p>
                      <p className="text-[15px] text-[#0A090E] font-medium">{company.address}</p>
                      <p className="text-[15px] text-[#475479]">{company.city}, {en ? 'Benin' : company.country}</p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.15}>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-[#F6F2F2] group-hover:bg-[#25D366] flex items-center justify-center shrink-0 transition-colors">
                      <WhatsAppIcon className="w-5 h-5 text-[#25D366] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-[#9A9B9C]">WhatsApp</p>
                      <p className="text-[15px] text-[#0A090E] font-medium group-hover:text-[#25D366] transition-colors">{en ? 'Chat with us' : 'Discutez avec nous'}</p>
                    </div>
                  </a>
                </Reveal>

                <Reveal delay={0.2}>
                  <a href={company.websiteUrl} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-[#F6F2F2] group-hover:bg-[#2830B3] flex items-center justify-center shrink-0 transition-colors">
                      <Globe className="w-5 h-5 text-[#2830B3] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-[#9A9B9C]">{en ? 'Website' : 'Site web'}</p>
                      <p className="text-[15px] text-[#0A090E] font-medium group-hover:text-[#2830B3] transition-colors">{company.website}</p>
                    </div>
                  </a>
                </Reveal>
              </div>

              <Reveal delay={0.25}>
                <div className="mt-8 pt-6 border-t border-[#E7EBF2] text-xs text-[#9A9B9C] font-mono space-y-1">
                  <p>RCCM : {company.rccm}</p>
                  <p>IFU : {company.ifu}</p>
                </div>
              </Reveal>
            </div>

            {/* Colonne formulaire */}
            <div>
              {submitted ? (
                <Reveal>
                  <div className="text-center py-12 bg-[#F6F2F2] rounded-[12px] px-6">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-5">
                      <Check className="w-7 h-7 text-[#2830B3]" />
                    </div>
                    <h3 className="font-archivo font-bold text-xl text-[#0A090E]">
                      {company.formEndpoint
                        ? (en ? 'Message sent!' : 'Message envoyé !')
                        : (en ? 'Almost done!' : 'Presque terminé !')}
                    </h3>
                    <p className="text-[#475479] mt-2 max-w-sm mx-auto">
                      {company.formEndpoint
                        ? (en
                            ? 'Thank you, we have received your message and will get back to you shortly. You can also reach us directly:'
                            : 'Merci, nous avons bien reçu votre message et reviendrons vers vous rapidement. Vous pouvez aussi nous joindre directement :')
                        : (en
                            ? 'Your email app should have opened with your message ready to send. If not, contact us directly:'
                            : "Votre messagerie devrait s'être ouverte avec votre message prêt à envoyer. Sinon, contactez-nous directement :")}
                    </p>
                    <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a href={`mailto:${company.email}`} className="inline-flex items-center gap-2 bg-[#2830B3] hover:bg-[#1E2699] text-white font-archivo font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-lg transition-colors">
                        <Mail className="w-4 h-4" /> Email
                      </a>
                      <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:brightness-95 text-white font-archivo font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-lg transition-all">
                        <WhatsAppIcon className="w-4 h-4" /> WhatsApp
                      </a>
                    </div>
                  </div>
                </Reveal>
              ) : (
                <form ref={formRef} name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={(e) => { e.preventDefault(); sendByEmail(); }} className="space-y-5">
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden"><label>{en ? 'Do not fill this in:' : 'Ne pas remplir :'} <input name="bot-field" /></label></p>
                  <Reveal>
                    <label htmlFor="contact-nom" className="block text-sm font-medium text-[#0A090E] mb-1.5">{en ? 'Name' : 'Nom'}</label>
                    <input id="contact-nom" name="nom" autoComplete="name" type="text" required value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F6F2F2] border border-transparent focus:border-[#0A090E] rounded-lg focus:outline-none transition-colors" />
                  </Reveal>
                  <Reveal delay={0.05}>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-[#0A090E] mb-1.5">Email</label>
                    <input id="contact-email" name="email" autoComplete="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F6F2F2] border border-transparent focus:border-[#0A090E] rounded-lg focus:outline-none transition-colors" />
                  </Reveal>
                  <Reveal delay={0.1}>
                    <label htmlFor="contact-sujet" className="block text-sm font-medium text-[#0A090E] mb-1.5">{en ? 'Subject' : 'Sujet'}</label>
                    <input id="contact-sujet" name="sujet" type="text" required value={form.sujet} onChange={(e) => setForm({ ...form, sujet: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F6F2F2] border border-transparent focus:border-[#0A090E] rounded-lg focus:outline-none transition-colors" />
                  </Reveal>
                  <Reveal delay={0.15}>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-[#0A090E] mb-1.5">Message</label>
                    <textarea id="contact-message" name="message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F6F2F2] border border-transparent focus:border-[#0A090E] rounded-lg focus:outline-none transition-colors resize-none" />
                  </Reveal>
                  <Reveal delay={0.2}>
                    <p className="text-xs text-[#9A9B9C] mb-3 text-center">
                      {en ? 'Choose how to send your message:' : 'Choisissez comment envoyer votre message :'}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button type="button" onClick={sendByWhatsApp} className="flex-1 bg-[#25D366] hover:brightness-95 text-white font-archivo font-semibold text-sm uppercase tracking-wider py-4 rounded-[10px] transition-all hover:shadow-lg flex items-center justify-center gap-2">
                        <WhatsAppIcon className="w-5 h-5" />
                        {en ? 'Send via WhatsApp' : 'Envoyer via WhatsApp'}
                      </button>
                      <button type="submit" disabled={sending} className="flex-1 bg-[#2830B3] hover:bg-[#1E2699] disabled:opacity-60 disabled:cursor-not-allowed text-white font-archivo font-semibold text-sm uppercase tracking-wider py-4 rounded-[10px] transition-all hover:shadow-lg flex items-center justify-center gap-2">
                        <Mail className="w-5 h-5" />
                        {sending ? (en ? 'Sending…' : 'Envoi…') : (en ? 'Send by email' : 'Envoyer par e-mail')}
                      </button>
                    </div>
                  </Reveal>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
