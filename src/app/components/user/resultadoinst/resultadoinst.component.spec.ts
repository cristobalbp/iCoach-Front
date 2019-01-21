import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoinstComponent } from './resultadoinst.component';

describe('ResultadoinstComponent', () => {
  let component: ResultadoinstComponent;
  let fixture: ComponentFixture<ResultadoinstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoinstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoinstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
