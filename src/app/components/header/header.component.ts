import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { PoModule, PoSearchLiterals } from '@po-ui/ng-components';

@Component({
  selector: 'app-header',
  imports: [RouterLink, PoModule],
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

  customLiterals: PoSearchLiterals = {
    search: 'O que você quer ouvir?',
    clean: 'Limpar',
  };
}
