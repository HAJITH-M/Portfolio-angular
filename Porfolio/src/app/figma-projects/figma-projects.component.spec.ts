import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FIGMAProjectsComponent } from './figma-projects.component';

describe('FIGMAProjectsComponent', () => {
  let component: FIGMAProjectsComponent;
  let fixture: ComponentFixture<FIGMAProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FIGMAProjectsComponent]
    });
    fixture = TestBed.createComponent(FIGMAProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
