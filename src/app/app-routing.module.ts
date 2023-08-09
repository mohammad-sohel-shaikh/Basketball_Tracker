import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TeamResultsComponent } from './team-results/team-results.component';

const routes: Routes = [
  {path:' ',component:AppComponent},
  {path:'results/:id',component:TeamResultsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
