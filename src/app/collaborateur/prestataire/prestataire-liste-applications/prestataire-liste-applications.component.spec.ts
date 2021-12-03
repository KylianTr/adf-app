import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestataireListeApplicationsComponent } from './prestataire-liste-applications.component';

describe('PrestataireListeApplicationsComponent', () => {
  let component: PrestataireListeApplicationsComponent;
  let fixture: ComponentFixture<PrestataireListeApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestataireListeApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestataireListeApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
