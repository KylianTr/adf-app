import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarieFicheCollabComponent } from './salarie-fiche-collab.component';

describe('SalarieFicheCollabComponent', () => {
  let component: SalarieFicheCollabComponent;
  let fixture: ComponentFixture<SalarieFicheCollabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalarieFicheCollabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarieFicheCollabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
