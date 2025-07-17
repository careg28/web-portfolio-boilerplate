import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/models/user.model';
import { ProjectService } from '../../../core/services/project.service';
import { ConversationService } from '../../../core/services/conversation.service';
import { StatCardComponent } from "../../components/stat-card/stat-card.component";
import { Conversation } from '../../../core/models/conversation.model';
import { CardsPackageComponent } from '../../components/cards-package/cards-package.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, StatCardComponent,CardsPackageComponent ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // Inyecciones
  private authService = inject(AuthService);
  private userService = inject(UserService);
  private projectService = inject(ProjectService);
  private conversationService = inject(ConversationService);

  userName = 'Usuario'; 
  usersCount = 0;
  projectsCount = 0;
  messagesCount = 0;
  recentConversations: Conversation[] = [];

  // Ejemplo estático
  recentProjects = [
    { name: 'Landing para Startup', date: '2025-07-13' },
    { name: 'E-commerce XYZ', date: '2025-07-10' }
  ];

 

  ngOnInit(): void {
    // Usuario actual
    this.authService.getUserActive().subscribe({
      next: (user: any) => this.userName = user.name,
      error: (err) => console.error('Error al obtener usuario activo', err)
    });

    

    // Usuarios
    this.userService.getAll().subscribe(users => this.usersCount = users.length);

    // Proyectos
    this.projectService.getAll().subscribe(projects => this.projectsCount = projects.length);

    // Trae todas o solo las últimas (limit=3)
    this.conversationService.getAll().subscribe(convs => {
    this.messagesCount = convs.length;
    // Las más recientes
    this.recentConversations = convs
      .sort((a, b) => b.updated_at.localeCompare(a.updated_at))
      .slice(0, 3);
  });
  }
}
