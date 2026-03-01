import DrLeafImage from "./assets/Dr.Leaf.png";
import DrSeedImage from "./assets/Dr.Seed.png";
import DrSoilImage from "./assets/Dr.Soil.png";
import React from 'react';
import { Leaf, Sprout, Database, Globe, Droplets, Worm } from 'lucide-react';
import { Pillar, Product, CaseStudy } from './types';

// Extend the Product type to include detailed fields
export interface DetailedProduct extends Product {
  fullDescription: string;
  science: {
    heading: string;
    content: string;
  };
  howItWorks: {
    step1: string;
    step2: string;
    step3: string;
  };
  application: {
    method: string;
    dosage: string;
    frequency: string;
  }[];
  keyMetrics: {
    label: string;
    value: string;
    unit: string;
    context: string;
  }[];
}

export const PILLARS: Pillar[] = [
  {
    id: 'nutrients',
    title: 'Unlocking Hidden Nutrients',
    description: 'Dr.Soil builds a soil ecosystem that unlocks trapped micro and macro nutrients, making them readily consumable by plants.',
    icon: 'Database',
    metric: 'Results in 30 days'
  },
  {
    id: 'nutrition',
    title: 'Increase in Earthworm Activity',
    description: 'Creating a favorable soil environment encourages earthworm activity, increasing soil porosity, improving water retention, and reducing water usage.',
    icon: 'Earthworm',
    metric: 'Lab Validated'
  },
  {
    id: 'yield',
    title: 'Yield & Quality Increase',
    description: 'Documented average 35% yield improvements with enhanced uniformity and resilience across climate zones.',
    icon: 'Sprout',
    metric: '+30% Avg Yield'
  },
    {
    id: 'reclamation',
    title: 'Soil Reclamation',
    description: 'Restoring degraded lands using Ecofertile products that thrive where others fail.',
    icon: 'Droplets',
    metric: '100% Biological'
  },
    {
    id: 'carbon',
    title: 'Carbon Sequestration',
    description: 'Enabling soil as climate infrastructure. Increase soil organic carbon through plant stabilization.',
    icon: 'Globe',
    metric: 'SOC Enhancement'
  }
];

