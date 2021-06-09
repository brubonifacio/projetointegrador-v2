import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token )
  }

  getAllPostagens(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(`${environment.server}/postagens`, this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>(`${environment.server}/postagens`, postagem, this.token)
  }

  getByIdUser(id:number):Observable<User>{
    return this.http.get<User>(`${environment.server}/usuarios/${id}`)
  }
}
