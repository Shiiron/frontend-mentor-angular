import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabelledValue } from '../../models/labelled-value';

@Component({
  selector: 'app-country-list-filter',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './country-list-filter.component.html',
  styleUrls: ['./country-list-filter.component.scss'],
})
export class CountryListFilterComponent {
  @Output() onSearch = new EventEmitter();
  @Output() onFilter = new EventEmitter();
  search: string = '';
  filter: string = '';

  filterOptions: LabelledValue[] = [
    { label: 'Filter by region', value: '' },
    { label: 'Africa', value: 'africa' },
    { label: 'America', value: 'america' },
    { label: 'Asia', value: 'asia' },
    { label: 'Europe', value: 'europe' },
    { label: 'Oceania', value: 'oceania' },
  ];

  filterChanged(e: string) {
    this.onFilter.emit(e);
  }

  searchChanged(e: string) {
    this.onSearch.emit(e);
  }
}
