import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  toggleTheme(isDark: boolean = false) {
    document.body.classList.toggle('dark-theme', isDark);
  }
}
