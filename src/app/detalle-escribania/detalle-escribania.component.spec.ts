import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEscribaniaComponent } from './detalle-escribania.component';

describe('DetalleEscribaniaComponent', () => {
  let component: DetalleEscribaniaComponent;
  let fixture: ComponentFixture<DetalleEscribaniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleEscribaniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEscribaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
