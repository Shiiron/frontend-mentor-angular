import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/models/technology';
import { dataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
})
export class TechnologyComponent implements OnInit {
  technologies: Technology[] = [];
  selectedTechnology: Technology;

  constructor(private dataService: dataService) {
    this.selectedTechnology = this.technologies[0];
  }

  ngOnInit(): void {
    this.technologies = this.dataService.getTechnologyList();
    this.selectedTechnology = this.technologies[0];
  }
}
