import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { valoresPost } from './conecta/Model/respostaModel';


@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor(private http: HttpClient) {}


//Observable é um atributo do rxjs
  public postUsuario(code: any): Observable<any> {
    const url = 'http://localhost:8080/angular';
    const params = new HttpParams()
    .set('code', code);  
    const options = {Headers: new HttpHeaders(), responseType: 'text' as 'json'}
    return this.http.post<any>(url, params, options);
  }


  public getTodosUsuarios(): Observable<any> {
    const url = 'https://reqres.in/api/users';
    return this.http.get<any>(url);
  }
}
