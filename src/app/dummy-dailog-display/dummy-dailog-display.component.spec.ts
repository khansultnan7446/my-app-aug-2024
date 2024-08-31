import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyDailogDisplayComponent } from './dummy-dailog-display.component';

describe('DummyDailogDisplayComponent', () => {
  let component: DummyDailogDisplayComponent;
  let fixture: ComponentFixture<DummyDailogDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyDailogDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummyDailogDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
