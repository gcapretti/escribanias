import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaEscribaniaComponent } from './alta-escribania.component';

describe('AltaEscribaniaComponent', () => {
  let component: AltaEscribaniaComponent;
  let fixture: ComponentFixture<AltaEscribaniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaEscribaniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaEscribaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
