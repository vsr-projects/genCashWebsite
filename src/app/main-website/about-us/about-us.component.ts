import { Component } from '@angular/core';

gsap.timeline({
  scrollTrigger: {
    trigger: '#about-hero', start: 'top 50%', end: 'bottom 30%', scrub: true, pin: true
  }
})
  .from('#about-hero .text', { x: -100, opacity: 0 })
  .from('#about-hero .image', { x: 100, opacity: 0 }, '<')
  .to('#about-hero', { backgroundColor: '#F8F8F8' }, 0);


@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
