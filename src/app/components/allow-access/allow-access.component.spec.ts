import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowAccessComponent } from './allow-access.component';

describe('AllowAccessComponent', () => {
  let component: AllowAccessComponent;
  let fixture: ComponentFixture<AllowAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllowAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllowAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
