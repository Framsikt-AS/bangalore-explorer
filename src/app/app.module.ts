import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AttractionCardComponent } from './components/attraction-card/attraction-card.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { AttractionsComponent } from './pages/attractions/attractions.component';
import { AttractionDetailsComponent } from './pages/attraction-details/attraction-details.component';
import { AboutComponent } from './pages/about/about.component';
import { TravelTipsComponent } from './pages/travel-tips/travel-tips.component';

@NgModule({  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AttractionCardComponent,
    HomeComponent,
    AttractionsComponent,
    AttractionDetailsComponent,
    AboutComponent,
    TravelTipsComponent
  ],imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
