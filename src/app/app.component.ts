import { Component, OnInit } from '@angular/core';
import { map, pluck, take } from 'rxjs';
import { FetchdataService } from './service/fetchdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  teams: any;
  team: any;
  sum: number = 0;
  selectedCountry!: number
  record: any
  avgTeamScore!: number;
  avgTeamScoreConceded!: number;
  constructor(private fetch: FetchdataService) { }

  title = 'Basketball_Tracker';
  ngOnInit(): void {
    this.fetch.allTeams().subscribe((value: any) => {
      this.teams = (value.data)
    })
  }

  trackTeam(id: number) {

    this.fetch.team(id).subscribe((team) => {
      this.team = team
    })

    this.fetch.record(id).pipe(pluck('data')).subscribe((record: any) => {
      this.record = record
      this.avgTeamScore = this.score("home_team_score")
      this.avgTeamScoreConceded = this.score("visitor_team_score")
    })

  }
  score(item: string): number {
    for (let score in this.record) {
      this.sum += this.record[score][item]
    }
    return Math.floor(this.sum / 12)
  }


}
