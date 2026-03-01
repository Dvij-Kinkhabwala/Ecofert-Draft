
export interface NavItem {
  label: string;
  path: string;
}

export interface Pillar {
  id: string;
  title: string;
  description: string;
  icon: string;
  metric: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  benefits: string[];
  description: string;
  image: string;
}

export interface CaseStudy {
  id: string;
  crop: string;
  region: string;
  problem: string;
  yieldIncrease: number;
  inputReduction: number;
  profitImprovement: number;
}
