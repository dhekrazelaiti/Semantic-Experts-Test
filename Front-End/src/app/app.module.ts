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
  MatIcon,
  MatListModule } from '@angular/material';


import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserService } from './service/user.service';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';

const route: Routes = [
  { path : 'app-login', component: LoginComponent },
  { path : 'app-home', component: HomeComponent },
  { path : 'app-user', component: UserComponent },
  { path : 'app-dialog', component: DialogBodyComponent },
  { path : '', redirectTo: 'app-user', pathMatch : 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    MatIcon,
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
