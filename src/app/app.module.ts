import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent} from './common/header/header.component';
import { GaleriaComponent } from './common/galeria/galeria.component';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjetoComponent } from './common/projeto/projeto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GaleriaComponent,
    ProjetoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
