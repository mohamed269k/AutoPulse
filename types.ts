export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  specs: {
    scale: string;
    motor: string;
    drivetrain: string;
  };
  gallery: string[];
  features: string[];
  whatsInTheBox: string[];
  requiredToComplete: string[];
  reviews: {
    rating: number; // Rating out of 5
    author: string;
    comment: string;
    date: string;
  }[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string | React.ReactNode;
}
