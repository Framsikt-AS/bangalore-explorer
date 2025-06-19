export interface Attraction {
  id: number;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  category: 'park' | 'temple' | 'museum' | 'market' | 'building' | 'entertainment';
  location: {
    address: string;
    lat: number;
    lng: number;
  };
  rating: number;
  visitingHours?: string;
  entryFee?: string;
  tips?: string[];
  nearbyAttractions?: number[];
}
