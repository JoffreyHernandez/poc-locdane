/**
 * Contenu éditorial du site vitrine, centralisé et versionné.
 * Textes réécrits à partir de locdanes.fr (Hannah, Rennes-le-Château, Pays Cathare).
 * Les photos sont des emplacements (assets/) à remplacer par les visuels définitifs.
 */

export const SITE = {
  nom: "Loc d'Ânes",
  baseline: 'Randonnées et balades avec un âne en Pays Cathare',
  lieu: 'Rennes-le-Château · Vallée de l’Aude · Pyrénées',
  telephone: '07 52 06 51 09',
  telephoneE164: '+33752065109',
  email: 'infos@locdanes.fr',
  // URL publique du site déployé (GitHub Pages — projet). À remplacer par
  // 'https://www.locdanes.fr' le jour où le site passe sur le domaine définitif.
  url: 'https://joffreyhernandez.github.io/poc-locdane',
  saison: 'Du 1ᵉʳ avril au 30 septembre',
  geo: { lat: 42.9287, lng: 2.2631 },
  // hôtesse / gérante
  hote: 'Hannah',
} as const;

export interface NavLink { label: string; path: string; }

/** Navigation principale — pages prérendues. */
export const NAV: NavLink[] = [
  { label: 'Les itinéraires', path: '/itineraires' },
  { label: 'Le troupeau', path: '/le-troupeau' },
  { label: 'Hébergeurs', path: '/hebergeurs' },
  { label: 'Tarifs', path: '/tarifs' },
  { label: 'Qui sommes-nous', path: '/qui-sommes-nous' },
  { label: 'Contact', path: '/contact' },
];

export interface Formule { titre: string; texte: string; tag: string; }

export const FORMULES: Formule[] = [
  {
    tag: 'À la journée',
    titre: 'Balade d’une journée',
    texte:
      'Le temps d’une journée, partez sur les chemins cathares avec votre âne. Idéal pour une première rencontre, en famille ou entre amis.',
  },
  {
    tag: 'Plusieurs jours',
    titre: 'Randonnée itinérante',
    texte:
      'Plusieurs jours de marche d’hébergeur en hébergeur, votre âne portant vos affaires. Un itinéraire préparé sur mesure avec Hannah.',
  },
  {
    tag: 'Sur mesure',
    titre: 'Location particulière',
    texte:
      'Vous avez votre propre projet de balade ? Nous confions un âne à votre rythme, avec briefing et conseils de parcours.',
  },
  {
    tag: 'Accessible',
    titre: 'Antenne HandiÂne Aude',
    texte:
      'Des sorties pensées pour le partage et l’accessibilité, pour que la randonnée avec un âne reste une joie pour toutes et tous.',
  },
];

export interface Niveau { nom: string; texte: string; }

export const NIVEAUX: Niveau[] = [
  { nom: 'Facile', texte: 'Pour les premiers pas, les enfants et les balades tranquilles au fil de l’eau.' },
  { nom: 'Modéré', texte: 'Un peu de dénivelé, de beaux points de vue, sans jamais forcer l’allure.' },
  { nom: 'Sportif', texte: 'Pour les marcheurs aguerris en quête de cols, de crêtes et de grands horizons.' },
];

export interface Saison { nom: string; texte: string; }

export const SAISONS: Saison[] = [
  { nom: 'Printemps', texte: 'Des sentiers fleuris, une nature qui s’éveille et des journées douces.' },
  { nom: 'Été', texte: 'Des parcours ombragés et des baignades dans les rivières du Pays Cathare.' },
  { nom: 'Automne', texte: 'Les forêts se parent de couleurs jusqu’à fin septembre, lumière dorée garantie.' },
];

// ── Itinéraires (tours réels du site actuel) ──────────────────
export interface Tour { nom: string; texte: string; }
export interface ItineraireCat { cle: string; titre: string; intro: string; tours: Tour[]; }

