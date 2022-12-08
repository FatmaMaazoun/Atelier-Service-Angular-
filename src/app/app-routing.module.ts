import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsusersComponent } from './core/detailsusers/detailsusers.component';
import { ListeUserComponent } from './core/liste-user/liste-user.component';
import { TodoListComponent } from './core/Todo/todo-list/todo-list.component';
import { TodoComponent } from './core/Todo/todo/todo.component';
import { UtilisateurComponent } from './core/utilisateur/utilisateur.component';

const routes: Routes = [{ path: "todo", component: TodoComponent },
{ path: "user", component: UtilisateurComponent },
{ path: "listetodo", component: TodoListComponent },
{ path: "listeUsers", component: ListeUserComponent },
{path : "detailtod/:iduser", component:DetailsusersComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
