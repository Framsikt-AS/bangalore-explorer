import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center" class="content">
      <h1>
        Welcome to Bangalore Explorer!
      </h1>
      <img width="300" alt="Bangalore Image" src="assets/images/image-placeholder.jpg">
    </div>
    <div class="content">
      <h2>Start exploring Bangalore</h2>
      <p>Discover the Garden City of India</p>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px;
    }
    h1 {
      color: #3f51b5;
    }
    h2 {
      color: #ff4081;
    }
  `]
})
export class AppComponent {
  title = 'bangalore-explorer';
}
