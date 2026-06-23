import {
  Flame, Cylinder, Waypoints, Building2, Construction,
  SprayCan, Layers, Factory, Package, Cog, Users, Anchor
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  title_en: string;
  image: string;
  desc: string;
  desc_en: string;
}

export const services: Service[] = [
  {
    slug: 'soudure', icon: Flame,
    title: 'Soudure Industrielle', title_en: 'Industrial Welding',
    image: '/images/metiers/soudeurs.jpg',
    desc: 'Assemblage permanent de pièces métalliques par fusion localisée avec ou sans métal d\'apport. Techniques TIG, MIG-MAG, arc électrique et soudure sur acier, inox et aluminium.',
    desc_en: 'Permanent assembly of metal parts by localized fusion with or without filler metal. TIG, MIG-MAG, arc welding techniques on steel, stainless steel and aluminum.',
  },
  {
    slug: 'chaudronnerie', icon: Cylinder,
    title: 'Chaudronnerie', title_en: 'Boilermaking',
    image: '/images/prestations/chaudronnerie.jpg',
    desc: 'Fabrication, assemblage et réparation de réservoirs, citernes, appareils sous pression et ouvrages chaudronnés sur mesure selon les normes industrielles.',
    desc_en: 'Manufacturing, assembly and repair of tanks, cisterns, pressure vessels and custom boilermade works according to industrial standards.',
  },
  {
    slug: 'tuyauterie', icon: Waypoints,
    title: 'Tuyauterie', title_en: 'Piping',
    image: '/images/prestations/tuyauterie.jpg',
    desc: 'Pose, assemblage et maintenance de réseaux de tuyauterie pour fluides industriels, hydrocarbures et gaz. Étude, traçage et installation complète des lignes de process.',
    desc_en: 'Installation, assembly and maintenance of piping networks for industrial fluids, hydrocarbons and gases. Study, tracing and complete installation of process lines.',
  },
  {
    slug: 'charpentes', icon: Building2,
    title: 'Construction des Charpentes métalliques', title_en: 'Construction of Metal Frames',
    image: '/images/prestations/charpentes.jpg',
    desc: 'Conception et réalisation de structures métalliques porteuses pour bâtiments industriels, hangars, passerelles et infrastructures lourdes.',
    desc_en: 'Design and construction of load-bearing metal structures for industrial buildings, hangars, walkways and heavy infrastructure.',
  },
  {
    slug: 'echafaudages', icon: Construction,
    title: 'Échafaudages', title_en: 'Scaffolding',
    image: '/images/prestations/echafaudages.jpg',
    desc: 'Montage et démontage d\'échafaudages industriels conformes aux normes de sécurité pour les travaux en hauteur, en milieu confiné et sur structures complexes.',
    desc_en: 'Assembly and dismantling of industrial scaffolding compliant with safety standards for work at height, in confined spaces and on complex structures.',
  },
  {
    slug: 'sablage', icon: SprayCan,
    title: 'Sablage', title_en: 'Sandblasting',
    image: '/images/prestations/sablage.jpg',
    desc: 'Préparation de surfaces par projection d\'abrasifs pour éliminer la rouille, les salissures et les anciennes peintures en vue d\'un traitement de protection anticorrosion.',
    desc_en: 'Surface preparation by abrasive blasting to remove rust, dirt and old paint for anti-corrosion protection treatment.',
  },
  {
    slug: 'bardages', icon: Layers,
    title: 'Bardages de Toitures', title_en: 'Roof Cladding',
    image: '/images/sectors/industrie-btp.jpg',
    desc: 'Installation de couvertures et bardages métalliques pour la protection et l\'étanchéité des bâtiments industriels, hangars et structures.',
    desc_en: 'Installation of metal roofing and cladding for the protection and waterproofing of industrial buildings, hangars and structures.',
  },
  {
    slug: 'constructions', icon: Factory,
    title: 'Constructions et maintenances d\'usine', title_en: 'Factory construction and maintenance',
    image: '/images/prestations/constructions.jpg',
    desc: 'Construction de bâtiments industriels, fondations, dalles, infrastructure et aménagement de sites. Maintenance préventive et curative des installations industrielles.',
    desc_en: 'Construction of industrial buildings, foundations, slabs, infrastructure and site development. Preventive and corrective maintenance of industrial installations.',
  },
  {
    slug: 'consommables', icon: Package,
    title: 'Fourniture de consommables et matériels industriels', title_en: 'Supply of consumables and industrial equipment',
    image: '/images/prestations/consommables.jpg',
    desc: 'Approvisionnement en matériaux, consommables, équipements de protection individuelle, outillage et fournitures techniques pour l\'industrie et la construction.',
    desc_en: 'Procurement of materials, consumables, personal protective equipment, tools and technical supplies for industry and construction.',
  },
  {
    slug: 'usinage', icon: Cog,
    title: 'Usinage des pièces', title_en: 'Machining of parts',
    image: '/images/prestations/usinage.jpg',
    desc: 'Fabrication de pièces mécaniques par enlèvement de matière. Usinage conventionnel et à commande numérique pour la réalisation de pièces sur mesure et de précision.',
    desc_en: 'Manufacturing of mechanical parts by material removal. Conventional and CNC machining for the production of custom and precision parts.',
  },
  {
    slug: 'personnel', icon: Users,
    title: 'Mise à disposition de personnels industriels qualifiés et certifiés', title_en: 'Provision of qualified and certified industrial personnel',
    image: '/images/prestations/personnel.jpg',
    desc: 'Placement de personnel qualifié et certifié : soudeurs, chaudronniers, tuyauteurs, monteurs, échafaudeurs et autres corps de métier pour vos chantiers.',
    desc_en: 'Placement of qualified and certified personnel: welders, boilermakers, pipe fitters, assemblers, scaffolders and other trades for your worksites.',
  },
  {
    slug: 'onshore-offshore', icon: Anchor,
    title: 'Prestations de services onshore et offshore', title_en: 'Onshore and offshore services',
    image: '/images/prestations/onshore-offshore.jpg',
    desc: 'Interventions industrielles sur installations terrestres (onshore) et en mer (offshore). Personnel qualifié pour les environnements les plus exigeants.',
    desc_en: 'Industrial interventions on onshore and offshore installations. Qualified personnel for the most demanding environments.',
  },
];

