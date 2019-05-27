import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionEscribaniasComponent } from './administracion-escribanias.component';

describe('AdministracionEscribaniasComponent', () => {
  let component: AdministracionEscribaniasComponent;
  let fixture: ComponentFixture<AdministracionEscribaniasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionEscribaniasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionEscribaniasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
