import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionreportsComponent } from './institutionreports.component';

describe('InstitutionreportsComponent', () => {
  let component: InstitutionreportsComponent;
  let fixture: ComponentFixture<InstitutionreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutionreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
