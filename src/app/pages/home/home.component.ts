import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistaCardComponent } from './artista-card/artista-card.component';
import { DataService } from '../../services/data.service';
import { Artista } from '../../interfaces/artista';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ArtistaCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private dataService: DataService) {}

  artistasDB: Artista[] = [];

  ngOnInit() {
    this.dataService.getArtistas().subscribe((data: Artista[]) => {
      this.artistasDB = data;
    });
  }
}
