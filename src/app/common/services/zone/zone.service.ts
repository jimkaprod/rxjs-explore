import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Zone } from "../../../model/zone.interface";
import { createHttpObservable } from "../../utils/utils";

@Injectable({
  providedIn: 'root'
})
export class ZoneService {
  zones$: Observable<Zone[]>

  constructor() { }

  getZones() {
    const http$ = createHttpObservable('/api/zones');
    return http$
      .pipe(
        tap(() => console.log("HTTP request executed")),
        map(res => Object.values(res["payload"])),
      );
  }
}
