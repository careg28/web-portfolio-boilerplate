import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { SwadowSeparatorComponent } from "../../shared/components/swadow-separator/swadow-separator.component";
import { TestimonialCarouselComponent } from "../../shared/components/testimonial-carousel/testimonial-carousel.component";
import { FeaturesCardsComponent } from "../../shared/components/features-cards/features-cards.component";
import { ContactFormComponent } from "../../shared/components/contact-form/contact-form.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatIconModule, CommonModule, SwadowSeparatorComponent, TestimonialCarouselComponent, FeaturesCardsComponent, ContactFormComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
