import { Component, OnInit } from '@angular/core';
import { SeasonService } from "../../common/services/season/season.service";
import { ZoneService } from "../../common/services/zone/zone.service";
import { CountryService } from "../../common/services/country/country.service";
import { Observable } from 'rxjs';
import { Season } from "../../model/season.interface";
import { Zone } from "../../model/zone.interface";
import { Country } from "../../model/country.interface";


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  seasonTitle = "Seasons"
  seasons$: Observable<Season[]>

  zoneTitle = "Seasons"
  zones$: Observable<Zone[]>

  countryTitle = "Countries"
  countries$: Observable<Country[]>

  constructor(
    private seasonService: SeasonService,
    private zoneService: ZoneService,
    private countryService: CountryService,
  ) { }

  ngOnInit(): void {
    this.seasons$ = this.seasonService.getSeasons();
    this.zones$ = this.zoneService.getZones();
    this.countries$ = this.countryService.getCountries();
  }

}
