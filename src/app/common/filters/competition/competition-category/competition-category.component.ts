import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-competition-category',
  templateUrl: './competition-category.component.html',
  styleUrls: ['./competition-category.component.scss']
})
export class CompetitionCategoryComponent implements OnInit {

  @Input('title') title: string;

  @Input('values') values: any[];

  selectedValue: string[] = [];

  message: string;

  value: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.message = this.getMessage();
  }

  onChange(group) {
    this.selectedValue = group.value;
    this.message = this.getMessage();
    this.value = this.getValue();
  }

  getMessage() {
    let message: string = "None";

    if (this.selectedValue.length) {
      let arr: string[] = [];
      this.selectedValue.forEach(element => arr.push(element[1]));
      message = arr.join(', ');
    }

    return message;
  }

  getValue() {
    let value: number[] = [];

    if (this.selectedValue.length) {
      this.selectedValue.forEach(element => value.push(Number(element[0])));
    }

    return value;
  }
}
