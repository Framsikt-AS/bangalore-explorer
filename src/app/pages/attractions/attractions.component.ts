import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttractionService } from '../../services/attraction.service';
import { Attraction } from '../../models/attraction.model';

@Component({
  selector: 'app-attractions',
  template: `
    <div class="attractions-header">
      <div class="overlay"></div>
      <div class="container position-relative text-center text-white py-5">
        <h1 class="display-4 fw-bold" *ngIf="!categoryFilter">Discover Bangalore's Attractions</h1>
        <h1 class="display-4 fw-bold" *ngIf="categoryFilter">{{getCategoryTitle(categoryFilter)}}</h1>
        <p class="lead" *ngIf="!categoryFilter">Explore the best places to visit in the Garden City</p>
        <p class="lead" *ngIf="categoryFilter">The best {{getCategoryTitle(categoryFilter).toLowerCase()}} to explore in Bangalore</p>
      </div>
    </div>

    <div class="container py-5">
      <!-- Filters -->
      <div class="filters mb-4">
        <div class="row g-3 align-items-center">
          <div class="col-lg-6 col-md-4">
            <h2 class="filter-title mb-0" *ngIf="!categoryFilter">All Attractions</h2>
            <h2 class="filter-title mb-0" *ngIf="categoryFilter">{{getCategoryTitle(categoryFilter)}}</h2>
          </div>
          <div class="col-lg-3 col-md-4">
            <div class="input-group">
              <span class="input-group-text"><i class="fas fa-sort"></i></span>
              <select class="form-select" (change)="sortAttractions($event)">
                <option value="default">Sort by Default</option>
                <option value="rating">Rating (High to Low)</option>
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
              </select>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div class="input-group">
              <span class="input-group-text"><i class="fas fa-filter"></i></span>
              <select class="form-select" (change)="filterByCategory($event)" [value]="categoryFilter || ''">
                <option value="">All Categories</option>
                <option value="park">Parks & Gardens</option>
                <option value="temple">Temples</option>
                <option value="museum">Museums</option>
                <option value="market">Markets</option>
                <option value="building">Historical Buildings</option>
                <option value="entertainment">Entertainment</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- Attractions Grid -->
      <div class="row g-4">
        <div *ngFor="let attraction of filteredAttractions; let i = index" class="col-lg-3 col-md-6" [attr.data-aos-delay]="i * 100">
          <app-attraction-card [attraction]="attraction"></app-attraction-card>
        </div>
      </div>

      <!-- Empty State -->
      <div *ngIf="filteredAttractions.length === 0" class="text-center py-5">
        <div class="empty-state">
          <i class="fas fa-search fa-3x mb-3"></i>
          <h3>No attractions found</h3>
          <p class="text-muted">Try adjusting your filter criteria</p>
          <button class="btn btn-primary mt-3" (click)="resetFilters()">Reset Filters</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .attractions-header {
      background-image: url('assets/images/bangalore-attractions-header.jpg');
      background-size: cover;
      background-position: center;
      position: relative;
      padding: 120px 0 80px;
      margin-top: -76px; /* To offset navbar height */
    }
    
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7));
    }
    
    .filter-title {
      font-weight: 700;
      color: #333;
    }
    
    .filters {
      background-color: #f8f9fa;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    }
    
    .form-select, .input-group-text {
      border: none;
      box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    }
    
    .input-group-text {
      background-color: white;
      color: #2989d8;
    }
    
    .empty-state {
      padding: 50px 20px;
      color: #6c757d;
    }
    
    .empty-state i {
      color: #2989d8;
    }
  `]
})
export class AttractionsComponent implements OnInit {
  attractions: Attraction[] = [];
  filteredAttractions: Attraction[] = [];
  categoryFilter: string | null = null;
  
  constructor(
    private attractionService: AttractionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryFilter = params.get('category');
      this.loadAttractions();
    });
  }

  loadAttractions(): void {
    if (this.categoryFilter) {
      this.attractionService.getAttractionsByCategory(this.categoryFilter)
        .subscribe(attractions => {
          this.attractions = attractions;
          this.filteredAttractions = [...attractions];
        });
    } else {
      this.attractionService.getAllAttractions()
        .subscribe(attractions => {
          this.attractions = attractions;
          this.filteredAttractions = [...attractions];
        });
    }
  }

  sortAttractions(event: Event): void {
    const sortBy = (event.target as HTMLSelectElement).value;
    
    switch(sortBy) {
      case 'rating':
        this.filteredAttractions.sort((a, b) => b.rating - a.rating);
        break;
      case 'name-asc':
        this.filteredAttractions.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        this.filteredAttractions.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Reset to original order
        this.filteredAttractions = [...this.attractions];
    }
  }

  filterByCategory(event: Event): void {
    const category = (event.target as HTMLSelectElement).value;
    
    if (category) {
      window.location.href = `/attractions/category/${category}`;
    } else {
      window.location.href = '/attractions';
    }
  }

  resetFilters(): void {
    this.categoryFilter = null;
    window.location.href = '/attractions';
  }

  getCategoryTitle(category: string): string {
    const titles: { [key: string]: string } = {
      'park': 'Parks & Gardens',
      'temple': 'Temples',
      'museum': 'Museums',
      'market': 'Markets',
      'building': 'Historical Buildings',
      'entertainment': 'Entertainment Venues'
    };
    return titles[category] || 'Attractions';
  }
}
