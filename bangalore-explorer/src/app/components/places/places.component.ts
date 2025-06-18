import { Component } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent {
  places = [
    {
      name: 'Lalbagh Botanical Garden',
      description: 'A 240-acre garden with over 1,000 species of plants, a glass house, and a lake.',
      image: '/assets/lalbagh.jpg',
      location: 'Mavalli, Bengaluru',
      category: 'Parks & Gardens'
    },
    {
      name: 'Bangalore Palace',
      description: 'Inspired by England\'s Windsor Castle, this palace was built in 1878 by the Wodeyar dynasty.',
      image: '/assets/bangalore-palace.jpg',
      location: 'Vasanth Nagar, Bengaluru',
      category: 'Historical Places'
    },
    {
      name: 'Cubbon Park',
      description: 'A landmark 300-acre park with lush greenery, walking paths, and historical buildings.',
      image: '/assets/cubbon-park.jpg',
      location: 'Central Bengaluru',
      category: 'Parks & Gardens'
    },
    {
      name: 'ISKCON Temple',
      description: 'A magnificent temple complex dedicated to Lord Krishna, known for its architectural beauty.',
      image: '/assets/iskcon-temple.jpg',
      location: 'Rajajinagar, Bengaluru',
      category: 'Religious Sites'
    },
    {
      name: 'Nandi Hills',
      description: 'A hill fortress and popular viewpoint offering panoramic views and sunrise experiences.',
      image: '/assets/nandi-hills.jpg',
      location: '60 km from Bengaluru',
      category: 'Nature & Adventure'
    },
    {
      name: 'Vidhana Soudha',
      description: 'The seat of Karnataka\'s legislative assembly, known for its Neo-Dravidian architecture.',
      image: '/assets/vidhana-soudha.jpg',
      location: 'Dr. Ambedkar Veedhi, Bengaluru',
      category: 'Landmarks'
    },
    {
      name: 'Tipu Sultan\'s Summer Palace',
      description: 'An example of Indo-Islamic architecture built in 1791, used as the summer residence by Tipu Sultan.',
      image: '/assets/tipu-palace.jpg',
      location: 'Albert Victor Road, Bengaluru',
      category: 'Historical Places'
    },
    {
      name: 'Wonderla Amusement Park',
      description: 'One of India\'s best amusement parks with water rides, dry rides, and entertainment options.',
      image: '/assets/wonderla.jpg',
      location: 'Mysore Road, Bengaluru',
      category: 'Entertainment'
    },
    {
      name: 'National Gallery of Modern Art',
      description: 'Houses paintings, sculptures, and artifacts from the colonial period to contemporary times.',
      image: '/assets/ngma.jpg',
      location: 'Palace Road, Bengaluru',
      category: 'Museums & Art'
    }
  ];

  categories = [
    'All',
    'Parks & Gardens',
    'Historical Places',
    'Religious Sites',
    'Nature & Adventure',
    'Landmarks',
    'Entertainment',
    'Museums & Art'
  ];

  selectedCategory = 'All';

  filterPlaces(category: string) {
    this.selectedCategory = category;
  }

  get filteredPlaces() {
    if (this.selectedCategory === 'All') {
      return this.places;
    }
    return this.places.filter(place => place.category === this.selectedCategory);
  }
}
