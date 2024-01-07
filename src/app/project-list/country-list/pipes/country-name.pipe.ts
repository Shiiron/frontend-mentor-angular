import { Pipe, PipeTransform, Signal, signal } from '@angular/core';
import { CountryService } from '../services/country.service';
import { ICountry } from '../models/country';

@Pipe({
  name: 'countryName',
  standalone: true,
})
export class CountryNamePipe implements PipeTransform {
  countries: Signal<ICountry[]> = this.countryService.getCountrySignal();
  constructor(private countryService: CountryService) {}
  transform(value: string): unknown {
    console.log(value);
    console.log(
      this.countries().find((country: ICountry) => country.cca3 === value)
    );
    return this.countries().find((country: ICountry) => country.cca3 === value)
      ?.name.common;
  }
}
