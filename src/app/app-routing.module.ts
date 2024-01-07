import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { MainPageComponent } from './project-list/space-tourism/main-page/main-page.component';
import { HomeComponent } from './project-list/space-tourism/home/home.component';
import { DestinationComponent } from './project-list/space-tourism/destination/destination.component';
import { CrewComponent } from './project-list/space-tourism/crew/crew.component';
import { TechnologyComponent } from './project-list/space-tourism/technology/technology.component';
import { CountryListComponent } from './project-list/country-list/pages/country-list/country-list.component';
import { CountryDetailComponent } from './project-list/country-list/pages/country-detail/country-detail.component';
import { CountryHomeComponent } from './project-list/country-list/pages/country-home/country-home.component';

const routes: Routes = [
  { path: 'projects', component: ProjectListComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'main', component: MainPageComponent },
      { path: 'destination', component: DestinationComponent },
      { path: 'crew', component: CrewComponent },
      { path: 'technology', component: TechnologyComponent },
    ],
  },
  {
    path: 'country-list',
    component: CountryHomeComponent,
    children: [
      { path: 'list', component: CountryListComponent },
      {
        path: ':countryCode',
        component: CountryDetailComponent,
      },
    ],
  },
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'country', redirectTo: '/country-list/list', pathMatch: 'full' },
  { path: 'space', redirectTo: '/home/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
