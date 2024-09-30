import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(300)]]
    });
  }

  ngOnInit(): void { }

  sendMessage(): void {
    if (this.contactForm.valid) {
      const { email, message } = this.contactForm.value;

      this.snackBar.open('Message envoyée avec succès.', 'Fermer', {
        duration: 3000,
      });

      this.contactForm.reset();
    }
  }
}
