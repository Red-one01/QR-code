import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyContentComponent } from './my-content/my-content.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { MyDesignComponent } from './my-design/my-design.component';
import { MyChoiceComponent } from './my-choice/my-choice.component';

import { MyUrlFormComponent } from './my-url-form/my-url-form.component';
import { MyLogosComponent } from './my-logos/my-logos.component';
import { QRCodeModule } from 'angularx-qrcode';
import { MyWifiFormComponent } from './my-wifi-form/my-wifi-form.component';
import { MyTextFormComponent } from './my-text-form/my-text-form.component';
import { MyGeolocFormComponent } from './my-geoloc-form/my-geoloc-form.component';
import { MyVcardFormComponent } from './my-vcard-form/my-vcard-form.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MyTranslateMenuComponent } from './my-translate-menu/my-translate-menu.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyContentComponent,
    MyFooterComponent,
    MyDesignComponent,
    MyChoiceComponent,
    MyUrlFormComponent,
    MyLogosComponent,
    MyWifiFormComponent,
    MyTextFormComponent,
    MyGeolocFormComponent,
    MyVcardFormComponent,
    MyTranslateMenuComponent
  ],
  imports: [
    BrowserModule,

    QRCodeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
