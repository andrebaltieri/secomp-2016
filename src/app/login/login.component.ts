import { Component, OnInit } from '@angular/core';
import { AuthProviders, AuthMethods, AngularFire } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: any = {
    email: '',
    password: ''
  };

  constructor(public af: AngularFire) { }

  ngOnInit() {
  }

  signUp() {
    this.af.auth.createUser({ email: this.user.email, password: this.user.password })
      .then(() => {
        console.log('Cadastrado');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  login() {
    this.af.auth.login(
      { email: this.user.email, password: this.user.password },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      });
  }

  loginWithGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    })
  }
}
