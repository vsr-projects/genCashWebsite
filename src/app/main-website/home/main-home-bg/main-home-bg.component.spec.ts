import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHomeBgComponent } from './main-home-bg.component';

describe('MainHomeBgComponent', () => {
  let component: MainHomeBgComponent;
  let fixture: ComponentFixture<MainHomeBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainHomeBgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHomeBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
