export type PropertyType = 'apartment' | 'villa' | 'commercial' | 'land';
export type PropertyStatus = 'available' | 'sold' | 'under-construction';
export type TransactionType = 'buy' | 'sell' | 'rent';

export interface PropertyImage {
  id: string;
  url: string;
  alt: string;
  order: number;
  isVerified: boolean;
}

export interface PropertyAmenity {
  id: string;
  name: string;
  icon: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  type: PropertyType;
  status: PropertyStatus;
  price: number;
  pricePerSqft: number;
  bhk: number;
  sqft: number;
  flooring: string;
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    lat: number;
    lng: number;
  };
  images: PropertyImage[];
  amenities: PropertyAmenity[];
  owner: {
    id: string;
    name: string;
    phone: string;
    email: string;
    verified: boolean;
  };
  reraNumber?: string;
  reraApproved: boolean;
  createdAt: string;
  updatedAt: string;
  views: number;
  favorites: number;
}

export interface User {
  id: string;
  email: string;
  phone: string;
  name: string;
  role: 'buyer' | 'seller' | 'agent' | 'admin';
  profileImage?: string;
  verified: boolean;
  createdAt: string;
}

export interface SearchFilters {
  query?: string;
  type?: PropertyType[];
  status?: PropertyStatus[];
  priceMin?: number;
  priceMax?: number;
  bhkMin?: number;
  bhkMax?: number;
  sqftMin?: number;
  sqftMax?: number;
  amenities?: string[];
  reraApproved?: boolean;
  sortBy?: 'newest' | 'price-low' | 'price-high' | 'popular';
}

export interface EMICalculation {
  principal: number;
  rate: number;
  tenure: number;
  monthlyEMI: number;
  totalAmount: number;
  totalInterest: number;
}

export interface Neighborhood {
  aqi: number;
  aqiStatus: 'Good' | 'Moderate' | 'Poor' | 'Severe';
  nearestMetro?: {
    name: string;
    distance: number;
  };
  nearestHighway?: {
    name: string;
    distance: number;
  };
  schools: Array<{
    name: string;
    rating: number;
    distance: number;
  }>;
  safetyScore: number;
}

export interface ComparisonItem {
  id: string;
  property: Property;
  addedAt: string;
}

export interface ListingFormData {
  title: string;
  description: string;
  type: PropertyType;
  price: number;
  bhk: number;
  sqft: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  images: File[];
  amenities: string[];
  reraNumber?: string;
}
