import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../Models/response';
import { Cliente } from '../Models/Cliente';

const httpOptions = { headers: new HttpHeaders({
  'Contend-Type': 'application/json'
}) };

@Injectable({
  providedIn: 'root'
})
export class ApiClienteService {

  url: string = 'https://localhost:7205/api/Cliente';

  constructor(private _http: HttpClient) { }

  getClientes(): Observable<Response>{
    return this._http.get<Response>(this.url);
  }

  add(cliente: Cliente): Observable<Response>{
    console.log("Llego a add de API");
    return this._http.post<Response>(this.url,cliente,httpOptions);
  }

  edit(cliente: Cliente): Observable<Response>{
    console.log("Llego a edit de API");
    return this._http.put<Response>(this.url,cliente,httpOptions);
  }

  del(id: number): Observable<Response>{
    console.log("Llego a del de API",id);
    console.log(`${this.url}/${id}`)
    return this._http.delete<Response>(`${this.url}/${id}`);
  }
}
