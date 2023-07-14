import { Component, Input } from '@angular/core';
import { Country } from '../../models/country';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  standalone: true,
  imports: [CommonModule, AppRoutingModule],
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent {
  @Input() country: Country | undefined;
}
