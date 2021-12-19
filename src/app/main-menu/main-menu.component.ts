import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  menuItems: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = ['00 Home', 'O1 Destination', '02 Crew', '03 Technology'];
  }

}
