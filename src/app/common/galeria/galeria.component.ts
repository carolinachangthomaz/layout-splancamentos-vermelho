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
   config.interval = 30000;
   config.wrap = false;
   config.keyboard = false;
   config.pauseOnHover = false;
}

  ngOnInit() {
    this.imagesUrl = [{url:'../../../assets/imagens/lancamento-neohouse-campo-belo-fachada-estacionamento.webp' , texto:''},
                      {url:'../../../assets/imagens/lancamento-neohouse-campo-belo-spa-solario.webp', texto:'Spa e Solário'},
                      {url:'../../../assets/imagens/lancamento-neohouse-campo-belo-fachada.webp', texto:'Fachada'},
                      {url:'../../../assets/imagens/lancamento-neohouse-campo-belo-decorado-30m.webp', texto:'Decorado 30 m²'},
                      {url:'../../../assets/imagens/lancamento-neohouse-campo-belo-decorado-60m.webp', texto:'Decorado 65 m²'},
                      {url:'../../../assets/imagens/lancamento-neohouse-campo-belo-implantacao.webp', texto:'Implantação'},
                      {url:'../../../assets/imagens/lancamento-neohouse-campo-belo-espaco-gourmet.webp', texto:'Espaço Gourmet'},
                      {url:'../../../assets/imagens/lancamento-neohouse-campo-belo-lobby.webp', texto:'Lobby'},
                      {url:'../../../assets/imagens/lancamento-neohouse-campo-belo-lavanderia.webp', texto:'Lavanderia'},
                      {url:'../../../assets/imagens/lancamento-neohouse-campo-belo-pilates.webp', texto:'Pilates'},
                      {url:'../../../assets/imagens/lancamento-neohouse-campo-belo-brinquedoteca.webp', texto:'Brinquedoteca'},
                      {url:'../../../assets/imagens/lancamento-neohouse-campo-belo-churrasqueira.webp', texto:'Churrasqueira'},
                      {url:'../../../assets/imagens/lancamento-neohouse-campo-belo-churrasqueira-a1.webp', texto:''},
                      {url:'../../../assets/imagens/lancamento-neohouse-campo-belo-bicicletario.webp', texto:'Bicicletário'},
                      {url:'../../../assets/imagens/lancamento-neohouse-campo-belo-fitness.webp', texto:'Fitness'},
                      {url:'../../../assets/imagens/lancamento-neohouse-campo-belo-piscina-coberta.webp', texto:'Piscina Aquecida'}];
  }

}
