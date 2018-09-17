import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-dialog',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {

  hasScrollUntilTheEnd = false;
  IsChecked = null;

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
  this.IsChecked = e.target.terms.checked;
  console.log('=========> this.IsChecked:', this.IsChecked);
  if (this.IsChecked === true) {
    this.user.setUserLoggedIn();
    this.user.setUsername('admin');
    this.router.navigate(['app-home']);
    this.close();
  }
}
  btnSubmitClick(e) {
    e.preventDefault();
  }
}
