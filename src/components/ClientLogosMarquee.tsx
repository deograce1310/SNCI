import { useTranslation } from 'react-i18next';
import { realClients } from '../data/projects';

function LogoItem({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex items-center justify-center px-5 py-2 shrink-0 h-16">
      {logo ? (
        <img
          src={logo}
          alt={name}
          className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300 object-contain"
          loading="lazy"
        />
      ) : (
        <span className="font-archivo font-bold text-xs text-[#0F1B33] whitespace-nowrap">
          {name}
        </span>
      )}
    </div>
  );
}

export default function ClientLogosMarquee() {
  const { t } = useTranslation();

  const row1 = realClients.slice(0, 10);
  const row2 = realClients.slice(10);

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 mb-7">
        <p className="text-center font-mono text-xs font-medium uppercase tracking-[0.08em] text-[#5B6678]">
          {t('clients.eyebrow')}
        </p>
        <h2 className="text-center font-archivo font-bold text-[clamp(24px,3vw,32px)] text-[#0F1B33] mt-3">
          {t('clients.title')}
        </h2>
      </div>

      <div className="relative mb-3">
        <div className="flex animate-marquee">
          {[...row1, ...row1].map((c, i) => (
            <LogoItem key={`r1-${i}`} name={c.name} logo={c.logo} />
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="flex animate-marquee-reverse">
          {[...row2, ...row2].map((c, i) => (
            <LogoItem key={`r2-${i}`} name={c.name} logo={c.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
