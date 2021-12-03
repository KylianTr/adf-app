import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarieGestionComptesComponent } from './salarie-gestion-comptes.component';

describe('SalarieGestionComptesComponent', () => {
  let component: SalarieGestionComptesComponent;
  let fixture: ComponentFixture<SalarieGestionComptesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalarieGestionComptesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarieGestionComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
