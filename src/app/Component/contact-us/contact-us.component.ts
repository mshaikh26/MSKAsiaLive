import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailjsService } from 'src/app/service/EmailjsService';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;
  showSuccessMessage = false;
  constructor(
    private formBuilder: FormBuilder,
    private emailjsService: EmailjsService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    // Initialize the form with the necessary controls and validation rules
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/),
        ],
      ],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d+$/),
          Validators.minLength(10),
          Validators.maxLength(15),
        ],
      ],
      message: [''],
    });
  }

  onFormSubmit() {
    // Handle form submission here
    if (this.contactForm.valid) {
      const templateParams = {
        from_name: this.contactForm.get('name')?.value,
        email_id: this.contactForm.get('email')?.value,
        contact: this.contactForm.get('phoneNumber')?.value,
        message: this.contactForm.get('message')?.value,
      };

      this.emailjsService.sendEmail(templateParams).then(
        (response) => {
          this.showSuccessMessage = true;
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 2000);
          this.contactForm.reset();
        },
        (error) => {
          console.error('Failed to send email:', error);
        }
      );
    }
  }
  
}
