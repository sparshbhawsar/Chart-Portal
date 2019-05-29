import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatechartComponent } from './createchart.component';

describe('CreatechartComponent', () => {
  let component: CreatechartComponent;
  let fixture: ComponentFixture<CreatechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
