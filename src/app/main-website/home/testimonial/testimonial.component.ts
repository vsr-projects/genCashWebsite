import { Component, AfterViewInit, ElementRef } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({ selector: 'app-testimonials', templateUrl: './testimonials.component.html', styleUrls: ['./testimonials.component.scss'] })
export class TestimonialsComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    gsap.utils.toArray('.testimonial, .client-logos img').forEach((el: any) => {
      gsap.from(el, { scrollTrigger: { trigger: el, start: 'top 90%' }, opacity: 0, y: 30, duration: 1, stagger: 0.2 });
    });
  }
}
