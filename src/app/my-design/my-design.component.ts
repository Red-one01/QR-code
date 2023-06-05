import { Component } from '@angular/core';
import { ServiceQrCode } from '../Services/ServiceQrCode';
import { colors_tab, max_px } from 'src/assets/config';

@Component({
  selector: 'app-my-design',
  templateUrl: './my-design.component.html',
  styleUrls: ['./my-design.component.scss']
})
export class MyDesignComponent {
  constructor(public QR_code_data: ServiceQrCode) {
    QR_code_data.width = this.currentValue;
  }

  readonly min_px: number = 200;
  readonly max_px: number = max_px;
  currentValue: number = this.min_px + (this.max_px - this.min_px) / 2;//half of range

  readonly colors: Colors[] = colors_tab;

  async updateValue(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    this.currentValue = parseInt(input.value, 10);
    input.style.setProperty('--value', `${(this.currentValue - this.min_px) / (this.max_px - this.min_px)}`);

    await this.sleep(800);
    this.QR_code_data.width = this.currentValue;

  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  updatecolors(event: MouseEvent): void {
    console.log(event);
    event.stopPropagation();
    const input = event.currentTarget as HTMLElement;
    this.QR_code_data.colorDark = input.id;

    this.QR_code_data.colorLight = this.getValue(input.id);
  }

  private getValue(key: string): string {

    for (let element of this.colors) {
      if (element.getback() === key) {
        return element.getforeground();
      }
    }
    throw new Error("key not exist");
  }

}
export class Colors {

  constructor(private back: string,
    private foreground: string) {
  }

  getback(): string {
    return this.back;
  }

  getforeground(): string {
    return this.foreground;
  }

}