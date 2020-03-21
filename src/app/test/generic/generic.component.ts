import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';

export interface Season {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})

export class AllServices {

  seasons$: Observable<Season[]>

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


}

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.scss']
})
export class GenericComponent implements OnInit {

  seasons$: Observable<Season[]>;



  constructor(private as: AllServices) {

  }

  ngOnInit(): void {

    this.seasons$ = this.as.getSeasons();


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
