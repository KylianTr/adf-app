import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestataireGestionComptesComponent } from './prestataire-gestion-comptes.component';

describe('PrestataireGestionComptesComponent', () => {
  let component: PrestataireGestionComptesComponent;
  let fixture: ComponentFixture<PrestataireGestionComptesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestataireGestionComptesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestataireGestionComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
