import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer text-white py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-4 mb-lg-0">
            <h5 class="mb-4">Bangalore Explorer</h5>
            <p>Discover the beauty, culture, and experiences that the Garden City has to offer. Your ultimate guide to exploring Bangalore.</p>
            <div class="social-icons">
              <a href="#" class="me-3"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="me-3"><i class="fab fa-twitter"></i></a>
              <a href="#" class="me-3"><i class="fab fa-instagram"></i></a>
              <a href="#" class="me-3"><i class="fab fa-youtube"></i></a>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 class="mb-4">Explore</h5>
            <ul class="list-unstyled">
              <li><a routerLink="/" class="text-white-50 mb-2 d-inline-block">Home</a></li>
              <li><a routerLink="/attractions" class="text-white-50 mb-2 d-inline-block">Attractions</a></li>
              <li><a routerLink="/travel-tips" class="text-white-50 mb-2 d-inline-block">Travel Tips</a></li>
              <li><a routerLink="/about" class="text-white-50 mb-2 d-inline-block">About</a></li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 class="mb-4">Categories</h5>
            <ul class="list-unstyled">
              <li><a routerLink="/attractions/category/park" class="text-white-50 mb-2 d-inline-block">Parks</a></li>
              <li><a routerLink="/attractions/category/temple" class="text-white-50 mb-2 d-inline-block">Temples</a></li>
              <li><a routerLink="/attractions/category/museum" class="text-white-50 mb-2 d-inline-block">Museums</a></li>
              <li><a routerLink="/attractions/category/entertainment" class="text-white-50 mb-2 d-inline-block">Entertainment</a></li>
            </ul>
          </div>
          <div class="col-lg-4">
            <h5 class="mb-4">Newsletter</h5>
            <p class="text-white-50">Subscribe to get updates on new attractions and exclusive offers!</p>
            <div class="input-group">
              <input type="email" class="form-control" placeholder="Your Email">
              <button class="btn btn-primary" type="button">Subscribe</button>
            </div>
          </div>
        </div>
        <hr class="my-4 bg-light opacity-25">
        <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p class="mb-0 text-white-50">© 2025 Bangalore Explorer. All rights reserved.</p>
          </div>
          <div class="col-md-6 text-center text-md-end">
            <a href="#" class="text-white-50 me-3">Privacy Policy</a>
            <a href="#" class="text-white-50 me-3">Terms of Service</a>
            <a href="#" class="text-white-50">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, #1e5799 0%,#207cca 51%,#2989d8 100%);
    }
    
    .social-icons a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(255,255,255,0.2);
      color: white;
      transition: all 0.3s;
    }
    
    .social-icons a:hover {
      background: white;
      color: #207cca;
      transform: translateY(-3px);
    }
    
    .list-unstyled a {
      text-decoration: none;
      transition: all 0.3s;
    }
    
    .list-unstyled a:hover {
      color: white !important;
      transform: translateX(5px);
      display: inline-block;
    }
    
    h5 {
      font-weight: 700;
      position: relative;
      padding-bottom: 10px;
    }
    
    h5:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 40px;
      height: 2px;
      background-color: #fff;
    }
    
    .btn-primary {
      background-color: #ff4081;
      border-color: #ff4081;
    }
    
    .btn-primary:hover {
      background-color: #f50057;
      border-color: #f50057;
    }
  `]
})
export class FooterComponent {

}
