import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  name: string;
  email: string;
  terminos: boolean;
  
  constructor() {

  }

  ngOnInit(): void {

  }

  submit(): void{
    console.log(this.name);
    console.log(this.email);
    console.log(this.terminos);
  }

}
