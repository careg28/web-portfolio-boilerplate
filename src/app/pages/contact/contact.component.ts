import { Component } from '@angular/core';
import { ContactFormComponent } from "../../shared/components/contact-form/contact-form.component";
import { MatDivider } from "@angular/material/divider";
import { MatCardContent, MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-contact',
  imports: [ContactFormComponent, MatDivider, MatCardContent, MatCardModule, MatIconModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
