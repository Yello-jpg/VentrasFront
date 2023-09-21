import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from './Models/usuario';
import { ApiClienteService } from './services/api-cliente.service';
import { ApiauthService } from './services/apiauth.service';
import { loadClientes } from './state/actions/cliente.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appVentasReal';
  usuario!: Usuario;

  constructor(public apiAuthService:ApiauthService,
              private router: Router,
              private store: Store<any>
    ) {
    this.apiAuthService.usuario.subscribe(res => {
      this.usuario = res;
      console.log('Cambio el objeto' + res);
    });
  }

  ngOnInit(){
    this.store.dispatch(loadClientes());
  }

  logOut(){
    this.apiAuthService.logout();
    this.router.navigate(['/login']);
  }

}
