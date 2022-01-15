import { Component, OnInit } from '@angular/core';
import { Produits } from 'src/app/interfaces/produits';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  prod:Produits[]=[]
  constructor(private serv:ApiService) { }
  ngOnInit() {
   this.serv.onGetAllProducts().then(data=>{
    this.prod=data
   })  
  }


}
