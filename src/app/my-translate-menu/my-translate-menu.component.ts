import { Component } from '@angular/core';
import { ServiceQrCode } from '../Services/ServiceQrCode';
import { countries_tab } from 'src/assets/config';
import { Country } from './Country';

@Component({
  selector: 'app-my-translate-menu',
  templateUrl: './my-translate-menu.component.html',
  styleUrls: ['./my-translate-menu.component.scss']
})
export class MyTranslateMenuComponent {
  readonly countries: Country[] = countries_tab;

  isDropdownOpen = false;
  constructor(public lng: ServiceQrCode) {}

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

}

