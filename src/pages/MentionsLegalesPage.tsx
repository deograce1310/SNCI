import { useTranslation } from 'react-i18next';
import { company, telHref } from '../data/company';

export default function MentionsLegalesPage() {
  const { i18n } = useTranslation();
  const en = i18n.language === 'en';

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
            <span className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-[#CF0D0D]">LEGAL</span>
          </div>
          <h1 className="font-archivo font-bold text-[40px] text-[#0A090E]">{en ? 'Legal notices' : 'Mentions légales'}</h1>
        </div>
      </section>

      {/* Contenu — blanc */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-5 lg:px-10 space-y-10">

          {/* Éditeur */}
          <div>
            <h2 className="font-archivo font-bold text-xl text-[#0A090E] mb-4">{en ? 'Site publisher' : 'Éditeur du site'}</h2>
            <div className="text-[15px] text-[#475479] leading-relaxed space-y-1">
              <p><strong className="text-[#0A090E]">{company.name}</strong> — {company.fullName}</p>
              <p>{en ? 'Legal form: limited liability company (SARL)' : 'Forme juridique : société à responsabilité limitée (SARL)'}</p>
              <p>{en ? 'Registered office' : 'Siège social'} : {company.address}, {company.city}, {company.country}</p>
              <p>RCCM : {company.rccm}</p>
              <p>IFU : {company.ifu}</p>
              <p>
                Email : <a href={`mailto:${company.email}`} className="text-[#2830B3] hover:underline">{company.email}</a>
              </p>
              <p>
                {en ? 'Phone' : 'Téléphone'} :{' '}
                {company.phones.map((p, idx) => (
                  <span key={p}>
                    <a href={telHref(p)} className="text-[#2830B3] hover:underline">{p}</a>
                    {idx < company.phones.length - 1 ? ' / ' : ''}
                  </span>
                ))}
              </p>
              <p>
                {en ? 'Website' : 'Site web'} :{' '}
                <a href={company.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-[#2830B3] hover:underline">{company.website}</a>
              </p>
            </div>
          </div>

          {/* Directeur de la publication */}
          <div>
            <h2 className="font-archivo font-bold text-xl text-[#0A090E] mb-4">{en ? 'Publication director' : 'Directeur de la publication'}</h2>
            <p className="text-[15px] text-[#475479] leading-relaxed">
              {en
                ? `The management of ${company.name}.`
                : `La Direction Générale de ${company.name}.`}
            </p>
          </div>

          {/* Hébergeur */}
          <div>
            <h2 className="font-archivo font-bold text-xl text-[#0A090E] mb-4">{en ? 'Hosting' : 'Hébergeur'}</h2>
            <div className="text-[15px] text-[#475479] leading-relaxed space-y-1">
              <p><strong className="text-[#0A090E]">Netlify, Inc.</strong></p>
              <p>512 2nd Street, Suite 200, San Francisco, CA 94107, {en ? 'United States' : 'États-Unis'}</p>
              <p>
                <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-[#2830B3] hover:underline">www.netlify.com</a>
              </p>
            </div>
          </div>

          {/* Propriété intellectuelle */}
          <div>
            <h2 className="font-archivo font-bold text-xl text-[#0A090E] mb-4">{en ? 'Intellectual property' : 'Propriété intellectuelle'}</h2>
            <p className="text-[15px] text-[#475479] leading-relaxed">
              {en
                ? `All content on this site (texts, images, logos, graphics) is the exclusive property of ${company.name}. Any reproduction, representation or distribution, in whole or in part, without prior written permission, is prohibited.`
                : `L'ensemble du contenu de ce site (textes, images, logos, éléments graphiques) est la propriété exclusive de ${company.name}. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation préalable écrite, est interdite.`}
            </p>
          </div>

          {/* Données personnelles */}
          <div>
            <h2 className="font-archivo font-bold text-xl text-[#0A090E] mb-4">{en ? 'Personal data' : 'Données personnelles'}</h2>
            <p className="text-[15px] text-[#475479] leading-relaxed">
              {en
                ? `The information you send us through the contact form (via WhatsApp) is used solely to respond to your request and is never shared with third parties. To exercise your rights of access, rectification or deletion, contact us at ${company.email}.`
                : `Les informations que vous nous transmettez via le formulaire de contact (par WhatsApp) sont utilisées uniquement pour répondre à votre demande et ne sont jamais cédées à des tiers. Pour exercer vos droits d'accès, de rectification ou de suppression, contactez-nous à ${company.email}.`}
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
