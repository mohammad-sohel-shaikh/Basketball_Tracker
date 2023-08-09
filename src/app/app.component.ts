import { AfterViewInit, Component, OnInit } from '@angular/core';
import { map, pluck, take } from 'rxjs';
import { FetchdataService } from './service/fetchdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  selectedTeam!: string;
  teams: any[] = [];
  trackedTeams: string[] = [];

  constructor(private fetch: FetchdataService) { }
  
  ngOnInit(): void {
    this.fetch.allTeams().subscribe((value: any) => {
      this.teams = (value.data)
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

