import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { pluck } from 'rxjs';
import { FetchdataService } from '../service/fetchdata.service';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {
  @Input() teamCode: any;
  @Output() remove: EventEmitter<string> = new EventEmitter<string>();

  team: any;
  gameResults!: string;
  averagePoints!: number;
  record: any;
  avgTeamScoreConceded: any;
  avgTeamScore: any;
  sum: number = 0;

  constructor(private fetch: FetchdataService, private router: Router) { }

  ngOnInit(): void {

    this.fetch.team(this.teamCode).subscribe((team) => {
      this.team = team
    })
    this.fetch.record(this.teamCode).pipe(pluck('data')).subscribe((record: any) => {
      this.record = record;
      this.avgTeamScore = this.scoreCalculate("home_team_score")
      this.avgTeamScoreConceded = this.scoreCalculate("visitor_team_score")
    });
  }

  scoreCalculate(item: string): number {
    for (let score in this.record) {
      this.sum += this.record[score][item]
    }
    return Math.floor(this.sum / 12)
  }

  moveTo(teamId: number) {
    this.router.navigate(['/results', teamId])
  }
}