export const PRODUCTS: DetailedProduct[] = [
  {
    id: 'dr-soil',
    name: 'Dr. Soil',
    tagline: 'Soil Fertility Booster',
    description: 'Works at the soil level to improve biological activity, organic matter breakdown, and support better nutrient uptake.',
    fullDescription: 'Dr. Soil™ – Soil Fertility Booster works at the fundamental level rather than forcing short-term crop response. It rebuilds soil health weakened by continuous chemical fertilizer usage and poor organic content. It integrates easily into existing fertilizer programs and is specifically engineered to reduce chemical dependency over multiple crop cycles.',
    benefits: ['Improves Biological Activity', 'Enhances Nutrient Availability', 'Improves Water Retention', 'Reduces Chemical Dependency'],
    image: DrSoilImage,
    science: {
      heading: 'Bio-Active Compound Restoration',
      content: 'Using naturally derived bio-active compounds, Dr. Soil stimulates the dormant soil microbiome. This enhances organic matter breakdown and solubilizes fixed nutrients, creating a self-sustaining cycle of fertility.'
    },
    howItWorks: {
      step1: 'Inoculation: Bio-active compounds integrate into the soil matrix.',
      step2: 'Activation: Soil-biota populations increase, breaking down organic matter.',
      step3: 'Uptake: Solubilized nutrients become bio-available to the root system.'
    },
    application: [
      { method: 'Drip Irrigation', dosage: '5 Liters / Acre', frequency: 'Dilute in 200L water' },
      { method: 'Drenching', dosage: '5 Liters / Acre', frequency: 'Dilute in 400L water' }
    ],
    keyMetrics: [
      { label: 'Organic Carbon', value: '+0.4', unit: '%', context: 'Increase per season' },
      { label: 'Root Efficiency', value: 'High', unit: '', context: 'Zone efficiency' },
      { label: 'Water Retention', value: '20', unit: '%', context: 'Structure improvement' }
    ]
  },
  {
    id: 'dr-leaf',
    name: 'Dr. Leaf',
    tagline: 'Foliar Growth Promoter',
    description: 'A botanical formulation designed to enhance photosynthesis efficiency and overall plant vigor through micro-crystal optimization.',
    fullDescription: 'Dr. Leaf™ is a botanical foliar growth promoter that forms millions of micro crystal-like structures on the leaf surface. These structures optimize sunlight interaction with chlorophyll, enabling more efficient conversion of sunlight into plant food. This leads to increased energy availability, improved leaf expansion, higher biomass accumulation, and stronger crop performance.',
    benefits: ['Boosts Photosynthesis', 'Expands Leaf Surface Area', 'Increases Biomass', 'Enhances Visual Greenness'],
    image: DrLeafImage,
    science: {
      heading: 'Micro-Crystalline Light Optimization',
      content: 'The formulation creates a microscopic prism effect on the leaf cuticle. This optimizes photon absorption by chlorophyll, enhancing metabolic rates even during variable light conditions.'
    },
    howItWorks: {
      step1: 'Application: Spray covers upper and lower leaf surfaces.',
      step2: 'Formation: Micro crystal-like structures form on the leaf surface.',
      step3: 'Conversion: Optimized light interaction accelerates energy production.'
    },
    application: [
      { method: 'Foliar Spray', dosage: '3ml / Liter of water', frequency: 'Drench top to bottom' },
      { method: 'Schedule', dosage: 'Monthly', frequency: 'Start 25 days post-germination' }
    ],
    keyMetrics: [
      { label: 'Chlorophyll', value: 'High', unit: '', context: 'Activity stimulation' },
      { label: 'Biomass', value: '+15', unit: '%', context: 'Accumulation index' },
      { label: 'Energy', value: 'Max', unit: '', context: 'Photosynthetic rate' }
    ]
  },
  {
    id: 'dr-seed',
    name: 'Dr. Seed',
    tagline: 'Biological Seed Management',
    description: 'Introduces selected bacterial strains into the root zone to establish symbiotic nitrogen fixation from day one.',
    fullDescription: 'Dr. Seed™ introduces selected strains of bacteria (Symbiotic, Associative, and Free-living) into the root zone. These form a natural relationship with plants to convert atmospheric nitrogen into absorbable forms, significantly reducing dependence on synthetic nitrogen fertilizers while improving plant vigor and soil fertility.',
    benefits: ['Biological N-Fixation', 'Improves Root Nodulation', 'Reduces Chemical N Needs', 'Strengthens Seedling Vigor'],
    image: DrSeedImage, 
    science: {
      heading: 'Symbiotic Nitrogen Fixation',
      content: 'The specialized bacterial consortium colonizes the rhizosphere immediately upon germination. It triggers root nodulation in legumes and associative fixation in other crops, turning the soil into a nitrogen-generating engine.'
    },
    howItWorks: {
      step1: 'Treatment: Seeds are coated or roots dipped in solution.',
      step2: 'Colonization: Bacteria multiply in the emerging root zone.',
      step3: 'Fixation: Atmospheric nitrogen is converted to bio-available ammonia.'
    },
    application: [
      { method: 'Seed Treatment', dosage: 'Coat/Soak', frequency: 'Dry under shade before sowing' },
      { method: 'Root Dipping', dosage: '1L in 50L water', frequency: 'Dip seedlings before transplant' }
    ],
    keyMetrics: [
      { label: 'Germination', value: '98', unit: '%', context: 'Success rate' },
      { label: 'Nitrogen Fix', value: '40', unit: 'kg/ha', context: 'Natural capture' },
      { label: 'Fertilizer', value: '-25', unit: '%', context: 'N requirement reduction' }
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-1',
    crop: 'Sugarcane',
    region: 'Maharashtra, India',
    problem: 'Soil exhaustion & chemical hardening',
    yieldIncrease: 28,
    inputReduction: 35,
    profitImprovement: 46
  },
  {
    id: 'cs-6',
    crop: 'Carrot',
    region: 'Nilgiris, India',
    problem: 'Soil compaction & root forking',
    yieldIncrease: 40,
    inputReduction: 20,
    profitImprovement: 45
  },
  {
    id: 'cs-3',
    crop: 'Leafy Vegetables',
    region: 'Central Luzon, Philippines',
    problem: 'High pest vulnerability & soil acidity',
    yieldIncrease: 45,
    inputReduction: 40,
    profitImprovement: 55
  },
  {
    id: 'cs-4',
    crop: 'Tomato',
    region: 'Karnataka, India',
    problem: 'Soil degradation & nutrient imbalance',
    yieldIncrease: 34,
    inputReduction: 20,
    profitImprovement: 45
  },
  {
    id: 'cs-8',
    crop: 'Capsicum',
    region: 'Himachal Pradesh, India',
    problem: 'Flower drop & physiological stress',
    yieldIncrease: 34,
    inputReduction: 25,
    profitImprovement: 38
  },
  {
    id: 'cs-7',
    crop: 'Banana',
    region: 'Karnataka, India',
    problem: 'Nutrient lock-up & weak anchorage',
    yieldIncrease: 25,
    inputReduction: 20,
    profitImprovement: 30
  },
  {
    id: 'cs-2',
    crop: 'Maize',
    region: 'Nakuru, Kenya',
    problem: 'Low nutrient availability & drought stress',
    yieldIncrease: 22,
    inputReduction: 25,
    profitImprovement: 31
  },
  {
    id: 'cs-5',
    crop: 'Coffee',
    region: 'Karnataka, India',
    problem: 'Soil acidity, berry drop & rust disease',
    yieldIncrease: 19,
    inputReduction: 25,
    profitImprovement: 28
  }
];
