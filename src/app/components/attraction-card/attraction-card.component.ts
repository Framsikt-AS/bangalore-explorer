import { Component, Input } from '@angular/core';
import { Attraction } from '../../models/attraction.model';

@Component({
  selector: 'app-attraction-card',
  template: `
    <div class="card h-100 attraction-card" [attr.data-aos]="animation">
      <img [src]="attraction.image" class="card-img-top" alt="{{attraction.name}}">
      <div class="category-badge">{{getCategoryLabel(attraction.category)}}</div>
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{{attraction.name}}</h5>
        <div class="ratings mb-2">
          <span class="stars">
            <i class="fas fa-star" *ngFor="let star of getStarsArray(attraction.rating)"></i>
            <i class="fas fa-star-half-alt" *ngIf="hasHalfStar(attraction.rating)"></i>
          </span>
          <span class="rating-value">{{attraction.rating}}</span>
        </div>
        <p class="card-text flex-grow-1">{{attraction.description}}</p>
        <a [routerLink]="['/attraction', attraction.id]" class="btn btn-primary mt-auto">Explore More</a>
      </div>
    </div>
  `,
  styles: [`
    .attraction-card {
      border: none;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      transition: all 0.3s;
      position: relative;
    }
    
    .attraction-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0,0,0,0.15);
    }
    
    .card-img-top {
      height: 200px;
      object-fit: cover;
    }
    
    .card-title {
      font-weight: 700;
      font-size: 1.25rem;
      color: #333;
    }
    
    .category-badge {
      position: absolute;
      top: 15px;
      right: 15px;
      background-color: rgba(0,0,0,0.6);
      color: white;
      padding: 5px 10px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
    }
    
    .stars {
      color: #FFD700;
      margin-right: 5px;
    }
    
    .rating-value {
      font-weight: 600;
      color: #555;
    }
    
    .btn-primary {
      background-color: #2989d8;
      border-color: #2989d8;
      border-radius: 50px;
      padding: 8px 20px;
      font-weight: 500;
      transition: all 0.3s;
    }
    
    .btn-primary:hover {
      background-color: #1e5799;
      border-color: #1e5799;
      transform: scale(1.05);
    }
  `]
})
export class AttractionCardComponent {
  @Input() attraction!: Attraction;
  @Input() animation: string = 'fade-up';

  getCategoryLabel(category: string): string {
    const labels: { [key: string]: string } = {
      'park': 'Park',
      'temple': 'Temple',
      'museum': 'Museum',
      'market': 'Market',
      'building': 'Building',
      'entertainment': 'Entertainment'
    };
    return labels[category] || category;
  }

  getStarsArray(rating: number): number[] {
    const fullStars = Math.floor(rating);
    return Array(fullStars).fill(0);
  }

  hasHalfStar(rating: number): boolean {
    return rating % 1 >= 0.4 && rating % 1 < 0.9;
  }
}
