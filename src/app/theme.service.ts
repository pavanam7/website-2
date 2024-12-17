import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDarkMode = signal(false);

  toggleTheme() {
    this.isDarkMode.update((current) => !current);
    document.body.classList.toggle('dark-mode', this.isDarkMode());
  }
}