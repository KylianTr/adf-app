import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterimairePerimetreSectionComponent } from './interimaire-perimetre-section.component';

describe('InterimairePerimetreSectionComponent', () => {
  let component: InterimairePerimetreSectionComponent;
  let fixture: ComponentFixture<InterimairePerimetreSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterimairePerimetreSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterimairePerimetreSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
