
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'r1',
    name: 'Le Loft Lagunaire',
    tagline: 'Entre terre et eaux.',
    description: 'Un sanctuaire avec jardin tropical privé en bordure de la lagune Ébrié.',
    longDescription: 'Le Loft Lagunaire est une ode à la sérénité d\'Abidjan. S\'étendant sur 150 mètres carrés, il dispose d\'une terrasse en bois d\'ébène, d\'une piscine à débordement privée et de baies vitrées offrant une vue imprenable sur Yopougon et ses lumières. Parfait pour se ressourcer au son du clapotis de l\'eau.',
    price: 450,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200'
    ],
    features: ['Accès Ponton Privé', 'Majordome 24/7', 'Artisanat Local']
  },
  {
    id: 'r2',
    name: 'Le Penthouse Ivoire',
    tagline: 'Le sommet de l\'élégance.',
    description: 'Vues panoramiques sur la skyline d\'Abidjan rencontrant un design ultra-moderne.',
    longDescription: 'Perché au dernier étage, ce penthouse redéfinit le luxe à Yopougon. Une cuisine de chef, un salon de dégustation de café ivoirien et une suite parentale avec vue à 360° sur la ville et la lagune. Un espace conçu pour les leaders et les esthètes.',
    price: 1200,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1200',
    gallery: [
        'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1200'
    ],
    features: ['Piscine de Toit', 'Sécurité Renforcée', 'Conciergerie Elite']
  },
  {
    id: 'r3',
    name: 'La Suite Ebène',
    tagline: 'Profondeur et prestige.',
    description: 'Un espace minimaliste aux textures de bois précieux, dédié à la méditation urbaine.',
    longDescription: 'La Suite Ebène utilise des matériaux nobles de la forêt ivoirienne pour créer une ambiance feutrée et protectrice. Équipée de systèmes audio haute fidélité pour écouter les rythmes du pays en toute quiétude.',
    price: 350,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1200',
    gallery: [
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1200'
    ],
    features: ['Système Audio Spatial', 'Literie en Coton Bio', 'Parfum Signature']
  },
  {
    id: 'r4',
    name: 'Le Studio Horizon Sud',
    tagline: 'Vivez le rythme de la ville.',
    description: 'Un studio lumineux capturant l\'énergie d\'Abidjan avec une élégance discrète.',
    longDescription: 'Parfait pour les séjours d\'affaires ou les escapades créatives, ce studio offre un balcon privé surplombant les quartiers dynamiques de Yopougon.',
    price: 280,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    gallery: [
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200'
    ],
    features: ['Espace Travail', 'Mini-bar Gourmet', 'Lumière Naturelle']
  }
];

