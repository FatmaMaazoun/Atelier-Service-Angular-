import { Component, OnInit } from '@angular/core';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent implements OnInit {
  listUsers: any;
  constructor(private service: ServiceUserService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(
      (result) => {
        this.listUsers = result;
      }
    );
  }
}


