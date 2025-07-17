import { Component } from '@angular/core';
import { SidebarComponent } from '../../admin/components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbar } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { NgIf } from '@angular/common';
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    SidebarComponent,
    RouterOutlet,
    MatSidenavModule,
    MatToolbar,
    MatIconModule,
    NgIf,
],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
  isDesktop = false;
}
