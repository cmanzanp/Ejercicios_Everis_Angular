import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  date: any;

  constructor() {
    this.date = new Date()
    this.date = this.date.toLocaleDateString("es-ES");
  }

  ngOnInit(): void {
    console.log(this.date);
  }

}
