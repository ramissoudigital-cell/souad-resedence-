
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  price: number;
  category: 'Audio' | 'Wearable' | 'Mobile' | 'Home' | 'Wellness' | 'Lifestyle' | 'Gastronomy' | 'Glaces' | 'Sorbets' | 'Plats Africains' | 'Grillades' | 'Coupes Glacées' | 'Boissons';
  imageUrl: string;
  gallery?: string[];
  features: string[];
}

export interface JournalArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
  audioBase64?: string; // Stockage de la voix pour réécoute immédiate
}

export type ViewState = 
  | { type: 'home' }
  | { type: 'product', product: Product }
  | { type: 'journal', article: JournalArticle }
  | { type: 'checkout' }
  | { type: 'reservation', selectedProductId?: string }
  | { type: 'contact' }
  | { type: 'gallery' }
  | { type: 'restaurant' };
