import { Component } from '@angular/core';
import { ServiceQrCode } from '../Services/ServiceQrCode';

@Component({
  selector: 'app-my-choice',
  templateUrl: './my-choice.component.html',
  styleUrls: ['./my-choice.component.scss']
})
export class MyChoiceComponent {


  constructor(public lng: ServiceQrCode) { }

  selectedValue: string = '';

  onSelectChange(event: any) {
    this.selectedValue = event.target.value;
  }


}
