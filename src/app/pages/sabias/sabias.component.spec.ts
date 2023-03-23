import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiasComponent } from './sabias.component';

describe('SabiasComponent', () => {
  let component: SabiasComponent;
  let fixture: ComponentFixture<SabiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
