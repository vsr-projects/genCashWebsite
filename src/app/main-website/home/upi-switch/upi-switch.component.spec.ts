import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpiSwitchComponent } from './upi-switch.component';

describe('UpiSwitchComponent', () => {
  let component: UpiSwitchComponent;
  let fixture: ComponentFixture<UpiSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpiSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpiSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
