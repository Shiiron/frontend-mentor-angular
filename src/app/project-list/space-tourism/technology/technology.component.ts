import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Technology } from '../models/technology';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
})
export class TechnologyComponent implements OnInit {
  technologies: Technology[] = [];
  selectedTechnology: Technology;

  constructor(private dataService: DataService) {
    this.selectedTechnology = this.technologies[0];
  }

  ngOnInit(): void {
    this.technologies = this.dataService.getTechnologyList();
    this.selectedTechnology = this.technologies[0];
  }
}
