import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
  toggleNav() {
    if (document.querySelector(".primary-navigation")?.getAttribute("data-visible") === "not-visible") {
      document.querySelector(".primary-navigation")?.setAttribute("data-visible", "visible");
      document.querySelector(".mobile-nav-toggle")?.setAttribute("nav-expanded", "expanded");
    } else {
      document.querySelector(".primary-navigation")?.setAttribute("data-visible", "not-visible");
      document.querySelector(".mobile-nav-toggle")?.setAttribute("nav-expanded", "not-expanded");
    }
  }
}
