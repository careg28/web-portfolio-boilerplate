import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AnimateInViewDirective } from '../../directives/animate-in-view.directive';

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule,
    FormsModule, ReactiveFormsModule,AnimateInViewDirective],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  private fb = inject(FormBuilder);

 form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  sent = false;

  submitForm() {
    if (this.form.valid) {
      this.sent = true;
      // Aquí iría tu lógica de envío real (API, email, etc.)
      setTimeout(() => this.sent = false, 4000);
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
