import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Resultado3Component } from './resultado3.component';

describe('Resultado3Component', () => {
  let component: Resultado3Component;
  let fixture: ComponentFixture<Resultado3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Resultado3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Resultado3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
