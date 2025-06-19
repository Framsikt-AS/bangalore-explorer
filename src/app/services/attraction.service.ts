import { Injectable } from '@angular/core';
import { Attraction } from '../models/attraction.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttractionService {
  private attractions: Attraction[] = [
    {
      id: 1,
      name: 'Lalbagh Botanical Garden',
      description: 'A lush green paradise in the heart of the city with a famous glass house',
      longDescription: 'Lalbagh Botanical Garden is a well-known botanical garden in Bangalore, India. The garden was originally commissioned by Hyder Ali, the ruler of Mysore, in 1760. Later, his son Tipu Sultan completed it. The garden has a famous glass house which hosts two annual flower shows. Lalbagh houses India\'s largest collection of tropical plants, has an aquarium and a lake, and is one of the main tourist attractions in Bangalore.',
      image: 'assets/images/lalbagh.jpg',
      category: 'park',
      location: {
        address: 'Mavalli, Bengaluru, Karnataka 560004',
        lat: 12.9507,
        lng: 77.5848
      },
      rating: 4.7,
      visitingHours: 'Open daily, 6:00 AM - 7:00 PM',
      entryFee: '₹20 for Indians, ₹40 for foreigners',
      tips: [
        'Visit early morning for bird watching',
        'Don\'t miss the glasshouse in the center of the garden',
        'The Peninsular Gneiss (rock formation) is 3,000 million years old'
      ]
    },
    {
      id: 2,
      name: 'Cubbon Park',
      description: 'A historic park with lush greenery, museums and various government buildings',
      longDescription: 'Cubbon Park is a landmark lung area of Bengaluru city, located within the heart of the city. Established in 1870, the park spans an area of 300 acres and is a cherished recreational space. The park is home to numerous flowering plants and century-old trees, and contains several important institutions like the State Central Library, the High Court, and the Government Museum.',
      image: 'assets/images/cubbon-park.jpg',
      category: 'park',
      location: {
        address: 'Kasturba Road, Behind High Court of Karnataka, Ambedkar Veedhi, Bengaluru',
        lat: 12.9763,
        lng: 77.5929
      },
      rating: 4.5,
      visitingHours: 'Open 24 hours (vehicle restrictions during weekends)',
      entryFee: 'Free',
      tips: [
        'Visit on Sundays when the park is closed to traffic',
        'Don\'t miss the Seshadri Iyer Memorial Hall and State Library',
        'Perfect place for morning jogs and yoga'
      ]
    },
    {
      id: 3,
      name: 'ISKCON Temple Bangalore',
      description: 'A spiritual haven known for its beautiful architecture and peaceful atmosphere',
      longDescription: 'The ISKCON Temple Bangalore is one of the largest ISKCON temples in the world. The temple is a blend of modern technology and spiritual harmony. Known as the Sri Radha Krishna Temple, it was inaugurated in 1997 by Shankar Dayal Sharma. The temple is built in the neo-classical style, incorporating elements of traditional South Indian temple architecture. It offers breathtaking views of the city from its hilltop location.',
      image: 'assets/images/iskcon.jpg',
      category: 'temple',
      location: {
        address: 'Hare Krishna Hill, Chord Rd, Rajajinagar, Bengaluru',
        lat: 13.0098,
        lng: 77.5511
      },
      rating: 4.8,
      visitingHours: '4:15 AM - 8:20 PM daily',
      entryFee: 'Free',
      tips: [
        'Visit during the evening aarti for a spiritual experience',
        'Try the prasadam at their restaurant',
        'Special celebrations during Janmashtami festival'
      ]
    },
    {
      id: 4,
      name: 'Bangalore Palace',
      description: 'A magnificent palace inspired by England\'s Windsor Castle',
      longDescription: 'Built in 1887, Bangalore Palace is a royal residence and was built by Rev. J. Garrett, who was the first Principal of Central High School, now known as Central College. The palace was bought by the then Maharaja of Mysore, Chamaraja Wodeyar X, in 1884. The architecture is a beautiful blend of Tudor and Scottish Gothic styles. The palace houses many exquisite carvings and paintings, and the grounds are often used for public events, concerts, and exhibitions.',
      image: 'assets/images/bangalore-palace.jpg',
      category: 'building',
      location: {
        address: 'Vasanth Nagar, Bengaluru',
        lat: 12.9988,
        lng: 77.5921
      },
      rating: 4.2,
      visitingHours: '10:00 AM - 5:30 PM',
      entryFee: '₹230 for Indians, ₹460 for foreigners (with audio guide)',
      tips: [
        'Rent the audio guide for a detailed history',
        'Photography inside requires a separate fee',
        'Check for events or exhibitions before planning your visit'
      ]
    },
    {
      id: 5,
      name: 'Wonderla Amusement Park',
      description: 'One of India\'s best amusement parks with thrilling rides and water attractions',
      longDescription: 'Wonderla Bangalore is one of the largest amusement parks in India, featuring over 60 rides, both land-based and water-based. Located on the outskirts of the city, the park opened in 2005 and has been consistently rated as one of the cleanest and most entertaining amusement parks in India. It features high-thrill rides, kid-friendly attractions, and a variety of water slides and pools.',
      image: 'assets/images/wonderla.jpg',
      category: 'entertainment',
      location: {
        address: '28th Km, Mysore Road, Bengaluru',
        lat: 12.8340,
        lng: 77.4001
      },
      rating: 4.6,
      visitingHours: '11:00 AM - 6:00 PM (closed on Tuesdays)',
      entryFee: '₹1,130 for adults on weekends (prices vary by day and season)',
      tips: [
        'Visit on weekdays to avoid crowds',
        'Bring a change of clothes for water rides',
        'Book tickets online for discounts',
        'Wear comfortable clothing and footwear'
      ],
      nearbyAttractions: [8]
    },
    {
      id: 6,
      name: 'National Gallery of Modern Art',
      description: 'A treasure trove of modern and contemporary Indian art',
      longDescription: 'The National Gallery of Modern Art (NGMA) in Bangalore is a premier art gallery that showcases modern and contemporary works from Indian artists. Established in 2009, the gallery is housed in a colonial mansion, the heritage wing of which was the original residence of the Mysore royal family. NGMA hosts various exhibitions, workshops, and lectures throughout the year, making it a cultural hub for art enthusiasts.',
      image: 'assets/images/ngma.jpg',
      category: 'museum',
      location: {
        address: '49, GF, Manikyavelu Mansion, Palace Rd, Vasanth Nagar, Bengaluru',
        lat: 12.9898,
        lng: 77.5859
      },
      rating: 4.4,
      visitingHours: '10:00 AM - 5:00 PM (Closed on Mondays)',
      entryFee: '₹20 for Indians, ₹500 for foreigners',
      tips: [
        'Check their website for current exhibitions',
        'Guided tours are available on request',
        'Plan to spend at least 2-3 hours to fully appreciate the collections'
      ]
    },
    {
      id: 7,
      name: 'Commercial Street',
      description: 'A shopper\'s paradise offering everything from local goods to international brands',
      longDescription: 'Commercial Street is one of the oldest and busiest shopping areas in Bangalore. The narrow street is lined with shops selling a wide variety of goods, from traditional Indian garments and jewelry to modern fashion accessories and electronics. The area also houses several boutique stores, export surplus outlets, and street vendors, making it a diverse shopping experience for all budgets.',
      image: 'assets/images/commercial-street.jpg',
      category: 'market',
      location: {
        address: 'Commercial Street, Tasker Town, Bengaluru',
        lat: 12.9817,
        lng: 77.6078
      },
      rating: 4.3,
      visitingHours: '10:30 AM - 8:30 PM (most shops, closed on Sundays)',
      entryFee: 'Free',
      tips: [
        'Be prepared to bargain with street vendors',
        'Visit on weekdays to avoid weekend crowds',
        'Wear comfortable shoes as you\'ll be walking a lot',
        'Try street food at nearby eateries'
      ]
    },
    {
      id: 8,
      name: 'Innovative Film City',
      description: 'A film-based theme park with attractions for all ages',
      longDescription: 'Innovative Film City is a film studio and amusement park located on the outskirts of Bangalore. The park offers a variety of attractions including a miniature city, a wax museum, a haunted mansion, a prehistoric animal park with dinosaur replicas, and various carnival rides. It also houses several sets used in film productions and provides visitors with a glimpse into the world of filmmaking.',
      image: 'assets/images/film-city.jpg',
      category: 'entertainment',
      location: {
        address: '24th Main Rd, Phase 2, J. P. Nagar, Bengaluru',
        lat: 12.8777,
        lng: 77.4077
      },
      rating: 3.9,
      visitingHours: '10:30 AM - 7:30 PM',
      entryFee: '₹650 for adults, ₹550 for children',
      tips: [
        'Purchase the full package to access all attractions',
        'Plan to spend a full day to enjoy all offerings',
        'Check if any films are being shot during your visit'
      ],
      nearbyAttractions: [5]
    }
  ];

  constructor() { }

  getAllAttractions(): Observable<Attraction[]> {
    return of(this.attractions);
  }

  getAttractionById(id: number): Observable<Attraction | undefined> {
    return of(this.attractions.find(attr => attr.id === id));
  }

  getAttractionsByCategory(category: string): Observable<Attraction[]> {
    return of(this.attractions.filter(attr => attr.category === category));
  }

  getTopRatedAttractions(count: number = 4): Observable<Attraction[]> {
    return of([...this.attractions]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, count));
  }

  searchAttractions(query: string): Observable<Attraction[]> {
    if (!query.trim()) {
      return of([]);
    }
    
    query = query.toLowerCase();
    return of(this.attractions.filter(attr => 
      attr.name.toLowerCase().includes(query) || 
      attr.description.toLowerCase().includes(query) ||
      attr.category.toLowerCase().includes(query)
    ));
  }
}
