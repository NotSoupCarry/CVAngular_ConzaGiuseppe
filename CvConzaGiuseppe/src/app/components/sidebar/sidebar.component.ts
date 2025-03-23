import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('1200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('imageAppear', [
      transition(':enter', [
        animate(
          '1000ms ease-out',
          keyframes([
            style({ opacity: 0, transform: 'scale(0.5)', offset: 0 }), // Inizia piccolo e trasparente
            style({ opacity: 0.5, transform: 'scale(1.05)', offset: 0.7 }), // Cresce con effetto bounce
            style({ opacity: 1, transform: 'scale(1)', offset: 1 }) // Torna alla dimensione normale
          ])
        )
      ])
    ])
  ]
})
export class SidebarComponent { }
