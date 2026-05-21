import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSending: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private _translationLoaderService: TranslationLoaderService, private fb: FormBuilder) {
    this._translationLoaderService.loadTranslations(english, french);
    this.contactForm = this.fb.group({
      identite: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      object: ['', Validators.required],
      comment: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  public sendEmail(e: Event) {
    e.preventDefault();
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSending = true;
    this.successMessage = '';
    this.errorMessage = '';

    emailjs.sendForm(
      'service_3v6r4mc', // Replace with your Service ID
      'template_68gtmku', // Replace with your Template ID
      e.target as HTMLFormElement,
      {
        publicKey: 'l_awnjCkHtesxnJbE', // Replace with your Public Key
      }
    )
      .then(
        () => {
          this.isSending = false;
          this.successMessage = 'Message sent successfully!';
          this.contactForm.reset();
        },
        (error) => {
          this.isSending = false;
          this.errorMessage = 'Failed to send the message. Please try again later.';
          console.log('FAILED...', (error as any).text);
        }
      );
  }
}
