import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarieListeApplicationsComponent } from './salarie-liste-applications.component';

describe('SalarieListeApplicationsComponent', () => {
  let component: SalarieListeApplicationsComponent;
  let fixture: ComponentFixture<SalarieListeApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalarieListeApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarieListeApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
