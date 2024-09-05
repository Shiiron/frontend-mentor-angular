import { Component, OnInit } from '@angular/core';
import { Crew } from 'src/app/models/crew';
import { dataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent implements OnInit {
  crew: Crew[] = [];
  selectedCrew: Crew;

  constructor(private dataService: dataService) {
    this.selectedCrew = this.crew[0];
  }

  ngOnInit(): void {
    this.crew = this.dataService.getCrewList();
    this.selectedCrew = this.crew[0];
  }
}
