import { Component, OnInit } from '@angular/core';
import { Crew } from '../models/crew';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent implements OnInit {
  crew: Crew[] = [];
  selectedCrew: Crew;

  constructor(private dataService: DataService) {
    this.selectedCrew = this.crew[0];
  }

  ngOnInit(): void {
    this.crew = this.dataService.getCrewList();
    this.selectedCrew = this.crew[0];
  }
}
