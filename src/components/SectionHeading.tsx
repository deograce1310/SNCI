import { useTranslation } from 'react-i18next';

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowKey?: string;
  title?: string;
  titleKey?: string;
  subtitle?: string;
  subtitleKey?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  eyebrowKey,
  title,
  titleKey,
  subtitle,
  subtitleKey,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  const { t } = useTranslation();

  const eyebrowText = eyebrowKey ? t(eyebrowKey) : eyebrow;
  const titleText = titleKey ? t(titleKey) : title;
  const subtitleText = subtitleKey ? t(subtitleKey) : subtitle;

  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {eyebrowText && (
        <div className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-red">
            {eyebrowText}
          </span>
        </div>
      )}
      <h2
        className={`font-archivo font-bold text-[clamp(28px,3vw,36px)] leading-tight tracking-tight ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {titleText}
      </h2>
      {subtitleText && (
        <p className={`mt-4 text-base leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-slate'}`}>
          {subtitleText}
        </p>
      )}
    </div>
  );
}
