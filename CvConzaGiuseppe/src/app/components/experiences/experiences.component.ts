import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }), 
        animate('1200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })) // Effetto fade-in + movimento
      ])
    ])
  ]
})
export class ExperiencesComponent { }
