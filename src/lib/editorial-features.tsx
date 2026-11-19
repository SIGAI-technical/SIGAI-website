import type { ReactNode } from 'react';
import { PHYSICS_ARTICLE } from './editorial-physics';
import { HOME_ARTICLE } from './editorial-home';
import { ENERGY_ARTICLE } from './editorial-energy';

export interface FeatureArticle {
  slug: string;
  authors: string[];
  title: string;
  deck: string;
  summary: string;
  acknowledgement: string;
  excerpt: string;
  category: string;
  topics: string[];
  date: string;
  dateTime: string;
  readingTime: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt: string;
  searchTerms: string;
  opening: ReactNode;
  sections: { id: string; title: string; content: ReactNode }[];
  sources: { label: string; href: string }[];
}

export const FEATURE_ARTICLES: FeatureArticle[] = [PHYSICS_ARTICLE, HOME_ARTICLE, ENERGY_ARTICLE];
