import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterimaireFicheCollabComponent } from './interimaire-fiche-collab.component';

describe('InterimaireFicheCollabComponent', () => {
  let component: InterimaireFicheCollabComponent;
  let fixture: ComponentFixture<InterimaireFicheCollabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterimaireFicheCollabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterimaireFicheCollabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
