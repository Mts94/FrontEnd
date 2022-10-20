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
export default class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errorMsj!: string;


  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();

    }
  }

    onLogin(): void {
      this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password),
      this.authService.login(this.loginUsuario).subscribe
        ((data: { token: string; nombreUsuario: string; authorities: string[]; }) => {
          this.isLogged = true;
          this.isLogginFail = false;
          this.tokenService.setToken(data.token);
          this.tokenService.setUserName(data.nombreUsuario);
          this.tokenService.setAuthorities(data.authorities);
          this.roles = data.authorities;
          this.router.navigate([''])
        }, (err: { error: { mensaje: string; }; }) => {
          this.isLogged = false;
          this.isLogginFail = true;
          this.errorMsj = err.error.mensaje;
          console.error(this.errorMsj);


        }

        )
    }
  }





