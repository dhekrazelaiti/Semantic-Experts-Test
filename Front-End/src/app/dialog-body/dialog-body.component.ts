import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'popup',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {

  hasScrollUntilTheEnd = false;
  IsChecked = false;

  constructor(public dialogRef: MatDialogRef<DialogBodyComponent>,
    private user: UserService,
    private router: Router) {}

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    // visible height + pixel scrolled >= total height
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.hasScrollUntilTheEnd = true;
    }
}
loginUser(e) {
  e.preventDefault();
  console.log('=========> loginUser()');
  this.IsChecked = e.target.checked;

  console.log('=========> e.target.checked:', e.target.checked);

  if (this.IsChecked = true) {
    alert('ok');
      this.user.setUserLoggedIn();
      this.user.setUsername('admin');
      this.router.navigate(['home']);
    } else {
      alert('Vous devez accepter les conditions générales');
    }

    e.preventDefault();

  }

  btnSubmitClick(e) {
    e.preventDefault();
  }
}
