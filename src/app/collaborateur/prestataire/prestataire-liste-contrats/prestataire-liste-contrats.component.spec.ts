import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestataireListeContratsComponent } from './prestataire-liste-contrats.component';

describe('PrestataireListeContratsComponent', () => {
  let component: PrestataireListeContratsComponent;
  let fixture: ComponentFixture<PrestataireListeContratsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestataireListeContratsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestataireListeContratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
