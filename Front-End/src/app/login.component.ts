
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './service/user.service';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

   isValidFormUsername = false;
   isValidFormPassword = false;
   passwordValue = '';

   constructor(private router: Router, private user: UserService, private dialog: MatDialog) {}

// tslint:disable-next-line:use-life-cycle-interface
ngOnInit() {}

checkFormValidation(event) {
  const name = event.target.name;
  const value = event.target.value;

  if (name === 'username') {
    if (value !== '') {
      this.isValidFormUsername = true;
    } else {
      this.isValidFormUsername = false;
    }
  } else {
    // In password case
    this.passwordValue = value;
    if (value !== '') {
      this.isValidFormPassword = true;
    } else {
      this.isValidFormPassword = false;
    }
  }
}

loginUser(e) {
  console.log('*******************', e);
  e.preventDefault();
  const username = e.target.elements[0].value;
  const password = e.target.elements[0].value;

  console.log(username, password);

   if (username === 'admin' && password === 'admin') {
     // this.user.setUserLoggedIn();
     // this.user.setUsername('admin');
     this.router.navigate(['popup']);

   }
  console.log('###################@', username, password);
}
openDialog() {
  const dialogConfig = new MatDialogConfig();
  this.dialog.open(DialogBodyComponent, dialogConfig);
}

}
