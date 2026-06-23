// === Coordonnees officielles SNCI SARL ===
// Source : document "Demande d'agrement" (en-tete / pied de page).

export const company = {
  name: 'SNCI SARL',
  fullName: 'Societe des Nouvelles Constructions Industrielles',
  email: 'snciconstructionindustriel@gmail.com',
  phones: ['+229 97 23 91 33', '+229 62 15 26 35'],
  // Numero WhatsApp au format international sans espaces ni "+"
  whatsapp: '22997239133',
  address: 'Calavi Aitchedji',
  city: 'Cotonou',
  country: 'Benin',
  website: 'www.snci-group.com',
  websiteUrl: 'https://www.snci-group.com',
  rccm: 'RB/COT/17 B 17890',
  ifu: '3201700182915',
} as const;

// Lien "tel:" propre (sans espaces) a partir d'un numero affiche
export const telHref = (phone: string) => `tel:${phone.replace(/\s+/g, '')}`;
