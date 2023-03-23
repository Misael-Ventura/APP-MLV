import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamanteComponent } from './diamante.component';

describe('DiamanteComponent', () => {
  let component: DiamanteComponent;
  let fixture: ComponentFixture<DiamanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiamanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiamanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
