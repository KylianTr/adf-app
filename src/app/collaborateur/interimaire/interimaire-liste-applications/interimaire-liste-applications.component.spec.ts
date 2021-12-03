import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterimaireListeApplicationsComponent } from './interimaire-liste-applications.component';

describe('InterimaireListeApplicationsComponent', () => {
  let component: InterimaireListeApplicationsComponent;
  let fixture: ComponentFixture<InterimaireListeApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterimaireListeApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterimaireListeApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
