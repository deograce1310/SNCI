import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Send } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function ContactPage() {
  const { i18n } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            {i18n.language === 'en' ? 'Contact us' : 'Contactez-nous'}
          </h1>
          <p className="text-lg text-[#475479] mt-4 max-w-xl">
            {i18n.language === 'en'
              ? 'Tell us about your project. We will get back to you as soon as possible.'
              : 'Parlez-nous de votre projet. Nous vous repondrons dans les plus brefs delais.'}
          </p>
        </div>
      </section>

      {/* Form — blanc */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[600px] mx-auto px-5 lg:px-10">
          {submitted ? (
            <Reveal>
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#F6F2F2] flex items-center justify-center mx-auto mb-5">
                  <Check className="w-7 h-7 text-[#2830B3]" />
                </div>
                <h3 className="font-archivo font-bold text-xl text-[#0A090E]">
                  {i18n.language === 'en' ? 'Message sent!' : 'Message envoye !'}
                </h3>
                <p className="text-[#475479] mt-2">
                  {i18n.language === 'en' ? 'Thank you. We will contact you soon.' : 'Merci. Nous vous contacterons prochainement.'}
                </p>
              </div>
            </Reveal>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <Reveal>
                <label className="block text-sm font-medium text-[#0A090E] mb-1.5">{i18n.language === 'en' ? 'Name' : 'Nom'}</label>
                <input type="text" required value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F6F2F2] border border-transparent focus:border-[#0A090E] rounded-lg focus:outline-none transition-colors" />
              </Reveal>
              <Reveal delay={0.05}>
                <label className="block text-sm font-medium text-[#0A090E] mb-1.5">Email</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F6F2F2] border border-transparent focus:border-[#0A090E] rounded-lg focus:outline-none transition-colors" />
              </Reveal>
              <Reveal delay={0.1}>
                <label className="block text-sm font-medium text-[#0A090E] mb-1.5">{i18n.language === 'en' ? 'Subject' : 'Sujet'}</label>
                <input type="text" required value={form.sujet} onChange={(e) => setForm({ ...form, sujet: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F6F2F2] border border-transparent focus:border-[#0A090E] rounded-lg focus:outline-none transition-colors" />
              </Reveal>
              <Reveal delay={0.15}>
                <label className="block text-sm font-medium text-[#0A090E] mb-1.5">{i18n.language === 'en' ? 'Message' : 'Message'}</label>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F6F2F2] border border-transparent focus:border-[#0A090E] rounded-lg focus:outline-none transition-colors resize-none" />
              </Reveal>
              <Reveal delay={0.2}>
                <button type="submit" className="w-full bg-[#2830B3] hover:bg-[#1E2699] text-white font-archivo font-semibold text-sm uppercase tracking-wider py-4 rounded-[10px] transition-all hover:shadow-lg flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  {i18n.language === 'en' ? 'Send' : 'Envoyer'}
                </button>
              </Reveal>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
