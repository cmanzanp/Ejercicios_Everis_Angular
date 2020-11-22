import { Component, OnInit } from '@angular/core';
import { Owner } from '../../interfaces/owner';

@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.css']
})
export class FormOwnerComponent implements OnInit {

  owner: Owner;
  
  constructor() {
    this.owner={
      firstName:'Pepe',
      lastName:'Pérez',
      address:'Calle Falsa, 123',
      city:'Sevilla',
      telephone:'666 555 444'
    }
  }

  ngOnInit(): void {
  }

  submit(): void{
    console.table(this.owner);
  }

}
