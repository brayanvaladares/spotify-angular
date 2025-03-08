import { Component, Input } from '@angular/core';
import { Artista } from '../../../models/artista';

@Component({
  selector: 'app-artista-card',
  imports: [],
  templateUrl: './artista-card.component.html',
  styleUrl: './artista-card.component.css',
})
export class ArtistaCardComponent {
  @Input() Artista: any;
}
