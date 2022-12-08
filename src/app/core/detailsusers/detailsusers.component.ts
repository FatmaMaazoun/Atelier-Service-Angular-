import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-detailsusers',
  templateUrl: './detailsusers.component.html',
  styleUrls: ['./detailsusers.component.css']
})
export class DetailsusersComponent implements OnInit {
  id: any;
  listetodo: any;
  constructor(private serviceuser: ServiceUserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['iduser'];
    this.serviceuser.getTodoUser(this.id).subscribe(
      (resultat) =>
        this.listetodo = resultat
    );
  }

}
