import { Component, OnInit } from '@angular/core';
import { Destination } from '../models/destination';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent implements OnInit {
  destinations: Destination[] = [];
  selectedDestination: Destination;

  constructor(private dataService: DataService) {
    this.selectedDestination = this.destinations[0];
  }

  ngOnInit(): void {
    this.destinations = this.dataService.getDestinationList();
    this.selectedDestination = this.destinations[0];
  }
}
