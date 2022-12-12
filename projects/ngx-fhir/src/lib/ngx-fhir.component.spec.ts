import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFhirComponent } from './ngx-fhir.component';

describe('NgxFhirComponent', () => {
  let component: NgxFhirComponent;
  let fixture: ComponentFixture<NgxFhirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFhirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxFhirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
