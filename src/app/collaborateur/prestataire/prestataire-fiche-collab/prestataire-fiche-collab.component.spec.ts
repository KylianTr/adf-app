import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestataireFicheCollabComponent } from './prestataire-fiche-collab.component';

describe('PrestataireFicheCollabComponent', () => {
  let component: PrestataireFicheCollabComponent;
  let fixture: ComponentFixture<PrestataireFicheCollabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestataireFicheCollabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestataireFicheCollabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
