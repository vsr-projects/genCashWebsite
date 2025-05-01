import { Component, AfterViewInit, ElementRef } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({ selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.scss'] })
export class HomeComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    // Hero animation
    gsap.from(this.el.nativeElement.querySelectorAll('h1, .subtitle, .cta'), {
      scrollTrigger: { trigger: this.el.nativeElement, start: 'top 80%' }, opacity: 0, y: 30, stagger: 0.2, duration: 1
    });
    // About animation
    gsap.from('.about-content .text', { scrollTrigger: { trigger: '.about-section', start: 'top 80%' }, opacity: 0, x: -50, duration: 1 });
    gsap.from('.about-content .image', { scrollTrigger: { trigger: '.about-section', start: 'top 80%' }, opacity: 0, x: 50, duration: 1 });
  }
}
