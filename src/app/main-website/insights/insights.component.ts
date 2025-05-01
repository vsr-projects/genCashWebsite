import { Component, AfterViewInit, ElementRef } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.number').forEach(el => {
  gsap.fromTo(el, { innerText: 0 }, {
    innerText: +el.textContent,
    duration: 2,
    ease: 'none',
    scrollTrigger: { trigger: el, start: 'top 80%' },
    snap: { innerText: 1 },
    onUpdate: () => el.textContent = Math.ceil(el.innerText)
  });
});
fadeIn('#statistic .metric', { scrollTrigger: { trigger: '#statistic', start: 'top 80%' } });


@Component({ selector: 'app-insights', templateUrl: './insights.component.html', styleUrls: ['./insights.component.scss'] })
export class InsightsComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    this.el.nativeElement.querySelectorAll('.metric .number').forEach((num: any) => {
      const end = +num.textContent;
      gsap.fromTo(num, { innerText: 0 }, { innerText: end, duration: 2, scrollTrigger: { trigger: num, start: 'top 90%' }, snap: { innerText: 1 }, onUpdate: () => num.textContent = Math.ceil(num.innerText) });
    });
    gsap.utils.toArray('h2', this.el.nativeElement).forEach((el: any) => {
      gsap.from(el, { scrollTrigger: { trigger: el, start: 'top 80%' }, opacity: 0, y: 40, duration: 1 });
    });
  }
}


