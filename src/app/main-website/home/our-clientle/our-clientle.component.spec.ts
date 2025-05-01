import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurClientleComponent } from './our-clientle.component';

describe('OurClientleComponent', () => {
  let component: OurClientleComponent;
  let fixture: ComponentFixture<OurClientleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurClientleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurClientleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
