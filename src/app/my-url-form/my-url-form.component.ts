import { Component } from '@angular/core';
import { ServiceQrCode } from '../Services/ServiceQrCode';

@Component({
  selector: 'app-my-url-form',
  templateUrl: './my-url-form.component.html',
  styleUrls: ['./my-url-form.component.scss']
})
export class MyUrlFormComponent {
  constructor(private QR_code_data: ServiceQrCode) { }

  updateValue(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.QR_code_data.qrdata = input.value;
  }

}
