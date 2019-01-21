import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Resultado1Component } from './resultado1.component';

describe('Resultado1Component', () => {
  let component: Resultado1Component;
  let fixture: ComponentFixture<Resultado1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Resultado1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Resultado1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
