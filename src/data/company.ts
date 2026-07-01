// === Coordonnees officielles SNCI SARL ===
// Source : document "Demande d'agrement" (en-tete / pied de page).

export const company = {
  name: 'SNCI SARL',
  fullName: 'Société des Nouvelles Constructions Industrielles',
  email: 'snciconstructionindustriel@gmail.com',
  phones: ['+229 01 62 15 26 35', '+229 01 97 35 14 45'],
  // Numéro WhatsApp (2e numéro) au format international sans espaces ni "+"
  whatsapp: '2290197351445',
  address: 'Aïbatin',
  city: 'Cotonou',
  country: 'Bénin',
  website: 'www.snci-group.com',
  websiteUrl: 'https://www.snci-group.com',
  rccm: 'RB/COT/17 B 17890',
  ifu: '3201700182915',
} as const;

// Lien "tel:" propre (sans espaces) a partir d'un numero affiche
export const telHref = (phone: string) => `tel:${phone.replace(/\s+/g, '')}`;
