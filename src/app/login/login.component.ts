import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiauthService } from "../services/apiauth.service";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Login } from "../Models/login";

@Component({
    selector: 'app-cliente',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
  })
  export class LoginComponent implements OnInit{

    public loginForm = this.formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });

    // public loginForm = new FormGroup({
    //   email: new FormControl(''),
    //   password: new FormControl('')
    // });

    constructor(public apiAuthService: ApiauthService, private router: Router, private formBuilder: FormBuilder){
      // if(this.apiAuthService.usuarioData){
      //   this.router.navigate(['/']);
      // }
    }

    ngOnInit(): void{
    }

    login(){
      // console.log(this.loginForm.value);
      this.apiAuthService.login(this.loginForm.value as Login).subscribe(response => {
        if(response.exito === 1){
          this.router.navigate(['/']);
        }
      });
    }
    
  }