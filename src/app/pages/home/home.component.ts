import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistasServices } from '../../services/artistas.service';
import { ArtistaCardComponent } from './artista-card/artista-card.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ArtistaCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  artistas: any;

  constructor(private artistasService: ArtistasServices) {
    this.artistas = this.artistasService.getArtista();
  }
}
