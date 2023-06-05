import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { QRCodeElementType } from "angularx-qrcode";



@Injectable({
    providedIn: 'root'
})
export class ServiceQrCode {
    constructor(public translate: TranslateService) {
        translate.setDefaultLang('fr');

        if (translate.getBrowserLang() !== undefined) {
            translate.use('fr');
        }
    }

    public qrdata: string = "";

    public width!: number;
    public errorCorrectionLevel: ('M' | 'L' | 'Q' | 'H') = 'Q';

    public imageSrc?: string | undefined;

    public colorDark?: string;
    public colorLight?: string;
    public type: QRCodeElementType = "canvas";

    public readonly IMG_SIZE: number = 4.6;

}