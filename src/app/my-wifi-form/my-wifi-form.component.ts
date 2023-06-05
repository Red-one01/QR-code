import { Component } from '@angular/core';
import { ServiceQrCode } from '../Services/ServiceQrCode';

@Component({
  selector: 'app-my-wifi-form',
  templateUrl: './my-wifi-form.component.html',
  styleUrls: ['./my-wifi-form.component.scss']
})
export class MyWifiFormComponent {
  SSID!: string;
  Password!: string;

  constructor(private QR_code_data: ServiceQrCode) { }

  updatePassword(event: Event) {
    const input = event.target as HTMLInputElement;

    this.Password = input.value;
    this.updateValue();
  }

  updateSSID(event: Event) {
    const input = event.target as HTMLInputElement;

    this.SSID = input.value;
    this.updateValue();
  }

  updateValue(): void {
    this.QR_code_data.qrdata = `WIFI:T:WPA;S:${this.SSID};P:${this.Password};;`;
  }

}
