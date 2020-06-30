import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato-celular',
  templateUrl: './contato-celular.component.html',
  styleUrls: ['./contato-celular.component.css']
})
export class ContatoCelularComponent implements OnInit {
  public imageWatsapp;
  constructor() { }

  ngOnInit() {
    this.imageWatsapp = '../../../assets/imagens/atendimento-whatsapp.png';
  }

}
