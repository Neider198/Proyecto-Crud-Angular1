import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide:boolean = true;

  constructor(public loginService:LoginService, private router: Router) { }

  user:any = {
    
  };

  ngOnInit(): void {
  }

  iniciarSesion(){
    this.loginService
    .iniciarSesion(this.user)
      .subscribe(
        res => {
          this.user = res;
          console.log(this.user)
          //console.log(this.user.token)
          localStorage.setItem('token', this.user.token);
          this.router.navigate(["/inicio"]);
        },
        err=> console.log(err)
      )     
  }
}
