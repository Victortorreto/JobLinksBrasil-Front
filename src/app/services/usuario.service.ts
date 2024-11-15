import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = `${environment.apiUrl}/usuarios`;

  constructor(private http: HttpClient) {}

  cadastrarUsuario(dadosUsuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/cadastro`, dadosUsuario);
  }

  loginUsuario(credenciais: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credenciais, { responseType: 'text' });
}
}
