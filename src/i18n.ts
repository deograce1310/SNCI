import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        about: 'À propos de nous',
        metiers: 'Nos prestations',
        engins: 'Vente d\'engins',
        equipe: 'Notre équipe',
        contact: 'Contact',
        contactBtn: 'Nous contacter',
      },
      hero: {
        eyebrow: 'Soudure — Chaudronnerie — Tuyauterie — Charpentes métalliques',
        company: 'Société des Nouvelles Constructions Industrielles',
        title: 'Votre partenaire industriel, de la soudure à la maintenance d\'usine.',
        subtitle: 'Des équipes qualifiées et professionnelles qui réalisent vos projets avec qualité et dans les délais, onshore et offshore, partout en Afrique de l\'Ouest.',
        badge1: 'Personnel qualifié',
        badge2: 'Savoir-faire professionnel',
        badge3: 'Qualité & délais',
      },
      dev: {
        motto: 'Offrir dans un bref délai et avec qualité des prestations professionnelles à tous les clients.',
      },
      metiers: {
        eyebrow: 'NOS PRESTATIONS',
        title: 'Nos prestations',
        subtitle: 'SNCI SARL est spécialisée dans les prestations suivantes :',
        soudure: 'Soudure Industrielle',
        chaudronnerie: 'Chaudronnerie',
        tuyauterie: 'Tuyauterie',
        charpentes: 'Construction des Charpentes métalliques',
        echafaudages: 'Échafaudages',
        sablage: 'Sablage',
        bardages: 'Bardages de Toitures',
        constructions: 'Constructions et maintenances d\'usine',
        consommables: 'Fourniture de consommables et matériels industriels',
        usinage: 'Usinage des pièces',
        personnel: 'Mise à disposition de personnels industriels qualifiés et professionnels',
        'onshore-offshore': 'Prestations de services onshore et offshore',
      },
      equipe: {
        eyebrow: 'NOTRE ÉQUIPE',
        title: 'Notre équipe',
        subtitle: 'Des profils qualifiés et professionnels pour chaque besoin industriel — soudure, chaudronnerie, tuyauterie, échafaudage et bien plus, onshore et offshore.',
        corpsMetier: 'Corps de métier disponibles',
      },
      clients: {
        eyebrow: 'NOS CLIENTS',
        title: 'Ils nous ont fait confiance',
        subtitle: 'Les sociétés qui ont essayé nos prestations ont été satisfaites par le respect des cahiers des charges et la réalisation des travaux selon les règles de l\'art.',
      },
      apropos: {
        eyebrow: 'À PROPOS DE NOUS',
        title: 'Société des Nouvelles Constructions Industrielles',
        p1: 'La société des Nouvelles Constructions Industrielles (SNCI) Sarl a été créée par un jeune et dynamique béninois ayant suivi toutes ses formations en soudure industrielle et chaudronnerie au sein de grandes écoles du Sénégal.',
        p2: 'Fort de plusieurs années d\'expérience aux côtés des grandes entreprises industrielles de la sous-région ouest-africaine, notre dirigeant a su constituer une équipe forte, professionnelle et hautement qualifiée, animée par une seule devise : « offrir dans un bref délai et avec qualité des prestations professionnelles à tous les clients ».',
        p3: 'SNCI SARL, bien qu\'étant une société béninoise, est opérationnelle partout où est implantée votre entreprise et ne ménage aucun effort pour prouver son professionnalisme. Confiez-lui votre projet et vous serez satisfaits de lui avoir fait confiance, car elle en fait une réalité dans le respect des normes de qualité internationale.',
      },
      footer: {
        company: 'SNCI SARL — Société des Nouvelles Constructions Industrielles',
        dg: '',
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About us',
        metiers: 'Our Services',
        engins: 'Equipment for sale',
        equipe: 'Our Team',
        contact: 'Contact',
        contactBtn: 'Contact us',
      },
      hero: {
        eyebrow: 'Welding — Boilermaking — Piping — Metal Frames',
        company: 'Society of New Industrial Constructions',
        title: 'Your industrial partner, from welding to factory maintenance.',
        subtitle: 'Qualified and professional teams that deliver your projects with quality and on time, onshore and offshore, across West Africa.',
        badge1: 'Qualified personnel',
        badge2: 'Professional know-how',
        badge3: 'Quality & on time',
      },
      dev: {
        motto: 'To offer professional services to all customers in a short time and with quality.',
      },
      metiers: {
        eyebrow: 'OUR SERVICES',
        title: 'Our Services',
        subtitle: 'SNCI SARL specializes in the following services:',
        soudure: 'Industrial Welding',
        chaudronnerie: 'Boilermaking',
        tuyauterie: 'Piping',
        charpentes: 'Construction of Metal Frames',
        echafaudages: 'Scaffolding',
        sablage: 'Sandblasting',
        bardages: 'Roof Cladding',
        constructions: 'Factory construction and maintenance',
        consommables: 'Supply of consumables and industrial equipment',
        usinage: 'Machining of parts',
        personnel: 'Provision of qualified and professional industrial personnel',
        'onshore-offshore': 'Onshore and offshore services',
      },
      equipe: {
        eyebrow: 'OUR TEAM',
        title: 'Our Team',
        subtitle: 'Qualified and professional profiles for every industrial need — welding, boilermaking, piping, scaffolding and much more, onshore and offshore.',
        corpsMetier: 'Available trades',
      },
      clients: {
        eyebrow: 'OUR CLIENTS',
        title: 'They trusted us',
        subtitle: 'The companies that have tried our services have been satisfied by the respect of the specifications and the realization of the works according to the rules of the art.',
      },
      apropos: {
        eyebrow: 'ABOUT US',
        title: 'Society of New Industrial Constructions',
        p1: 'The company of New Industrial Constructions (SNCI) Sarl was created by a young and dynamic Beninese who followed all his training in industrial welding and boilermaking within large schools in Senegal.',
        p2: 'With several years of experience alongside major industrial companies in the West African sub-region, our management has built a strong, professional and highly qualified team driven by a single motto: "to offer professional services to all customers in a short time and with quality".',
        p3: 'SNCI SARL, although a Beninese company, is operational wherever your company is located and spares no effort to prove its professionalism. Entrust her with your project and you will be satisfied to have trusted her, because she makes it a reality in compliance with international quality standards.',
      },
      footer: {
        company: 'SNCI SARL — Society of New Industrial Constructions',
        dg: '',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
