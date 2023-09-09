import { Component, Input } from '@angular/core';
import { ICountry } from '../../models/country';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FlagPipe } from '../../pipes/flag.pipe';

@Component({
  standalone: true,
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
  imports: [CommonModule, AppRoutingModule, FlagPipe],
})
export class CountryCardComponent {
  @Input() country: ICountry | undefined;
}
