import { Component } from '@angular/core';

@Component({
  selector: 'app-our-clientle',
  imports: [],
  templateUrl: './our-clientle.component.html',
  styleUrl: './our-clientle.component.scss'
})
export class OurClientleComponent {

}
gsap.to('#our-clientle .logos', {
  xPercent: -100, ease: 'none',
  scrollTrigger: { trigger: '#our-clientle', start: 'top top', end: 'bottom top', scrub: true, pin: true }
});
