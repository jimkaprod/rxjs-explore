import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionCategoryComponent } from './competition-category.component';

describe('CompetitionCategoryComponent', () => {
  let component: CompetitionCategoryComponent;
  let fixture: ComponentFixture<CompetitionCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
