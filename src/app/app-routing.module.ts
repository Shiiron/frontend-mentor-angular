import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewComponent } from './crew/crew.component';
import { DestinationComponent } from './destination/destination.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TechnologyComponent } from './technology/technology.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { HomeComponent } from './home/home.component';

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
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
