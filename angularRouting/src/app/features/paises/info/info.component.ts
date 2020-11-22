import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  pais: any = "no_leido";

  constructor(
    private route: ActivatedRoute,
    private paisesServices: PaisesService
    ) {

    }

  async ngOnInit(): Promise<void> {

    const codigoPais =  this.route.snapshot.paramMap.get('code');

    this.pais = await this.paisesServices.getPaisInfo(codigoPais);
    
  }

}
