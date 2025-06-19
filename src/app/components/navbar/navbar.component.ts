import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-gradient">
      <div class="container">
        <a class="navbar-brand" routerLink="/">
          <span class="brand-name">Bangalore Explorer</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarMain">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/attractions" routerLinkActive="active">Attractions</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="categoriesDropdown" role="button" data-bs-toggle="dropdown">
                Categories
              </a>
              <ul class="dropdown-menu" aria-labelledby="categoriesDropdown">
                <li><a class="dropdown-item" routerLink="/attractions/category/park">Parks & Gardens</a></li>
                <li><a class="dropdown-item" routerLink="/attractions/category/temple">Temples</a></li>
                <li><a class="dropdown-item" routerLink="/attractions/category/museum">Museums</a></li>
                <li><a class="dropdown-item" routerLink="/attractions/category/market">Markets</a></li>
                <li><a class="dropdown-item" routerLink="/attractions/category/building">Historical Buildings</a></li>
                <li><a class="dropdown-item" routerLink="/attractions/category/entertainment">Entertainment</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/about" routerLinkActive="active">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/travel-tips" routerLinkActive="active">Travel Tips</a>
            </li>
          </ul>
          <form class="d-flex ms-3">
            <input class="form-control me-2" type="search" placeholder="Search attractions" aria-label="Search">
            <button class="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background: linear-gradient(135deg, #1e5799 0%,#207cca 51%,#2989d8 100%);
      padding: 12px 0;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    }
    .brand-name {
      font-weight: 700;
      font-size: 1.5rem;
      letter-spacing: 0.5px;
    }
    .navbar-nav .nav-link {
      color: rgba(255,255,255,0.9);
      font-weight: 500;
      margin-left: 5px;
      margin-right: 5px;
      transition: all 0.3s;
    }
    .navbar-nav .nav-link:hover, .navbar-nav .nav-link.active {
      color: white;
      transform: translateY(-2px);
    }
    .dropdown-menu {
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    .dropdown-item:hover {
      background-color: #f0f8ff;
    }
    @media (max-width: 992px) {
      .navbar-nav .nav-link {
        margin: 5px 0;
      }
      form {
        margin-top: 10px;
      }
    }
  `]
})
export class NavbarComponent {

}
