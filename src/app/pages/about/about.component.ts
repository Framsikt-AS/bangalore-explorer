import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="about-header">
      <div class="overlay"></div>
      <div class="container position-relative text-center text-white py-5">
        <h1 class="display-4 fw-bold">About Bangalore</h1>
        <p class="lead">Learn about the Silicon Valley of India</p>
      </div>
    </div>

    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="card mb-4">
            <div class="card-body">
              <h2 class="section-title mb-4">The Garden City of India</h2>
              <p class="lead">Bangalore, officially known as Bengaluru, is the capital city of the Indian state of Karnataka.</p>
              <p>Founded in the 16th century, Bangalore has transformed from a small town to one of India's largest cities and the center of India's high-tech industry. The city is known for its pleasant climate, beautiful parks, vibrant culture, and cosmopolitan environment.</p>
              
              <h3 class="mt-4">History</h3>
              <p>Bangalore was founded by Kempe Gowda I, a feudal ruler under the Vijayanagara Empire, who built a mud fort and established a market town in 1537. The city has seen various rulers, including the Mysore Kingdom, the British Raj, and eventually became part of independent India in 1947.</p>
              <p>The city gained prominence as a center for technology and innovation in the late 20th century, earning it the nickname "Silicon Valley of India."</p>
              
              <h3 class="mt-4">Geography and Climate</h3>
              <p>Located in the southeastern part of Karnataka state in the heart of the Mysore Plateau, Bangalore sits at an elevation of about 920 meters (3,020 feet) above sea level. This elevation provides the city with a pleasant climate throughout the year.</p>
              <p>The city experiences a tropical savanna climate with distinct wet and dry seasons. The best time to visit is from October to February when the weather is mild and pleasant.</p>
              
              <div class="facts-grid my-4">
                <div class="fact-card">
                  <i class="fas fa-map-marked-alt"></i>
                  <h4>Location</h4>
                  <p>12.97° N, 77.59° E</p>
                </div>
                <div class="fact-card">
                  <i class="fas fa-users"></i>
                  <h4>Population</h4>
                  <p>~12 million (2023)</p>
                </div>
                <div class="fact-card">
                  <i class="fas fa-globe"></i>
                  <h4>Area</h4>
                  <p>741 km² (286 sq mi)</p>
                </div>
                <div class="fact-card">
                  <i class="fas fa-language"></i>
                  <h4>Languages</h4>
                  <p>Kannada, English, Tamil, Telugu, Hindi</p>
                </div>
              </div>
              
              <h3 class="mt-4">Culture and Cuisine</h3>
              <p>Bangalore is a melting pot of cultures with influences from across India. The city celebrates various festivals throughout the year, including Ugadi (Kannada New Year), Dasara, Deepavali, and Christmas.</p>
              <p>The culinary scene is diverse, offering traditional South Indian dishes alongside global cuisines. Don't miss trying local specialties like Bisi Bele Bath, Ragi Mudde, and the famous Bangalore Masala Dosa.</p>
              
              <h3 class="mt-4">Economy and Innovation</h3>
              <p>Bangalore is India's leading information technology exporter and is home to numerous tech giants, startups, and research institutions. The city's IT sector is centered around areas like Electronics City and Whitefield.</p>
              <p>Beyond technology, Bangalore is also a major center for biotechnology, aerospace, and defense industries.</p>
            </div>
          </div>
          
          <div class="card">
            <div class="card-body">
              <h2 class="section-title mb-4">About this Website</h2>
              <p>Bangalore Explorer is your comprehensive guide to discovering the best of what the Garden City has to offer. Whether you're a first-time visitor or a long-time resident looking to explore more of your city, our curated information helps you make the most of your Bangalore experience.</p>
              <p>Our team of local experts continuously updates the site with the latest information about attractions, events, and hidden gems throughout Bangalore.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-header {
      background-image: url('assets/images/bangalore-skyline.jpg');
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
    
    .facts-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    
    .fact-card {
      background-color: #f8f9fa;
      padding: 20px;
      border-radius: 10px;
      text-align: center;
    }
    
    .fact-card i {
      font-size: 2rem;
      color: #2989d8;
      margin-bottom: 10px;
    }
    
    .fact-card h4 {
      font-weight: 600;
      margin-bottom: 5px;
    }
    
    .fact-card p {
      margin: 0;
    }
    
    @media (max-width: 768px) {
      .facts-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent {
}
