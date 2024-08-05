import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CountryCardComponent } from "./components/country-card/country-card.component";
import { CountryListFilterComponent } from "./components/country-list-filter/country-list-filter.component";
import { CountryListHeaderComponent } from "./components/country-list-header/country-list-header.component";
import { CountryDetailComponent } from "./pages/country-detail/country-detail.component";
import { CountryHomeComponent } from "./pages/country-home/country-home.component";
import { CountryListComponent } from "./pages/country-list/country-list.component";
import { CountryNamePipe } from "./pipes/country-name.pipe";
import { FlagPipe } from "./pipes/flag.pipe";
import { CountryService } from "./services/country.service";



@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryDetailComponent,
    CountryHomeComponent,
  ],
  providers: [CountryService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CountryCardComponent,
    CountryListHeaderComponent,
    CountryListFilterComponent,
    FlagPipe,
    CountryNamePipe,
  ],
})
export class AppModule {}
