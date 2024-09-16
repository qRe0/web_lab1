import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionCenterComponent } from './region-center.component';

describe('RegionCenterComponent', () => {
  let component: RegionCenterComponent;
  let fixture: ComponentFixture<RegionCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegionCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
