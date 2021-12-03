import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterimaireGestionComptesComponent } from './interimaire-gestion-comptes.component';

describe('InterimaireGestionComptesComponent', () => {
  let component: InterimaireGestionComptesComponent;
  let fixture: ComponentFixture<InterimaireGestionComptesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterimaireGestionComptesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterimaireGestionComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
