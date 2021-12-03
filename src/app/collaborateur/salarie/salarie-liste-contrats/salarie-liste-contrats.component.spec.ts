import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarieListeContratsComponent } from './salarie-liste-contrats.component';

describe('ListeContratsComponent', () => {
  let component: SalarieListeContratsComponent;
  let fixture: ComponentFixture<SalarieListeContratsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalarieListeContratsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarieListeContratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
