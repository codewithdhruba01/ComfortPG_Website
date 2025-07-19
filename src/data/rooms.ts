import { Room } from '../types';

export const rooms: Room[] = [
  {
    id: '1',
    name: 'Luxury Single Room',
    type: 'Single',
    price: 12000,
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'A luxurious single room with modern amenities and beautiful city views. Perfect for professionals and students.',
    amenities: ['Wi-Fi', 'AC', 'Attached Bathroom', 'Study Table', 'Wardrobe', 'Meals Included'],
    size: '120 sq ft',
    availability: true,
    rating: 4.8,
    reviews: 124,
    category: 'luxury'
  },
  {
    id: '2',
    name: 'Comfort Double Room',
    type: 'Double',
    price: 8000,
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Comfortable double sharing room with all essential amenities. Great for students and working professionals.',
    amenities: ['Wi-Fi', 'AC', 'Shared Bathroom', 'Study Table', 'Wardrobe', 'Meals Included'],
    size: '150 sq ft',
    availability: true,
    rating: 4.5,
    reviews: 89,
    category: 'standard'
  },
  {
    id: '3',
    name: 'Premium Studio',
    type: 'Studio',
    price: 15000,
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Premium studio apartment with kitchenette and separate living area. Perfect for professionals.',
    amenities: ['Wi-Fi', 'AC', 'Kitchenette', 'Attached Bathroom', 'Study Table', 'Wardrobe', 'Laundry'],
    size: '200 sq ft',
    availability: true,
    rating: 4.9,
    reviews: 156,
    category: 'premium'
  },
  {
    id: '4',
    name: 'Budget Single Room',
    type: 'Single',
    price: 6000,
    image: 'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Affordable single room with basic amenities. Perfect for students on a budget.',
    amenities: ['Wi-Fi', 'Fan', 'Shared Bathroom', 'Study Table', 'Wardrobe', 'Meals Included'],
    size: '100 sq ft',
    availability: true,
    rating: 4.2,
    reviews: 67,
    category: 'budget'
  },
  {
    id: '5',
    name: 'Deluxe Double Room',
    type: 'Double',
    price: 10000,
    image: 'https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Deluxe double sharing room with enhanced amenities and comfortable living space.',
    amenities: ['Wi-Fi', 'AC', 'Attached Bathroom', 'Study Table', 'Wardrobe', 'Meals Included', 'Balcony'],
    size: '180 sq ft',
    availability: true,
    rating: 4.6,
    reviews: 98,
    category: 'standard'
  },
  {
    id: '6',
    name: 'Executive Single Room',
    type: 'Single',
    price: 14000,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Executive single room with premium amenities and exclusive services for professionals.',
    amenities: ['Wi-Fi', 'AC', 'Attached Bathroom', 'Study Table', 'Wardrobe', 'Meals Included', 'Housekeeping', 'Balcony'],
    size: '140 sq ft',
    availability: true,
    rating: 4.7,
    reviews: 112,
    category: 'luxury'
  }
];