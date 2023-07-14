import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-country-list-header',
  templateUrl: './country-list-header.component.html',
  styleUrls: ['./country-list-header.component.scss'],
})
export class CountryListHeaderComponent {
  theme = this.countryService.selectTheme();
  constructor(private countryService: CountryService) {}

  changeTheme() {
    this.countryService.changeTheme();
  }
}
