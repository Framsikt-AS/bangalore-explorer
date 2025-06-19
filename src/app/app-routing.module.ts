import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AttractionsComponent } from './pages/attractions/attractions.component';
import { AttractionDetailsComponent } from './pages/attraction-details/attraction-details.component';
import { AboutComponent } from './pages/about/about.component';
import { TravelTipsComponent } from './pages/travel-tips/travel-tips.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'attractions', component: AttractionsComponent },
  { path: 'attractions/category/:category', component: AttractionsComponent },
  { path: 'attraction/:id', component: AttractionDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'travel-tips', component: TravelTipsComponent },
  { path: '**', redirectTo: '' } // Redirect any unknown routes to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
