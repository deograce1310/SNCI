import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        about: 'A propos',
        metiers: 'Nos prestations',
        equipe: 'Notre equipe',
        contact: 'Contact',
        contactBtn: 'Nous contacter',
      },
      hero: {
        eyebrow: 'Soudure — Chaudronnerie — Tuyauterie — Charpentes metalliques',
        title: 'Societe des Nouvelles Constructions Industrielles',
        subtitle: 'Jeune entreprise beninoise specialisée dans la soudure industrielle, la chaudronnerie, la tuyauterie, la construction des charpentes metalliques et des echafaudages, le sablage, les bardages de toitures, les constructions et maintenances d\'usine, la fourniture de consommables et materiels industriels, l\'usinage des pieces, la mise a disposition de personnels industriels qualifies et certifies, et prestations de services onshore et offshore.',
      },
      dev: {
        motto: 'Offrir dans un bref delai et avec qualite des prestations certifiees a tous les clients.',
      },
      metiers: {
        eyebrow: 'NOS PRESTATIONS',
        title: 'Nos prestations',
        subtitle: 'SNCI SARL est specialisee dans les prestations suivantes :',
        soudure: 'Soudure Industrielle',
        chaudronnerie: 'Chaudronnerie',
        tuyauterie: 'Tuyauterie',
        charpentes: 'Construction des Charpentes metalliques',
        echafaudages: 'Echafaudages',
        sablage: 'Sablage',
        bardages: 'Bardages de Toitures',
        constructions: 'Constructions et maintenances d\'usine',
        consommables: 'Fourniture de consommables et materiels industriels',
        usinage: 'Usinage des pieces',
        personnel: 'Mise a disposition de personnels industriels qualifies et certifies',
        'onshore-offshore': 'Prestations de services onshore et offshore',
      },
      equipe: {
        eyebrow: 'NOTRE EQUIPE',
        title: 'Notre equipe',
        subtitle: 'Monsieur Brice Aime ADEOKO, fort de ses annees d\'experiences aux cotes des grandes entreprises industrielles de la sous-region ouest africaine, est un amoureux du beau, de la perfection et de la revolution industrielle. Ses qualites d\'industriel de nouvelle generation, lui ont permis de constituer une equipe forte, professionnelle et hautement qualifiee.',
        corpsMetier: 'Corps de metier disponibles',
      },
      clients: {
        eyebrow: 'NOS CLIENTS',
        title: 'Ils nous ont fait confiance',
        subtitle: 'Les societes qui ont essaye nos prestations ont ete satisfaites par le respect des cahiers de charges et la realisation des travaux selon les regles de l\'art.',
      },
      entreprise: {
        eyebrow: 'L\'ENTREPRISE',
        title: 'Societe des Nouvelles Constructions Industrielles',
        p1: 'La societe des Nouvelles Constructions Industrielles (SNCI) Sarl a ete creee par un jeune et dynamique beninois ayant suivi toutes ses formations dotees de certifications en soudure industrielle, chaudronnerie au sein de grandes ecoles du Senegal.',
        p2: 'Monsieur Brice Aime ADEOKO, fort de ses annees d\'experiences aux cotes des grandes entreprises industrielles de la sous-region ouest africaine, est un amoureux du beau, de la perfection et de la revolution industrielle. Ses qualites d\'industriel de nouvelle generation, lui ont permis de constituer une equipe forte, professionnelle et hautement qualifiee qui n\'a qu\'une seule devise : "offrir dans un bref delai et avec qualite des prestations certifiees a tous les clients".',
        p3: 'SNCI SARL bien qu\'etant une societe beninoise est operationnelle partout ou est implantee votre entreprise et ne menage aucun effort pour prouver son professionnalisme. Confiez-lui votre projet et vous serez satisfaits de lui avoir fait confiance, car elle en fait une realite dans le respect des normes de qualite internationale.',
      },
      footer: {
        company: 'SNCI SARL — Societe des Nouvelles Constructions Industrielles',
        dg: '',
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        metiers: 'Our Services',
        equipe: 'Our Team',
        contact: 'Contact',
        contactBtn: 'Contact us',
      },
      hero: {
        eyebrow: 'Welding — Boilermaking — Piping — Metal Frames',
        title: 'Society of New Industrial Constructions',
        subtitle: 'A young Beninese company specializing in industrial welding, boilermaking, piping, construction of metal frames and scaffolding, sandblasting, roof cladding, factory construction and maintenance, supply of consumables and industrial equipment, machining of parts, provision of qualified and certified industrial personnel, and onshore and offshore services.',
      },
      dev: {
        motto: 'To offer certified services to all customers in a short time and with quality.',
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
        personnel: 'Provision of qualified and certified industrial personnel',
        'onshore-offshore': 'Onshore and offshore services',
      },
      equipe: {
        eyebrow: 'OUR TEAM',
        title: 'Our Team',
        subtitle: 'SNCI SARL is a young Beninese company specializing in industrial construction and maintenance in West Africa.',
        corpsMetier: 'Available trades',
      },
      clients: {
        eyebrow: 'OUR CLIENTS',
        title: 'They trusted us',
        subtitle: 'The companies that have tried our services have been satisfied by the respect of the specifications and the realization of the works according to the rules of the art.',
      },
      entreprise: {
        eyebrow: 'THE COMPANY',
        title: 'Society of New Industrial Constructions',
        p1: 'The company of New Industrial Constructions (SNCI) Sarl was created by a young and dynamic Beninese who followed all his training in industrial welding, boilermaking with certifications within large schools in Senegal.',
        p2: 'Mr. Brice Aime ADEOKO, with his years of experience alongside major industrial companies in the West African sub-region, is a lover of beauty, perfection and the industrial revolution. His qualities as a new-generation industrialist have enabled him to build a strong, professional and highly qualified team with only one motto: "to offer certified services to all customers in a short time and with quality".',
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
