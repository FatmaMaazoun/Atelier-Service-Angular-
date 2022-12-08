import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav-bar/nav/nav.component';
import { UtilisateurComponent } from './core/utilisateur/utilisateur.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './core/Todo/todo/todo.component';
import { TodoListComponent } from './core/Todo/todo-list/todo-list.component';
import { ListeUserComponent } from './core/liste-user/liste-user.component';
import { DetailsusersComponent } from './core/detailsusers/detailsusers.component';

@NgModule({
  declarations: [
    AppComponent,

    NavComponent,
    UtilisateurComponent,
    TodoComponent,
    TodoListComponent,
    ListeUserComponent,

    DetailsusersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
