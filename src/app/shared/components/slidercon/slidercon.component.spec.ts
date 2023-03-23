import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderconComponent } from './slidercon.component';

describe('SliderconComponent', () => {
  let component: SliderconComponent;
  let fixture: ComponentFixture<SliderconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
