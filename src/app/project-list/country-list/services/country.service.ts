import { Injectable, WritableSignal, computed, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Country } from '../models/country';
import { CountryFilter } from '../models/country-filter';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  theme: WritableSignal<string> = signal('light');
  filter: CountryFilter = {
    search: '',
    region: '',
  };
  baseUrl: string = 'https://restcountries.com/v3.1/';
  fields: string = 'fields=flags,name,population,capital,region,cioc';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    let call: string = 'all';
    if (this.filter.region !== '') {
      call = 'region/' + this.filter.region;
    }
    return this.http.get<Country[]>(this.baseUrl + `${call}?${this.fields}`);
  }

  getCountry(countryCode: string): Observable<Country> {
    return this.http.get<Country>(this.baseUrl);
  }

  setFilters(filterType: 'region' | 'search', value: string) {
    if (value === null || value === undefined) {
      value = '';
    }

    this.filter[filterType] = value;
  }

  changeTheme(): void {
    if (this.theme() === 'light') {
      this.theme.set('dark');
      document.body.classList.add('dark');
    } else {
      this.theme.set('light');
      document.body.classList.remove('dark');
    }
  }

  selectTheme() {
    return computed(() => this.theme());
  }
}
