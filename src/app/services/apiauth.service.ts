import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { Response } from "../Models/response";
import { Usuario } from "../Models/usuario";
import { Login } from "../Models/login";

const httpOptions = { headers: new HttpHeaders({
    'Contend-Type': 'application/json'
  }) };

@Injectable({ providedIn: 'root'})
export class ApiauthService{
    url: string = 'https://localhost:7205/api/User/login';

    private usuarioSubject: BehaviorSubject<Usuario>;
    public usuario: Observable<Usuario>;

    public get usuarioData(){
        return this.usuarioSubject.value;
    }

    constructor(private _http: HttpClient){
        this.usuarioSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('usuario') || `null`));
        this.usuario = this.usuarioSubject.asObservable();
    }

    login(login: Login): Observable<Response>{
        return this._http.post<Response>(this.url,login,httpOptions).pipe(
            map(res => { 
                if(res.exito === 1 ){
                    const usuario: Usuario = res.data;
                    localStorage.setItem('usuario',JSON.stringify(usuario));
                    this.usuarioSubject.next(usuario);
                }
                return res;
            })
        );
    }

    logout(){
        localStorage.removeItem('usuario');
        this.usuarioSubject.next(null!);
    }
}