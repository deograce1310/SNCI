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
  shortDesc: string;
  shortDesc_en: string;
  image: string;
  desc: string;
  desc_en: string;
  details: string;
  details_en: string;
  points: string[];
  points_en: string[];
}

export const services: Service[] = [
  {
    slug: 'soudure', icon: Flame,
    title: 'Soudure Industrielle', title_en: 'Industrial Welding',
    shortDesc: 'Assemblage de pièces métalliques par fusion (TIG, MIG-MAG, arc) sur acier, inox et aluminium.',
    shortDesc_en: 'Metal parts joined by fusion (TIG, MIG-MAG, arc) on steel, stainless steel and aluminium.',
    image: '/images/gallery/soudure-pro.jpg',
    desc: 'Assemblage permanent de pièces métalliques par fusion localisée avec ou sans métal d\'apport. Techniques TIG, MIG-MAG, arc électrique et soudure sur acier, inox et aluminium.',
    desc_en: 'Permanent assembly of metal parts by localized fusion with or without filler metal. TIG, MIG-MAG, arc welding techniques on steel, stainless steel and aluminum.',
    details: 'Nos soudeurs qualifiés interviennent sur tous types d\'assemblages, en atelier comme sur site, dans le respect des modes opératoires de soudage. Chaque cordon est exécuté avec soin pour garantir la résistance mécanique et l\'étanchéité de l\'ouvrage.',
    details_en: 'Our qualified welders handle all types of assemblies, in the workshop and on site, following approved welding procedures. Every weld bead is executed carefully to ensure the mechanical strength and tightness of the work.',
    points: ['Soudure TIG, MIG-MAG et à l\'arc électrique', 'Acier, inox et aluminium', 'Soudeurs qualifiés de tous types', 'Interventions en atelier et sur chantier', 'Contrôle qualité des soudures'],
    points_en: ['TIG, MIG-MAG and arc welding', 'Steel, stainless steel and aluminium', 'Qualified welders of all types', 'Workshop and on-site work', 'Weld quality control'],
  },
  {
    slug: 'chaudronnerie', icon: Cylinder,
    title: 'Chaudronnerie', title_en: 'Boilermaking',
    shortDesc: 'Fabrication et réparation de réservoirs, citernes et appareils sous pression sur mesure.',
    shortDesc_en: 'Custom manufacture and repair of tanks, cisterns and pressure vessels.',
    image: '/images/gallery/cuve-rouge.jpg',
    desc: 'Fabrication, assemblage et réparation de réservoirs, citernes, appareils sous pression et ouvrages chaudronnés sur mesure selon les normes industrielles.',
    desc_en: 'Manufacturing, assembly and repair of tanks, cisterns, pressure vessels and custom boilermade works according to industrial standards.',
    details: 'De la lecture de plan à la mise en forme et à l\'assemblage, nous fabriquons et réparons des ouvrages chaudronnés sur mesure adaptés à vos contraintes de process : réservoirs, citernes, cuves, trémies et appareils sous pression.',
    details_en: 'From reading the drawings to forming and assembly, we manufacture and repair custom boilermade works tailored to your process requirements: tanks, cisterns, vessels, hoppers and pressure equipment.',
    points: ['Réservoirs, citernes et cuves de stockage', 'Appareils sous pression', 'Tôlerie et mise en forme (roulage, pliage)', 'Fabrication sur mesure', 'Réparation et rénovation d\'ouvrages existants'],
    points_en: ['Tanks, cisterns and storage vessels', 'Pressure equipment', 'Sheet metal forming (rolling, bending)', 'Custom fabrication', 'Repair and refurbishment of existing works'],
  },
  {
    slug: 'tuyauterie', icon: Waypoints,
    title: 'Tuyauterie', title_en: 'Piping',
    shortDesc: 'Pose et maintenance de réseaux de tuyauterie pour fluides, hydrocarbures et gaz.',
    shortDesc_en: 'Installation and maintenance of piping networks for fluids, hydrocarbons and gas.',
    image: '/images/gallery/tuyauterie-site.jpg',
    desc: 'Pose, assemblage et maintenance de réseaux de tuyauterie pour fluides industriels, hydrocarbures et gaz. Étude, traçage et installation complète des lignes de process.',
    desc_en: 'Installation, assembly and maintenance of piping networks for industrial fluids, hydrocarbons and gases. Study, tracing and complete installation of process lines.',
    details: 'Nous étudions, préfabriquons et installons vos lignes de tuyauterie pour le transport de fluides, d\'hydrocarbures et de gaz. Traçage, débit, accostage et soudage des piquages sont réalisés selon les règles de l\'art, puis testés avant mise en service.',
    details_en: 'We study, prefabricate and install your piping lines for the transport of fluids, hydrocarbons and gas. Tracing, cutting, fit-up and welding of branches are carried out to best practice, then tested before commissioning.',
    points: ['Réseaux pour fluides, hydrocarbures et gaz', 'Préfabrication et montage sur site', 'Traçage et installation des lignes de process', 'Piquages, supports et accessoires', 'Tests et mise en service'],
    points_en: ['Networks for fluids, hydrocarbons and gas', 'Prefabrication and on-site assembly', 'Tracing and installation of process lines', 'Branches, supports and accessories', 'Testing and commissioning'],
  },
  {
    slug: 'charpentes', icon: Building2,
    title: 'Construction des Charpentes métalliques', title_en: 'Construction of Metal Frames',
    shortDesc: 'Conception et montage de structures métalliques porteuses pour bâtiments et infrastructures.',
    shortDesc_en: 'Design and assembly of load-bearing steel structures for buildings and infrastructure.',
    image: '/images/gallery/charpentes-soudure.jpg',
    desc: 'Conception et réalisation de structures métalliques porteuses pour bâtiments industriels, hangars, passerelles et infrastructures lourdes.',
    desc_en: 'Design and construction of load-bearing metal structures for industrial buildings, hangars, walkways and heavy infrastructure.',
    details: 'De l\'étude à la pose, nous concevons et montons des structures métalliques porteuses pour bâtiments industriels, hangars, passerelles et plateformes. Des ouvrages dimensionnés et assemblés pour la durabilité et la sécurité.',
    details_en: 'From design to installation, we engineer and erect load-bearing steel structures for industrial buildings, hangars, walkways and platforms — built and assembled for durability and safety.',
    points: ['Bâtiments industriels et hangars', 'Passerelles et plateformes', 'Étude, fabrication et montage', 'Assemblage boulonné et soudé', 'Ouvrages dimensionnés selon les normes'],
    points_en: ['Industrial buildings and hangars', 'Walkways and platforms', 'Design, fabrication and erection', 'Bolted and welded assembly', 'Structures sized to standards'],
  },
  {
    slug: 'echafaudages', icon: Construction,
    title: 'Échafaudages', title_en: 'Scaffolding',
    shortDesc: 'Montage et démontage d\'échafaudages conformes pour les travaux en hauteur.',
    shortDesc_en: 'Assembly and dismantling of compliant scaffolding for work at height.',
    image: '/images/prestations/echafaudages.jpg',
    desc: 'Montage et démontage d\'échafaudages industriels conformes aux normes de sécurité pour les travaux en hauteur, en milieu confiné et sur structures complexes.',
    desc_en: 'Assembly and dismantling of industrial scaffolding compliant with safety standards for work at height, in confined spaces and on complex structures.',
    details: 'Nous montons et démontons des échafaudages conformes pour permettre l\'accès aux zones en hauteur, en milieu confiné ou sur structures complexes. Stabilité, ancrages et protections collectives sont systématiquement vérifiés avant mise à disposition.',
    details_en: 'We erect and dismantle compliant scaffolding to provide access to elevated areas, confined spaces or complex structures. Stability, anchoring and collective protections are systematically checked before handover.',
    points: ['Échafaudages de façade et multidirectionnels', 'Travaux en hauteur et milieu confiné', 'Montage et démontage par du personnel formé', 'Conformité aux normes de sécurité', 'Vérification avant mise à disposition'],
    points_en: ['Façade and multidirectional scaffolding', 'Work at height and in confined spaces', 'Assembly and dismantling by trained staff', 'Compliance with safety standards', 'Inspection before handover'],
  },
  {
    slug: 'sablage', icon: SprayCan,
    title: 'Sablage', title_en: 'Sandblasting',
    shortDesc: 'Préparation de surfaces par projection d\'abrasifs avant traitement anticorrosion.',
    shortDesc_en: 'Surface preparation by abrasive blasting before anti-corrosion treatment.',
    image: '/images/prestations/sablage.jpg',
    desc: 'Préparation de surfaces par projection d\'abrasifs pour éliminer la rouille, les salissures et les anciennes peintures en vue d\'un traitement de protection anticorrosion.',
    desc_en: 'Surface preparation by abrasive blasting to remove rust, dirt and old paint for anti-corrosion protection treatment.',
    details: 'Le sablage prépare vos surfaces avant peinture ou traitement : élimination de la rouille, des calamines et des anciens revêtements pour obtenir une accroche optimale et durable de la protection anticorrosion.',
    details_en: 'Blasting prepares your surfaces before painting or treatment: removing rust, mill scale and old coatings to achieve optimal, durable adhesion of the anti-corrosion protection.',
    points: ['Décapage de la rouille et des anciennes peintures', 'Préparation avant traitement anticorrosion', 'Ouvrages métalliques et surfaces acier', 'Réglage du degré de soin selon le support', 'Atelier et chantier'],
    points_en: ['Removal of rust and old paint', 'Preparation before anti-corrosion treatment', 'Steel surfaces and metal works', 'Cleanliness grade adjusted to the substrate', 'Workshop and on-site'],
  },
  {
    slug: 'bardages', icon: Layers,
    title: 'Bardages de Toitures', title_en: 'Roof Cladding',
    shortDesc: 'Pose de couvertures et bardages métalliques pour bâtiments et hangars.',
    shortDesc_en: 'Installation of metal roofing and cladding for buildings and warehouses.',
    image: '/images/gallery/charpente-verriere.jpg',
    desc: 'Installation de couvertures et bardages métalliques pour la protection et l\'étanchéité des bâtiments industriels, hangars et structures.',
    desc_en: 'Installation of metal roofing and cladding for the protection and waterproofing of industrial buildings, hangars and structures.',
    details: 'Nous posons couvertures et bardages métalliques pour protéger et étanchéifier vos bâtiments industriels, hangars et structures. Isolation, fixation et accessoires sont mis en œuvre pour une enveloppe durable.',
    details_en: 'We install metal roofing and cladding to protect and waterproof your industrial buildings, hangars and structures. Insulation, fixings and accessories are fitted for a durable building envelope.',
    points: ['Couvertures et bardages métalliques', 'Bâtiments industriels et hangars', 'Étanchéité et protection', 'Accessoires (faîtières, rives, descentes)', 'Pose sur charpente neuve ou existante'],
    points_en: ['Metal roofing and cladding', 'Industrial buildings and hangars', 'Waterproofing and protection', 'Accessories (ridges, verges, downpipes)', 'Installation on new or existing frames'],
  },
  {
    slug: 'constructions', icon: Factory,
    title: 'Constructions et maintenances d\'usine', title_en: 'Factory construction and maintenance',
    shortDesc: 'Construction et maintenance de bâtiments et installations industriels.',
    shortDesc_en: 'Construction and maintenance of industrial buildings and installations.',
    image: '/images/gallery/usine-construction.jpg',
    desc: 'Construction de bâtiments industriels, fondations, dalles, infrastructure et aménagement de sites. Maintenance préventive et curative des installations industrielles.',
    desc_en: 'Construction of industrial buildings, foundations, slabs, infrastructure and site development. Preventive and corrective maintenance of industrial installations.',
    details: 'Nous accompagnons vos sites de la construction à l\'exploitation : bâtiments, fondations, dalles et infrastructures, puis maintenance préventive et curative de vos installations pour limiter les arrêts de production.',
    details_en: 'We support your sites from construction to operation: buildings, foundations, slabs and infrastructure, then preventive and corrective maintenance of your installations to limit production downtime.',
    points: ['Bâtiments, fondations et dalles', 'Infrastructures et aménagement de site', 'Maintenance préventive et curative', 'Interventions planifiées et en urgence', 'Réduction des temps d\'arrêt'],
    points_en: ['Buildings, foundations and slabs', 'Infrastructure and site development', 'Preventive and corrective maintenance', 'Planned and emergency interventions', 'Reduced downtime'],
  },
  {
    slug: 'consommables', icon: Package,
    title: 'Fourniture de consommables et matériels industriels', title_en: 'Supply of consumables and industrial equipment',
    shortDesc: 'Approvisionnement en consommables, EPI, outillage et fournitures techniques.',
    shortDesc_en: 'Supply of consumables, PPE, tooling and technical supplies.',
    image: '/images/gallery/consommables-epi.jpg',
    desc: 'Approvisionnement en matériaux, consommables, équipements de protection individuelle, outillage et fournitures techniques pour l\'industrie et la construction.',
    desc_en: 'Procurement of materials, consumables, personal protective equipment, tools and technical supplies for industry and construction.',
    details: 'Nous approvisionnons vos chantiers en consommables, équipements de protection individuelle, outillage et fournitures techniques. Un interlocuteur unique pour gagner du temps sur vos achats industriels.',
    details_en: 'We supply your sites with consumables, personal protective equipment, tooling and technical supplies — a single point of contact to save time on your industrial purchasing.',
    points: ['Consommables de soudure et de chantier', 'Équipements de protection individuelle (EPI)', 'Outillage et fournitures techniques', 'Matériaux pour l\'industrie et la construction', 'Approvisionnement et logistique'],
    points_en: ['Welding and site consumables', 'Personal protective equipment (PPE)', 'Tooling and technical supplies', 'Materials for industry and construction', 'Procurement and logistics'],
  },
  {
    slug: 'usinage', icon: Cog,
    title: 'Usinage des pièces', title_en: 'Machining of parts',
    shortDesc: 'Fabrication de pièces mécaniques sur mesure, usinage conventionnel et CNC.',
    shortDesc_en: 'Custom mechanical parts, conventional and CNC machining.',
    image: '/images/gallery/rouleuse-tolerie.jpg',
    desc: 'Fabrication de pièces mécaniques par enlèvement de matière. Usinage conventionnel et à commande numérique pour la réalisation de pièces sur mesure et de précision.',
    desc_en: 'Manufacturing of mechanical parts by material removal. Conventional and CNC machining for the production of custom and precision parts.',
    details: 'Nous fabriquons des pièces mécaniques sur mesure par enlèvement de matière, en usinage conventionnel et à commande numérique, aussi bien pour la production de pièces neuves que pour le remplacement de pièces d\'usure.',
    details_en: 'We manufacture custom mechanical parts by material removal, with conventional and CNC machining, both for new parts and for the replacement of worn parts.',
    points: ['Usinage conventionnel et CNC', 'Pièces sur mesure et de précision', 'Fabrication et reproduction de pièces', 'Pièces de rechange et d\'usure', 'Acier, inox et autres métaux'],
    points_en: ['Conventional and CNC machining', 'Custom and precision parts', 'Manufacturing and reproduction of parts', 'Spare and wear parts', 'Steel, stainless steel and other metals'],
  },
  {
    slug: 'personnel', icon: Users,
    title: 'Mise à disposition de personnels industriels qualifiés et professionnels', title_en: 'Provision of qualified and professional industrial personnel',
    shortDesc: 'Personnel qualifié mis à disposition pour vos chantiers, onshore et offshore.',
    shortDesc_en: 'Qualified personnel provided for your worksites, onshore and offshore.',
    image: '/images/prestations/personnel.jpg',
    desc: 'Placement de personnel qualifié et professionnel : soudeurs, chaudronniers, tuyauteurs, monteurs, échafaudeurs et autres corps de métier pour vos chantiers.',
    desc_en: 'Placement of qualified and professional personnel: welders, boilermakers, pipe fitters, assemblers, scaffolders and other trades for your worksites.',
    details: 'Selon votre besoin, nous mettons à disposition du personnel qualifié et professionnel sur vos chantiers : soudeurs, chaudronniers, tuyauteurs, monteurs, échafaudeurs et autres corps de métier, à terre comme en mer.',
    details_en: 'Depending on your needs, we provide qualified and professional personnel for your sites: welders, boilermakers, pipe fitters, assemblers, scaffolders and other trades, on land and at sea.',
    points: ['Soudeurs, chaudronniers, tuyauteurs, monteurs…', 'Échafaudeurs, sableurs, peintres, électriciens', 'Personnel qualifié et professionnel', 'Renfort ponctuel ou mission longue', 'Onshore et offshore'],
    points_en: ['Welders, boilermakers, pipe fitters, assemblers…', 'Scaffolders, sandblasters, painters, electricians', 'Qualified and professional personnel', 'Short-term backup or long missions', 'Onshore and offshore'],
  },
  {
    slug: 'onshore-offshore', icon: Anchor,
    title: 'Prestations de services onshore et offshore', title_en: 'Onshore and offshore services',
    shortDesc: 'Interventions industrielles sur installations terrestres et en mer.',
    shortDesc_en: 'Industrial interventions on onshore and offshore installations.',
    image: '/images/prestations/onshore-offshore.jpg',
    desc: 'Interventions industrielles sur installations terrestres (onshore) et en mer (offshore). Personnel qualifié pour les environnements les plus exigeants.',
    desc_en: 'Industrial interventions on onshore and offshore installations. Qualified personnel for the most demanding environments.',
    details: 'Nos équipes interviennent sur installations terrestres (onshore) et en mer (offshore), dans les environnements les plus exigeants, avec un personnel qualifié et habitué aux contraintes de sécurité des secteurs pétrolier, gazier et industriel.',
    details_en: 'Our teams operate on onshore and offshore installations, in the most demanding environments, with qualified personnel accustomed to the safety requirements of the oil, gas and industrial sectors.',
    points: ['Installations terrestres et en mer', 'Personnel qualifié et expérimenté', 'Environnements exigeants et sécurisés', 'Maintenance, montage et construction', 'Secteurs pétrolier, gazier et industriel'],
    points_en: ['Onshore and offshore installations', 'Qualified and experienced personnel', 'Demanding, safety-critical environments', 'Maintenance, assembly and construction', 'Oil, gas and industrial sectors'],
  },
];

