import { Component } from '@angular/core';
import { Country } from '../../models/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent {
  countries: Country[] = [];

  constructor(private countryService: CountryService) {
    this.countryService.getCountries().subscribe((countries: Country[]) => {
      this.countries = countries;
    });
  }
}
