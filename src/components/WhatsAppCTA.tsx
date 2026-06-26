import Reveal from './Reveal';
import WhatsAppIcon from './icons/WhatsAppIcon';

interface WhatsAppCTAProps {
  title: string;
  subtitle: string;
  href: string;
  buttonLabel: string;
}

/** Bloc d'appel à l'action WhatsApp (réutilisé sous les grilles Prestations & Engins). */
export default function WhatsAppCTA({ title, subtitle, href, buttonLabel }: WhatsAppCTAProps) {
  return (
    <Reveal>
      <div className="mt-14 text-center">
        <p className="font-archivo font-semibold text-lg text-[#0A090E]">{title}</p>
        <p className="text-[#475479] mt-2 mb-6 max-w-md mx-auto">{subtitle}</p>
        <a href={href} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:brightness-95 text-white font-archivo font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-[10px] transition-all hover:shadow-lg">
          <WhatsAppIcon className="w-5 h-5" />
          {buttonLabel}
        </a>
      </div>
    </Reveal>
  );
}
