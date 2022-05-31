import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Clients } from '../interfaces/clients';
@Injectable({
  providedIn: 'root',
})
export class ClientsService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  private urlEndPoint: string = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {}

 getClientes(): Observable<Clients[]> {
  return this.http.get(this.urlEndPoint).pipe(
    map( response => response as Clients[] )
  );
  }

  create(cliente: Clients): Observable<Clients> {
    return this.http.post<Clients>('http://localhost:8080/api/contact', cliente, { headers: this.httpHeaders })
  }

  getCliente(id: number): Observable<Clients>{
    return this.http.put<Clients>(`${'http://localhost:8080/api/contact'}/${id}`, { headers: this.httpHeaders })
    }

   
  delete(id: number): Observable<Clients>{ 

    return this.http.delete<Clients>(`${'http://localhost:8080/api/contact'}/${id}`, { headers: this.httpHeaders })
  }
}
