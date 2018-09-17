import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import {MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatGridListModule,
  MatListModule } from '@angular/material';


import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserService } from './service/user.service';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';

const route: Routes = [
  { path : 'login', component: LoginComponent },
  { path : 'home', component: HomeComponent },
  { path : 'popup', component: DialogBodyComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    DialogBodyComponent,
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
    MatDialogModule,
    MatCheckboxModule,
    MatGridListModule,
    RouterModule.forRoot(route)
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [DialogBodyComponent]
})
export class AppModule { }
