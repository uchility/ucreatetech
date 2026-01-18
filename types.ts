
export interface Product {
  id: string;
  name: string;
  category: 'Gaming' | 'Workstation' | 'Ultrabook';
  price: number;
  specs: {
    cpu: string;
    gpu: string;
    ram: string;
    storage: string;
  };
  image: string;
  tagline: string;
}

export interface RepairService {
  id: string;
  title: string;
  description: string;
  priceStart: number;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
