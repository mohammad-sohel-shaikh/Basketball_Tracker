import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  url = `https://free-nba.p.rapidapi.com/teams`;
  constructor(
    private http: HttpClient,
    private activateroute: ActivatedRoute
  ) { }


  allTeams() {
    let headers = new HttpHeaders()
      .set(
        'X-RapidAPI-Key', '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX'
      )
      .set('X-RapidAPI-Host', 'free-nba.p.rapidapi.com');
    return this.http.get(this.url, { headers });
  }

  team(id: number) {
    let headers = new HttpHeaders()
      .set(
        'X-RapidAPI-Key', '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX'
      )
      .set('X-RapidAPI-Host', 'free-nba.p.rapidapi.com');
    return this.http.get(`${this.url}/${id}`, { headers });
  }

  record(id: number) {
    let headers = new HttpHeaders()
      .set(
        'X-RapidAPI-Key', '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX'
      )
      .set('X-RapidAPI-Host', 'free-nba.p.rapidapi.com');
    console.log(`${this.url}//${id}`);

    return this.http.get(` https://freenba.p.rapidapi.com/games?page=0&&per_page=12&team_ids[]=${id}`, { headers });
  }
}
