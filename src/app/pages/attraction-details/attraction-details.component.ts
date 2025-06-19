import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttractionService } from '../../services/attraction.service';
import { Attraction } from '../../models/attraction.model';

@Component({
  selector: 'app-attraction-details',
  template: `
    <div *ngIf="attraction" class="attraction-details">
      <div class="hero-image" [style.backgroundImage]="'url(' + attraction.image + ')'">
        <div class="overlay"></div>
        <div class="container">
          <h1 class="display-4 fw-bold">{{attraction.name}}</h1>
          <div class="d-flex align-items-center">
            <div class="ratings me-3">
              <span class="stars">
                <i class="fas fa-star" *ngFor="let star of getStarsArray(attraction.rating)"></i>
                <i class="fas fa-star-half-alt" *ngIf="hasHalfStar(attraction.rating)"></i>
              </span>
            </div>
            <span class="rating-value">{{attraction.rating}} / 5</span>
          </div>
          <div class="category-badge my-3">
            {{getCategoryLabel(attraction.category)}}
          </div>
        </div>
      </div>

      <div class="container py-5">
        <div class="row">
          <div class="col-lg-8">
            <div class="card mb-4">
              <div class="card-body">
                <h2 class="card-title">About</h2>
                <p class="lead">{{attraction.description}}</p>
                <p class="mb-0">{{attraction.longDescription}}</p>
              </div>
            </div>

            <!-- Visiting Information -->
            <div class="card mb-4">
              <div class="card-body">
                <h2 class="card-title">Visiting Information</h2>
                <div class="row">
                  <div class="col-md-6">
                    <div class="info-item">
                      <i class="fas fa-clock"></i>
                      <div>
                        <h5>Opening Hours</h5>
                        <p>{{attraction.visitingHours || 'Information not available'}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="info-item">
                      <i class="fas fa-ticket-alt"></i>
                      <div>
                        <h5>Entry Fee</h5>
                        <p>{{attraction.entryFee || 'Information not available'}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tips -->
            <div class="card mb-4" *ngIf="attraction.tips && attraction.tips.length > 0">
              <div class="card-body">
                <h2 class="card-title">Tips for Visitors</h2>
                <ul class="tips-list">
                  <li *ngFor="let tip of attraction.tips">
                    <i class="fas fa-check-circle"></i>
                    {{tip}}
                  </li>
                </ul>
              </div>
            </div>

            <!-- Photo Gallery -->
            <div class="card mb-4">
              <div class="card-body">
                <h2 class="card-title">Photo Gallery</h2>
                <div class="row g-3 photo-gallery">
                  <div class="col-md-4 col-6">
                    <div class="gallery-item">
                      <img src="{{attraction.image}}" alt="{{attraction.name}} 1" class="img-fluid">
                    </div>
                  </div>
                  <!-- More gallery placeholders -->
                  <div class="col-md-4 col-6">
                    <div class="gallery-item">
                      <img src="assets/images/gallery-placeholder-1.jpg" alt="{{attraction.name}} 2" class="img-fluid">
                    </div>
                  </div>
                  <div class="col-md-4 col-6">
                    <div class="gallery-item">
                      <img src="assets/images/gallery-placeholder-2.jpg" alt="{{attraction.name}} 3" class="img-fluid">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <!-- Location -->
            <div class="card mb-4">
              <div class="card-body">
                <h2 class="card-title">Location</h2>
                <address class="location-address mb-3">
                  <i class="fas fa-map-marker-alt me-2"></i>
                  {{attraction.location.address}}
                </address>
                <div class="map-placeholder">
                  <img src="assets/images/map-placeholder.jpg" alt="Map" class="img-fluid rounded">
                  <div class="map-overlay d-flex flex-column align-items-center justify-content-center">
                    <p class="mb-2">View on map</p>
                    <a href="https://maps.google.com/?q={{attraction.location.lat}},{{attraction.location.lng}}" 
                       target="_blank" class="btn btn-sm btn-primary">
                      <i class="fas fa-external-link-alt me-2"></i>Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Nearby Attractions -->
            <div class="card mb-4" *ngIf="nearbyAttractions && nearbyAttractions.length > 0">
              <div class="card-body">
                <h2 class="card-title">Nearby Attractions</h2>
                <div class="nearby-attractions">
                  <div *ngFor="let nearby of nearbyAttractions" class="nearby-attraction-item">
                    <img [src]="nearby.image" alt="{{nearby.name}}" class="nearby-img">
                    <div>
                      <h5><a [routerLink]="['/attraction', nearby.id]">{{nearby.name}}</a></h5>
                      <div class="small ratings">
                        <span class="stars">
                          <i class="fas fa-star" *ngFor="let star of getStarsArray(nearby.rating)"></i>
                          <i class="fas fa-star-half-alt" *ngIf="hasHalfStar(nearby.rating)"></i>
                        </span>
                        <span class="rating-value ms-1">{{nearby.rating}}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Share -->
            <div class="card">
              <div class="card-body">
                <h2 class="card-title">Share</h2>
                <div class="share-buttons">
                  <a href="#" class="btn btn-outline-primary">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="btn btn-outline-info">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" class="btn btn-outline-danger">
                    <i class="fab fa-pinterest"></i>
                  </a>
                  <a href="#" class="btn btn-outline-success">
                    <i class="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div *ngIf="!attraction" class="container py-5 text-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="mt-3">Loading attraction details...</p>
    </div>
  `,
  styles: [`
    .attraction-details {
      margin-top: -76px; /* To offset the navbar height */
    }
    
    .hero-image {
      height: 70vh;
      min-height: 500px;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: flex-end;
      position: relative;
      padding-bottom: 50px;
      color: white;
    }
    
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8));
      z-index: 1;
    }
    
    .hero-image .container {
      position: relative;
      z-index: 2;
    }
    
    .stars {
      color: #FFD700;
    }
    
    .rating-value {
      font-weight: 600;
      color: #fff;
    }
    
    .category-badge {
      display: inline-block;
      background-color: rgba(255,255,255,0.2);
      color: white;
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 500;
    }
    
    .card {
      border-radius: 15px;
      border: none;
      box-shadow: 0 5px 15px rgba(0,0,0,0.05);
      overflow: hidden;
    }
    
    .card-title {
      font-weight: 700;
      color: #2989d8;
      margin-bottom: 20px;
      position: relative;
      padding-bottom: 10px;
    }
    
    .card-title:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 3px;
      background-color: #2989d8;
    }
    
    .info-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 20px;
    }
    
    .info-item i {
      font-size: 24px;
      color: #2989d8;
      margin-right: 15px;
      margin-top: 5px;
    }
    
    .info-item h5 {
      margin: 0 0 5px;
      font-weight: 600;
    }
    
    .info-item p {
      margin: 0;
    }
    
    .tips-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .tips-list li {
      padding: 8px 0;
      display: flex;
      align-items: center;
    }
    
    .tips-list li i {
      color: #2989d8;
      margin-right: 10px;
    }
    
    .gallery-item {
      border-radius: 10px;
      overflow: hidden;
      height: 150px;
    }
    
    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s;
    }
    
    .gallery-item:hover img {
      transform: scale(1.05);
    }
    
    .map-placeholder {
      position: relative;
      border-radius: 10px;
      overflow: hidden;
    }
    
    .map-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.4);
      color: white;
      opacity: 0;
      transition: opacity 0.3s;
    }
    
    .map-placeholder:hover .map-overlay {
      opacity: 1;
    }
    
    .nearby-attraction-item {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid #eee;
    }
    
    .nearby-attraction-item:last-child {
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: none;
    }
    
    .nearby-img {
      width: 60px;
      height: 60px;
      object-fit: cover;
      border-radius: 8px;
      margin-right: 15px;
    }
    
    .nearby-attraction-item h5 {
      margin: 0 0 5px;
      font-size: 1rem;
    }
    
    .nearby-attraction-item h5 a {
      color: #333;
      text-decoration: none;
      transition: color 0.3s;
    }
    
    .nearby-attraction-item h5 a:hover {
      color: #2989d8;
    }
    
    .nearby-attraction-item .stars {
      font-size: 0.8rem;
    }
    
    .share-buttons {
      display: flex;
      gap: 10px;
    }
    
    .share-buttons .btn {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      padding: 0;
    }
    
    @media (max-width: 768px) {
      .hero-image {
        height: 50vh;
        min-height: 400px;
      }
    }
  `]
})
export class AttractionDetailsComponent implements OnInit {
  attraction?: Attraction;
  nearbyAttractions: Attraction[] = [];

  constructor(
    private route: ActivatedRoute,
    private attractionService: AttractionService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.loadAttraction(id);
      }
    });
  }

  loadAttraction(id: number): void {
    this.attractionService.getAttractionById(id).subscribe(attraction => {
      this.attraction = attraction;
      
      if (attraction && attraction.nearbyAttractions && attraction.nearbyAttractions.length > 0) {
        this.loadNearbyAttractions(attraction.nearbyAttractions);
      }
    });
  }

  loadNearbyAttractions(ids: number[]): void {
    ids.forEach(id => {
      this.attractionService.getAttractionById(id).subscribe(attraction => {
        if (attraction) {
          this.nearbyAttractions.push(attraction);
        }
      });
    });
  }

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
