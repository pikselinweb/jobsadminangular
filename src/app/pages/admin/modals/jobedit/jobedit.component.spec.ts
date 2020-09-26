import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobeditComponent } from './jobedit.component';

describe('JobeditComponent', () => {
  let component: JobeditComponent;
  let fixture: ComponentFixture<JobeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
