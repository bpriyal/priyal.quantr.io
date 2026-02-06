export interface Project {
  id: string;
  title: string;
  description: string;
  link: string; // GitHub or Demo
  dateRange: string;
  tags: string[];
  featured?: boolean;
}

export interface HallOfFameItem {
  id: string;
  title: string;
  organization: string;
  location?: string;
  date: string;
  description?: string;
  category: 'Volunteering' | 'Culinary' | 'Award' | 'Society' | 'Leadership' | 'Arts' | 'Sports' | 'Other';
  link?: string;
}

export interface ResearchItem {
    id: string;
    title: string;
    journalOrConference?: string;
    date: string;
    doi?: string;
    contributors: string[];
    type: 'Publication' | 'Preprint' | 'Poster' | 'Conference';
    link?: string;
}

export interface ArticleNode {
  id: string;
  title: string;
  type: 'folder' | 'file';
  children?: ArticleNode[];
  path?: string; // Route path
  content?: string; // Markdown content
}

export interface UserProfile {
  name: string;
  role: string;
  shortBio: string;
  fullBioMarkdown: string;
  email: string;
  github: string;
  linkedin: string;
  newsletter?: string;
  avatarUrl: string;
}

export enum ViewState {
  HOME = 'HOME',
  PROJECTS = 'PROJECTS',
  ARTICLES = 'ARTICLES',
  HALL_OF_FAME = 'HALL_OF_FAME',
  MUSIC_CULTURE = 'MUSIC_CULTURE',
  RESEARCH = 'RESEARCH',
  RESUME = 'RESUME',
  NOW = 'NOW',
  SETUP = 'SETUP'
}