import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent} from './common/header/header.component';
import { GaleriaComponent } from './common/galeria/galeria.component';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjetoComponent } from './common/projeto/projeto.component';
import { MapComponent } from './common/map/map.component';

import { AgmCoreModule } from '@agm/core';
//import { MAP_API_KEY } from '../../../../server/config/config';
import { MapService } from './common/map/map.service';
import { CamelizePipe } from 'ngx-pipes';

import { MAP_API_KEY } from '../../config/map-config';
import { FooterComponent } from './common/footer/footer.component';
import { ContatoComponent } from './common/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GaleriaComponent,
    ProjetoComponent,
    MapComponent,
    FooterComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: MAP_API_KEY
    })
  ],
  providers: [NgbCarouselConfig,MapService,CamelizePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
