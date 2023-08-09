import { Component } from '@angular/core';
import { FetchdataService } from '../service/fetchdata.service';

@Component({
  selector: 'app-all-teams',
  templateUrl: './all-teams.component.html',
  styleUrls: ['./all-teams.component.css']
})
export class AllTeamsComponent {

  selectedTeam!: string;
  teams: any[] = [];
  trackedTeams: string[] = [];

  constructor(private fetch: FetchdataService) { }
  
  ngOnInit(): void {
    this.fetch.allTeams().subscribe((value: any) => {
      this.teams = (value.data)
      console.log(this.teams)
    })
  }

  trackTeam() {
    if (this.selectedTeam && !this.trackedTeams.includes(this.selectedTeam)) {
      this.trackedTeams.push(this.selectedTeam);
    }
  }

  removeTrackedTeam(teamCode: string) {
    const index = this.trackedTeams.indexOf(teamCode);
    if (index !== -1) {
      this.trackedTeams.splice(index, 1);
    }
  }
}
