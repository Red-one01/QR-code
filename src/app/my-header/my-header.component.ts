import { Component, HostListener } from '@angular/core';
import { ServiceQrCode } from '../Services/ServiceQrCode';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss']
})
export class MyHeaderComponent {
  isDropdownOpen = false;
  constructor(public lng: ServiceQrCode) { }

  OnChangeLang(lang: string) {
    this.lng.translate.use(lang);
  }

  // Fonction pour afficher ou cacher le menu déroulant
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Ferme le menu déroulant si l'on clique en dehors de celui-ci
  closeDropdown() {
    this.isDropdownOpen = false;
  }

  openNav() {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav)
      sidenav.classList.add("active");
  }

  closeNav() {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav)
      sidenav.classList.remove("active");
  }
}
