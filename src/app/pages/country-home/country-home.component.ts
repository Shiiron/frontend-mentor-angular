import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-home',
  templateUrl: './country-home.component.html',
  styleUrls: ['./country-home.component.scss'],
})
export class CountryHomeComponent {
  constructor(private countryService: CountryService) {
    this.countryService.setCountrySignal();
  }
}
