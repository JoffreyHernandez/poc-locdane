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
  email: 'contact@locdanes.fr',
  url: 'https://www.locdanes.fr',
  saison: 'Du 1ᵉʳ avril au 30 septembre',
  geo: { lat: 42.9287, lng: 2.2631 },
  // hôtesse / gérante
  hote: 'Hannah',
} as const;

export interface NavLink { label: string; href: string; }

export const NAV: NavLink[] = [
  { label: 'Les randonnées', href: '#randonnees' },
  { label: 'Une journée', href: '#journee' },
  { label: 'Les ânes', href: '#anes' },
  { label: 'Saisons', href: '#saisons' },
  { label: 'Avis', href: '#avis' },
  { label: 'Contact', href: '#contact' },
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

export interface Avis { texte: string; auteur: string; }

export const AVIS: Avis[] = [
  {
    texte:
      'Un accueil chaleureux et un âne adorable. Hannah a préparé un itinéraire parfait pour nos enfants. On reviendra !',
    auteur: 'Famille L.',
  },
  {
    texte:
      'Trois jours de randonnée inoubliables entre châteaux cathares et rivières. Une déconnexion totale.',
    auteur: 'Camille & Théo',
  },
  {
    texte:
      'Le rythme de l’âne change tout : on prend le temps de regarder le paysage. Une expérience à vivre.',
    auteur: 'Marc D.',
  },
];
