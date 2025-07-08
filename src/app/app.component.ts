import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { SwadowSeparatorComponent } from "./shared/components/swadow-separator/swadow-separator.component";
import { TestimonialCarouselComponent } from "./shared/components/testimonial-carousel/testimonial-carousel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
