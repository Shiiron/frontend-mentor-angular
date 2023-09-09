import { Component, OnDestroy, Signal } from '@angular/core';
import { ICountry } from '../../models/country';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
})
export class CountryDetailComponent {
  country: ICountry | null = null;
  countryNativeNames: string[] = [];
  countryLanguages: string[] = [];
  countryCurrencies: string[] = [];

  constructor(
    private countryService: CountryService,
    private activatedRoute: ActivatedRoute
  ) {
    this.countryService
      .getCountry(this.activatedRoute.snapshot.params['countryCode'])
      .pipe(take(1))
      .subscribe((c: ICountry) => {
        this.country = c;

        // Set arrays because the API return Objects
        this.countryNativeNames = Object.keys(c.name.nativeName).map(
          (key: string) => c.name.nativeName[key].common
        );
        this.countryLanguages = Object.keys(c.languages).map(
          (key: string) => c.languages[key]
        );
        this.countryCurrencies = Object.keys(c.currencies).map(
          (key: string) =>
            `${c.currencies[key].name} (${c.currencies[key].symbol})`
        );
      });
  }
}
