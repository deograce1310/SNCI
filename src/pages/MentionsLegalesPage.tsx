import { useTranslation } from 'react-i18next';

export default function MentionsLegalesPage() {
  const { i18n } = useTranslation();

  return (
    <>
      <section className="bg-[#F6F2F2] pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex flex-col gap-[3px]">
              <div className="w-5 h-[2px] bg-[#CF0D0D] rounded-full" />
              <div className="w-5 h-[2px] bg-[#CF0D0D] rounded-full" />
            </div>
            <span className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-[#CF0D0D]">LEGAL</span>
          </div>
          <h1 className="font-archivo font-bold text-[40px] text-[#0A090E]">{i18n.language === 'en' ? 'Legal notices' : 'Mentions légales'}</h1>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-5 lg:px-10 space-y-10">
          <div>
            <h2 className="font-archivo font-bold text-xl text-[#0A090E] mb-4">{i18n.language === 'en' ? 'Publisher' : 'Éditeur du site'}</h2>
            <div className="text-[15px] text-[#475479] leading-relaxed space-y-1">
              <p><strong className="text-[#0A090E]">SNCI SARL</strong></p>
              <p>{i18n.language === 'en' ? 'Society of New Industrial Constructions' : 'Société des Nouvelles Constructions Industrielles'}</p>
            </div>
          </div>
          <div>
            <h2 className="font-archivo font-bold text-xl text-[#0A090E] mb-4">{i18n.language === 'en' ? 'Intellectual property' : 'Propriété intellectuelle'}</h2>
            <p className="text-[15px] text-[#475479] leading-relaxed">
              {i18n.language === 'en'
                ? 'All content on this site is the exclusive property of SNCI SARL. Any reproduction without prior written permission is prohibited.'
                : "L'ensemble du contenu de ce site est la propriété exclusive de SNCI SARL. Toute reproduction sans autorisation préalable écrite est interdite."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
