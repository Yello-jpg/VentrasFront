import { inject, Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, CanActivateFn } from "@angular/router";
import { of } from "rxjs";
import { ApiauthService } from "../services/apiauth.service";

export const AuthenticationGuard: CanActivateFn = () =>{
    const router = inject(Router);
    const apiAuth = inject(ApiauthService);
    const usuario = apiAuth.usuarioData;
    if(usuario){
        // console.log(usuario,"true");
        return true;
    }
    router.navigate(['/login']);
    // console.log(usuario,"false");
    return of(false);
}