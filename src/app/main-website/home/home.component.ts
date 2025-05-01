import { Component, AfterViewInit, ElementRef } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline();
tl.from('app-home h1', { y: 100, opacity: 0, duration: 1.2 })
  .from('app-home .subtitle', { y: 50, opacity: 0 }, '-=0.8')
  .from('app-home .cta', { scale: 0.8, opacity: 0 }, '-=0.6');

ScrollTrigger.create({
  animation: tl,
  trigger: 'app-home #hero',
  start: 'top top',
  end: 'bottom top',
  scrub: false
});

gsap.fromTo('#upi-switch', { backgroundPosition: '0% 50%' }, {
  backgroundPosition: '100% 50%', ease: 'none',
  scrollTrigger: { trigger: '#upi-switch', start: 'top 80%', end: 'bottom 20%', scrub: true }
});
gsap.from('#upi-switch .cta', {
  scrollTrigger: { trigger: '#upi-switch', start: 'top 90%' },
  opacity: 0, y: 30, duration: 1
}).add(() => {
  gsap.fromTo('#upi-switch .cta::after', { xPercent: -100 }, { xPercent: 100, duration: 1.5, ease: 'power2.out' });
});


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
