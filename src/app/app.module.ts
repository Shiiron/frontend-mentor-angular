import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { DataService } from './project-list/space-tourism/services/data.service';
import { CountryCardComponent } from './project-list/country-list/components/country-card/country-card.component';
import { CountryDetailComponent } from './project-list/country-list/pages/country-detail/country-detail.component';
import { CountryListComponent } from './project-list/country-list/pages/country-list/country-list.component';
import { CrewComponent } from './project-list/space-tourism/crew/crew.component';
import { DestinationComponent } from './project-list/space-tourism/destination/destination.component';
import { HomeComponent } from './project-list/space-tourism/home/home.component';
import { MainMenuComponent } from './project-list/space-tourism/main-menu/main-menu.component';
import { MainPageComponent } from './project-list/space-tourism/main-page/main-page.component';
import { TechnologyComponent } from './project-list/space-tourism/technology/technology.component';
import { CountryService } from './project-list/country-list/services/country.service';
import { HttpClientModule } from '@angular/common/http';
import { CountryListHeaderComponent } from './project-list/country-list/components/country-list-header/country-list-header.component';
import { CountryHomeComponent } from './project-list/country-list/pages/country-home/country-home.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent,
    MainMenuComponent,
    ProjectListComponent,
    HomeComponent,
    CountryListComponent,
    CountryDetailComponent,
    CountryHomeComponent,
  ],
  providers: [DataService, CountryService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CountryCardComponent,
    CountryListHeaderComponent,
  ],
})
export class AppModule {}