export const ITINERAIRES: ItineraireCat[] = [
  {
    cle: 'journee',
    titre: 'Balades à la journée',
    intro: 'Une journée avec pause déjeuner — idéal pour une première rencontre avec l’âne.',
    tours: [
      { nom: 'Sur le plateau de Rennes-le-Château', texte: 'Un tour haut en couleur, baignade possible, itinéraire ajustable à chaque niveau. Pique-nique au bord de notre petit lagon ou au village.' },
      { nom: 'Rennes-les-Bains et sa rivière', texte: 'Sillonnez la forêt jusqu’à la Ferrière et ses bassins d’eau claire — baignade assurée en été.' },
      { nom: 'Mon beau Cardou', texte: 'Montez en haut du Pech Cardou pour une vue magnifique et un pique-nique au sommet. Un itinéraire par niveau.' },
      { nom: 'Le secret cathare du Bézu', texte: 'Un peu d’endurance récompensée par les ruines d’un château cathare et une vue époustouflante, puis le village de St-Just-le-Bézu.' },
      { nom: 'Les secrets de Sougraigne', texte: 'Petits chemins colorés ; en été, halte crêpes au bivouac de Camille ; en automne, cueillette de châtaignes.' },
      { nom: 'Le petit tour (3 h)', texte: 'Jusqu’à la pointe de La Pique et sa vue panoramique, à travers sous-bois et la fontaine des Quatre Ritous.' },
      { nom: 'Le tout petit tour (1 h 30)', texte: 'Le tour de ferme : poulaillers mobiles, vaches, cochons et le reste du troupeau (ânes et chevaux).' },
    ],
  },
  {
    cle: 'deux-jours',
    titre: 'Randonnées de 2 jours',
    intro: 'Une nuit chez un hébergeur partenaire (ou en bivouac), votre âne portant vos affaires.',
    tours: [
      { nom: 'La pause « Mon Beau Cardou »', texte: 'Rennes-les-Bains puis le café-culturel Le Cerf-Volant à Serres ; le lendemain, la cime du Cardou.' },
      { nom: 'La pause « Terre d’argile »', texte: 'Le Chemin des Couleurs (rouge, jaune, vert) jusqu’au village de Pailhères ; rapaces et orchidées sauvages.' },
      { nom: 'La pause « Mont et rivière »', texte: 'Le Pech Cardou, nuit à Montferrand (vue sur les Pyrénées), puis baignade à Sougraigne.' },
      { nom: 'La pause « Villages Cathares »', texte: 'Le Bézu puis Rennes-le-Château, nuit au village de Granès (en bivouac).' },
      { nom: 'La toute petite pause', texte: 'Campings partenaires (Domaine du Carla, Domaine de Lavaldieu) — idéal familles et tout-petits, 1 h 30 à 2 h/jour.' },
    ],
  },
  {
    cle: 'longs-sejours',
    titre: 'Longs séjours',
    intro: 'Toutes saisons (hors hiver), tous niveaux — à composer ensemble selon vos envies.',
    tours: [
      { nom: 'L’échappée belle (3 à 5 jours)', texte: 'Itinéraires majoritairement à l’ombre, étapes de 7 à 14 km, formules détente ou sportive.' },
      { nom: 'La semaine 100 % nature (7 jours)', texte: 'Une semaine en itinérance entre monts et rivières : cascades, fontaine d’eau salée, chemins anciens.' },
      { nom: 'La grande boucle (8 jours et +)', texte: 'Sur-mesure, pour adultes (12 ans et +) ayant déjà randonné 2-3 jours avec un âne.' },
    ],
  },
];

// ── Le troupeau (~40 ânes, prénoms réels) ─────────────────────
export interface TroupeauGroupe { titre: string; noms: string; texte: string; }

export const TROUPEAU: TroupeauGroupe[] = [
  { titre: 'Les grands', noms: 'Ferdinand · Casimir · Loukoum · Miel · Cardou · Pédro · Petit José', texte: 'Les expérimentés de la bande : sur tous les itinéraires, et tout doux avec les enfants.' },
  { titre: 'Les sportifs', noms: 'Ussein · Umberto · Figaro', texte: 'Volontaires et forts, ils portent les charges — parfaits pour les amoureux et les groupes d’adultes.' },
  { titre: 'Les stagiaires', noms: 'Indiana · Champion', texte: 'En apprentissage : ils partent en duo avec un âne plus expérimenté.' },
  { titre: 'La relève', noms: 'Méru (papa) · Gina · Kool · Marie · Leeloo · Désirée (mamans)', texte: 'Les naissances de l’année — chaque maman prend le temps de s’occuper de son ânon.' },
  { titre: 'Les petits & les sages', noms: 'Ihan · Tao · Jack · Mado · Ulysse & Jafar (les tontons)', texte: 'Les ânons en dressage et les tontons qui maintiennent la stabilité du troupeau.' },
];

// ── Hébergeurs partenaires ────────────────────────────────────
export interface Hebergeur { nom: string; lieu: string; hote: string; accueil: string; texte: string; photo: string; }

