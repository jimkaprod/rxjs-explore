import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericComponent } from './test/generic/generic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { CompetitionCategoryComponent } from './common/filters/competition/competition-category/competition-category.component';

import { TruncatePipe } from "./common/pipes/truncate.pipe";
import { ButtonToggleComponent } from './common/filters/button-toggle/button-toggle.component';
import { FilterComponent } from './teams/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericComponent,
    CompetitionCategoryComponent,
    TruncatePipe,
    ButtonToggleComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
