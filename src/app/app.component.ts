import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
