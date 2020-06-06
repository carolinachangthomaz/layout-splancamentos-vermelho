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
    this.imagesUrl = ['../../../assets/imagens/lancamento-neohouse-campo-belo-piscina-externa-5.webp',
                      '../../../assets/imagens/lancamento-neohouse-campo-belo-fachada-1.webp',
                      '../../../assets/imagens/lancamento-neohouse-campo-belo-fachada-2.webp',
                      '../../../assets/imagens/lancamento-neohouse-campo-belo-implantacao-18.webp',
                      '../../../assets/imagens/lancamento-neohouse-campo-belo-lavanderia-9.webp',
                      '../../../assets/imagens/lancamento-neohouse-campo-belo-implantacao-1o-pavimento-19.webp',
                      '../../../assets/imagens/lancamento-neohouse-campo-belo-piscina-interna-4.webp'];
  }

}