// Récupère une prestation par son slug (utilisé par la fiche détail).
export const getService = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

// === CORPS DE METIER EXACTS DU DOCUMENT ===
export interface JobFamily {
  title: string;
  title_en: string;
  desc: string;
  desc_en: string;
  jobs: string[];
  jobs_en: string[];
  image: string;
}

export const jobFamilies: JobFamily[] = [
  {
    title: 'Soudeurs', title_en: 'Welders',
    desc: 'Soudeurs qualifiés (TIG, MIG-MAG et à l\'arc) pour l\'assemblage permanent de pièces métalliques.',
    desc_en: 'Qualified welders (TIG, MIG-MAG and arc) for the permanent assembly of metal parts.',
    jobs: ['Soudeurs qualifiés de tous types', 'Soudeurs TIG et MIG-MAG', 'Soudeurs à l\'arc'],
    jobs_en: ['Qualified welders of all types', 'TIG and MIG-MAG welders', 'Arc welders'],
    image: '/images/metiers/soudeurs.jpg',
  },
  {
    title: 'Chaudronniers et Monteurs', title_en: 'Boilermakers and Assemblers',
    desc: 'Fabrication, assemblage et montage d\'ensembles chaudronnés : réservoirs, citernes et appareils sous pression.',
    desc_en: 'Manufacturing, assembly and installation of boilermade units: tanks, cisterns and pressure vessels.',
    jobs: ['Chaudronniers', 'Monteurs'],
    jobs_en: ['Boilermakers', 'Assemblers'],
    image: '/images/metiers/chaudronniers-monteurs.jpg',
  },
  {
    title: 'Tuyauteurs et Échafaudeurs', title_en: 'Pipe Fitters and Scaffolders',
    desc: 'Pose de réseaux de tuyauterie industrielle et montage d\'échafaudages conformes pour les travaux en hauteur.',
    desc_en: 'Installation of industrial piping networks and assembly of compliant scaffolding for work at height.',
    jobs: ['Tuyauteurs', 'Échafaudeurs'],
    jobs_en: ['Pipe fitters', 'Scaffolders'],
    image: '/images/metiers/tuyauteurs-scalfodeurs.jpg',
  },
  {
    title: 'Dessinateurs – Traceurs – Projeteurs', title_en: 'Designers – Plotters – Projectors',
    desc: 'Études, traçage et plans de fabrication pour préparer et fiabiliser chaque intervention.',
    desc_en: 'Studies, layout and fabrication drawings to prepare and secure every operation.',
    jobs: ['Dessinateurs – Traceurs – Projeteurs'],
    jobs_en: ['Designers – Plotters – Projectors'],
    image: '/images/metiers/dessinateurs.jpg',
  },
  {
    title: 'Sableurs et Peintres', title_en: 'Sandblasters and Painters',
    desc: 'Préparation de surface par sablage et application de revêtements de protection anticorrosion.',
    desc_en: 'Surface preparation by sandblasting and application of anti-corrosion protective coatings.',
    jobs: ['Sableurs', 'Peintres'],
    jobs_en: ['Sandblasters', 'Painters'],
    image: '/images/metiers/sableurs-peintres.jpg',
  },
  {
    title: 'Manœuvres et Électriciens', title_en: 'Laborers and Electricians',
    desc: 'Personnel d\'appui et électriciens industriels pour le support de chantier et les raccordements.',
    desc_en: 'Support staff and industrial electricians for site assistance and connections.',
    jobs: ['Manœuvres', 'Électriciens'],
    jobs_en: ['Laborers', 'Electricians'],
    image: '/images/metiers/manoeuvres-electriciens.jpg',
  },
  {
    title: 'Métiers spécialisés', title_en: 'Specialized trades',
    desc: 'Grutiers, fumistes, calorifugeurs et électromécaniciens pour les besoins techniques spécifiques.',
    desc_en: 'Crane operators, stove fitters, insulators and electromechanics for specific technical needs.',
    jobs: ['Grutiers', 'Fumistes', 'Calorifugeurs', 'Électromécaniciens'],
    jobs_en: ['Crane operators', 'Stove fitters', 'Insulators', 'Electromechanics'],
    image: '/images/metiers/divers.jpg',
  },
];

export const jobCategories = [
  'Soudeurs qualifiés de tous types',
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
  'Qualified welders of all types',
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
