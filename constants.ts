
import { Product, RepairService } from './types.ts';

export const UCREATION_GREEN = '#44d62c';
export const UCREATION_DARK = '#0b0b0b';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Ucreation Vesper 16',
    category: 'Gaming',
    price: 2499,
    tagline: 'Precision Engineered for Victory',
    specs: {
      cpu: 'Intel Core i9-14900HX',
      gpu: 'RTX 4090 16GB',
      ram: '64GB DDR5',
      storage: '2TB NVMe Gen5'
    },
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    id: '2',
    name: 'Ucreation Slate Pro',
    category: 'Workstation',
    price: 1899,
    tagline: 'Master Your Craft',
    specs: {
      cpu: 'Ryzen 9 7945HX',
      gpu: 'RTX 4080 12GB',
      ram: '32GB DDR5',
      storage: '1TB NVMe'
    },
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    id: '3',
    name: 'Ucreation Air X',
    category: 'Ultrabook',
    price: 1299,
    tagline: 'Limitless Portability',
    specs: {
      cpu: 'Intel Core i7-1365U',
      gpu: 'Intel Iris Xe',
      ram: '16GB LPDDR5',
      storage: '512GB NVMe'
    },
    image: 'https://images.unsplash.com/photo-1544006659-f0b21884cb1d?auto=format&fit=crop&q=80&w=800&h=600'
  }
];

export const REPAIRS: RepairService[] = [
  {
    id: 'r1',
    title: 'Precision Display Replacement',
    description: 'Cracked or flickering screens replaced with OEM-grade high refresh panels.',
    priceStart: 199,
    icon: 'M9.75 3.104v1.244c0 .462.338.841.791.901l11.25 1.5c.519.069.959-.335.959-.858V4.644c0-.462-.338-.841-.791-.901l-11.25-1.5a.91.91 0 0 0-.959.861ZM9.75 20.896v-1.244c0-.462-.338-.841-.791-.901l-11.25-1.5c-.519-.069-.959.335-.959.858v1.244c0 .462.338.841.791.901l11.25 1.5a.91.91 0 0 0 .959-.861Z'
  },
  {
    id: 'r2',
    title: 'Thermal Architecture Overhaul',
    description: 'Deep cleaning and liquid metal repasting for peak thermal efficiency.',
    priceStart: 89,
    icon: 'M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z'
  },
  {
    id: 'r3',
    title: 'Circuit Level Restoration',
    description: 'Micro-soldering and logic board repairs for power issues or water damage.',
    priceStart: 149,
    icon: 'M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21M8.25 7.5l.941 3.137a3 3 0 0 0 2.87 2.113h3.439a3 3 0 0 0 2.87-2.113L19.25 7.5M8.25 19.5l.941-3.137a3 3 0 0 1 2.87-2.113h3.439a3 3 0 0 1 2.87 2.113l.941 3.137'
  }
];
