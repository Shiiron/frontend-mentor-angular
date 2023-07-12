import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}
  getBackground() {
    console.log(this.router.url);
    switch (this.router.url) {
      case '/destination':
        return 'background--destination';
      case '/crew':
        return 'background--crew';
      case '/technology':
        return 'background--technology';
      default:
        return 'background--main';
    }
  }
}
