import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestatairePerimetreSectionComponent } from './prestataire-perimetre-section.component';

describe('PrestatairePerimetreSectionComponent', () => {
  let component: PrestatairePerimetreSectionComponent;
  let fixture: ComponentFixture<PrestatairePerimetreSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestatairePerimetreSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestatairePerimetreSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
