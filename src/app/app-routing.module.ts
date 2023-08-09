import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTeamsComponent } from './all-teams/all-teams.component';
import { TeamResultsComponent } from './team-results/team-results.component';

const routes: Routes = [
  {path:'',component:AllTeamsComponent},
  {path:'results/:id',component:TeamResultsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
