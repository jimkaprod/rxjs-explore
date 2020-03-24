import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Season } from "../../../model/season.interface";
import { createHttpObservable } from "../../utils/utils";

@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  seasons$: Observable<Season[]>

  constructor() { }

  getSeasons() {
    const http$ = createHttpObservable('/api/seasons');
    return http$
      .pipe(
        tap(() => console.log("HTTP request executed")),
        map(res => Object.values(res["payload"])),
      );
  }

}
