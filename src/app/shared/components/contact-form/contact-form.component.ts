import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AnimateInViewDirective } from '../../directives/animate-in-view.directive';
import { HttpErrorResponse } from '@angular/common/http';
import { ContactService } from '../../../core/services/contact.service';
import { Contact } from '../../../core/models/contact.model';
import { CreateContactDto } from '../../../core/dto/create-contact.dto';

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule,
    FormsModule, ReactiveFormsModule,AnimateInViewDirective],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);
  

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(40), Validators.maxLength(800)]]
  });

  sent = false;
  error = '';

  submitForm() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
     const raw = this.form.value;

  // creando primer mensaje sin usuario registrado usando dto
 const data: CreateContactDto = {
  name: raw.name ?? '',
  email: raw.email ?? '',
  message: raw.message ?? ''
};

     this.contactService.sendMessage(data).subscribe({
    next: () => {
      this.sent = true;
      this.error = '';
      this.form.reset();
      setTimeout(() => this.sent = false, 4000);
    },
    error: (err: HttpErrorResponse) => {
      this.error = err.error?.message || 'Error al enviar el mensaje';
      this.sent = false;
    }
  });
}
}

