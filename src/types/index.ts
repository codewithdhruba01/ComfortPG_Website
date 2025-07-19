export interface Room {
  id: string;
  name: string;
  type: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  amenities: string[];
  size: string;
  availability: boolean;
  rating: number;
  reviews: number;
  category: string;
}

export interface CartItem {
  room: Room;
  quantity: number;
  checkIn: string;
  checkOut: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Broker {
  id: string;
  name: string;
  image: string;
  city: string;
  area: string;
  experience: number;
  rating: number;
  reviews: number;
  phone: string;
  email: string;
  specialties: string[];
  description: string;
  verified: boolean;
  responseTime: string;
  languages: string[];
  properties: number;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  message: string;
  timestamp: Date;
  isUser: boolean;
}