import { Component } from '@angular/core';

@Component({
  selector: 'app-travel-tips',
  template: `
    <div class="tips-header">
      <div class="overlay"></div>
      <div class="container position-relative text-center text-white py-5">
        <h1 class="display-4 fw-bold">Bangalore Travel Tips</h1>
        <p class="lead">Essential information to make your visit to Bangalore smooth and enjoyable</p>
      </div>
    </div>

    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <!-- Getting Around -->
          <div class="card mb-4">
            <div class="card-body">
              <h2 class="section-title mb-4"><i class="fas fa-bus me-2"></i>Getting Around</h2>
              
              <div class="tip-item">
                <h4>Public Transport</h4>
                <p>Bangalore has an extensive public transportation network:</p>
                <ul>
                  <li><strong>Namma Metro:</strong> Clean, efficient and covers major parts of the city. Tokens or smart cards can be purchased at stations.</li>
                  <li><strong>BMTC Buses:</strong> Extensive network reaching most areas. Look for Volvo AC buses (V-series) for more comfort.</li>
                  <li><strong>Auto Rickshaws:</strong> Convenient for short distances. Insist on using the meter or negotiate the fare before starting your journey.</li>
                </ul>
              </div>
              
              <div class="tip-item">
                <h4>Ride-Sharing Apps</h4>
                <p>Uber and Ola are widely available throughout the city and often more convenient than hailing an auto rickshaw.</p>
              </div>
              
              <div class="tip-item">
                <h4>Traffic</h4>
                <p>Bangalore is notorious for its traffic congestion. Plan your travel with extra buffer time, especially during rush hours (9-11 AM and 5-8 PM on weekdays).</p>
              </div>
            </div>
          </div>
          
          <!-- Best Time to Visit -->
          <div class="card mb-4">
            <div class="card-body">
              <h2 class="section-title mb-4"><i class="fas fa-calendar-alt me-2"></i>Best Time to Visit</h2>
              
              <div class="tip-item">
                <p>The best time to visit Bangalore is from October to February when the weather is pleasant and cool.</p>
                <div class="seasons-grid">
                  <div class="season-card">
                    <h4>Winter (Oct-Feb)</h4>
                    <p><i class="fas fa-temperature-low"></i> 15-27°C</p>
                    <p class="recommendation"><i class="fas fa-thumbs-up"></i> Best time to visit</p>
                  </div>
                  <div class="season-card">
                    <h4>Summer (Mar-May)</h4>
                    <p><i class="fas fa-temperature-high"></i> 22-35°C</p>
                    <p class="recommendation"><i class="fas fa-meh"></i> Moderately hot</p>
                  </div>
                  <div class="season-card">
                    <h4>Monsoon (Jun-Sep)</h4>
                    <p><i class="fas fa-cloud-rain"></i> 20-28°C</p>
                    <p class="recommendation"><i class="fas fa-umbrella"></i> Frequent showers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Accommodation -->
          <div class="card mb-4">
            <div class="card-body">
              <h2 class="section-title mb-4"><i class="fas fa-hotel me-2"></i>Where to Stay</h2>
              
              <div class="tip-item">
                <p>Bangalore offers accommodation options for all budgets. Here are some recommended areas to stay:</p>
                <ul>
                  <li><strong>MG Road / Brigade Road:</strong> Central location with easy access to shopping, restaurants and nightlife.</li>
                  <li><strong>Indiranagar:</strong> Trendy area with numerous cafes, boutiques, and restaurants.</li>
                  <li><strong>Koramangala:</strong> Popular among young professionals with vibrant food scene.</li>
                  <li><strong>Whitefield:</strong> If visiting for business in the tech parks.</li>
                  <li><strong>Jayanagar:</strong> Residential area with a more authentic local experience.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Food -->
          <div class="card mb-4">
            <div class="card-body">
              <h2 class="section-title mb-4"><i class="fas fa-utensils me-2"></i>Food & Dining</h2>
              
              <div class="tip-item">
                <h4>Local Cuisine</h4>
                <p>Don't miss these Bangalore specialties:</p>
                <ul>
                  <li><strong>Masala Dosa:</strong> Try the iconic crispy dosa at CTR (Central Tiffin Room) in Malleshwaram or Vidyarthi Bhavan in Basavanagudi.</li>
                  <li><strong>Filter Coffee:</strong> South Indian filter coffee is a must-try at any local darshini.</li>
                  <li><strong>Bisi Bele Bath:</strong> Spicy rice dish with lentils and vegetables.</li>
                  <li><strong>Ragi Mudde:</strong> Traditional finger millet ball usually served with sambar.</li>
                </ul>
              </div>
              
              <div class="tip-item">
                <h4>Food Streets</h4>
                <p>Explore these areas for great food options:</p>
                <ul>
                  <li><strong>VV Puram Food Street:</strong> Also known as Thindi Beedi, offers a variety of street food.</li>
                  <li><strong>Koramangala 5th Block:</strong> Hub for trendy cafes and restaurants.</li>
                  <li><strong>Church Street:</strong> Home to both international cuisines and local favorites.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Safety & Etiquette -->
          <div class="card mb-4">
            <div class="card-body">
              <h2 class="section-title mb-4"><i class="fas fa-shield-alt me-2"></i>Safety & Etiquette</h2>
              
              <div class="tip-item">
                <h4>Safety</h4>
                <ul>
                  <li>Bangalore is generally safe, but always remain vigilant about your belongings in crowded areas.</li>
                  <li>Women travelers should avoid isolated areas after dark.</li>
                  <li>Keep digital copies of important documents.</li>
                  <li>Use reputable transportation services, especially at night.</li>
                </ul>
              </div>
              
              <div class="tip-item">
                <h4>Cultural Etiquette</h4>
                <ul>
                  <li>Dress modestly when visiting religious sites (shoulders and knees covered).</li>
                  <li>Remove shoes before entering temples, homes, and some shops.</li>
                  <li>Ask permission before taking photos of people or inside religious sites.</li>
                  <li>A small nod of the head is a common gesture of acknowledgment or greeting.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Practical Information -->
          <div class="card">
            <div class="card-body">
              <h2 class="section-title mb-4"><i class="fas fa-info-circle me-2"></i>Practical Information</h2>
              
              <div class="practical-grid">
                <div class="practical-item">
                  <i class="fas fa-plug"></i>
                  <h4>Power</h4>
                  <p>230V, 50Hz with Type C, D & M sockets</p>
                </div>
                
                <div class="practical-item">
                  <i class="fas fa-language"></i>
                  <h4>Language</h4>
                  <p>Kannada (local), English widely spoken</p>
                </div>
                
                <div class="practical-item">
                  <i class="fas fa-phone"></i>
                  <h4>Emergency</h4>
                  <p>Police: 100, Ambulance: 108</p>
                </div>
                
                <div class="practical-item">
                  <i class="fas fa-wifi"></i>
                  <h4>Internet</h4>
                  <p>Free WiFi in most cafes & restaurants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .tips-header {
      background-image: url('assets/images/bangalore-tips-header.jpg');
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
    
    .card {
      border-radius: 15px;
      border: none;
      box-shadow: 0 5px 15px rgba(0,0,0,0.05);
      overflow: hidden;
    }
    
    .section-title {
      font-weight: 700;
      color: #2989d8;
      margin-bottom: 20px;
      position: relative;
      padding-bottom: 10px;
      display: flex;
      align-items: center;
    }
    
    .section-title:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 3px;
      background-color: #2989d8;
    }
    
    .section-title i {
      margin-right: 10px;
      color: #2989d8;
    }
    
    .tip-item {
      margin-bottom: 25px;
    }
    
    .tip-item:last-child {
      margin-bottom: 0;
    }
    
    .tip-item h4 {
      font-weight: 600;
      color: #333;
      margin-bottom: 10px;
    }
    
    .seasons-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
      margin-top: 15px;
    }
    
    .season-card {
      background-color: #f8f9fa;
      padding: 15px;
      border-radius: 10px;
      text-align: center;
    }
    
    .season-card h4 {
      font-size: 1rem;
      margin-bottom: 10px;
    }
    
    .season-card p {
      margin-bottom: 5px;
      font-size: 0.9rem;
    }
    
    .recommendation {
      font-weight: 500;
    }
    
    .practical-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    
    .practical-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      background-color: #f8f9fa;
      padding: 20px;
      border-radius: 10px;
    }
    
    .practical-item i {
      font-size: 2rem;
      color: #2989d8;
      margin-bottom: 10px;
    }
    
    .practical-item h4 {
      font-weight: 600;
      margin-bottom: 5px;
    }
    
    .practical-item p {
      margin: 0;
      font-size: 0.9rem;
    }
    
    @media (max-width: 768px) {
      .seasons-grid {
        grid-template-columns: 1fr;
      }
      
      .practical-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class TravelTipsComponent {
}
