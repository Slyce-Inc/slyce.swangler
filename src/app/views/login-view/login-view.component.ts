import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {
  username: string;
  password: string;
  remember = false;

  constructor(
    public localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.localStorageService.ready
      .subscribe((isReady) => {
        if (isReady) {

          const localUsername = this.localStorageService.getStorageVar('username');
          const localPassword = this.localStorageService.getStorageVar('password');

          if (localPassword && localUsername) {
            this.username = localUsername;
            this.password = localPassword;
            this.login();
          }
        }
      });
  }

  login() {
    if (this.username && this.password) {
      if (this.remember) {
        this.localStorageService.setStorageVar('username', this.username);
        this.localStorageService.setStorageVar('password', this.password);
      }
    }
  }
}
