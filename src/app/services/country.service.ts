import { Injectable, WritableSignal, computed, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ICountry } from '../models/country';
import { CountryFilter } from '../models/country-filter';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  theme: WritableSignal<string> = signal('light');
  countryList: WritableSignal<ICountry[]> = signal([]);
  filter: CountryFilter = {
    search: '',
    region: '',
  };
  baseUrl: string = 'https://restcountries.com/v3.1/';
  fields: string =
    'fields=flags,name,population,capital,region,subregion,cca3,borders,tld,currencies,languages,borders';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<ICountry[]> {
    let call: string = 'all';
    if (this.filter.region !== '') {
      call = 'region/' + this.filter.region;
    }
    return this.http.get<ICountry[]>(this.baseUrl + `${call}?${this.fields}`);
  }

  setCountrySignal(): void {
    this.getCountries()
      .pipe(take(1))
      .subscribe((countries: ICountry[]) => {
        this.countryList.set(countries);
      });
  }

  getCountrySignal() {
    return computed(() => this.countryList());
  }

  getCountry(countryCode: string): Observable<ICountry> {
    return this.http.get<ICountry>(
      `${this.baseUrl}alpha/${countryCode}?${this.fields}`
    );
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
