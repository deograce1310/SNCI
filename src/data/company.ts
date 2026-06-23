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

  // === Envoi automatique du formulaire de contact ===
  // Pour recevoir les messages directement par e-mail (sans que l'utilisateur
  // ait a ouvrir son app mail) : creez un formulaire gratuit sur formspree.io
  // avec l'adresse ci-dessus, puis collez l'URL fournie ici, par exemple :
  //   formEndpoint: 'https://formspree.io/f/xxxxxxxx'
  // Tant que ce champ reste vide, le formulaire bascule sur l'envoi via
  // l'application mail (mailto) ou WhatsApp.
  formEndpoint: '',
} as const;

// Lien "tel:" propre (sans espaces) a partir d'un numero affiche
export const telHref = (phone: string) => `tel:${phone.replace(/\s+/g, '')}`;
