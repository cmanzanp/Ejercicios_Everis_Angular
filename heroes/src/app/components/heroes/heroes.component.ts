import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  @Input() listaHeroes;

  @Output() sendNombreHeroe = new EventEmitter<string>();

  nombreHeroe: string;

  constructor() { }

  ngOnInit(): void {
    
  }

  setNombreHeroe(heroeNombre): void{
    this.nombreHeroe = heroeNombre;
    this.sendNombreHeroe.emit(this.nombreHeroe);
  }
  
}
