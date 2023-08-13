// src/app/emailjs.service.ts

import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { EMAILJS_CONFIG } from './emailjs-config';

@Injectable({
  providedIn: 'root',
})
export class EmailjsService {
  constructor() {
    emailjs.init(EMAILJS_CONFIG.user_id);
  }

  sendEmail(templateParams: any): Promise<EmailJSResponseStatus> {
    return emailjs.send(
      EMAILJS_CONFIG.service_id,
      EMAILJS_CONFIG.template_id,
      templateParams
    );
  }
}
