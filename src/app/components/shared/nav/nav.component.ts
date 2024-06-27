import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  toggleHidden() {
    document.getElementById('menu-toggle')?.classList.toggle('hidden');
  }

  navRoutes = [
    {
      label: 'Home',
      url: 'home',
      iconClass: 'pi-home',
    },
    {
      label: 'Contact',
      url: 'contact',
      iconClass: 'pi-users',
    },
    {
      label: 'E-Resume',
      url: 'e-resume',
      iconClass: 'pi-briefcase',
    },
    {
      label: 'About',
      url: 'about',
      iconClass: 'pi-user',
    },
  ];
}
