import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterimaireListeContratsComponent } from './interimaire-liste-contrats.component';

describe('InterimaireListeContratsComponent', () => {
  let component: InterimaireListeContratsComponent;
  let fixture: ComponentFixture<InterimaireListeContratsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterimaireListeContratsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterimaireListeContratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
