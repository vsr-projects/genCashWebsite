import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  testimonials = [
    {
      text: `At GenCash, we redefine the way India transacts, providing comprehensive financial services for the inclusive and sustainable growth of individuals, SMEs, and enterprises nationwide.`,
      author: 'Shubham Gupta',
      role: 'Founder'
    },
    // {
    //   text: `At GenCash, we redefine the way India transacts, providing comprehensive financial services for the inclusive and sustainable growth of individuals, SMEs, and enterprises nationwide.`,
    //   author: 'Shubham Gupta',
    //   role: 'Founder'
    // }
  ];
  
}
