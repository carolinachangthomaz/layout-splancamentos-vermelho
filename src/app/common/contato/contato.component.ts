import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  public imageWatsapp;
  constructor() { }

  ngOnInit() {
    this.imageWatsapp = '../../../assets/imagens/whatsapp.png';
  }

}
