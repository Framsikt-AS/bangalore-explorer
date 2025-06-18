import { Component } from '@angular/core';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss']
})
export class CultureComponent {
  festivals = [
    {
      name: 'Karaga',
      description: 'One of the oldest festivals celebrated in Bangalore, particularly by the Thigala community. It honors the goddess Draupadi and features a spectacular procession with the priest carrying a flower pot on his head.',
      month: 'March-April',
      image: '/assets/karaga.jpg'
    },
    {
      name: 'Bangalore Habba',
      description: 'A cultural festival that showcases the art, culture, and heritage of Karnataka through music, dance, theater, and other art forms. It\'s spread across various venues in the city.',
      month: 'December-January',
      image: '/assets/bangalore-habba.jpg'
    },
    {
      name: 'Kadlekai Parishe (Groundnut Fair)',
      description: 'A traditional fair dedicated to Lord Dodda Basava (Bull Temple) where vendors sell groundnuts and other products. The tradition dates back over 500 years.',
      month: 'November-December',
      image: '/assets/kadlekai-parishe.jpg'
    },
    {
      name: 'Ugadi',
      description: 'The Kannada and Telugu New Year celebration that marks the beginning of the Hindu lunar calendar, celebrated with special foods, decorations, and cultural events.',
      month: 'March-April',
      image: '/assets/ugadi.jpg'
    }
  ];

  cuisines = [
    {
      name: 'Bisi Bele Bath',
      description: 'A spicy, rice-based dish made with lentils, vegetables, and a special masala powder. The name literally means "hot lentil rice" in Kannada.',
      image: '/assets/bisi-bele-bath.jpg'
    },
    {
      name: 'Ragi Mudde',
      description: 'A traditional staple made from finger millet flour rolled into balls, typically served with saaru (a type of curry) or any gravy dish.',
      image: '/assets/ragi-mudde.jpg'
    },
    {
      name: 'Davangere Benne Dosa',
      description: 'A specialty dosa variety that originated in Davangere but is popular in Bangalore, known for its liberal use of butter.',
      image: '/assets/benne-dosa.jpg'
    },
    {
      name: 'Mysore Pak',
      description: 'A sweet delicacy made from gram flour, ghee, and sugar that originated in neighboring Mysore but is widely available in Bangalore.',
      image: '/assets/mysore-pak.jpg'
    }
  ];
}
