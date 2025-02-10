import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  isActivePage(path: string): boolean {
    return this.router.url === path;
  }

  preventFocus(event: Event): void {
    event.preventDefault();
  }

  navigateToSearch(): void {
    this.router.navigate(['/search']);
  }
}
