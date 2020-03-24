import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-explore';
  componentTitle = "Competition type"
  componentValues = [
    { "id": "1", "name": "international" },
    { "id": "2", "name": "continental" },
    { "id": "3", "name": "national" }
  ];


}
