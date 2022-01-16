import { Component, OnInit } from '@angular/core';
import { utilisateur } from 'src/app/interfaces/utilisateur';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-inscrit',
  templateUrl: './inscrit.component.html',
  styleUrls: ['./inscrit.component.css']
})
export class InscritComponent implements OnInit {

  newUser:utilisateur
  constructor(private serv:ApiService) { }

  ngOnInit(): void {  
    this.newUser=this.serv.newUser
  }

}
