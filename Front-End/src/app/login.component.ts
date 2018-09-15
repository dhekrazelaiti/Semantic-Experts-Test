
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './service/user.service';
import { MatDialog, MatDialogConfig} from '@angular/material';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

   constructor(private router: Router, private user: UserService) {}

// tslint:disable-next-line:use-life-cycle-interface
ngOnInit() {}

loginUser(e) {
  console.log('*******************', e);
  e.preventDefault();
  const username = e.target.elements[0].value;
  const password = e.target.elements[0].value;

  console.log(username, password);

   if (username === 'admin' && password === 'admin') {
     this.user.setUserLoggedIn();
     this.user.setUsername('admin');
     this.router.navigate(['home']);

   }
  console.log('###################@', username, password);
}


}
