import { Component, OnInit } from '@angular/core';
import { AttractionService } from '../../services/attraction.service';
import { Attraction } from '../../models/attraction.model';

@Component({
  selector: 'app-home',
  template: `
    <div class="hero-section">
      <div class="hero-overlay"></div>
      <div class="container position-relative h-100 d-flex flex-column justify-content-center text-white">
        <h1 class="display-3 fw-bold" data-aos="fade-up">Explore <span class="text-highlight">Bangalore</span></h1>
        <p class="lead mb-4" data-aos="fade-up" data-aos-delay="200">Discover the Garden City of India with our comprehensive guide to the best attractions, hidden gems, and local experiences.</p>
        <div class="search-box mt-2 mb-5" data-aos="fade-up" data-aos-delay="400">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search for attractions, parks, temples...">
            <button class="btn btn-primary" type="button"><i class="fas fa-search me-2"></i> Search</button>
          </div>
        </div>
        <div class="hero-categories" data-aos="fade-up" data-aos-delay="600">
          <a routerLink="/attractions/category/park" class="hero-category-item">
            <i class="fas fa-tree"></i>
            <span>Parks</span>
          </a>
          <a routerLink="/attractions/category/temple" class="hero-category-item">
            <i class="fas fa-place-of-worship"></i>
            <span>Temples</span>
          </a>
          <a routerLink="/attractions/category/museum" class="hero-category-item">
            <i class="fas fa-landmark"></i>
            <span>Museums</span>
          </a>
          <a routerLink="/attractions/category/market" class="hero-category-item">
            <i class="fas fa-shopping-bag"></i>
            <span>Markets</span>
          </a>
          <a routerLink="/attractions/category/building" class="hero-category-item">
            <i class="fas fa-building"></i>
            <span>Buildings</span>
          </a>
          <a routerLink="/attractions/category/entertainment" class="hero-category-item">
            <i class="fas fa-ticket-alt"></i>
            <span>Entertainment</span>
          </a>
        </div>
      </div>
      <div class="scroll-down">
        <a href="#featured-attractions"><i class="fas fa-chevron-down"></i></a>
      </div>
    </div>

    <section id="featured-attractions" class="py-5">
      <div class="container">
        <div class="section-title text-center mb-5">
          <h2 data-aos="fade-up">Featured Attractions</h2>
          <p class="text-muted" data-aos="fade-up" data-aos-delay="200">Discover the best places to visit in Bangalore</p>
        </div>
        
        <div class="row g-4">
          <div *ngFor="let attraction of topAttractions; let i = index" class="col-lg-3 col-md-6" [attr.data-aos-delay]="i * 100">
            <app-attraction-card [attraction]="attraction"></app-attraction-card>
          </div>
        </div>
        
        <div class="text-center mt-5">
          <a routerLink="/attractions" class="btn btn-outline-primary btn-lg" data-aos="fade-up">View All Attractions</a>
        </div>
      </div>
    </section>

    <section class="about-bangalore py-5 bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <img src="assets/images/bangalore-skyline.jpg" alt="Bangalore Skyline" class="img-fluid rounded-lg shadow-lg">
          </div>
          <div class="col-lg-6" data-aos="fade-left">
            <div class="section-title mb-4">
              <h2>About Bangalore</h2>
            </div>
            <p class="lead">Bangalore, officially known as Bengaluru, is the capital city of Karnataka.</p>
            <p>Known as the "Silicon Valley of India" and "Garden City of India," Bangalore is a vibrant cosmopolitan city with a perfect blend of history and modernity. With its pleasant climate, beautiful parks, stunning Victorian-era architecture, and booming IT industry, it's one of India's most progressive and developed cities.</p>
            <div class="facts mt-4">
              <div class="fact-item">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                  <h5>Location</h5>
                  <p>Southwest India, in the southeastern part of Karnataka</p>
                </div>
              </div>
              <div class="fact-item">
                <i class="fas fa-temperature-high"></i>
                <div>
                  <h5>Climate</h5>
                  <p>Moderate climate throughout the year (15°C - 30°C)</p>
                </div>
              </div>
              <div class="fact-item">
                <i class="fas fa-language"></i>
                <div>
                  <h5>Languages</h5>
                  <p>Kannada, English, Hindi, Telugu, Tamil</p>
                </div>
              </div>
            </div>
            <a routerLink="/about" class="btn btn-primary mt-4">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonials py-5">
      <div class="container">
        <div class="section-title text-center mb-5">
          <h2 data-aos="fade-up">What Travelers Say</h2>
          <p class="text-muted" data-aos="fade-up" data-aos-delay="200">Experiences shared by visitors to Bangalore</p>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-4 col-md-6" data-aos="fade-up">
            <div class="testimonial-card">
              <div class="testimonial-content">
                <p>"Visiting Lalbagh Botanical Garden was a highlight of my trip to Bangalore. The diversity of plants and the iconic glass house are absolutely stunning!"</p>
              </div>
              <div class="testimonial-author">
                <img src="assets/images/person1.jpg" alt="Testimonial Author">
                <div>
                  <h5>Anika Sharma</h5>
                  <p>Delhi, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="testimonial-card">
              <div class="testimonial-content">
                <p>"The ISKCON Temple is not just a religious site but an architectural marvel. The peaceful environment gave me a much-needed break from the city hustle."</p>
              </div>
              <div class="testimonial-author">
                <img src="assets/images/person2.jpg" alt="Testimonial Author">
                <div>
                  <h5>Michael Brown</h5>
                  <p>London, UK</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div class="testimonial-card">
              <div class="testimonial-content">
                <p>"As a history buff, exploring Bangalore Palace was fascinating. The audio guide provided rich insights into the royal heritage of the city."</p>
              </div>
              <div class="testimonial-author">
                <img src="assets/images/person3.jpg" alt="Testimonial Author">
                <div>
                  <h5>Ravi Kumar</h5>
                  <p>Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section text-white text-center py-5">
      <div class="container">
        <h2 class="mb-4" data-aos="fade-up">Ready to explore Bangalore?</h2>
        <p class="lead mb-5" data-aos="fade-up" data-aos-delay="200">Start planning your perfect trip to the Garden City today!</p>
        <a routerLink="/attractions" class="btn btn-light btn-lg px-5" data-aos="fade-up" data-aos-delay="400">Start Exploring</a>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      height: 100vh;
      min-height: 600px;
      background-image: url('assets/images/bangalore-hero.jpg');
      background-size: cover;
      background-position: center;
      position: relative;
    }
    
    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7));
    }
    
    .text-highlight {
      color: #2989d8;
      position: relative;
    }
    
    .text-highlight:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 4px;
      background-color: #2989d8;
      bottom: -5px;
      left: 0;
    }
    
    .search-box {
      max-width: 600px;
    }
    
    .search-box .form-control {
      height: 54px;
      border-radius: 27px 0 0 27px;
      border: none;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    
    .search-box .btn {
      border-radius: 0 27px 27px 0;
      height: 54px;
      padding-left: 25px;
      padding-right: 25px;
      background: linear-gradient(135deg, #1e5799 0%,#207cca 51%,#2989d8 100%);
      border: none;
    }
    
    .hero-categories {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
    }
    
    .hero-category-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: white;
      text-decoration: none;
      transition: all 0.3s;
      padding: 15px;
      border-radius: 10px;
      background-color: rgba(255,255,255,0.1);
      backdrop-filter: blur(10px);
      width: 100px;
    }
    
    .hero-category-item i {
      font-size: 24px;
      margin-bottom: 8px;
    }
    
    .hero-category-item:hover {
      background-color: rgba(255,255,255,0.2);
      transform: translateY(-5px);
    }
    
    .scroll-down {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
    }
    
    .scroll-down a {
      color: white;
      font-size: 24px;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      display: block;
      border-radius: 50%;
      background-color: rgba(255,255,255,0.1);
      animation: bounce 2s infinite;
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-10px); }
      60% { transform: translateY(-5px); }
    }
    
    .section-title h2 {
      font-weight: 700;
      position: relative;
      display: inline-block;
      margin-bottom: 15px;
    }
    
    .section-title h2:after {
      content: '';
      position: absolute;
      width: 60%;
      height: 3px;
      background-color: #2989d8;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
    }
    
    .about-bangalore img {
      border-radius: 15px;
    }
    
    .facts {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    
    .fact-item {
      display: flex;
      align-items: flex-start;
    }
    
    .fact-item i {
      font-size: 24px;
      color: #2989d8;
      margin-right: 15px;
      margin-top: 5px;
    }
    
    .fact-item h5 {
      margin: 0 0 5px;
      font-weight: 600;
    }
    
    .fact-item p {
      margin: 0;
    }
    
    .testimonial-card {
      background-color: white;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      height: 100%;
    }
    
    .testimonial-content {
      padding: 25px;
      position: relative;
    }
    
    .testimonial-content:before {
      content: '"';
      font-size: 5rem;
      position: absolute;
      top: 10px;
      left: 10px;
      color: rgba(0,0,0,0.05);
      font-family: serif;
    }
    
    .testimonial-content p {
      position: relative;
      z-index: 1;
    }
    
    .testimonial-author {
      display: flex;
      align-items: center;
      padding: 15px 25px;
      background-color: #f8f9fa;
    }
    
    .testimonial-author img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 15px;
    }
    
    .testimonial-author h5 {
      margin: 0 0 5px;
      font-weight: 600;
    }
    
    .testimonial-author p {
      margin: 0;
      font-size: 0.85rem;
      color: #6c757d;
    }
    
    .cta-section {
      background: linear-gradient(135deg, #1e5799 0%,#207cca 51%,#2989d8 100%);
    }
    
    .rounded-lg {
      border-radius: 15px;
    }
    
    .shadow-lg {
      box-shadow: 0 15px 30px rgba(0,0,0,0.2) !important;
    }
    
    @media (max-width: 768px) {
      .hero-section {
        height: auto;
        padding: 120px 0 100px;
      }
      
      .hero-categories {
        justify-content: center;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  topAttractions: Attraction[] = [];

  constructor(private attractionService: AttractionService) { }

  ngOnInit(): void {
    this.attractionService.getTopRatedAttractions(4)
      .subscribe(attractions => this.topAttractions = attractions);
  }
}
