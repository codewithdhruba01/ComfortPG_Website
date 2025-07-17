export interface Room {
  id: string;
  title: string;
  price: number;
  image: string;
  images: string[];
  shortDescription: string;
  fullDescription: string;
  amenities: string[];
  category: string;
  capacity: number;
  area: string;
  rating: number;
  reviews: number;
  available: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}