import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-mentor';

  constructor(private router: Router) { }

  getBackground() {
    switch(this.router.url) {
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
