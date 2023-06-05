import { Component, OnInit } from '@angular/core';
import { ServiceQrCode } from '../Services/ServiceQrCode';
@Component({
  selector: 'app-my-vcard-form',
  templateUrl: './my-vcard-form.component.html',
  styleUrls: ['./my-vcard-form.component.scss']
})
export class MyVcardFormComponent implements OnInit {
  constructor(private QR_code_data: ServiceQrCode) { }

  ngOnInit(): void {
    for (let i of this.fields) {
      this.myMap.set(i.id, "");
    }
  }

  fields = [
    { id: "firstName", type: "text", label: 'CONTACT.FIRST_NAME' },
    { id: "lastName", type: "text", label: 'CONTACT.LAST_NAME' },
    { id: "address", type: "text", label: 'CONTACT.ADDRESS' },
    { id: "city", type: "text", label: 'CONTACT.CITY' },
    { id: "zip", type: "number", label: 'CONTACT.ZIP' },
    { id: "personnalNumber", type: "tel", label: 'CONTACT.P_NUMBER' },
    { id: "homeNumber", type: "tel", label: 'CONTACT.H_NUMBER' },
    { id: "mail", type: "email", label: 'CONTACT.MAIL' },
  ];

  myMap = new Map<string, string>();
  updateFieldValue(event: Event) {
    const input = event.target as HTMLInputElement;
    this.myMap.set(input.id, input.value);

    this.updateValue()
  }

  updateValue(): void {

    let vCardString = `BEGIN:VCARD\nVERSION:4.0\n`;

    vCardString += `N;CHARSET=utf-8:${this.myMap.get('lastName')};${this.myMap.get('firstName')}\n`;
    vCardString += `ADR;CHARSET=utf-8:;;${this.myMap.get('address')};${this.myMap.get('city')};;${this.myMap.get('zip')}\n`;
    vCardString += `TEL;TYPE=WORK:${this.myMap.get('personnalNumber')}\n`;
    vCardString += `TEL;TYPE=CELL:${this.myMap.get('homeNumber')}\n`;
    vCardString += `EMAIL:${this.myMap.get('mail')}\n`;

    vCardString += "END:VCARD";

    this.QR_code_data.qrdata = vCardString;
  }

}
