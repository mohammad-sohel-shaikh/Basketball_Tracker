import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck } from 'rxjs';
import { FetchdataService } from '../service/fetchdata.service';

@Component({
  selector: 'app-team-results',
  templateUrl: './team-results.component.html',
  styleUrls: ['./team-results.component.css']
})
export class TeamResultsComponent implements OnInit {
  teamId: any;
  record: any;
  team: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fetch: FetchdataService
  ) { }

  ngOnInit(): void {
    this.teamId = this.route.snapshot.paramMap.get('id')?.toString()
    this.fetch.team(this.teamId).subscribe((team) => {
      this.team = team
    })

    this.fetch.record(this.teamId).pipe(pluck('data')).subscribe((record: any) => {
      this.record = record
    })
  }
  back() {
    this.router.navigate([''])
  }

}
