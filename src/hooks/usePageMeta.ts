import { useEffect } from 'react';

const BASE_URL = 'https://www.snci-group.com';

interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  lang?: string;
  noindex?: boolean;
}

function setMeta(selector: string, attr: string, value: string) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

export function usePageMeta({ title, description, canonical, lang = 'fr', noindex = false }: PageMeta) {
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang;

    const url = `${BASE_URL}${canonical}`;

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[name="robots"]', 'content', noindex ? 'noindex, nofollow' : 'index, follow');
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:locale"]', 'content', lang === 'en' ? 'en_US' : 'fr_FR');
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
  }, [title, description, canonical, lang, noindex]);
}
