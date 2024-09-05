import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { CrewComponent } from "./pages/crew/crew.component";
import { DestinationComponent } from "./pages/destination/destination.component";
import { TechnologyComponent } from "./pages/technology/technology.component";


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
