import { Injectable, WritableSignal, computed, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  theme: WritableSignal<string> = signal('light');
  baseUrl: string = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(
      this.baseUrl + 'all?fields=flags,name,population,capital,region,cioc'
    );
  }

  getCountry(countryCode: string): Observable<Country> {
    return this.http.get<Country>(this.baseUrl);
  }

  changeTheme() {
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
