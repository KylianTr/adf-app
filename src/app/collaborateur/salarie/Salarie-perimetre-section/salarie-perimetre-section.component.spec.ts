import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalariePerimetreSectionComponent } from './salarie-perimetre-section.component';

describe('SalariePerimetreSectionComponent', () => {
  let component: SalariePerimetreSectionComponent;
  let fixture: ComponentFixture<SalariePerimetreSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalariePerimetreSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalariePerimetreSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
