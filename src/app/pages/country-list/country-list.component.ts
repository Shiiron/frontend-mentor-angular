import { Component } from '@angular/core';
import { ICountry } from '../../models/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent {
  countries: ICountry[] = [];

  constructor(private countryService: CountryService) {
    this.getCountries();
  }

  setFilters(type: 'search' | 'region', value: string) {
    this.countryService.setFilters(type, value);
    this.getCountries();
  }

  getCountries() {
    this.countryService.getCountries().subscribe((countries: ICountry[]) => {
      if (this.countryService.filter.search !== '') {
        let c: ICountry[] = [];

        countries.forEach((country: ICountry) => {
          if (
            country.name.common
              .toLocaleLowerCase()
              .includes(this.countryService.filter.search.toLowerCase())
          ) {
            c.push(country);
          }
        });

        this.countries = c;
      } else {
        this.countries = countries;
      }
    });
  }
}
