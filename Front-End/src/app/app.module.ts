import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatListModule } from '@angular/material';


import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';
import { UserService } from './service/user.service';

const route: Routes = [
  { path : 'login', component: LoginComponent },
  { path : 'home', component: HomeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    RouterModule.forRoot(route)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
