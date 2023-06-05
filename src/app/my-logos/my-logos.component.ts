import { Component } from '@angular/core';
import { ServiceQrCode } from '../Services/ServiceQrCode';
import { image_Paths_Logo, logo_delete, logo_upload } from 'src/assets/config';

@Component({
  selector: 'app-my-logos',
  templateUrl: './my-logos.component.html',
  styleUrls: ['./my-logos.component.scss']
})
export class MyLogosComponent {
  logo_delete: string = logo_delete;
  logo_upload: string = logo_upload;

  constructor(public QR_code_data: ServiceQrCode) { }

  remove_logo() {
    this.QR_code_data.imageSrc = undefined;
  }

  imagesUrl: string[] = image_Paths_Logo

  current_selected_image_url!: string | undefined;

  imageUrl!: string;

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {

      const selectedFile = fileInput.files[0];
      const imageUrl = URL.createObjectURL(selectedFile);

      this.QR_code_data.imageSrc = imageUrl;
      this.imageUrl = imageUrl;
    }
  }

  onClickLogo(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.QR_code_data.imageSrc = input.src;
  }

  triggerFormFileClick() {
    const formFileElement = document.getElementById('formFile') as HTMLInputElement;
    formFileElement.click();
  }
}
