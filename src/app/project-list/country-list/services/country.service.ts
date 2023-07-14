import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  baseUrl: string = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(
      this.baseUrl + 'all/?fields="flags,name,population,capital,region,cioc"'
    );
  }

  getCountry(countryCode: string): Observable<Country> {
    return this.http.get<Country>(this.baseUrl);
  }
}
