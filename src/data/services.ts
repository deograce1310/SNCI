import {
  Flame, Cylinder, GitBranch, Building2, RectangleVertical,
  Wind, Layers, Factory, Package, Cog, Users, Anchor
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
    image: '/images/prestations/soudure.jpg',
    desc: 'Assemblage permanent de pieces metalliques par fusion localisee avec ou sans metal d\'apport. Techniques TIG, MIG-MAG, arc electrique et soudure sur acier, inox et aluminium.',
    desc_en: 'Permanent assembly of metal parts by localized fusion with or without filler metal. TIG, MIG-MAG, arc welding techniques on steel, stainless steel and aluminum.',
  },
  {
    slug: 'chaudronnerie', icon: Cylinder,
    title: 'Chaudronnerie', title_en: 'Boilermaking',
    image: '/images/prestations/chaudronnerie.jpg',
    desc: 'Fabrication, assemblage et reparation de reservoirs, citernes, appareils sous pression et ouvrages chaudronnes sur mesure selon les normes industrielles.',
    desc_en: 'Manufacturing, assembly and repair of tanks, cisterns, pressure vessels and custom boilermade works according to industrial standards.',
  },
  {
    slug: 'tuyauterie', icon: GitBranch,
    title: 'Tuyauterie', title_en: 'Piping',
    image: '/images/prestations/tuyauterie.jpg',
    desc: 'Pose, assemblage et maintenance de reseaux de tuyauterie pour fluides industriels, hydrocarbures et gaz. Etude, tracage et installation complete des lignes de process.',
    desc_en: 'Installation, assembly and maintenance of piping networks for industrial fluids, hydrocarbons and gases. Study, tracing and complete installation of process lines.',
  },
  {
    slug: 'charpentes', icon: Building2,
    title: 'Construction des Charpentes metalliques', title_en: 'Construction of Metal Frames',
    image: '/images/prestations/charpentes.jpg',
    desc: 'Conception et realisation de structures metalliques porteuses pour batiments industriels, hangars, passerelles et infrastructures lourdes.',
    desc_en: 'Design and construction of load-bearing metal structures for industrial buildings, hangars, walkways and heavy infrastructure.',
  },
  {
    slug: 'echafaudages', icon: RectangleVertical,
    title: 'Echafaudages', title_en: 'Scaffolding',
    image: '/images/prestations/echafaudages.jpg',
    desc: 'Montage et demontage d\'echafaudages industriels conformes aux normes de securite pour les travaux en hauteur, en milieu confine et sur structures complexes.',
    desc_en: 'Assembly and dismantling of industrial scaffolding compliant with safety standards for work at height, in confined spaces and on complex structures.',
  },
  {
    slug: 'sablage', icon: Wind,
    title: 'Sablage', title_en: 'Sandblasting',
    image: '/images/prestations/sablage.jpg',
    desc: 'Preparation de surfaces par projection d\'abrasifs pour eliminer la rouille, les salissures et les anciennes peintures en vue d\'un traitement de protection anticorrosion.',
    desc_en: 'Surface preparation by abrasive blasting to remove rust, dirt and old paint for anti-corrosion protection treatment.',
  },
  {
    slug: 'bardages', icon: Layers,
    title: 'Bardages de Toitures', title_en: 'Roof Cladding',
    image: '/images/prestations/bardages.jpg',
    desc: 'Installation de couvertures et bardages metalliques pour la protection et l\'etancheite des batiments industriels, hangars et structures.',
    desc_en: 'Installation of metal roofing and cladding for the protection and waterproofing of industrial buildings, hangars and structures.',
  },
  {
    slug: 'constructions', icon: Factory,
    title: 'Constructions et maintenances d\'usine', title_en: 'Factory construction and maintenance',
    image: '/images/prestations/constructions.jpg',
    desc: 'Construction de batiments industriels, fondations, dalles, infrastructure et aménagement de sites. Maintenance preventive et curative des installations industrielles.',
    desc_en: 'Construction of industrial buildings, foundations, slabs, infrastructure and site development. Preventive and corrective maintenance of industrial installations.',
  },
  {
    slug: 'consommables', icon: Package,
    title: 'Fourniture de consommables et materiels industriels', title_en: 'Supply of consumables and industrial equipment',
    image: '/images/prestations/consommables.jpg',
    desc: 'Approvisionnement en materiaux, consommables, equipements de protection individuelle, outillage et fournitures techniques pour l\'industrie et la construction.',
    desc_en: 'Procurement of materials, consumables, personal protective equipment, tools and technical supplies for industry and construction.',
  },
  {
    slug: 'usinage', icon: Cog,
    title: 'Usinage des pieces', title_en: 'Machining of parts',
    image: '/images/prestations/usinage.jpg',
    desc: 'Fabrication de pieces mecaniques par enlevement de matiere. Using conventionnel et a commande numerique pour la realisation de pieces sur mesure et de precision.',
    desc_en: 'Manufacturing of mechanical parts by material removal. Conventional and CNC machining for the production of custom and precision parts.',
  },
  {
    slug: 'personnel', icon: Users,
    title: 'Mise a disposition de personnels industriels qualifies et certifies', title_en: 'Provision of qualified and certified industrial personnel',
    image: '/images/prestations/personnel.jpg',
    desc: 'Placement de personnel qualifie et certifie : soudeurs, chaudronniers, tuyauteurs, monteurs, echafaudeurs et autres corps de metier pour vos chantiers.',
    desc_en: 'Placement of qualified and certified personnel: welders, boilermakers, pipe fitters, assemblers, scaffolders and other trades for your worksites.',
  },
  {
    slug: 'onshore-offshore', icon: Anchor,
    title: 'Prestations de services onshore et offshore', title_en: 'Onshore and offshore services',
    image: '/images/prestations/onshore-offshore.jpg',
    desc: 'Interventions industrielles sur installations terrestres (onshore) et en mer (offshore). Personnel qualifie pour les environnements les plus exigeants.',
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
    jobs: ['Soudeurs homologues de tous types', 'Soudeurs TIG et MIG-MAG', 'Soudeurs a l\'arc'],
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
    title: 'Tuyauteurs et Scalfodeurs', title_en: 'Pipe Fitters and Scaffolders',
    jobs: ['Tuyauteurs', 'Scalfodeurs'],
    jobs_en: ['Pipe fitters', 'Scaffolders'],
    image: '/images/metiers/tuyauteurs-scalfodeurs.jpg',
  },
  {
    title: 'Dessinateurs – Traceurs – Projecteurs', title_en: 'Designers – Plotters – Projectors',
    jobs: ['Dessinateurs – Traceurs – Projecteurs'],
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
    title: 'Manoeuvres et Electriciens', title_en: 'Laborers and Electricians',
    jobs: ['Manoeuvres', 'Electriciens'],
    jobs_en: ['Laborers', 'Electricians'],
    image: '/images/metiers/manoeuvres-electriciens.jpg',
  },
  {
    title: 'Metiers specialises', title_en: 'Specialized trades',
    jobs: ['Grutiers', 'Fumistes', 'Calorifugeurs', 'Electromecaniciens'],
    jobs_en: ['Crane operators', 'Stove fitters', 'Insulators', 'Electromechanics'],
    image: '/images/metiers/divers.jpg',
  },
];

export const jobCategories = [
  'Soudeurs homologues de tous types',
  'Soudeurs TIG et MIG-MAG',
  'Soudeurs a l\'arc',
  'Chaudronniers',
  'Monteurs',
  'Sableurs',
  'Tuyauteurs',
  'Scalfodeurs',
  'Dessinateurs – Traceurs – Projecteurs',
  'Peintres',
  'Manoeuvres',
  'Electriciens',
  'Grutiers',
  'Fumistes',
  'Calorifugeurs',
  'Electromecaniciens',
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
