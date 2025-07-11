import { Injectable, inject } from '@angular/core';
import { HttpClient }           from '@angular/common/http';
import { Observable }           from 'rxjs';
import { Contact }              from '../models/contact.model';
import { environment } from '../../environments/enviroment';

@Injectable({ providedIn: 'root' })
export class ContactService {
 private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/contact`;

  sendMessage(payload: { name: string; email: string; message: string }) {
    return this.http.post(this.apiUrl, payload);
  }
}
