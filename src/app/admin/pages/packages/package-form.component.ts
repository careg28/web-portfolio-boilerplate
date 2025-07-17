import { Component, Input, Output, EventEmitter, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Package } from '../../../core/models/package.model';

import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PackageService } from '../../../core/services/package.service';

@Component({
  selector: 'app-package-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './package-form.component.html',
  styleUrl: './package-form.component.css'
})
export class PackageFormComponent implements OnInit {
  @Input() packageData?: Package; // <-- El paquete a editar, si lo hay
  @Output() saved = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();
   private packageService = inject(PackageService);

  form = inject(FormBuilder).group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(200)]],
    price: [0, [Validators.required, Validators.min(0)]]
  });

  loading = false;
  editMode = false;
  packageId?: number;

  ngOnInit() {
    if (this.packageData) {
      this.editMode = true;
      this.packageId = this.packageData.id;
      this.form.patchValue(this.packageData);
    }
  }

  submit() {
    if (this.form.invalid) return;
    this.loading = true;
    const raw = this.form.value;
    const values: Partial<Package> = {
      name: raw.name ?? '',
      description: raw.description ?? '',
      price: Number(raw.price ?? 0)
    };
    if (this.editMode && this.packageId) {
      this.packageService.update(this.packageId, values).subscribe({
        next: () => {
          this.saved.emit();
          this.loading = false;
        },
        error: () => this.loading = false
      });
    } else {
      this.packageService.create(values).subscribe({
        next: () => {
          this.saved.emit();
          this.loading = false;
        },
        error: () => this.loading = false
      });
    }
  }


  cancel() {
    this.cancelled.emit();
  }
}

