import { Component } from '@angular/core';
import { ServiceQrCode } from '../Services/ServiceQrCode';
import html2canvas from 'html2canvas';
import { SafeUrl } from '@angular/platform-browser';
import { QRCodeElementType } from 'angularx-qrcode';
import { max_px } from 'src/assets/config';

@Component({
  selector: 'app-my-content',
  templateUrl: './my-content.component.html',
  styleUrls: ['./my-content.component.scss']
})
export class MyContentComponent {
  coeficient: number = max_px / 500;
  qrCodeSrc!: SafeUrl;
  constructor(public QR_code_data: ServiceQrCode) { }

  onChangeURL(url: SafeUrl) {
    this.qrCodeSrc = url
  }

  downloadQRCodeImage() {
    // trouve l'élément <qrcode>
    const qrCodeElement = document.querySelector("canvas");

    if (qrCodeElement) {

      // capture la balise <qrcode> en tant qu'image
      html2canvas(<HTMLElement>qrCodeElement).then(canvas => {
        // convertit le canvas en une URL de données
        const imageDataURL = qrCodeElement.toDataURL("image/png");

        // crée un lien pour télécharger le fichier
        const link = document.createElement("a");
        link.download = "qrcode";
        link.href = imageDataURL;

        // ajoute le lien au DOM et déclenche le téléchargement
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }
    else {
      alert("not found")
    }

  }
  downloadSVG() {
    const a = document.createElement('a');
    const svg = document.querySelector('svg');

    if (svg) {
      const svgString = new XMLSerializer().serializeToString(svg);
      // Créer un objet Blob à partir de la chaîne SVG
      const blob = new Blob([svgString], { type: 'image/svg+xml' });
      // Créer un URL à partir du Blob
      const url = URL.createObjectURL(blob);
      // Ajouter l'URL à l'élément a
      a.href = url;
      // Spécifier le nom du fichier à télécharger
      a.download = 'monSVG';
      // Clic sur le lien pour lancer le téléchargement
      a.click();
      // Supprimer l'URL créé pour éviter les fuites de mémoire
      URL.revokeObjectURL(url);
    }
  }
  onRadioClick(value: QRCodeElementType) {
    this.QR_code_data.type = value;
  }

  onChangeCorrectionLevel(value: ('M' | 'L' | 'Q' | 'H')) {
    this.QR_code_data.errorCorrectionLevel = value;
  }





}
