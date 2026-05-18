
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tag?: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  image: string;
}

export interface User {
  name: string;
  email: string;
  picture: string;
}

export enum Page {
  Home = 'home',
  Services = 'services',
  Process = 'process',
  Checkout = 'checkout',
  FullStack = 'fullstack',
  MobileApps = 'mobileapps',
  Engineering = 'engineering',
  Pricing = 'pricing',
  Portfolio = 'portfolio',
  PortfolioECommerce = 'portfolio-ecommerce',
  PortfolioFintech = 'portfolio-fintech',
  PortfolioRealEstate = 'portfolio-realestate',
  PortfolioCreative = 'portfolio-creative',
  PortfolioMotorcycles = 'portfolio-motorcycles',
  Consulting = 'consulting',
  ITSupport = 'it-support',
  Roadmap = 'roadmap',
  RoadmapBuilder = 'roadmap-builder',
  Sitemap = 'sitemap'
}