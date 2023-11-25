import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTMLProjectsComponent } from './html-projects.component';

describe('HTMLProjectsComponent', () => {
  let component: HTMLProjectsComponent;
  let fixture: ComponentFixture<HTMLProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HTMLProjectsComponent]
    });
    fixture = TestBed.createComponent(HTMLProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
