import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';
import { Season } from "../../model/season.interface";
import { Zone } from "../../model/zone.interface";
import { CompetitionCategory } from "../../model/competition-category.interface";
import { CompetitionName } from "../../model/competition-name.interface";
import { CompetitionType } from "../../model/competition-type.interface";
import { Country } from "../../model/country.interface";
import { TeamLevel } from "../../model/team-level.interface";
import { TeamName } from "../../model/team-name.interface";
import { TeamType } from "../../model/team-type.interface";
import { VideoGame } from "../../model/video-game.interface";


@Injectable({
  providedIn: 'root'
})

export class AllServices {

  seasons$: Observable<Season[]>
  zone$: Observable<Zone[]>
  videoGame$: Observable<VideoGame[]>
  teamType$: Observable<TeamType[]>
  teamName$: Observable<TeamName[]>
  teamLevel$: Observable<TeamLevel[]>
  countries$: Observable<Country[]>
  competitionType$: Observable<CompetitionType[]>
  competitionName$: Observable<CompetitionName[]>
  competitionCategories$: Observable<CompetitionCategory[]>



  // private subject = new BehaviorSubject<Course[]>([]);
  // courses$: Observable<Course[]> = this.subject.asObservable();


  init() {
    // const http$ = createHttpObservable('/api/seasons');
  }

  getSeasons() {
    const http$ = createHttpObservable('/api/seasons');
    return http$
      .pipe(
        tap(() => console.log("HTTP request executed")),
        map(res => Object.values(res["payload"])),
      );
  }

  getZones() {
    const http$ = createHttpObservable('/api/zones');
    return http$
      .pipe(
        tap(() => console.log("HTTP request executed")),
        map(res => Object.values(res["payload"])),
      );
  }

  getVideosGames() {
    const http$ = createHttpObservable('/api/videosGames');
    return http$
      .pipe(
        tap(() => console.log("HTTP request executed")),
        map(res => Object.values(res["payload"])),
      );
  }

  getTeamsTypes() {
    const http$ = createHttpObservable('/api/teamsTypes');
    return http$
      .pipe(
        tap(() => console.log("HTTP request executed")),
        map(res => Object.values(res["payload"])),
      );
  }

  getTeamsLevel() {
    const http$ = createHttpObservable('/api/teamsLevels');
    return http$
      .pipe(
        tap(() => console.log("HTTP request executed")),
        map(res => Object.values(res["payload"])),
      );
  }

  getTeamsNames() {
    const http$ = createHttpObservable('/api/teamsNames');
    return http$
      .pipe(
        tap(() => console.log("HTTP request executed")),
        map(res => Object.values(res["payload"])),
      );
  }

  getCountries() {
    const http$ = createHttpObservable('/api/countries');
    return http$
      .pipe(
        tap(() => console.log("HTTP request executed")),
        map(res => Object.values(res["payload"])),
      );
  }

  getCompetitionsTypes() {
    const http$ = createHttpObservable('/api/competitionsTypes');
    return http$
      .pipe(
        tap(() => console.log("HTTP request executed")),
        map(res => Object.values(res["payload"])),
      );
  }

  getCompetitionsNames() {
    const http$ = createHttpObservable('/api/competitionsNames');
    return http$
      .pipe(
        tap(() => console.log("HTTP request executed")),
        map(res => Object.values(res["payload"])),
      );
  }

  getCompetitionsCategories() {
    const http$ = createHttpObservable('/api/competitionsCategories');
    return http$
      .pipe(
        tap(() => console.log("HTTP request executed")),
        map(res => Object.values(res["payload"])),
      );
  }

}

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.scss']
})

export class GenericComponent implements OnInit {

  seasons$: Observable<Season[]>
  zones$: Observable<Zone[]>
  videosGames$: Observable<VideoGame[]>
  teamsTypes$: Observable<TeamType[]>
  teamsNames$: Observable<TeamName[]>
  teamsLevels$: Observable<TeamLevel[]>
  countries$: Observable<Country[]>
  competitionsTypes$: Observable<CompetitionType[]>
  competitionsNames$: Observable<CompetitionName[]>
  competitionsCategories$: Observable<CompetitionCategory[]>



  constructor(private as: AllServices) {

  }

  ngOnInit(): void {

    this.seasons$ = this.as.getSeasons();
    this.zones$ = this.as.getZones();
    this.videosGames$ = this.as.getVideosGames();
    this.teamsTypes$ = this.as.getTeamsTypes();
    this.teamsLevels$ = this.as.getTeamsLevel();
    this.teamsNames$ = this.as.getTeamsNames();
    this.countries$ = this.as.getCountries();
    this.competitionsTypes$ = this.as.getCompetitionsTypes();
    this.competitionsCategories$ = this.as.getCompetitionsCategories();
    this.competitionsNames$ = this.as.getCompetitionsNames();

  }

}

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
export function createHttpObservable(url: string) {
  return Observable.create(observer => {

    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, { signal })
      .then(response => {

        if (response.ok) {
          return response.json();
        }
        else {
          observer.error('Request failed with status code: ' + response.status);
        }
      })
      .then(body => {

        observer.next(body);

        observer.complete();

      })
      .catch(err => {

        observer.error(err);

      });

    return () => controller.abort()


  });
}
