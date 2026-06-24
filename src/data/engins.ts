// === ENGINS MIS EN AVANT ===
// Descriptions volontairement génériques : aucune fiche technique ni prix.
// Le détail (caractéristiques, disponibilité, prix) se traite via WhatsApp.
// Les photos d'un même type d'engin (angles / couleurs / modèles) sont regroupées.

export interface Engin {
  slug: string;
  title: string;
  title_en: string;
  category: string;
  category_en: string;
  shortDesc: string;
  shortDesc_en: string;
  desc: string;
  desc_en: string;
  uses: string[];
  uses_en: string[];
  cover: string;
  images: string[];
}

export const engins: Engin[] = [
  {
    slug: 'nacelle-articulee',
    title: 'Nacelle élévatrice articulée',
    title_en: 'Articulating boom lift',
    category: 'Accès en hauteur',
    category_en: 'Access at height',
    shortDesc: 'Plateforme automotrice à bras articulé pour atteindre les zones en hauteur, même avec déport.',
    shortDesc_en: 'Self-propelled articulating boom platform to reach elevated areas, even with horizontal outreach.',
    desc: 'Nacelle élévatrice à bras articulé permettant d\'accéder aux zones en hauteur difficiles d\'accès, avec déport horizontal pour contourner les obstacles. Idéale pour les travaux de maintenance, de montage et d\'inspection en milieu industriel comme sur chantier.',
    desc_en: 'Articulating boom lift that reaches hard-to-access elevated areas, with horizontal outreach to work around obstacles. Ideal for maintenance, assembly and inspection work in industrial settings and on site.',
    uses: ['Travaux en hauteur avec déport', 'Maintenance industrielle', 'Montage, peinture & inspection'],
    uses_en: ['Work at height with outreach', 'Industrial maintenance', 'Assembly, painting & inspection'],
    cover: '/images/engins/nacelle-articulee/1.jpg',
    images: ['/images/engins/nacelle-articulee/1.jpg', '/images/engins/nacelle-articulee/2.jpg'],
  },
  {
    slug: 'nacelle-ciseaux',
    title: 'Nacelle élévatrice à ciseaux',
    title_en: 'Scissor lift',
    category: 'Accès en hauteur',
    category_en: 'Access at height',
    shortDesc: 'Plateforme de travail à élévation verticale offrant une grande surface, en intérieur comme en extérieur.',
    shortDesc_en: 'Vertical-lift work platform with a large deck, for indoor and outdoor use.',
    desc: 'Plateforme élévatrice à ciseaux pour des travaux en hauteur à la verticale, avec une grande surface de travail accueillant plusieurs opérateurs et leur matériel. Modèles autoportés et tractables, adaptés aux sols stabilisés en intérieur comme en extérieur.',
    desc_en: 'Scissor work platform for vertical work at height, with a large deck that accommodates several operators and their equipment. Self-propelled and towable models, suited to stable ground indoors and outdoors.',
    uses: ['Travaux verticaux en hauteur', 'Grande surface de travail', 'Intérieur & extérieur'],
    uses_en: ['Vertical work at height', 'Large working deck', 'Indoor & outdoor'],
    cover: '/images/engins/nacelle-ciseaux/1.jpg',
    images: [
      '/images/engins/nacelle-ciseaux/1.jpg',
      '/images/engins/nacelle-ciseaux/2.jpg',
      '/images/engins/nacelle-ciseaux/3.jpg',
      '/images/engins/nacelle-ciseaux/4.jpg',
    ],
  },
  {
    slug: 'nacelle-sur-camion',
    title: 'Nacelle élévatrice sur camion',
    title_en: 'Truck-mounted platform',
    category: 'Accès en hauteur',
    category_en: 'Access at height',
    shortDesc: 'Nacelle montée sur véhicule, mobile sur route et rapidement opérationnelle d\'un site à l\'autre.',
    shortDesc_en: 'Platform mounted on a vehicle — road-mobile and quickly operational from one site to another.',
    desc: 'Nacelle élévatrice montée sur porteur, qui se déplace sur route et se met rapidement en station grâce à ses stabilisateurs. Pratique pour les interventions ponctuelles en hauteur réparties sur plusieurs sites.',
    desc_en: 'Aerial platform mounted on a vehicle that travels on the road and sets up quickly thanks to its outriggers. Convenient for one-off work at height spread across several sites.',
    uses: ['Déplacement rapide sur route', 'Mise en station par stabilisateurs', 'Interventions multi-sites'],
    uses_en: ['Fast road travel', 'Outrigger set-up', 'Multi-site interventions'],
    cover: '/images/engins/nacelle-camion/1.jpg',
    images: ['/images/engins/nacelle-camion/1.jpg'],
  },
  {
    slug: 'tractopelle',
    title: 'Tractopelle (chargeuse-pelleteuse)',
    title_en: 'Backhoe loader',
    category: 'Terrassement',
    category_en: 'Earthworks',
    shortDesc: 'Engin polyvalent combinant chargeur à l\'avant et pelle rétro à l\'arrière pour creuser et charger.',
    shortDesc_en: 'Versatile machine combining a front loader and a rear backhoe to dig and load.',
    desc: 'Engin polyvalent de terrassement réunissant un godet chargeur à l\'avant et une pelle rétro à l\'arrière. Il creuse, charge, nivelle et déplace les matériaux, ce qui en fait un allié de choix sur les chantiers de génie civil et de construction.',
    desc_en: 'Versatile earthmoving machine pairing a front loader bucket with a rear backhoe. It digs, loads, levels and moves materials, making it a go-to on civil works and construction sites.',
    uses: ['Excavation & tranchées', 'Chargement & nivellement', 'Génie civil & construction'],
    uses_en: ['Excavation & trenching', 'Loading & levelling', 'Civil works & construction'],
    cover: '/images/engins/tractopelle/1.jpg',
    images: [
      '/images/engins/tractopelle/1.jpg',
      '/images/engins/tractopelle/2.jpg',
      '/images/engins/tractopelle/3.jpg',
    ],
  },
  {
    slug: 'chargeuse-sur-pneus',
    title: 'Chargeuse sur pneus',
    title_en: 'Wheel loader',
    category: 'Terrassement',
    category_en: 'Earthworks',
    shortDesc: 'Engin de chargement puissant pour reprendre et déplacer de gros volumes de matériaux en vrac.',
    shortDesc_en: 'Powerful loading machine to pick up and move large volumes of bulk material.',
    desc: 'Chargeuse sur pneus dédiée à la reprise et au déplacement de matériaux en vrac (terre, sable, gravier, agrégats). Son godet de grande capacité et sa mobilité en font un engin clé pour le chargement de camions et l\'approvisionnement des chantiers.',
    desc_en: 'Wheel loader dedicated to picking up and moving bulk materials (soil, sand, gravel, aggregates). Its high-capacity bucket and mobility make it a key machine for loading trucks and supplying worksites.',
    uses: ['Reprise de matériaux en vrac', 'Chargement de camions', 'Approvisionnement de chantier'],
    uses_en: ['Handling bulk materials', 'Truck loading', 'Worksite supply'],
    cover: '/images/engins/chargeuse-pneus/1.jpg',
    images: [
      '/images/engins/chargeuse-pneus/1.jpg',
      '/images/engins/chargeuse-pneus/2.jpg',
      '/images/engins/chargeuse-pneus/3.jpg',
    ],
  },
];

export const getEngin = (slug: string) => engins.find((e) => e.slug === slug);
