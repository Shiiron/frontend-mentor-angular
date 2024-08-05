import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CrewComponent } from "./crew/crew.component";
import { DestinationComponent } from "./destination/destination.component";
import { HomeComponent } from "./home/home.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { TechnologyComponent } from "./technology/technology.component";


const routes: Routes = [
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
  { path: '', redirectTo: '/home/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
