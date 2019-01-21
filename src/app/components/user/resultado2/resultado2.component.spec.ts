import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Resultado2Component } from './resultado2.component';

describe('Resultado2Component', () => {
  let component: Resultado2Component;
  let fixture: ComponentFixture<Resultado2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Resultado2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Resultado2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
