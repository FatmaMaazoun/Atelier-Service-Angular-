import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/model/Utilisateur';
import { CalculServiceService } from '../calculService/calcul-service.service';
import { TodoService } from '../todoService/todo.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})

export class UtilisateurComponent implements OnInit {
  usern: any;
  verifier: boolean = false;
  nbrusers: any;
  listUsers: Utilisateur[] = [
    {
      id: 1, name: "Leanne Graham", username: "Bret", email:
        "Sincere@april.biz"
    },
    {
      id: 2, name: "Ervin Howell", username: "Bret", email:
        "Shanna@melissa.tv"
    },
    {
      id: 3, name: "Clementine Bauch", username: "Samantha", email:
        "Nathan@yesenia.net"
    }
  ];
  constructor(private service: CalculServiceService) { }

  ngOnInit(): void {
  }
  username() {
    this.nbrusers = this.service.getNumberOf(this.listUsers, "username", this.usern);
    console.log(this.usern);
    this.verifier = !this.verifier;
  }
}
