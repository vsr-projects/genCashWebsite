import { Component } from '@angular/core';
import { OurServicesComponent } from "./our-services/our-services.component";


import { CommonModule } from '@angular/common';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { MainHomeBgComponent } from "./main-home-bg/main-home-bg.component";
import { UpiSwitchComponent } from "./upi-switch/upi-switch.component";
import { SolutionsComponent } from "./solutions/solutions.component";
import { KeyServicesComponent } from "./key-services/key-services.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { StatisticComponent } from "./statistic/statistic.component";
import { OurClientleComponent } from "./our-clientle/our-clientle.component";
import { GetInTouchComponent } from "./get-in-touch/get-in-touch.component";

@Component({
  selector: 'app-home',
  imports: [
    CommonModule, NzDividerModule, NzIconModule, NzCardModule, NzIconModule,
    MainHomeBgComponent, KeyServicesComponent,
    OurServicesComponent,
    UpiSwitchComponent,
    SolutionsComponent,
    TestimonialComponent,
    StatisticComponent,
    OurClientleComponent,
    GetInTouchComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
