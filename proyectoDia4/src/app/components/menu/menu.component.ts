import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  
  items: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: "/home",
      },
      {
        label: 'Search',
        icon: 'pi pi-fw pi-search',
        routerLink: "/search",
      },
      {
        label: 'Movies',
        icon: 'pi pi-fw pi-video',
        routerLink: "/movies",
      },
    ];
  }
}
