import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/models/destination';
import { dataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent implements OnInit {
  destinations: Destination[] = [];
  selectedDestination: Destination;

  constructor(private dataService: dataService) {
    this.selectedDestination = this.destinations[0];
  }

  ngOnInit(): void {
    this.destinations = this.dataService.getDestinationList();
    this.selectedDestination = this.destinations[0];
  }
}
