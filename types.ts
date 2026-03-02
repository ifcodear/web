
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
  Checkout = 'checkout'
}