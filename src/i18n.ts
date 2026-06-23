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
        company: 'Societe des Nouvelles Constructions Industrielles',
        title: 'Votre partenaire industriel, de la soudure a la maintenance d\'usine.',
        subtitle: 'Des equipes qualifiees et certifiees qui realisent vos projets avec qualite et dans les delais — selon les normes internationales, onshore et offshore, partout en Afrique de l\'Ouest.',
        badge1: 'Personnel certifie',
        badge2: 'Normes internationales',
        badge3: 'Qualite & delais',
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
        subtitle: 'Fondee par un dirigeant fort de plusieurs annees d\'experience aux cotes des grandes entreprises industrielles de la sous-region ouest-africaine, SNCI reunit une equipe forte, professionnelle et hautement qualifiee, animee par le gout du travail bien fait et de l\'excellence industrielle.',
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
        p2: 'Fort de plusieurs annees d\'experience aux cotes des grandes entreprises industrielles de la sous-region ouest-africaine, notre dirigeant a su constituer une equipe forte, professionnelle et hautement qualifiee, animee par une seule devise : "offrir dans un bref delai et avec qualite des prestations certifiees a tous les clients".',
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
        company: 'Society of New Industrial Constructions',
        title: 'Your industrial partner, from welding to factory maintenance.',
        subtitle: 'Qualified and certified teams that deliver your projects with quality and on time — to international standards, onshore and offshore, across West Africa.',
        badge1: 'Certified personnel',
        badge2: 'International standards',
        badge3: 'Quality & on time',
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
        p2: 'With several years of experience alongside major industrial companies in the West African sub-region, our management has built a strong, professional and highly qualified team driven by a single motto: "to offer certified services to all customers in a short time and with quality".',
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
