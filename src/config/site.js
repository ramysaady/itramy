// Replace WHATSAPP_NUMBER with the live number in international format, digits only.
const WHATSAPP_NUMBER = '9611234567';

export const site = {
  name: 'IT Ramy',
  role: 'IT & Network Automation Specialist',
  domain: 'itramy.com',
  url: 'https://itramy.com',
  tagline: 'Professional IT & Network Solutions',
  description:
    'Helping businesses build reliable, secure and high-performance networks.',
  location: 'Tripoli, Lebanon',
  email: 'hello@itramy.com',
  linkedin: 'https://www.linkedin.com/in/itramy',
  github: 'https://github.com/ramysaady',
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappMessage:
    'Hello IT Ramy, I would like to discuss a network or IT project.',
  availability: 'Available for new projects',
  responseTime: 'Replies within a few hours',
};

export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Me', href: '#why-me' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const audiences = [
  'Internet Service Providers',
  'Companies',
  'Hotels',
  'Restaurants',
  'Schools',
  'Offices',
  'Small Businesses',
  'Home Users',
];
