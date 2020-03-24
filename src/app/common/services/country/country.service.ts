import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Country } from "../../../model/country.interface";
import { createHttpObservable } from "../../utils/utils";

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  zones$: Observable<Country[]>

  constructor() { }

  getCountries() {
    const http$ = createHttpObservable('/api/countries');
    return http$
      .pipe(
        tap(() => console.log("HTTP request executed")),
        map(res => Object.values(res["payload"])),
      );
  }
}