// === CORPS DE METIER EXACTS DU DOCUMENT ===
export interface JobFamily {
  title: string;
  title_en: string;
  jobs: string[];
  jobs_en: string[];
  image: string;
}

export const jobFamilies: JobFamily[] = [
  {
    title: 'Soudeurs', title_en: 'Welders',
    jobs: ['Soudeurs homologués de tous types', 'Soudeurs TIG et MIG-MAG', 'Soudeurs à l\'arc'],
    jobs_en: ['Approved welders of all types', 'TIG and MIG-MAG welders', 'Arc welders'],
    image: '/images/metiers/soudeurs.jpg',
  },
  {
    title: 'Chaudronniers et Monteurs', title_en: 'Boilermakers and Assemblers',
    jobs: ['Chaudronniers', 'Monteurs'],
    jobs_en: ['Boilermakers', 'Assemblers'],
    image: '/images/metiers/chaudronniers-monteurs.jpg',
  },
  {
    title: 'Tuyauteurs et Échafaudeurs', title_en: 'Pipe Fitters and Scaffolders',
    jobs: ['Tuyauteurs', 'Échafaudeurs'],
    jobs_en: ['Pipe fitters', 'Scaffolders'],
    image: '/images/metiers/tuyauteurs-scalfodeurs.jpg',
  },
  {
    title: 'Dessinateurs – Traceurs – Projeteurs', title_en: 'Designers – Plotters – Projectors',
    jobs: ['Dessinateurs – Traceurs – Projeteurs'],
    jobs_en: ['Designers – Plotters – Projectors'],
    image: '/images/metiers/dessinateurs.jpg',
  },
  {
    title: 'Sableurs et Peintres', title_en: 'Sandblasters and Painters',
    jobs: ['Sableurs', 'Peintres'],
    jobs_en: ['Sandblasters', 'Painters'],
    image: '/images/metiers/sableurs-peintres.jpg',
  },
  {
    title: 'Manœuvres et Électriciens', title_en: 'Laborers and Electricians',
    jobs: ['Manœuvres', 'Électriciens'],
    jobs_en: ['Laborers', 'Electricians'],
    image: '/images/metiers/manoeuvres-electriciens.jpg',
  },
  {
    title: 'Métiers spécialisés', title_en: 'Specialized trades',
    jobs: ['Grutiers', 'Fumistes', 'Calorifugeurs', 'Électromécaniciens'],
    jobs_en: ['Crane operators', 'Stove fitters', 'Insulators', 'Electromechanics'],
    image: '/images/metiers/divers.jpg',
  },
];

export const jobCategories = [
  'Soudeurs homologués de tous types',
  'Soudeurs TIG et MIG-MAG',
  'Soudeurs à l\'arc',
  'Chaudronniers',
  'Monteurs',
  'Sableurs',
  'Tuyauteurs',
  'Échafaudeurs',
  'Dessinateurs – Traceurs – Projeteurs',
  'Peintres',
  'Manœuvres',
  'Électriciens',
  'Grutiers',
  'Fumistes',
  'Calorifugeurs',
  'Électromécaniciens',
];

export const jobCategories_en = [
  'Approved welders of all types',
  'TIG and MIG-MAG welders',
  'Arc welders',
  'Boilermakers',
  'Assemblers',
  'Sandblasters',
  'Pipe fitters',
  'Scaffolders',
  'Designers – Plotters – Projectors',
  'Painters',
  'Laborers',
  'Electricians',
  'Crane operators',
  'Stove fitters',
  'Insulators',
  'Electromechanics',
];
