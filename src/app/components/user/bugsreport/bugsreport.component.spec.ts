import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugsreportComponent } from './bugsreport.component';

describe('BugsreportComponent', () => {
  let component: BugsreportComponent;
  let fixture: ComponentFixture<BugsreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugsreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
