import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-get-in-touch',
  imports: [
    NzSpinModule, ReactiveFormsModule, CommonModule, FormsModule, NzButtonModule, NzInputModule,
    NzBadgeModule
  ],
  templateUrl: './get-in-touch.component.html',
  styleUrl: './get-in-touch.component.scss'
})
export class GetInTouchComponent {

  contactUsGroup!: FormGroup;
  isSpinning: boolean = false;

  constructor(
    private fb: FormBuilder,
    private readonly notification: NzNotificationService,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    // this.contactUsGroup = this.fb.group({
    //   name: ['', Validators.required],
    //   company: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   mobile: ['', Validators.required],
    //   query: ['', Validators.required]
    // });
    this.contactUsGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      company: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      query: ['', [Validators.required, Validators.minLength(10)]],
    });

  }

  onSubmit(): void {
    if (this.contactUsGroup.valid) {
      this.contactService.submitContactForm(this.contactUsGroup.value).subscribe({
        next: () => {
          this.notification.success('SUCCESS', 'Thank you! We received your query.')
          this.contactUsGroup.reset();
        },
        error: (err) => {
          console.error('Contact form error:', err);
          this.notification.error('FAILED', 'Something went wrong. Please try again.')
        }
      });
    } else {
      this.notification.error('FAILED', 'Please fill all required fields correctly.')
    }
  }
}

fadeIn('#get-in-touch input, #get-in-touch textarea, #get-in-touch .cta', {
  scrollTrigger: { trigger: '#get-in-touch', start: 'top 80%' }, stagger: 0.15
});
document.querySelector('#get-in-touch .cta').addEventListener('click', () => {
  const ripple = document.createElement('span');
  ripple.className = 'ripple'; // style absolute circle via CSS
  event.currentTarget.append(ripple);
  gsap.to(ripple, { scale: 5, opacity: 0, duration: 0.6, onComplete: () => ripple.remove() });
});
