import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit() {
  }
  getUsername() {
    return this.user.getUsername();
  }
}
