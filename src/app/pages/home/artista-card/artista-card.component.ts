import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artista-card',
  imports: [],
  templateUrl: './artista-card.component.html',
  styleUrl: './artista-card.component.css',
})
export class ArtistaCardComponent {
  @Input() artistasDB: any;
}
