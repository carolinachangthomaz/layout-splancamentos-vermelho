import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent implements OnInit {
  public planta_trinta_m;
  public planta_quarente_m;
  public planta_sessenta_m;

  constructor() { }

  ngOnInit() {
    this.planta_trinta_m = '../../../assets/imagens/planta-30.jpg';
    this.planta_quarente_m = '../../../assets/imagens/planta-46.jpg';
    this.planta_sessenta_m = '../../../assets/imagens/planta-65.jpg';
  }

}
