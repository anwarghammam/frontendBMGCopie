import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollocationHomePageComponent } from './collocation-home-page.component';

describe('CollocationHomePageComponent', () => {
  let component: CollocationHomePageComponent;
  let fixture: ComponentFixture<CollocationHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollocationHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollocationHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