export const HEBERGEURS: Hebergeur[] = [
  { nom: 'Le Relais du Cardou', lieu: 'Montferrand', hote: 'Fabienne & Arno', accueil: 'Chambre, tente aménagée ou bivouac', texte: 'Une magnifique bâtisse au bout du village, vue imprenable sur les Pyrénées.', photo: 'relais-cardou' },
  { nom: 'Le Cerf-Volant', lieu: 'Serres', hote: 'Pascal & Morgane', accueil: 'Chambres (repas compris) ou bivouac', texte: 'Un café-culturel plein de vie : repas du soir au rythme des concerts et spectacles.', photo: 'cerf-volant' },
  { nom: 'Le Périlhou', lieu: 'Arques', hote: 'Ivan', accueil: 'Chambre (repas & petit-déj) ou bivouac', texte: 'Un havre de paix bordé de forêts et de terres rouges, près du château et du lac d’Arques.', photo: 'perilhou' },
  { nom: 'La Jouane', lieu: 'Sougraigne', hote: 'Jean-Noël & Alexandra', accueil: 'Yourte, bivouac, parfois chambre d’hôte', texte: 'Une expérience insolite : dormez en yourte, réveil avec vue sur la vallée à couper le souffle.', photo: 'la-jouane' },
  { nom: 'Chez Camille', lieu: 'Sougraigne', hote: 'Camille', accueil: 'Caravane aménagée', texte: 'La guinguette au bord de la rivière et ses crêpes délicieuses (Sunset Guinguette en saison).', photo: 'chez-camille' },
  { nom: 'Maison de la Nature et de la Randonnée', lieu: 'Bugarach', hote: 'Sigfrid', accueil: 'Chambre d’hôte, dortoir, camping', texte: 'Un lieu privilégié au pied du Pic de Bugarach.', photo: 'maison-nature-rando' },
  { nom: 'Le Domaine de Lavaldieu', lieu: 'Vallée de l’Aude', hote: 'Rachel & Patricia', accueil: 'Chambre & camping tout-confort', texte: 'Cuisine 100 % végétarienne avec vue sur le Pic de Bugarach ; idéal parcours « en étoile ».', photo: 'domaine-de-lavaldieu' },
  { nom: 'Le Domaine de Pailhères', lieu: 'Pailhères', hote: 'Monique Pons', accueil: 'Chambre (repas & petit-déj)', texte: 'Un petit havre de paix à 15 min, charcuterie maison — clients 100 % ravis.', photo: 'domaine-de-pailheres' },
  { nom: 'Le Gîte de La Bastide', lieu: 'Camps-sur-Agly', hote: 'Ingrid & Frédéric', accueil: 'Chambre d’hôte, gîte, camping', texte: 'Une bastide templière du 13ᵉ siècle, sur le sentier Cathare, près des Gorges de Galamus.', photo: 'gite-la-bastide' },
];

// ── Tarifs (location d'un âne, sur réservation) ───────────────
export interface Tarif { duree: string; prix: string; }

export const TARIFS: Tarif[] = [
  { duree: '1 jour', prix: '65 €' },
  { duree: '2 jours', prix: '120 €' },
  { duree: '3 jours', prix: '175 €' },
  { duree: '4 jours', prix: '230 €' },
  { duree: '5 jours', prix: '280 €' },
  { duree: '6 jours', prix: '325 €' },
  { duree: '7ᵉ jour et +', prix: '+60 €/j' },
];

// ── Autres services ───────────────────────────────────────────
export interface Service { titre: string; texte: string; }

export const SERVICES: Service[] = [
  { titre: 'La formule « Ânniversaire »', texte: 'Une journée à la ferme : balade en âne (calèche possible pour les petits), visite des animaux, récolte des œufs et préparation du gâteau.' },
  { titre: 'Location pour événement', texte: 'Quelques ânes pour sublimer votre événement — nous composons ensemble la formule idéale.' },
  { titre: 'Portage spécifique', texte: 'Terrain difficile, charges lourdes : pied sûr, force et traction, nos ânes passent là où les engins ne vont pas.' },
  { titre: 'Éco-débroussaillage', texte: 'Un débroussaillage naturel, efficace et sans pollution, avec attestation de débroussaillage (protection incendie).' },
];

// ── Accès ─────────────────────────────────────────────────────
export interface Distance { ville: string; km: number; }

export const DISTANCES: Distance[] = [
  { ville: 'Quillan', km: 12 },
  { ville: 'Limoux', km: 23 },
  { ville: 'Carcassonne', km: 45 },
  { ville: 'Perpignan', km: 66 },
  { ville: 'Narbonne', km: 85 },
  { ville: 'Toulouse', km: 117 },
];
