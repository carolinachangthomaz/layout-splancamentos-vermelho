import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class GaleriaComponent implements OnInit {
  public imagesUrl;

  constructor( config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
   config.interval = 20000;
   config.wrap = false;
   config.keyboard = false;
   config.pauseOnHover = false;
}

  ngOnInit() {
    this.imagesUrl = ['../../../assets/imagens/lancamento-cyrela-iconyc-churrasqueira-3.jpg',
                      '../../../assets/imagens/lancamento-cyrela-iconyc-portaria-embasamento-4.jpg',
                      '../../../assets/imagens/lancamento-cyrela-iconyc-piscina-5.jpg',
                      '../../../assets/imagens/lancamento-cyrela-iconyc-portaria-embasamento-4.jpg',
                      '../../../assets/imagens/lancamento-cyrela-iconyc-piscina-5.jpg'];
  }

}
