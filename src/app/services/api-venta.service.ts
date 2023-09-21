import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from '../Models/venta';
import { Response  } from '../Models/response';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ApiVentaService {

  url: string = 'https://localhost:7205/api/Venta';

  constructor(private _http: HttpClient) { }

  Add(venta: Venta): Observable<Response>{
    return this._http.post<Response>(this.url,venta,httpOption);
  }
}