export const MENU_ITEMS: (Product & { badge?: string })[] = [
  // --- Plats Africains ---
  {
    id: 'p1',
    name: 'Kédjénou de Pintade',
    tagline: 'Tradition Baoulé',
    description: 'Mijoté à l\'étouffée dans un canari de terre cuite, aux légumes du jardin.',
    price: 28.00,
    category: 'Plats Africains',
    imageUrl: 'https://images.unsplash.com/photo-1543340713-17b2bae91996?auto=format&fit=crop&q=80&w=800',
    features: ['Bio', 'Épicé'],
    badge: 'Chef\'s Choice'
  },
  {
    id: 'p2',
    name: 'Le Garba Royal',
    tagline: 'L\'icône d\'Abidjan',
    description: 'Thon rouge mi-cuit, semoule de manioc "Attiéké" premium, piment frais.',
    price: 22.00,
    category: 'Plats Africains',
    imageUrl: 'https://images.unsplash.com/photo-1599352932943-255d496a6cb9?auto=format&fit=crop&q=80&w=800',
    features: ['Thon Frais', 'Attiéké Or'],
  },
  {
    id: 'p3',
    name: 'Sauce Graine & Foutou',
    tagline: 'Douceur Palmiste',
    description: 'Foutou banane onctueux accompagné d\'une sauce riche aux noix de palme.',
    price: 26.00,
    category: 'Plats Africains',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    features: ['Traditionnel', 'Copieux'],
  },
  {
    id: 'p4',
    name: 'Yassa au Poulet',
    tagline: 'Saveurs du Nord',
    description: 'Poulet fermier mariné au citron vert et oignons caramélisés.',
    price: 24.00,
    category: 'Plats Africains',
    imageUrl: 'https://images.unsplash.com/photo-1562967960-f554559828d8?auto=format&fit=crop&q=80&w=800',
    features: ['Acidulé', 'Riz Cassé'],
  },

  // --- Grillades ---
  {
    id: 'g1',
    name: 'Langouste de Grand-Béréby',
    tagline: 'Trésor de l\'océan',
    description: 'Grillée au feu de bois, beurre maître d\'hôtel aux herbes locales.',
    price: 45.00,
    category: 'Grillades',
    imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
    features: ['Pêche du Jour', 'Luxe'],
    badge: 'Signature'
  },
  {
    id: 'g2',
    name: 'Capitaine à la Braise',
    tagline: 'Le roi des eaux douces',
    description: 'Poisson entier mariné aux épices douces, servi avec alloco.',
    price: 32.00,
    category: 'Grillades',
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-81988761e5b2?auto=format&fit=crop&q=80&w=800',
    features: ['Entier', 'Partage'],
  },
  {
    id: 'g3',
    name: 'Choukouya de Mouton',
    tagline: 'Street food chic',
    description: 'Morceaux de mouton grillés et assaisonnés au kan-kan, servis en papier.',
    price: 28.00,
    category: 'Grillades',
    imageUrl: 'https://images.unsplash.com/photo-1529193591184-b1d580690dd0?auto=format&fit=crop&q=80&w=800',
    features: ['Épicé', 'Authentique'],
  },
  {
    id: 'g4',
    name: 'Côte de Bœuf du Nord',
    tagline: 'Terre & Feu',
    description: 'Maturation 28 jours, grillée selon votre convenance.',
    price: 42.00,
    category: 'Grillades',
    imageUrl: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800',
    features: ['Viande Locale', 'Tendre'],
  },

  // --- Glaces ---
  {
    id: 'gl1',
    name: 'Chocolat Grand Cru',
    tagline: 'L\'or brun',
    description: 'Glace onctueuse au cacao 70% de San Pedro, éclats de fèves.',
    price: 8.50,
    category: 'Glaces',
    imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800',
    features: ['Cacao Local', 'Intense'],
  },
  {
    id: 'gl2',
    name: 'Vanille de Man',
    tagline: 'Douceur des montagnes',
    description: 'Crème glacée infusée aux gousses de vanille fraîches de l\'ouest.',
    price: 8.00,
    category: 'Glaces',
    imageUrl: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?auto=format&fit=crop&q=80&w=800',
    features: ['Parfumé', 'Classique'],
  },
  {
    id: 'gl3',
    name: 'Caramel Beurre Salé',
    tagline: 'Gourmandise absolue',
    description: 'Avec une pointe de sel marin de Grand-Bassam.',
    price: 8.00,
    category: 'Glaces',
    imageUrl: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=800',
    features: ['Onctueux', 'Maison'],
  },
  {
    id: 'gl4',
    name: 'Pistache & Miel',
    tagline: 'Croquant et doux',
    description: 'Pistaches torréfiées et miel de forêt.',
    price: 9.00,
    category: 'Glaces',
    imageUrl: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=80&w=800',
    features: ['Riche', 'Texture'],
  },

  // --- Sorbets ---
  {
    id: 's1',
    name: 'Mangue-Passion',
    tagline: 'Explosion fruité',
    description: 'Mariage de la mangue Kent et du fruit de la passion (Maracuja).',
    price: 8.00,
    category: 'Sorbets',
    imageUrl: 'https://images.unsplash.com/photo-1560505164-97223b2e5977?auto=format&fit=crop&q=80&w=800',
    features: ['100% Fruit', 'Vitaminé'],
    badge: 'Vegan'
  },
  {
    id: 's2',
    name: 'Bissap Rouge',
    tagline: 'Fleur d\'Hibiscus',
    description: 'Sorbet rafraîchissant à la fleur d\'hibiscus et menthe poivrée.',
    price: 7.50,
    category: 'Sorbets',
    imageUrl: 'https://images.unsplash.com/photo-1533552069698-c13f67a21685?auto=format&fit=crop&q=80&w=800',
    features: ['Floral', 'Léger'],
  },
  {
    id: 's3',
    name: 'Coco Citron Vert',
    tagline: 'Brise tropicale',
    description: 'Lait de coco frais relevé par le zeste de lime.',
    price: 8.00,
    category: 'Sorbets',
    imageUrl: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&q=80&w=800',
    features: ['Exotique', 'Frais'],
  },
  {
    id: 's4',
    name: 'Ananas Rôti',
    tagline: 'Douceur du sud',
    description: 'Ananas caramélisé transformé en sorbet délicat.',
    price: 8.00,
    category: 'Sorbets',
    imageUrl: 'https://images.unsplash.com/photo-1494319828285-4b358892f39c?auto=format&fit=crop&q=80&w=800',
    features: ['Sucré', 'Doré'],
  },

  // --- Coupes Glacées ---
  {
    id: 'c1',
    name: 'La Dame de Bassam',
    tagline: 'L\'élégance blanche',
    description: '3 boules Vanille, sauce chocolat chaud, chantilly maison, amandes grillées.',
    price: 12.00,
    category: 'Coupes Glacées',
    imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800', // Generic sundae
    features: ['Gourmand', 'Partage'],
  },
  {
    id: 'c2',
    name: 'Symphonie Exotique',
    tagline: 'Voyage fruité',
    description: 'Sorbets Mangue, Coco, Passion, dés d\'ananas frais et coulis de fruits rouges.',
    price: 14.00,
    category: 'Coupes Glacées',
    imageUrl: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&q=80&w=800',
    features: ['Fraîcheur', 'Coloré'],
  },
  {
    id: 'c3',
    name: 'Colonel Ivoirien',
    tagline: 'Digestif glacé',
    description: 'Sorbet citron vert arrosé de Koutoukou premium ou Vodka.',
    price: 11.00,
    category: 'Coupes Glacées',
    imageUrl: 'https://images.unsplash.com/photo-1579954115545-a95591f289f1?auto=format&fit=crop&q=80&w=800',
    features: ['Adulte', 'Digestif'],
  },

  // --- Boissons ---
  {
    id: 'b1',
    name: 'Jus de Baobab (Bouye)',
    tagline: 'Superfruit',
    description: 'Nectar onctueux de pain de singe, riche en vitamines.',
    price: 6.00,
    category: 'Boissons',
    imageUrl: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=800', // Smoothie lookalike
    features: ['Énergie', 'Naturel'],
  },
  {
    id: 'b2',
    name: 'Cocktail Lagune Bleue',
    tagline: 'Signature',
    description: 'Gin, Curaçao, citron vert, eau tonique.',
    price: 12.00,
    category: 'Boissons',
    imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
    features: ['Alcoolisé', 'Festif'],
  },
  {
    id: 'b3',
    name: 'Bissap Mentholé',
    tagline: 'Le classique',
    description: 'Infusion d\'hibiscus rouge avec feuilles de menthe fraîche.',
    price: 5.00,
    category: 'Boissons',
    imageUrl: 'https://images.unsplash.com/photo-1544254823-958b44983058?auto=format&fit=crop&q=80&w=800',
    features: ['Désaltérant', 'Glacé'],
  },
  {
    id: 'b4',
    name: 'Café Terroir',
    tagline: 'Robusta de montagne',
    description: 'Expresso serré issu des plantations de l\'ouest ivoirien.',
    price: 4.00,
    category: 'Boissons',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
    features: ['Chaud', 'Intense'],
  }
];

