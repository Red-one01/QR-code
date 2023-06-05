import { Component } from '@angular/core';
import { ServiceQrCode } from '../Services/ServiceQrCode';

@Component({
  selector: 'app-my-geoloc-form',
  templateUrl: './my-geoloc-form.component.html',
  styleUrls: ['./my-geoloc-form.component.scss']
})
export class MyGeolocFormComponent {

  Latitude!: string;
  Longitude!: string;

  Latitude_incorrect: boolean = false;
  Longitude_incorrect: boolean = false;

  constructor(private QR_code_data: ServiceQrCode) {

  }
  updateLongitude(event: Event) {
    const input = event.target as HTMLInputElement;

    this.Longitude = input.value;
    this.updateValue();
  }
  updateLatitude(event: Event) {
    const input = event.target as HTMLInputElement;

    this.Latitude = input.value;
    this.updateValue();

  }
  updateValue(): void {
    this.QR_code_data.qrdata = `GEO:${this.Latitude},${this.Longitude}`;
  }

  validateLatitude(event: Event) {
    let input = event.target as HTMLInputElement;
    if (input) {

      const value = input.value;
      const pattern = input.getAttribute("pattern");
      const regex = new RegExp("^" + pattern + "$");
      if (!regex.test(value)) {
        input.value = value.slice(0, -1);
      }
    }
  }

  onInputLatitude(event: Event): boolean {
    let inputElement = event.target as HTMLInputElement;
    if (inputElement.validity.patternMismatch) {
      this.Latitude_incorrect = true;
      return false;
    }
    else {

      if (parseFloat(inputElement.value) < -90. || parseInt(inputElement.value) > 90.) {
        this.Latitude_incorrect = true;
        return false;
      }
      this.Latitude_incorrect = false;
      return true;
    }
  }

  onInputLongitude(event: Event): boolean {
    let inputElement = event.target as HTMLInputElement;
    if (inputElement.validity.patternMismatch) {
      this.Longitude_incorrect = true;
      return false;
    } else {
      if (parseFloat(inputElement.value) < -180. || parseInt(inputElement.value) > 180.) {
        this.Longitude_incorrect = true;
        return false;
      }
      this.Longitude_incorrect = false;
      return true;
    }
  }



}
