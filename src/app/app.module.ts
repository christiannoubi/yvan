import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRowComponent } from './user-row/user-row.component';
import { UserImageComponent } from './user-image/user-image.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserListComponent,
    UserRowComponent,
    UserImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