export const BOUTIQUE_PRODUCTS: Product[] = [
    {
        id: 'bp1',
        name: 'Huile Parfumée Signature',
        tagline: 'L\'esprit d\'Abidjan.',
        description: 'Mélange d\'essences de bois de santal et de fleurs tropicales.',
        price: 65,
        category: 'Wellness',
        imageUrl: 'https://images.unsplash.com/photo-1602825264324-42b5883a9364?auto=format&fit=crop&q=80&w=800',
        features: ['100% Naturel', 'Fait à Abidjan']
    },
    {
        id: 'bp2',
        name: 'Pagne Souad Collection',
        tagline: 'Art textile.',
        description: 'Tissage traditionnel revisité en collaboration avec des artisans locaux.',
        price: 150,
        category: 'Lifestyle',
        imageUrl: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&q=80&w=800',
        features: ['Coton Local', 'Design Exclusif']
    }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "Abidjan, Ville de Lumière",
        date: "15 Mai 2025",
        excerpt: "Pourquoi Yopougon devient la nouvelle frontière de l'hôtellerie de luxe.",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-[#1E3A8A]" },
                "Souad Residences n'est pas seulement un hôtel, c'est une célébration de la vitalité abidjanaise. Entre modernité insolente et douceur lagunaire, nous avons choisi Yopougon pour son âme authentique."
            )
        )
    }
];

export const BRAND_NAME = 'Souad Residences';
export const PRIMARY_COLOR = 'blue-900'; 
export const ACCENT_COLOR = 'blue-500';
