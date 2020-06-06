import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent implements OnInit {
  public planta_trinta_m;
  public planta_sessenta_m;

  constructor() { }

  ngOnInit() {
    this.planta_trinta_m = '../../../assets/imagens/lancamento-neohouse-campo-belo-planta-30,16m2-1.webp';
    this.planta_sessenta_m = '../../../assets/imagens/lancamento-neohouse-campo-belo-planta-65,52m2-2.webp';
  }

}
