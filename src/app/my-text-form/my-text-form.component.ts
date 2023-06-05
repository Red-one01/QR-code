import { Component } from '@angular/core';
import { ServiceQrCode } from '../Services/ServiceQrCode';
@Component({
  selector: 'app-my-text-form',
  templateUrl: './my-text-form.component.html',
  styleUrls: ['./my-text-form.component.scss']
})
export class MyTextFormComponent {
  constructor(private QR_code_data: ServiceQrCode) { }

  updateValue(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.QR_code_data.qrdata = input.value;
  }

}
