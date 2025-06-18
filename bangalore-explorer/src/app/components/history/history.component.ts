import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  timelineEvents = [
    {
      year: '1537',
      title: 'Foundation of Bangalore',
      description: 'Kempe Gowda I established Bangalore by building a mud fort and marking the city limits with four towers.'
    },
    {
      year: '1638',
      title: 'Mughal Era',
      description: 'Bangalore was sold to the Mughals by the successors of Kempe Gowda.'
    },
    {
      year: '1687-1690',
      title: 'Mughal Rule',
      description: 'Bangalore became part of the Kingdom of Mysore under the Wodeyars.'
    },
    {
      year: '1758-1759',
      title: 'Hyder Ali\'s Rule',
      description: 'Hyder Ali received Bangalore as a jagir from Krishna Raja Wodeyar II and fortified the city.'
    },
    {
      year: '1799',
      title: 'British Era Begins',
      description: 'After the defeat of Tipu Sultan, the British returned control to the Wodeyars but maintained a strong presence.'
    },
    {
      year: '1831',
      title: 'British Direct Control',
      description: 'The British took direct control of the Kingdom of Mysore including Bangalore.'
    },
    {
      year: '1881',
      title: 'Return to Wodeyar Rule',
      description: 'The British returned Bangalore and the Kingdom of Mysore to the Wodeyars.'
    },
    {
      year: '1947',
      title: 'Indian Independence',
      description: 'After India gained independence, Bangalore became part of the state of Mysore.'
    },
    {
      year: '1956',
      title: 'Capital of Karnataka',
      description: 'Bangalore became the capital of the newly formed state of Karnataka (initially named Mysore).'
    },
    {
      year: '1980s-1990s',
      title: 'IT Revolution',
      description: 'Bangalore emerged as India\'s Silicon Valley with the establishment of major IT companies.'
    },
    {
      year: '2006',
      title: 'Renamed to Bengaluru',
      description: 'Bangalore was officially renamed to Bengaluru, though both names remain in common use.'
    },
    {
      year: '2025',
      title: 'Modern Metropolis',
      description: 'Today, Bengaluru continues to grow as a major IT hub and cosmopolitan city.'
    }
  ];
}
