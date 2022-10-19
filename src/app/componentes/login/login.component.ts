import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from '../../model/login-usuario';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario; 
  nombreUsuario!: string;
  password!: string;
  roles : string[] = [];
  errorMsj!: string;

  
  constructor(private tokenService: TokenService, private authService: AuthService,  private router : Router) { }

  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();

    }

    onLogin(): void{
      this.LoginUsuario= new LoginUsuario(this.nombreUsuario, this.password, this.authService.login(this.loginUsuario).subscribe){
        (

              data=>{
                this.isLogged= true;
                this.isLogginFail= false;
                this.tokenService.setToken(data.token);
                this.tokenService.setUserName(data.n)

              }

        )
      }
    }


  }

}
