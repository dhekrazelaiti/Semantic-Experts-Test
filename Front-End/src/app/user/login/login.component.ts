
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { DialogBodyComponent } from '../../dialog-body/dialog-body.component';

@Component({

  // tslint:disable-next-line:component-selector
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

   isValidFormUsername = true;
   isValidFormPassword = true;
   usernameValue = '';
   passwordValue = '';
   badLogin = false;

   constructor(private router: Router, private user: UserService, private dialog: MatDialog) {}

// tslint:disable-next-line:use-life-cycle-interface
ngOnInit() {}

checkFormValidation(event) {
  const name = event.target.name;
  const value = event.target.value;

  if (name === 'username') {
    this.usernameValue = value;
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
  this.badLogin = false;
  console.log('*******************', e);
  e.preventDefault();

  console.log(this.usernameValue, this.passwordValue);

   if (this.usernameValue === 'admin' && this.passwordValue === 'adminadmin') {
    // this.user.setUserLoggedIn();
     // this.user.setUsername('admin');
     // this.router.navigate(['popup']);
     this.openDialog();
  } else {
    this.badLogin = true;
  }
}
openDialog() {
  const dialogConfig = new MatDialogConfig();
  this.dialog.open(DialogBodyComponent, dialogConfig);
}

}

