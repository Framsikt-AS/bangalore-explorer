import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    main {
      min-height: 80vh;
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'bangalore-explorer';
  
  ngOnInit() {
    // AOS is initialized directly in index.html
    // This ensures it's initialized after the DOM is fully loaded
  }
}
